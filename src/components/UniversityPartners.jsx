import React, { useState, useRef } from 'react';
import {
  Box, Container, Typography, Tabs, Tab, Grid, Paper,
} from '@mui/material';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';

const universityData = {
  Online: [
    { name: 'GLA University',                           abbr: 'GLA',  color: '#1565C0' },
    { name: 'Manipal University',                        abbr: 'MU',   color: '#6A1B9A' },
    { name: 'NMIMS Online',                              abbr: 'NM',   color: '#2E7D32' },
    { name: 'Sikkim Manipal University',                 abbr: 'SMU',  color: '#C62828' },
    { name: 'OP Jindal University',                      abbr: 'OPJ',  color: '#E65100' },
    { name: 'Chandigarh University',                     abbr: 'CU',   color: '#0277BD' },
    { name: 'Kurukshetra University',                    abbr: 'KU',   color: '#4A148C' },
    { name: 'LPU (Online)',                              abbr: 'LPU',  color: '#BF360C' },
    { name: 'Parul University',                          abbr: 'PU',   color: '#1B5E20' },
    { name: 'Sholini University',                        abbr: 'SHU',  color: '#880E4F' },
    { name: 'Amity University',                          abbr: 'AU',   color: '#F57F17' },
    { name: 'Galgotias University',                      abbr: 'GU',   color: '#006064' },
    { name: 'Uttaranchal University',                    abbr: 'UU',   color: '#37474F' },
    { name: 'Jain University',                           abbr: 'JU',   color: '#4E342E' },
    { name: 'Sharda University',                         abbr: 'SHD',  color: '#283593' },
    { name: 'DY Patil University (Navi Mumbai & Pune)',  abbr: 'DYP',  color: '#AD1457' },
  ],
  'Online & Distance': [
    { name: 'Vivekanand Global University',              abbr: 'VGU',  color: '#00695C' },
    { name: 'Manglaytan University',                     abbr: 'MYU',  color: '#558B2F' },
  ],
  Distance: [
    { name: 'SGVU (Sri Ganganagar Vidyapeeth University)', abbr: 'SGVU', color: '#7B1FA2' },
    { name: 'Swami Vivekanand Subharti University',        abbr: 'SVSU', color: '#0288D1' },
  ],
  Regular: [
    { name: 'University of Technology',                  abbr: 'UOT',  color: '#5D4037' },
  ],
};

function UniversityCard({ uni, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.92 }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      style={{ height: '100%' }}
    >
      <Paper
        elevation={0}
        sx={{
          p: { xs: 1.5, sm: 2 },
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: 'center',
          gap: { xs: 1, sm: 1.5 },
          border: '1px solid #E8E4E0',
          borderRadius: 2.5,
          textAlign: { xs: 'center', sm: 'left' },
          height: '100%',
          transition: 'all 0.25s ease',
          '&:hover': {
            borderColor: uni.color,
            boxShadow: `0 4px 20px ${uni.color}25`,
            transform: 'translateY(-4px)',
          },
        }}
      >
        {/* Logo avatar */}
        <Box
          sx={{
            width: { xs: 52, sm: 56 },
            height: { xs: 52, sm: 56 },
            borderRadius: 2,
            bgcolor: `${uni.color}15`,
            border: `2px solid ${uni.color}40`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Top color bar */}
          <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, bgcolor: uni.color }} />
          <Typography
            sx={{
              fontWeight: 800,
              fontSize: uni.abbr.length > 3 ? '0.65rem' : uni.abbr.length === 3 ? '0.75rem' : '0.9rem',
              color: uni.color,
              letterSpacing: 0.5,
              lineHeight: 1,
              mt: 0.5,
            }}
          >
            {uni.abbr}
          </Typography>
        </Box>

        {/* Name */}
        <Typography
          sx={{
            color: '#1A1A1A',
            fontWeight: 600,
            fontSize: { xs: '0.78rem', sm: '0.86rem' },
            lineHeight: 1.35,
          }}
        >
          {uni.name}
        </Typography>
      </Paper>
    </motion.div>
  );
}

export default function UniversityPartners() {
  const [activeTab, setActiveTab] = useState(0);
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' });

  const tabKeys = Object.keys(universityData);
  const currentMode = tabKeys[activeTab];
  const unis = universityData[currentMode];

  return (
    <Box id="partners" sx={{ py: { xs: 8, md: 12 }, bgcolor: '#FAF8F5' }}>
      <Container maxWidth="lg">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="overline"
              sx={{ color: '#7A1F2B', fontWeight: 700, letterSpacing: 3, fontSize: '0.75rem', display: 'block', mb: 1.5 }}
            >
              Our Network
            </Typography>
            <Typography
              variant="h2"
              sx={{ color: '#0C2340', fontWeight: 800, fontSize: { xs: '1.8rem', md: '2.6rem' }, mb: 1 }}
            >
              100+ University Tie-Ups Across India
            </Typography>
            <Typography sx={{ color: '#5C5C5C', fontSize: { xs: '0.92rem', md: '1rem' }, maxWidth: 600, mx: 'auto', mb: 3 }}>
              KIPE has partnered with over 100 recognized universities across the country, offering
              students a wide range of choices across online, distance, and regular modes of learning.
            </Typography>
            <Box sx={{ width: 60, height: 4, bgcolor: '#D4AF37', borderRadius: 2, mx: 'auto' }} />
          </Box>
        </motion.div>

        {/* Mode tabs */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
          <Tabs
            value={activeTab}
            onChange={(_, v) => setActiveTab(v)}
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            TabIndicatorProps={{ style: { backgroundColor: '#D4AF37', height: 3 } }}
            sx={{
              bgcolor: '#FFFFFF',
              borderRadius: 2,
              border: '1px solid #E8E4E0',
              px: 0.5,
              '& .MuiTab-root': {
                fontWeight: 600,
                fontSize: { xs: '0.78rem', sm: '0.875rem' },
                color: '#5C5C5C',
                textTransform: 'none',
                minWidth: { xs: 90, sm: 120 },
                '&.Mui-selected': { color: '#0C2340' },
              },
            }}
          >
            {tabKeys.map((key) => (
              <Tab key={key} label={`${key} (${universityData[key].length})`} />
            ))}
          </Tabs>
        </Box>

        {/* University grid */}
        <AnimatePresence mode="wait">
          <motion.div key={activeTab}>
            <Grid container spacing={{ xs: 1.5, sm: 2 }}>
              {unis.map((uni, i) => (
                <Grid size={{ xs: 6, sm: 6, md: 4 }} key={uni.name}>
                  <UniversityCard uni={uni} index={i} />
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </AnimatePresence>

        {/* Counter banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 2.5,
                bgcolor: '#0C2340',
                borderRadius: 3,
                px: { xs: 3, md: 5 },
                py: { xs: 2.5, md: 3 },
              }}
            >
              <SchoolIcon sx={{ color: '#D4AF37', fontSize: { xs: 28, md: 36 } }} />
              <Box sx={{ textAlign: 'left' }}>
                <Typography sx={{ color: '#D4AF37', fontWeight: 800, fontSize: { xs: '1.3rem', md: '1.6rem' }, lineHeight: 1 }}>
                  100+
                </Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.75)', fontSize: { xs: '0.78rem', md: '0.88rem' } }}>
                  University Partners & Growing
                </Typography>
              </Box>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
