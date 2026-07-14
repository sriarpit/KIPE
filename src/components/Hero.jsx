import React from 'react';
import { Box, Typography, Button, Chip, Container } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 100;
  window.scrollTo({ top, behavior: 'smooth' });
};
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StarIcon from '@mui/icons-material/Star';
import SchoolIcon from '@mui/icons-material/School';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: 'easeOut' },
  }),
};

const modes = ['Online', 'Distance', 'Regular'];

function FloatingBadge({ icon, title, subtitle }) {
  return (
    <Box
      sx={{
        bgcolor: '#FFFFFF',
        borderRadius: 2.5,
        px: 2,
        py: 1.2,
        display: 'flex',
        alignItems: 'center',
        gap: 1.2,
        boxShadow: '0 8px 28px rgba(0,0,0,0.22)',
        minWidth: 170,
      }}
    >
      <Box
        sx={{
          width: 36, height: 36,
          bgcolor: '#0C2340',
          borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#D4AF37', flexShrink: 0,
        }}
      >
        {icon}
      </Box>
      <Box>
        <Typography sx={{ fontWeight: 800, fontSize: '0.88rem', color: '#0C2340', lineHeight: 1.1 }}>
          {title}
        </Typography>
        <Typography sx={{ fontSize: '0.68rem', color: '#5C5C5C', mt: 0.2 }}>{subtitle}</Typography>
      </Box>
    </Box>
  );
}

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0C2340 0%, #162d4e 50%, #7A1F2B 100%)',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 10, md: 0 },
        pb: { xs: 6, md: 0 },
      }}
    >
      {/* Background decorative circles */}
      {[600, 900, 1200].map((size) => (
        <Box
          key={size}
          sx={{
            position: 'absolute',
            top: '50%', left: '60%',
            transform: 'translate(-50%, -50%)',
            width: size, height: size,
            border: '1px solid rgba(212,175,55,0.06)',
            borderRadius: '50%',
            pointerEvents: 'none',
          }}
        />
      ))}

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 4,
            flexDirection: { xs: 'column', md: 'row' },
          }}
        >
          {/* ─── LEFT: Text Content ─── */}
          <Box sx={{ flex: '0 0 auto', width: { xs: '100%', md: '52%' } }}>
            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
              <Typography
                variant="overline"
                sx={{ color: '#D4AF37', fontWeight: 700, letterSpacing: 3, fontSize: '0.72rem', display: 'block', mb: 2 }}
              >
                Kalpataru Institute of Professional Education
              </Typography>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={1}>
              <Typography
                variant="h1"
                sx={{
                  color: '#FFFFFF',
                  fontSize: { xs: '2.1rem', sm: '2.7rem', md: '3.2rem' },
                  fontWeight: 800,
                  lineHeight: 1.15,
                  mb: 3,
                }}
              >
                Your Gateway to{' '}
                <Box component="span" sx={{ color: '#D4AF37' }}>
                  100+ University-Recognized
                </Box>{' '}
                Degrees
              </Typography>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2}>
              <Box sx={{ display: 'flex', gap: 1.2, flexWrap: 'wrap', mb: 4 }}>
                {modes.map((mode) => (
                  <Chip
                    key={mode}
                    label={mode}
                    sx={{
                      bgcolor: 'rgba(212,175,55,0.15)',
                      color: '#D4AF37',
                      border: '1px solid rgba(212,175,55,0.4)',
                      fontWeight: 600,
                      fontSize: '0.88rem',
                    }}
                  />
                ))}
                <Typography sx={{ color: 'rgba(255,255,255,0.55)', alignSelf: 'center', fontSize: '0.88rem', fontStyle: 'italic' }}>
                  — Learn Your Way
                </Typography>
              </Box>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={3}>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  onClick={() => scrollTo('programmes')}
                  sx={{
                    bgcolor: '#D4AF37', color: '#0C2340', fontWeight: 700,
                    px: 3.5, py: 1.5, fontSize: '0.95rem',
                    '&:hover': { bgcolor: '#c09b22', transform: 'translateY(-2px)', boxShadow: '0 8px 24px rgba(212,175,55,0.4)' },
                    transition: 'all 0.2s ease',
                  }}
                >
                  Explore Programmes
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => scrollTo('contact')}
                  sx={{
                    borderColor: 'rgba(255,255,255,0.4)', color: '#FFFFFF', fontWeight: 600,
                    px: 3.5, py: 1.5, fontSize: '0.95rem',
                    '&:hover': { borderColor: '#D4AF37', color: '#D4AF37', bgcolor: 'rgba(212,175,55,0.08)' },
                  }}
                >
                  Free Counselling
                </Button>
              </Box>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={4}>
              <Box sx={{ mt: { xs: 4, md: 6 }, display: 'flex', gap: { xs: 3, md: 5 }, flexWrap: 'wrap' }}>
                {[
                  { num: '100+', label: 'University Partners' },
                  { num: '3', label: 'Learning Modes' },
                  { num: '50+', label: 'Programmes' },
                ].map(({ num, label }) => (
                  <Box key={label}>
                    <Typography sx={{ color: '#D4AF37', fontWeight: 800, fontSize: { xs: '1.5rem', md: '1.9rem' }, lineHeight: 1 }}>{num}</Typography>
                    <Typography sx={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.78rem', mt: 0.4 }}>{label}</Typography>
                  </Box>
                ))}
              </Box>
            </motion.div>
          </Box>

          {/* ─── RIGHT: Image Collage ─── */}
          <Box
            sx={{
              flex: '0 0 auto',
              width: { md: '48%' },
              display: { xs: 'none', md: 'block' },
              position: 'relative',
              height: 500,
            }}
          >
            {/* Decorative gold rectangle behind images */}
            <Box
              sx={{
                position: 'absolute',
                top: 30, left: 30,
                width: 340, height: 260,
                border: '2px solid rgba(212,175,55,0.3)',
                borderRadius: 3,
                zIndex: 0,
              }}
            />

            {/* Image 1 — MAIN: Students with laptops (large, left-center) */}
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: -2 }}
              animate={{ opacity: 1, y: 0, rotate: -2 }}
              transition={{ duration: 0.85, delay: 0.3, ease: 'easeOut' }}
              style={{
                position: 'absolute',
                top: 50, left: 0,
                width: 355, height: 265,
                borderRadius: 16,
                overflow: 'hidden',
                boxShadow: '0 20px 56px rgba(0,0,0,0.5)',
                zIndex: 3,
                border: '3px solid rgba(212,175,55,0.45)',
              }}
            >
              <Box
                component="img"
                src="/hero-img2.jpg"
                alt="Students studying together"
                sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(12,35,64,0.3) 0%, transparent 55%)' }} />
            </motion.div>

            {/* Image 2 — TOP RIGHT: Love to Learn sign */}
            <motion.div
              initial={{ opacity: 0, x: 30, rotate: 3 }}
              animate={{ opacity: 1, x: 0, rotate: 3 }}
              transition={{ duration: 0.85, delay: 0.5, ease: 'easeOut' }}
              style={{
                position: 'absolute',
                top: 0, right: 0,
                width: 210, height: 155,
                borderRadius: 14,
                overflow: 'hidden',
                boxShadow: '0 14px 40px rgba(0,0,0,0.4)',
                zIndex: 4,
              }}
            >
              <Box
                component="img"
                src="/hero-img1.jpg"
                alt="Love to Learn"
                sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </motion.div>

            {/* Image 3 — BOTTOM RIGHT: Study desk (overlaps main) */}
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: 2 }}
              animate={{ opacity: 1, y: 0, rotate: 2 }}
              transition={{ duration: 0.85, delay: 0.65, ease: 'easeOut' }}
              style={{
                position: 'absolute',
                bottom: 10, right: 0,
                width: 240, height: 180,
                borderRadius: 14,
                overflow: 'hidden',
                boxShadow: '0 16px 44px rgba(0,0,0,0.45)',
                zIndex: 5,
                border: '3px solid rgba(255,255,255,0.12)',
              }}
            >
              <Box
                component="img"
                src="/hero-img3.jpg"
                alt="Online learning setup"
                sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(122,31,43,0.25) 0%, transparent 60%)' }} />
            </motion.div>

            {/* Badge — 100+ Universities */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              style={{ position: 'absolute', top: 8, left: '50%', transform: 'translateX(-50%)', zIndex: 10 }}
            >
              <FloatingBadge
                icon={<CheckCircleIcon sx={{ fontSize: 18 }} />}
                title="100+ Universities"
                subtitle="Verified UGC Partners"
              />
            </motion.div>

            {/* Badge — Free Counselling */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.05 }}
              style={{ position: 'absolute', bottom: 10, left: 0, zIndex: 10 }}
            >
              <FloatingBadge
                icon={<SchoolIcon sx={{ fontSize: 18 }} />}
                title="Free Counselling"
                subtitle="Expert guidance, zero cost"
              />
            </motion.div>

            {/* Gold dot accents */}
            {[
              { top: 30, right: 220, size: 10 },
              { top: 170, right: 10, size: 7 },
              { bottom: 200, left: 10, size: 9 },
            ].map((d, i) => (
              <Box
                key={i}
                sx={{
                  position: 'absolute',
                  width: d.size, height: d.size,
                  bgcolor: '#D4AF37',
                  borderRadius: '50%',
                  opacity: 0.6,
                  top: d.top, right: d.right, bottom: d.bottom, left: d.left,
                  zIndex: 1,
                }}
              />
            ))}
          </Box>
        </Box>
      </Container>

      {/* Bottom gradient */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0, left: 0, right: 0,
          height: 80,
          background: 'linear-gradient(to bottom, transparent, #FAF8F5)',
          pointerEvents: 'none',
        }}
      />
    </Box>
  );
}
