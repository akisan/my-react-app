/** @jsxImportSource @emotion/react */
import { Notifications } from '@mui/icons-material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Divider from '@mui/material/Divider';
import Grow from '@mui/material/Grow';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import Typography from '@mui/material/Typography';
import { useRef, useState } from 'react';
import usePosts from '../../hooks/usePosts';

const NotificationsButton = () => {
  const posts = usePosts();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen((prev) => !prev);

  const handleListKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  };

  const handleClick = (event: Event | React.SyntheticEvent) => {
    if (buttonRef.current?.contains(event.target as HTMLElement)) {
      return;
    }

    // setOpen(false);
  };

  return (
    <>
      <IconButton ref={buttonRef} color="inherit" onClick={handleToggle}>
        <Notifications />
      </IconButton>
      <Popper
        open={open}
        anchorEl={buttonRef.current}
        role={undefined}
        placement="bottom-start"
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom-start' ? 'left top' : 'left bottom',
            }}
          >
            <Paper
              sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '300px',
                maxHeight: '80vh',
                overflow: 'auto',
              }}
            >
              <ClickAwayListener onClickAway={handleClick}>
                <>
                  <Box padding={2}>
                    <Typography variant="h6" noWrap>
                      Notifications
                    </Typography>
                  </Box>
                  <Divider />
                  {posts.isSuccess ? (
                    <MenuList
                      autoFocusItem={open}
                      id="composition-menu"
                      aria-labelledby="composition-button"
                      sx={{ padding: 0, overflow: 'auto' }}
                      onKeyDown={handleListKeyDown}
                    >
                      <ListSubheader>New</ListSubheader>
                      {posts.data?.slice(0, 10).map((post, index) => (
                        <MenuItem key={index} onClick={handleClick}>
                          <ListItemText
                            primary={
                              <Box
                                sx={{
                                  overflow: 'hidden',
                                  textOverflow: 'ellipsis',
                                }}
                              >
                                {post.title}
                              </Box>
                            }
                            secondary={
                              <Typography
                                sx={{
                                  overflow: 'hidden',
                                  textOverflow: 'ellipsis',
                                }}
                                variant="body2"
                                color="text.primary"
                              >
                                {post.body}
                              </Typography>
                            }
                          />
                        </MenuItem>
                      ))}
                      <ListSubheader>Before That</ListSubheader>
                      {posts.data?.slice(10, 20).map((post, index) => (
                        <MenuItem key={index} onClick={handleClick}>
                          <ListItemText
                            primary={
                              <Box
                                sx={{
                                  overflow: 'hidden',
                                  textOverflow: 'ellipsis',
                                }}
                              >
                                {post.title}
                              </Box>
                            }
                            secondary={
                              <Typography
                                sx={{
                                  overflow: 'hidden',
                                  textOverflow: 'ellipsis',
                                }}
                                variant="body2"
                                color="text.primary"
                              >
                                {post.body}
                              </Typography>
                            }
                          />
                        </MenuItem>
                      ))}
                    </MenuList>
                  ) : (
                    <Box display="flex" justifyContent="center" padding={2}>
                      {posts.isLoading ? (
                        <CircularProgress />
                      ) : posts.isError ? (
                        <Typography>{posts.error.message}</Typography>
                      ) : (
                        <></>
                      )}
                    </Box>
                  )}
                  <Divider />
                  <Button sx={{ margin: 1 }}>View all</Button>
                </>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};

export default NotificationsButton;
