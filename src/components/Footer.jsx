import React from 'react';
import { Box, Container, Typography, Grid, Divider, IconButton } from '@mui/material';
import { Link } from 'react-scroll';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

const quickLinks = [
  { label: 'Home', to: 'hero' },
  { label: 'About KIPE', to: 'about' },
  { label: 'Programmes', to: 'programmes' },
  { label: 'University Partners', to: 'partners' },
  { label: 'Admission Process', to: 'how-it-works' },
  { label: 'Contact', to: 'contact' },
];

const programmes = [
  'BBA / BCA / BA', 'B.Sc / B.Com / B.Lib',
  'MBA / MCA', 'M.Sc / MA / M.Com',
  'PGDCA', 'NIOS (10th & 12th)',
];

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{ bgcolor: '#0C2340', color: '#FFFFFF', pt: 8, pb: 3 }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          {/* Brand column */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box component="img" src="/kipe-logo.png" alt="KIPE Logo" sx={{ height: 80, mb: 2 }} />
            <Typography
              sx={{ color: '#D4AF37', fontWeight: 700, fontSize: '1.1rem', mb: 0.5 }}
            >
              KIPE
            </Typography>
            <Typography
              sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', mb: 2, lineHeight: 1.5 }}
            >
              Kalpataru Institute of Professional Education
            </Typography>
            <Typography
              sx={{
                color: 'rgba(255,255,255,0.55)',
                fontSize: '0.85rem',
                fontStyle: 'italic',
                mb: 3,
                borderLeft: '3px solid #D4AF37',
                pl: 2,
                lineHeight: 1.6,
              }}
            >
              Your Gateway to 100+<br />University-Recognized Degrees
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              {[
                { icon: <FacebookIcon />, label: 'Facebook' },
                { icon: <InstagramIcon />, label: 'Instagram' },
                { icon: <LinkedInIcon />, label: 'LinkedIn' },
                { icon: <YouTubeIcon />, label: 'YouTube' },
              ].map(({ icon, label }) => (
                <IconButton
                  key={label}
                  size="small"
                  aria-label={label}
                  sx={{
                    color: 'rgba(255,255,255,0.6)',
                    bgcolor: 'rgba(255,255,255,0.07)',
                    '&:hover': { color: '#D4AF37', bgcolor: 'rgba(212,175,55,0.15)' },
                    transition: 'all 0.2s',
                  }}
                >
                  {icon}
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* Quick links */}
          <Grid size={{ xs: 6, md: 2.5 }}>
            <Typography
              sx={{
                color: '#D4AF37',
                fontWeight: 700,
                fontSize: '0.85rem',
                letterSpacing: 2,
                textTransform: 'uppercase',
                mb: 2.5,
              }}
            >
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.2 }}>
              {quickLinks.map((link) => (
                <Link key={link.to} to={link.to} smooth duration={600} offset={-80}>
                  <Typography
                    sx={{
                      color: 'rgba(255,255,255,0.65)',
                      fontSize: '0.88rem',
                      cursor: 'pointer',
                      transition: 'color 0.2s',
                      '&:hover': { color: '#D4AF37' },
                    }}
                  >
                    {link.label}
                  </Typography>
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Programmes */}
          <Grid size={{ xs: 6, md: 2.5 }}>
            <Typography
              sx={{
                color: '#D4AF37',
                fontWeight: 700,
                fontSize: '0.85rem',
                letterSpacing: 2,
                textTransform: 'uppercase',
                mb: 2.5,
              }}
            >
              Programmes
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.2 }}>
              {programmes.map((p) => (
                <Typography
                  key={p}
                  sx={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.88rem' }}
                >
                  {p}
                </Typography>
              ))}
            </Box>
          </Grid>

          {/* Contact info */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography
              sx={{
                color: '#D4AF37',
                fontWeight: 700,
                fontSize: '0.85rem',
                letterSpacing: 2,
                textTransform: 'uppercase',
                mb: 2.5,
              }}
            >
              Contact Us
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {[
                { label: 'Phone', value: '+91 98765 43210' },
                { label: 'Email', value: 'info@kipe.edu.in' },
                { label: 'Hours', value: 'Mon–Sat: 9 AM – 7 PM' },
              ].map(({ label, value }) => (
                <Box key={label}>
                  <Typography sx={{ color: '#D4AF37', fontWeight: 600, fontSize: '0.75rem', mb: 0.3 }}>
                    {label}
                  </Typography>
                  <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.88rem' }}>
                    {value}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: 'rgba(212,175,55,0.2)', mt: 6, mb: 3 }} />

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <Typography sx={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.82rem' }}>
            © 2025 Kalpataru Institute of Professional Education — All Rights Reserved
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            {['Privacy Policy', 'Terms of Use'].map((item) => (
              <Typography
                key={item}
                sx={{
                  color: 'rgba(255,255,255,0.45)',
                  fontSize: '0.82rem',
                  cursor: 'pointer',
                  '&:hover': { color: '#D4AF37' },
                  transition: 'color 0.2s',
                }}
              >
                {item}
              </Typography>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
