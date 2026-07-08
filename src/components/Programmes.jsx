import React, { useRef } from 'react';
import { Box, Container, Typography, Grid, Chip } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';
import ComputerIcon from '@mui/icons-material/Computer';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

const ugCourses = ['BBA', 'BCA', 'BA', 'B.Sc (PCM)', 'B.Lib', 'BA Journalism', 'B.Com'];
const pgCourses = ['MBA', 'MCA', 'M.Sc Maths', 'PGDCA', 'M.Com (Acc)', 'MA'];

const availablePrograms = [
  { icon: <SchoolIcon />, label: 'UG Programs', sub: 'Bachelor degree programmes' },
  { icon: <AutoStoriesIcon />, label: 'PG Programs', sub: 'Master & postgraduate programmes' },
  { icon: <ComputerIcon />, label: 'Online Programs', sub: 'Study from anywhere, anytime' },
  { icon: <MenuBookIcon />, label: 'Distance Education', sub: 'Flexible, self-paced learning' },
  { icon: <ImportContactsIcon />, label: 'Class 10th & 12th via NIOS', sub: 'National Institute of Open Schooling' },
];

function CourseCard({ title, courses, color, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: 'easeOut' }}
    >
      <Box
        sx={{
          bgcolor: color,
          borderRadius: 3,
          p: 4,
          height: '100%',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative circle */}
        <Box
          sx={{
            position: 'absolute',
            top: -40, right: -40,
            width: 180, height: 180,
            bgcolor: 'rgba(255,255,255,0.05)',
            borderRadius: '50%',
          }}
        />

        <Typography
          variant="overline"
          sx={{
            color: '#D4AF37',
            fontWeight: 700,
            letterSpacing: 3,
            fontSize: '0.7rem',
            display: 'block',
            mb: 1,
          }}
        >
          {title === 'UG Programmes' ? 'Undergraduate' : 'Postgraduate'}
        </Typography>
        <Typography
          variant="h4"
          sx={{ color: '#FFFFFF', fontWeight: 800, mb: 3, fontSize: '1.6rem' }}
        >
          {title}
        </Typography>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
          {courses.map((course) => (
            <Chip
              key={course}
              label={course}
              sx={{
                bgcolor: 'rgba(212,175,55,0.15)',
                color: '#D4AF37',
                border: '1px solid rgba(212,175,55,0.35)',
                fontWeight: 600,
                fontSize: '0.85rem',
                '& .MuiChip-label': { px: 1.5 },
                transition: 'all 0.2s',
                '&:hover': {
                  bgcolor: 'rgba(212,175,55,0.28)',
                  transform: 'scale(1.03)',
                },
              }}
            />
          ))}
        </Box>
      </Box>
    </motion.div>
  );
}

function ProgramRow({ item, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2.5,
          py: 2,
          px: 3,
          borderRadius: 2,
          bgcolor: index % 2 === 0 ? '#FFFFFF' : '#FAF8F5',
          border: '1px solid #EDE8E3',
          transition: 'all 0.2s',
          '&:hover': {
            borderColor: '#D4AF37',
            bgcolor: '#FFFDF5',
            transform: 'translateX(4px)',
          },
        }}
      >
        <Box
          sx={{
            width: 48,
            height: 48,
            borderRadius: '50%',
            bgcolor: '#0C2340',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#D4AF37',
            flexShrink: 0,
          }}
        >
          {item.icon}
        </Box>
        <Box>
          <Typography sx={{ fontWeight: 700, color: '#0C2340', fontSize: '1rem' }}>
            {item.label}
          </Typography>
          <Typography sx={{ color: '#5C5C5C', fontSize: '0.83rem' }}>
            {item.sub}
          </Typography>
        </Box>
      </Box>
    </motion.div>
  );
}

export default function Programmes() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' });

  return (
    <Box
      id="programmes"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: '#FFFFFF',
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ textAlign: 'center', mb: 7 }}>
            <Typography
              variant="overline"
              sx={{ color: '#7A1F2B', fontWeight: 800, letterSpacing: 3, fontSize: '0.95rem', display: 'block', mb: 1.5 }}
            >
              What We Offer
            </Typography>
            <Typography
              variant="h2"
              sx={{ color: '#0C2340', fontWeight: 800, fontSize: { xs: '2rem', md: '2.6rem' }, mb: 2 }}
            >
              Programmes Offered
            </Typography>
            <Box sx={{ width: 60, height: 4, bgcolor: '#D4AF37', borderRadius: 2, mx: 'auto' }} />
          </Box>
        </motion.div>

        {/* UG / PG Cards */}
        <Grid container spacing={3} sx={{ mb: 6 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <CourseCard title="UG Programmes" courses={ugCourses} color="#0C2340" delay={0.1} />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <CourseCard title="PG Programmes" courses={pgCourses} color="#7A1F2B" delay={0.2} />
          </Grid>
        </Grid>

        {/* Programs Available */}
        <Box>
          <Typography
            variant="h5"
            sx={{
              color: '#0C2340',
              fontWeight: 700,
              mb: 3,
              textAlign: 'center',
              fontSize: '1.4rem',
            }}
          >
            Programs Available
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, maxWidth: 700, mx: 'auto' }}>
            {availablePrograms.map((item, i) => (
              <ProgramRow key={item.label} item={item} index={i} />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
