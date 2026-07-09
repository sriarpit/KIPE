import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

function AnimatedSection({ children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <Box
      id="about"
      sx={{
        py: { xs: 5, md: 7 },
        bgcolor: '#FFFFFF',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
          {/* Left column */}
          <Grid size={{ xs: 12, md: 4 }}>
            <AnimatedSection delay={0}>
              <Typography
                variant="overline"
                sx={{
                  color: '#7A1F2B',
                  fontWeight: 800,
                  letterSpacing: 3,
                  fontSize: '0.95rem',
                  display: 'block',
                  mb: 1.5,
                }}
              >
                About KIPE
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  color: '#0C2340',
                  fontWeight: 800,
                  fontSize: { xs: '2rem', md: '2.6rem' },
                  lineHeight: 1.2,
                  mb: 2,
                }}
              >
                Education That Fits Your Life
              </Typography>
              {/* Gold divider */}
              <Box
                sx={{
                  width: 60,
                  height: 4,
                  bgcolor: '#D4AF37',
                  borderRadius: 2,
                  mb: 2,
                }}
              />
            </AnimatedSection>

            {/* Brand identity card */}
            <AnimatedSection delay={0.2}>
              <Box
                sx={{
                  bgcolor: '#0C2340',
                  borderRadius: 3,
                  p: 3.5,
                  display: { xs: 'none', md: 'flex' },
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 2,
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Background glow circles */}
                <Box sx={{ position: 'absolute', top: -40, right: -40, width: 160, height: 160, borderRadius: '50%', bgcolor: 'rgba(212,175,55,0.06)' }} />
                <Box sx={{ position: 'absolute', bottom: -30, left: -30, width: 120, height: 120, borderRadius: '50%', bgcolor: 'rgba(212,175,55,0.04)' }} />

                {/* KIPE monogram */}
                <Box
                  sx={{
                    width: 90, height: 90,
                    borderRadius: '50%',
                    border: '2px solid rgba(212,175,55,0.4)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: 'linear-gradient(135deg, rgba(212,175,55,0.15) 0%, rgba(212,175,55,0.05) 100%)',
                    boxShadow: '0 0 32px rgba(212,175,55,0.15)',
                  }}
                >
                  <Typography sx={{
                    fontWeight: 900,
                    fontSize: '2rem',
                    letterSpacing: '-1px',
                    background: 'linear-gradient(135deg, #F5D76E 0%, #D4AF37 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}>
                    KIPE
                  </Typography>
                </Box>

                {/* Divider */}
                <Box sx={{ width: 40, height: 2, bgcolor: 'rgba(212,175,55,0.4)', borderRadius: 1 }} />

                {/* Name */}
                <Box sx={{ textAlign: 'center' }}>
                  <Typography sx={{
                    color: '#FFFFFF',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    lineHeight: 1.5,
                    letterSpacing: 0.3,
                  }}>
                    Kalpataru Institute
                  </Typography>
                  <Typography sx={{
                    color: 'rgba(255,255,255,0.55)',
                    fontWeight: 400,
                    fontSize: '0.8rem',
                    letterSpacing: 0.5,
                  }}>
                    of Professional Education
                  </Typography>
                </Box>

                {/* Est. tag */}
                <Box sx={{
                  px: 2, py: 0.6,
                  border: '1px solid rgba(212,175,55,0.25)',
                  borderRadius: 5,
                  bgcolor: 'rgba(212,175,55,0.07)',
                }}>
                  <Typography sx={{ color: '#D4AF37', fontSize: '0.7rem', fontWeight: 600, letterSpacing: 2 }}>
                    EST. IN JAIPUR
                  </Typography>
                </Box>
              </Box>
            </AnimatedSection>
          </Grid>

          {/* Right column */}
          <Grid size={{ xs: 12, md: 8 }}>
            <AnimatedSection delay={0.15}>
              <Typography
                sx={{
                  color: '#5C5C5C',
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  lineHeight: 1.85,
                  mb: 4,
                }}
              >
                Kalpataru Institute of Professional Education (KIPE) is an education consultancy dedicated
                to connecting students with recognized, career-ready degree programmes across India's leading
                universities. While our core focus is on online and distance learning — built for working
                professionals, homemakers, and students who need flexibility without compromising on quality —
                we also facilitate admissions into regular, on-campus programmes for those who prefer the
                traditional classroom experience.
              </Typography>
              <Typography
                sx={{
                  color: '#5C5C5C',
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  lineHeight: 1.85,
                }}
              >
                With tie-ups spanning <strong style={{ color: '#0C2340' }}>100+ universities</strong>, KIPE
                simplifies the process of choosing the right course, the right university, and the right mode
                of learning — guiding students at every step from enquiry to enrollment.
              </Typography>
            </AnimatedSection>

            {/* Highlight boxes */}
            <AnimatedSection delay={0.3}>
              <Grid container spacing={2} sx={{ mt: 3 }}>
                {[
                  { num: '100+', label: 'University Partners', color: '#0C2340' },
                  { num: '3', label: 'Learning Modes', color: '#7A1F2B' },
                  { num: '100%', label: 'UGC Recognized', color: '#0C2340' },
                  { num: '∞', label: 'Career Opportunities', color: '#7A1F2B' },
                ].map(({ num, label, color }) => (
                  <Grid size={{ xs: 6, sm: 3 }} key={label}>
                    <Box
                      sx={{
                        bgcolor: '#FAF8F5',
                        borderRadius: 2,
                        p: 2.5,
                        textAlign: 'center',
                        borderTop: `3px solid ${color}`,
                      }}
                    >
                      <Typography sx={{ fontWeight: 800, fontSize: '1.8rem', color, lineHeight: 1 }}>
                        {num}
                      </Typography>
                      <Typography sx={{ fontSize: '0.78rem', color: '#5C5C5C', mt: 0.5, fontWeight: 500 }}>
                        {label}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </AnimatedSection>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
