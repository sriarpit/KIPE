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
        py: { xs: 8, md: 12 },
        bgcolor: '#FFFFFF',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center">
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
                  mb: 3,
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
                  mb: 3,
                }}
              />
            </AnimatedSection>

            {/* Decorative card */}
            <AnimatedSection delay={0.2}>
              <Box
                sx={{
                  bgcolor: '#0C2340',
                  borderRadius: 3,
                  p: 3,
                  textAlign: 'center',
                  display: { xs: 'none', md: 'block' },
                }}
              >
                <Box component="img" src="/kipe-logo.png" alt="KIPE" sx={{ width: 120, mb: 1.5 }} />
                <Typography sx={{ color: '#D4AF37', fontWeight: 700, fontSize: '0.85rem', letterSpacing: 1 }}>
                  Kalpataru Institute of<br />Professional Education
                </Typography>
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
