import React, { useRef } from 'react';
import { Box, Container, Typography, Grid, Chip } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import DevicesIcon from '@mui/icons-material/Devices';
import ApartmentIcon from '@mui/icons-material/Apartment';

const ugCourses = ['BBA', 'BCA', 'BA', 'B.Sc (PCM)', 'B.Lib', 'BA Journalism', 'B.Com'];
const pgCourses = ['MBA', 'MCA', 'M.Sc Maths', 'PGDCA', 'M.Com (Acc)', 'MA'];

const modes = [
  { icon: <DevicesIcon sx={{ fontSize: 28 }} />, label: 'Online', desc: 'Study anytime, anywhere' },
  { icon: <MenuBookIcon sx={{ fontSize: 28 }} />, label: 'Distance', desc: 'Flexible, self-paced learning' },
  { icon: <ApartmentIcon sx={{ fontSize: 28 }} />, label: 'Regular', desc: 'Traditional classroom experience' },
];

export default function Programmes() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' });

  return (
    <Box id="programmes" sx={{ pt: { xs: 2, md: 3 }, pb: { xs: 3, md: 4 }, bgcolor: '#FAF8F5' }}>
      <Container maxWidth="lg">

        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ textAlign: 'left', mb: 5 }}>
            <Typography
              variant="overline"
              sx={{ color: '#7A1F2B', fontWeight: 800, letterSpacing: 3, fontSize: '0.95rem', display: 'block', mb: 0.5 }}
            >
              What We Offer
            </Typography>
            <Typography
              variant="h2"
              sx={{ color: '#0C2340', fontWeight: 800, fontSize: { xs: '2rem', md: '2.6rem' }, mb: 2 }}
            >
              Programmes Offered
            </Typography>
            <Box sx={{ width: 60, height: 4, bgcolor: '#D4AF37', borderRadius: 2 }} />
          </Box>
        </motion.div>

        {/* UG / PG Cards */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          {[
            { label: 'UNDERGRADUATE', title: 'UG Programmes', courses: ugCourses, color: '#0C2340' },
            { label: 'POSTGRADUATE', title: 'PG Programmes', courses: pgCourses, color: '#7A1F2B' },
          ].map((item, i) => (
            <Grid size={{ xs: 12, md: 6 }} key={item.title}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <Box
                  sx={{
                    bgcolor: item.color,
                    borderRadius: 3,
                    p: 4,
                    height: '100%',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': { transform: 'translateY(-5px)', boxShadow: '0 20px 48px rgba(0,0,0,0.3)' },
                  }}
                >
                  <Box sx={{ position: 'absolute', top: -50, right: -50, width: 200, height: 200, bgcolor: 'rgba(255,255,255,0.04)', borderRadius: '50%' }} />
                  <Typography sx={{ color: '#D4AF37', fontWeight: 700, fontSize: '0.72rem', letterSpacing: 3, textTransform: 'uppercase', mb: 1 }}>
                    {item.label}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 2, mb: 0.5 }}>
                    <Typography sx={{ color: '#FFFFFF', fontWeight: 800, fontSize: '1.6rem' }}>{item.title}</Typography>
                    <Typography sx={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem' }}>{item.courses.length} Courses</Typography>
                  </Box>
                  <Box sx={{ width: 40, height: 2, bgcolor: '#D4AF37', borderRadius: 1, mb: 3 }} />
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {item.courses.map((c) => (
                      <Chip
                        key={c}
                        label={c}
                        sx={{
                          bgcolor: 'rgba(212,175,55,0.12)',
                          color: '#D4AF37',
                          border: '1px solid rgba(212,175,55,0.3)',
                          fontWeight: 600,
                          fontSize: '0.83rem',
                          '&:hover': { bgcolor: 'rgba(212,175,55,0.25)' },
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Mode strips */}
        <Grid container spacing={2} sx={{ mb: 3 }}>
          {modes.map((m, i) => (
            <Grid size={{ xs: 12, sm: 4 }} key={m.label}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Box
                  sx={{
                    bgcolor: '#FFFFFF',
                    borderRadius: 2.5,
                    p: 3,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    border: '1px solid #E8E4E0',
                    transition: 'all 0.25s ease',
                    '&:hover': { borderColor: '#D4AF37', boxShadow: '0 8px 24px rgba(212,175,55,0.15)', transform: 'translateY(-3px)' },
                  }}
                >
                  <Box
                    sx={{
                      color: '#0C2340',
                      bgcolor: '#FAF8F5',
                      width: 50, height: 50,
                      borderRadius: '50%',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0,
                      border: '2px solid #E8E4E0',
                    }}
                  >
                    {m.icon}
                  </Box>
                  <Box>
                    <Typography sx={{ fontWeight: 700, color: '#0C2340', fontSize: '1rem' }}>{m.label}</Typography>
                    <Typography sx={{ color: '#5C5C5C', fontSize: '0.82rem' }}>{m.desc}</Typography>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* NIOS Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Box
            sx={{
              background: 'linear-gradient(135deg, #D4AF37 0%, #C09B22 100%)',
              borderRadius: 3,
              p: { xs: 3, md: 3.5 },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 2,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <ImportContactsIcon sx={{ color: '#0C2340', fontSize: 36 }} />
              <Box>
                <Typography sx={{ color: '#0C2340', fontWeight: 800, fontSize: '1.05rem' }}>
                  Class 10th & 12th via NIOS
                </Typography>
                <Typography sx={{ color: 'rgba(12,35,64,0.65)', fontSize: '0.85rem' }}>
                  National Institute of Open Schooling
                </Typography>
              </Box>
            </Box>
            <Chip
              label="Know More →"
              sx={{ bgcolor: '#0C2340', color: '#D4AF37', fontWeight: 700, cursor: 'pointer' }}
            />
          </Box>
        </motion.div>

      </Container>
    </Box>
  );
}
