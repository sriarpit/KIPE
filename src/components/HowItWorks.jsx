import React, { useRef } from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import SearchIcon from '@mui/icons-material/Search';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import DescriptionIcon from '@mui/icons-material/Description';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const steps = [
  {
    num: '01',
    icon: <SearchIcon sx={{ fontSize: 30 }} />,
    title: 'Enquire',
    body: 'Share your preferred course and mode of learning with our counselling team.',
    color: '#0C2340',
    glow: 'rgba(12,35,64,0.45)',
  },
  {
    num: '02',
    icon: <RecordVoiceOverIcon sx={{ fontSize: 30 }} />,
    title: 'Counselling',
    body: 'Get personalized guidance on the right university and programme fit for you.',
    color: '#7A1F2B',
    glow: 'rgba(122,31,43,0.45)',
  },
  {
    num: '03',
    icon: <DescriptionIcon sx={{ fontSize: 30 }} />,
    title: 'Documentation',
    body: 'We assist with forms, verification, and all required paperwork seamlessly.',
    color: '#0C2340',
    glow: 'rgba(12,35,64,0.45)',
  },
  {
    num: '04',
    icon: <CheckCircleIcon sx={{ fontSize: 30 }} />,
    title: 'Enrollment',
    body: 'Confirm your admission and begin your exciting learning journey.',
    color: '#7A1F2B',
    glow: 'rgba(122,31,43,0.45)',
  },
];

function StepCard({ step, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.18, ease: 'easeOut' }}
    >
      <Box sx={{ position: 'relative', textAlign: 'center', px: 2 }}>
        {/* Icon circle — zIndex 2 keeps it above the connector line */}
        <Box
          sx={{
            width: 80,
            height: 80,
            borderRadius: '50%',
            bgcolor: step.color,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mx: 'auto',
            mb: 3,
            position: 'relative',
            zIndex: 2,
            border: '3px solid #D4AF37',
            color: '#FFFFFF',
            cursor: 'default',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            '&:hover': {
              transform: 'scale(1.12) translateY(-5px)',
              boxShadow: `0 14px 36px ${step.glow}`,
            },
          }}
        >
          {step.icon}

          {/* Step number badge */}
          <Box
            sx={{
              position: 'absolute',
              top: -10, right: -10,
              width: 28, height: 28,
              bgcolor: '#D4AF37',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 3,
              boxShadow: '0 2px 8px rgba(212,175,55,0.55)',
            }}
          >
            <Typography sx={{ color: '#0C2340', fontWeight: 800, fontSize: '0.7rem' }}>
              {step.num}
            </Typography>
          </Box>
        </Box>

        <Typography
          variant="h5"
          sx={{ color: '#0C2340', fontWeight: 700, mb: 1.5, fontSize: '1.15rem' }}
        >
          {step.title}
        </Typography>
        <Typography sx={{ color: '#5C5C5C', lineHeight: 1.7, fontSize: '0.93rem' }}>
          {step.body}
        </Typography>
      </Box>
    </motion.div>
  );
}

export default function HowItWorks() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' });

  return (
    <Box id="how-it-works" sx={{ py: { xs: 8, md: 12 }, bgcolor: '#FFFFFF' }}>
      <Container maxWidth="lg">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="overline"
              sx={{ color: '#7A1F2B', fontWeight: 800, letterSpacing: 3, fontSize: '0.95rem', display: 'block', mb: 1.5 }}
            >
              Admission Process
            </Typography>
            <Typography
              variant="h2"
              sx={{ color: '#0C2340', fontWeight: 800, fontSize: { xs: '2rem', md: '2.6rem' }, mb: 1 }}
            >
              Simple, Guided, Hassle-Free
            </Typography>
            <Typography sx={{ color: '#5C5C5C', fontSize: '1rem', mb: 3 }}>
              Four easy steps to start your learning journey with KIPE
            </Typography>
            <Box sx={{ width: 60, height: 4, bgcolor: '#D4AF37', borderRadius: 2, mx: 'auto' }} />
          </Box>
        </motion.div>

        {/* Steps */}
        <Box sx={{ position: 'relative' }}>

          {/* ── Connector track (desktop only) ── */}
          <Box
            sx={{
              display: { xs: 'none', md: 'block' },
              position: 'absolute',
              top: 40,
              left: '12.5%',
              width: '75%',
              height: 3,
              bgcolor: 'rgba(212,175,55,0.15)',
              borderRadius: 4,
              zIndex: 0,
              overflow: 'hidden',
            }}
          >
            {/* Animated fill */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.3, ease: 'easeOut', delay: 0.25 }}
              style={{
                height: '100%',
                background: 'linear-gradient(to right, #D4AF37 0%, rgba(212,175,55,0.55) 50%, #D4AF37 100%)',
                transformOrigin: 'left',
                borderRadius: 4,
              }}
            />
          </Box>

          {/* ── Arrow dots between each step (desktop only) ── */}
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 + i * 0.15 }}
              style={{
                position: 'absolute',
                top: 16,
                left: `${25 * (i + 1)}%`,
                transform: 'translateX(-50%)',
                zIndex: 3,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <ChevronRightIcon style={{ fontSize: 48, color: '#D4AF37', filter: 'drop-shadow(0 2px 6px rgba(212,175,55,0.5))' }} />
            </motion.div>
          ))}

          <Grid container spacing={{ xs: 4, md: 2 }}>
            {steps.map((step, i) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={step.num}>
                <StepCard step={step} index={i} />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Bottom banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Box
            sx={{
              mt: 8,
              p: { xs: 4, md: 5 },
              bgcolor: '#0C2340',
              borderRadius: 3,
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: { xs: 'flex-start', md: 'center' },
              justifyContent: 'space-between',
              gap: { xs: 4, md: 5 },
            }}
          >
            {/* Decorative circles */}
            {[{ size: 220, top: -80, right: -80 }, { size: 140, bottom: -50, left: -50 }].map((d, i) => (
              <Box key={i} sx={{
                position: 'absolute',
                width: d.size, height: d.size,
                borderRadius: '50%',
                border: '1px solid rgba(212,175,55,0.1)',
                top: d.top, right: d.right, bottom: d.bottom, left: d.left,
                pointerEvents: 'none',
              }} />
            ))}

            {/* Left: text */}
            <Box sx={{ flex: 1, position: 'relative', zIndex: 1 }}>
              <Typography sx={{
                color: '#FFFFFF', fontWeight: 800,
                fontSize: { xs: '1.7rem', md: '3.3rem' },
                lineHeight: 1.2, mb: 1.5,
              }}>
                Ready to take the first step?
              </Typography>
              <Typography sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                Our counsellors are available Mon–Sat, 9 AM to 7 PM. Reach out anytime.
              </Typography>
            </Box>

            {/* Right: contact cards */}
            <Box sx={{
              display: 'flex', flexDirection: 'column', gap: 2,
              minWidth: { md: 260 }, position: 'relative', zIndex: 1,
              width: { xs: '100%', md: 'auto' },
            }}>
              {[
                { href: 'tel:+919116032816', icon: <PhoneIcon sx={{ fontSize: 19, color: '#0C2340' }} />, label: 'Call Us', value: '+91 91160 32816' },
                { href: 'mailto:info@kipe.org.in', icon: <EmailIcon sx={{ fontSize: 19, color: '#0C2340' }} />, label: 'Email Us', value: 'info@kipe.org.in' },
              ].map(({ href, icon, label, value }) => (
                <Box
                  key={label}
                  component="a"
                  href={href}
                  sx={{
                    display: 'flex', alignItems: 'center', gap: 2,
                    textDecoration: 'none',
                    p: 2,
                    borderRadius: 2.5,
                    bgcolor: 'rgba(212,175,55,0.08)',
                    border: '1px solid rgba(212,175,55,0.2)',
                    transition: 'all 0.25s ease',
                    '&:hover': {
                      bgcolor: 'rgba(212,175,55,0.16)',
                      borderColor: '#D4AF37',
                      transform: 'translateX(5px)',
                      boxShadow: '0 6px 20px rgba(212,175,55,0.15)',
                    },
                  }}
                >
                  <Box sx={{
                    width: 42, height: 42, borderRadius: '50%',
                    bgcolor: '#D4AF37', display: 'flex',
                    alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    boxShadow: '0 4px 12px rgba(212,175,55,0.4)',
                  }}>
                    {icon}
                  </Box>
                  <Box>
                    <Typography sx={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.7rem', mb: 0.3, textTransform: 'uppercase', letterSpacing: 1 }}>
                      {label}
                    </Typography>
                    <Typography sx={{ color: '#FFFFFF', fontWeight: 700, fontSize: '0.97rem' }}>
                      {value}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
