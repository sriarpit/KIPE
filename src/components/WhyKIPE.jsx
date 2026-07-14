import React, { useRef } from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import FlexibilityIcon from '@mui/icons-material/DevicesOther';
import VerifiedIcon from '@mui/icons-material/VerifiedUser';
import SupportIcon from '@mui/icons-material/SupportAgent';
import CareerIcon from '@mui/icons-material/TrendingUp';

const pillars = [
  {
    icon: <FlexibilityIcon sx={{ fontSize: { xs: 26, md: 36 } }} />,
    title: 'Flexibility First',
    body: 'Online, distance, and regular options so you learn on your own terms — anytime, anywhere.',
    color: '#0C2340',
  },
  {
    icon: <VerifiedIcon sx={{ fontSize: { xs: 26, md: 36 } }} />,
    title: 'Verified Partnerships',
    body: '100+ UGC-recognized and approved university tie-ups ensuring quality and credibility.',
    color: '#7A1F2B',
  },
  {
    icon: <SupportIcon sx={{ fontSize: { xs: 26, md: 36 } }} />,
    title: 'End-to-End Support',
    body: 'From counselling and course selection to admission and documentation — we handle it all.',
    color: '#0C2340',
  },
  {
    icon: <CareerIcon sx={{ fontSize: { xs: 26, md: 36 } }} />,
    title: 'Career-Focused',
    body: 'Programmes chosen for real-world relevance and employability in today\'s competitive market.',
    color: '#7A1F2B',
  },
];

function PillarCard({ pillar, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: 'easeOut' }}
      style={{ height: '100%' }}
    >
      <Paper
        elevation={0}
        sx={{
          p: { xs: 2.5, md: 4 },
          height: '100%',
          border: '1px solid #E8E4E0',
          borderRadius: 3,
          position: 'relative',
          overflow: 'hidden',
          transition: 'all 0.3s ease',
          cursor: 'default',
          '&:hover': {
            transform: 'translateY(-6px)',
            boxShadow: '0 16px 40px rgba(12,35,64,0.12)',
            borderColor: '#D4AF37',
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0, left: 0,
            width: 4, height: '100%',
            bgcolor: pillar.color,
          },
        }}
      >
        {/* Icon bubble */}
        <Box
          sx={{
            width: { xs: 52, md: 68 },
            height: { xs: 52, md: 68 },
            borderRadius: '50%',
            bgcolor: `${pillar.color}14`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 2.5,
            color: pillar.color,
          }}
        >
          {pillar.icon}
        </Box>


        <Typography
          variant="h5"
          sx={{ color: '#0C2340', fontWeight: 700, mb: 1.5, fontSize: '1.15rem' }}
        >
          {pillar.title}
        </Typography>
        <Typography sx={{ color: '#5C5C5C', lineHeight: 1.7, fontSize: '0.95rem' }}>
          {pillar.body}
        </Typography>
      </Paper>
    </motion.div>
  );
}

export default function WhyKIPE() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' });

  return (
    <Box
      sx={{
        py: { xs: 5, md: 7 },
        bgcolor: '#FAF8F5',
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Box sx={{ textAlign: 'center', mb: 5 }}>
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
              Why Choose Us
            </Typography>
            <Typography
              variant="h2"
              sx={{
                color: '#0C2340',
                fontWeight: 800,
                fontSize: { xs: '2rem', md: '2.6rem' },
                mb: 2,
              }}
            >
              Guidance You Can Trust
            </Typography>
            <Box sx={{ width: 60, height: 4, bgcolor: '#D4AF37', borderRadius: 2, mx: 'auto' }} />
          </Box>
        </motion.div>

        {/* Pillar cards */}
        <Grid container spacing={3}>
          {pillars.map((pillar, i) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={pillar.title} sx={{ display: 'flex' }}>
              <PillarCard pillar={pillar} index={i} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
