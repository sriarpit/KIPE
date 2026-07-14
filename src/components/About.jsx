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

            {/* Brand identity card — Design 3: Crest/Seal */}
            <AnimatedSection delay={0.2}>
              <Box
                sx={{
                  bgcolor: '#0C2340',
                  borderRadius: 3,
                  p: 3.5,
                  display: { xs: 'none', md: 'flex' },
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 1.5,
                  border: '1px solid rgba(212,175,55,0.15)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Outer decorative ring with KIPE center */}
                <Box sx={{
                  width: 130, height: 130, borderRadius: '50%',
                  border: '2px solid rgba(212,175,55,0.35)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  position: 'relative',
                  mt: 1,
                }}>
                  {/* Inner dashed ring */}
                  <Box sx={{
                    width: 104, height: 104, borderRadius: '50%',
                    border: '1px dashed rgba(212,175,55,0.22)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexDirection: 'column',
                  }}>
                    <Typography sx={{
                      fontWeight: 900, fontSize: '2rem', letterSpacing: '-1px',
                      background: 'linear-gradient(135deg, #F5D76E, #D4AF37)',
                      backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                      lineHeight: 1,
                    }}>
                      KIPE
                    </Typography>
                    <Box sx={{ width: 30, height: 1.5, bgcolor: 'rgba(212,175,55,0.5)', mt: 0.6 }} />
                  </Box>
                  {/* Gold dots at cardinal points */}
                  {[0, 90, 180, 270].map(deg => (
                    <Box key={deg} sx={{
                      position: 'absolute', width: 7, height: 7, borderRadius: '50%',
                      background: 'linear-gradient(135deg, #F5D76E, #D4AF37)',
                      boxShadow: '0 0 6px rgba(212,175,55,0.6)',
                      top: '50%', left: '50%',
                      transform: `rotate(${deg}deg) translate(61px) rotate(-${deg}deg) translate(-3.5px, -3.5px)`,
                    }} />
                  ))}
                </Box>

                {/* Name */}
                <Box sx={{ textAlign: 'center' }}>
                  <Typography sx={{ color: '#FFFFFF', fontWeight: 700, fontSize: '0.92rem', letterSpacing: 0.5, mb: 0.3 }}>
                    Kalpataru Institute
                  </Typography>
                  <Typography sx={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.72rem', letterSpacing: 1.5, textTransform: 'uppercase' }}>
                    of Professional Education
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
