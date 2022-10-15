import { Person } from '@mui/icons-material';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import { useCallback, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const UserButton = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const popperRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  const handleToggle = useCallback(() => setOpen((prev) => !prev), []);

  const handleListKeyDown = useCallback((event: React.KeyboardEvent) => {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }, []);

  const handleClose = useCallback(
    (event: Event | React.SyntheticEvent) => {
      if (buttonRef.current?.contains(event.target as HTMLElement)) {
        return;
      }

      setOpen(false);
    },
    [buttonRef]
  );

  const handlePopoverOpen = useCallback(() => setOpen(true), []);

  const handlePopoverClose = useCallback(
    ({ relatedTarget }: React.MouseEvent<HTMLElement>) => {
      if (
        buttonRef.current?.contains(relatedTarget as Node) ||
        popperRef.current?.contains(relatedTarget as Node)
      ) {
        return;
      }

      setOpen(false);
    },
    [buttonRef, popperRef]
  );

  const onSignOutClick = useCallback(
    () => auth.signout(() => navigate('/signin')),
    [auth, navigate]
  );

  return (
    <>
      <IconButton
        ref={buttonRef}
        color="inherit"
        onClick={handleToggle}
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        <Person />
      </IconButton>
      <Popper
        ref={popperRef}
        open={open}
        anchorEl={buttonRef.current}
        role={undefined}
        placement="bottom-start"
        transition
        disablePortal
        onMouseLeave={handlePopoverClose}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom-start' ? 'left top' : 'left bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                >
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={onSignOutClick}>Sign out</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};

export default UserButton;
