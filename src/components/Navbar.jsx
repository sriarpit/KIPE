import React, { useState, useEffect } from 'react';
import {
  AppBar, Toolbar, Box, Button, IconButton, Drawer,
  List, ListItem, ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-scroll';

const navLinks = [
  { label: 'Home', to: 'hero' },
  { label: 'About', to: 'about' },
  { label: 'Programmes', to: 'programmes' },
  { label: 'University Partners', to: 'partners' },
  { label: 'Admissions', to: 'how-it-works' },
  { label: 'Contact', to: 'contact' },
];

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
      <AppBar
        position="fixed"
        elevation={scrolled ? 4 : 0}
        sx={{
          bgcolor: '#0C2340',
          transition: 'box-shadow 0.3s ease',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 6 }, py: 1 }}>
          {/* Logo */}
          <Link to="hero" smooth duration={600} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
            <Box component="img" src="/kipe-logo.png" alt="KIPE Logo" sx={{ height: { xs: 44, md: 52 }, mr: 1.5 }} />
          </Link>

          {/* Desktop nav */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5 }}>
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to} smooth duration={600} offset={-100}>
                <Button
                  sx={{
                    color: '#FFFFFF',
                    fontWeight: 500,
                    fontSize: '0.875rem',
                    px: 1.5,
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 4,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: 0,
                      height: 2,
                      bgcolor: '#D4AF37',
                      transition: 'width 0.3s ease',
                    },
                    '&:hover::after': { width: '70%' },
                    '&:hover': { bgcolor: 'rgba(212,175,55,0.08)' },
                  }}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
            <Link to="contact" smooth duration={600} offset={-100}>
              <Button
                variant="contained"
                sx={{
                  ml: 2,
                  bgcolor: '#D4AF37',
                  color: '#0C2340',
                  fontWeight: 700,
                  '&:hover': { bgcolor: '#c09b22' },
                }}
              >
                Free Counselling
              </Button>
            </Link>
          </Box>

          {/* Mobile hamburger */}
          <IconButton
            sx={{ display: { xs: 'flex', md: 'none' }, color: '#D4AF37' }}
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>

        {/* Mobile Drawer */}
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          PaperProps={{ sx: { bgcolor: '#0C2340', width: 280 } }}
        >
          <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
            <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: '#D4AF37' }}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box component="img" src="/kipe-logo.png" alt="KIPE Logo" sx={{ height: 70, mx: 'auto', mb: 2 }} />
          <List>
            {navLinks.map((link) => (
              <ListItem key={link.to} disablePadding>
                <Link
                  to={link.to}
                  smooth
                  duration={600}
                  offset={-100}
                  style={{ width: '100%' }}
                  onClick={() => setDrawerOpen(false)}
                >
                  <ListItemText
                    primary={link.label}
                    sx={{
                      px: 3, py: 1.5,
                      '& .MuiListItemText-primary': {
                        color: '#FFFFFF',
                        fontWeight: 500,
                        fontSize: '1rem',
                        cursor: 'pointer',
                        '&:hover': { color: '#D4AF37' },
                      },
                    }}
                  />
                </Link>
              </ListItem>
            ))}
            <ListItem sx={{ px: 3, pt: 2 }}>
              <Link to="contact" smooth duration={600} offset={-100} style={{ width: '100%' }} onClick={() => setDrawerOpen(false)}>
                <Button
                  fullWidth
                  variant="contained"
                  sx={{ bgcolor: '#D4AF37', color: '#0C2340', fontWeight: 700, '&:hover': { bgcolor: '#c09b22' } }}
                >
                  Free Counselling
                </Button>
              </Link>
            </ListItem>
          </List>
        </Drawer>
      </AppBar>
  );
}
