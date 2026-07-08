import React, { useRef } from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import SearchIcon from '@mui/icons-material/Search';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import DescriptionIcon from '@mui/icons-material/Description';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const steps = [
  {
    num: '01',
    icon: <SearchIcon sx={{ fontSize: 30 }} />,
    title: 'Enquire',
    body: 'Share your preferred course and mode of learning with our counselling team.',
    color: '#0C2340',
  },
  {
    num: '02',
    icon: <RecordVoiceOverIcon sx={{ fontSize: 30 }} />,
    title: 'Counselling',
    body: 'Get personalized guidance on the right university and programme fit for you.',
    color: '#7A1F2B',
  },
  {
    num: '03',
    icon: <DescriptionIcon sx={{ fontSize: 30 }} />,
    title: 'Documentation',
    body: 'We assist with forms, verification, and all required paperwork seamlessly.',
    color: '#0C2340',
  },
  {
    num: '04',
    icon: <CheckCircleIcon sx={{ fontSize: 30 }} />,
    title: 'Enrollment',
    body: 'Confirm your admission and begin your exciting learning journey.',
    color: '#7A1F2B',
  },
];

function StepCard({ step, index, total }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <Box sx={{ position: 'relative' }}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
      >
        <Box
          sx={{
            position: 'relative',
            textAlign: 'center',
            px: 2,
          }}
        >
          {/* Number circle */}
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
              border: '3px solid #D4AF37',
              color: '#FFFFFF',
              flexDirection: 'column',
            }}
          >
            {step.icon}
            <Box
              sx={{
                position: 'absolute',
                top: -10, right: -10,
                width: 28,
                height: 28,
                bgcolor: '#D4AF37',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
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

      {/* Connector line */}
      {index < total - 1 && (
        <Box
          sx={{
            display: { xs: 'none', md: 'block' },
            position: 'absolute',
            top: 40,
            right: '-50%',
            width: '100%',
            height: 2,
            background: 'linear-gradient(to right, #D4AF37, rgba(212,175,55,0.2))',
            zIndex: 0,
          }}
        />
      )}
    </Box>
  );
}

export default function HowItWorks() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' });

  return (
    <Box
      id="how-it-works"
      sx={{ py: { xs: 8, md: 12 }, bgcolor: '#FFFFFF' }}
    >
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
              sx={{ color: '#7A1F2B', fontWeight: 700, letterSpacing: 3, fontSize: '0.75rem', display: 'block', mb: 1.5 }}
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
        <Grid container spacing={{ xs: 4, md: 2 }} sx={{ position: 'relative' }}>
          {steps.map((step, i) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={step.num} sx={{ position: 'relative' }}>
              <StepCard step={step} index={i} total={steps.length} />
            </Grid>
          ))}
        </Grid>

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
              p: { xs: 3, md: 4 },
              bgcolor: '#FAF8F5',
              border: '2px solid #D4AF37',
              borderRadius: 3,
              textAlign: 'center',
            }}
          >
            <Typography sx={{ color: '#0C2340', fontWeight: 700, fontSize: '1.1rem', mb: 0.5 }}>
              Ready to take the first step?
            </Typography>
            <Typography sx={{ color: '#5C5C5C', fontSize: '0.95rem' }}>
              Our counsellors are available Mon–Sat, 9 AM to 7 PM. Reach out anytime.
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
