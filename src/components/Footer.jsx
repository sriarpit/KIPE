import React from 'react';
import { Box, Container, Typography, Grid, Divider, IconButton } from '@mui/material';
import { Link } from 'react-scroll';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

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
            {/* Logo + name side by side */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2.5 }}>
              <Box
                component="img"
                src="/kipe-logo.png"
                alt="KIPE Logo"
                sx={{
                  height: 110,
                  width: 110,
                  objectFit: 'contain',
                  flexShrink: 0,
                  filter: 'drop-shadow(0 4px 14px rgba(212,175,55,0.3))',
                  transition: 'transform 0.3s ease, filter 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.06)',
                    filter: 'drop-shadow(0 6px 22px rgba(212,175,55,0.55))',
                  },
                }}
              />
              <Box>
                <Typography
                  sx={{
                    fontWeight: 800,
                    fontSize: '2.4rem',
                    lineHeight: 1.1,
                    mb: 0.5,
                    background: 'linear-gradient(135deg, #F5D76E 0%, #D4AF37 55%, #C09B22 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    filter: 'drop-shadow(0 2px 6px rgba(212,175,55,0.3))',
                  }}
                >
                  KIPE
                </Typography>
                <Typography
                  sx={{
                    color: 'rgba(255,255,255,0.8)',
                    fontSize: '0.83rem',
                    lineHeight: 1.5,
                    fontWeight: 500,
                  }}
                >
                  Kalpataru Institute of<br />Professional Education
                </Typography>
              </Box>
            </Box>

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
                { icon: <FacebookIcon />, label: 'Facebook', href: 'https://www.facebook.com/KalpataruInstituteofProfessionalEducation' },
                { icon: <InstagramIcon />, label: 'Instagram', href: 'https://www.instagram.com/kipe_educational_consultant/' },
                { icon: <LinkedInIcon />, label: 'LinkedIn', href: '#' },
                { icon: <YouTubeIcon />, label: 'YouTube', href: '#' },
              ].map(({ icon, label, href }) => (
                <IconButton
                  key={label}
                  size="small"
                  component="a"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
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

          {/* Find Us */}
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
              Find Us
            </Typography>
            <Box sx={{ position: 'relative', borderRadius: 2, overflow: 'hidden', mb: 2 }}>
              <Box
                component="iframe"
                src="https://maps.google.com/maps?q=A+5+First+Floor+SSB+Nagar+Swej+Farm+Road+Ram+Nagar+Sodala+Jaipur+302019+India&output=embed"
                width="100%"
                height={180}
                sx={{ border: 0, display: 'block', pointerEvents: 'none' }}
                title="KIPE Location"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <Box
                component="a"
                href="https://maps.app.goo.gl/iYtvyV4HXHpMrcEm9"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'flex-start',
                  p: 1,
                  textDecoration: 'none',
                }}
              >
                <Box
                  sx={{
                    bgcolor: '#FFFFFF',
                    borderRadius: 1,
                    px: 1.5,
                    py: 0.6,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.7,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                  }}
                >
                  <OpenInNewIcon sx={{ fontSize: 13, color: '#1565C0' }} />
                  <Typography sx={{ fontSize: '0.72rem', fontWeight: 600, color: '#1565C0' }}>
                    Open in Maps
                  </Typography>
                </Box>
              </Box>
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
