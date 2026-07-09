import React, { useState, useRef } from 'react';
import { Box, Container, Typography, Grid, Chip } from '@mui/material';
import { motion, useInView } from 'framer-motion';

const universities = [
  { name: 'GLA University',                           abbr: 'GLA',  color: '#1565C0', logo: 'https://logo.clearbit.com/gla.ac.in',                      modes: ['Online'] },
  { name: 'Manipal University',                        abbr: 'MU',   color: '#6A1B9A', logo: 'https://logo.clearbit.com/manipal.edu',                    modes: ['Online'] },
  { name: 'NMIMS',                                     abbr: 'NM',   color: '#2E7D32', logo: 'https://logo.clearbit.com/nmims.edu',                      modes: ['Online'] },
  { name: 'Sikkim Manipal University',                 abbr: 'SMU',  color: '#C62828', logo: 'https://logo.clearbit.com/smude.edu.in',                   modes: ['Online'] },
  { name: 'OP Jindal University',                      abbr: 'OPJ',  color: '#E65100', logo: 'https://logo.clearbit.com/jgu.edu.in',                     modes: ['Online'] },
  { name: 'Chandigarh University',                     abbr: 'CU',   color: '#0277BD', logo: 'https://logo.clearbit.com/chandigarhuniversity.ac.in',      modes: ['Online'] },
  { name: 'Kurukshetra University',                    abbr: 'KU',   color: '#4A148C', logo: 'https://logo.clearbit.com/kuk.ac.in',                      modes: ['Online'] },
  { name: 'LPU',                                       abbr: 'LPU',  color: '#BF360C', logo: 'https://logo.clearbit.com/lpu.in',                         modes: ['Online'] },
  { name: 'Parul University',                          abbr: 'PU',   color: '#1B5E20', logo: 'https://logo.clearbit.com/paruluniversity.ac.in',           modes: ['Online'] },
  { name: 'Sholini University',                        abbr: 'SHU',  color: '#880E4F', logo: 'https://logo.clearbit.com/sholiniuniversity.ac.in',         modes: ['Online'] },
  { name: 'Amity University',                          abbr: 'AU',   color: '#F57F17', logo: 'https://logo.clearbit.com/amity.edu',                      modes: ['Online'] },
  { name: 'Galgotias University',                      abbr: 'GU',   color: '#006064', logo: 'https://logo.clearbit.com/galgotiasuniversity.edu.in',      modes: ['Online'] },
  { name: 'Uttaranchal University',                    abbr: 'UU',   color: '#37474F', logo: 'https://logo.clearbit.com/uttaranchaluniversity.ac.in',     modes: ['Online'] },
  { name: 'Jain University',                           abbr: 'JU',   color: '#4E342E', logo: 'https://logo.clearbit.com/jainuniversity.ac.in',            modes: ['Online'] },
  { name: 'Sharda University',                         abbr: 'SHD',  color: '#283593', logo: 'https://logo.clearbit.com/sharda.ac.in',                   modes: ['Online'] },
  { name: 'DY Patil University',                       abbr: 'DYP',  color: '#AD1457', logo: 'https://logo.clearbit.com/dypatil.edu',                    modes: ['Online'] },
  { name: 'Vivekanand Global University',              abbr: 'VGU',  color: '#00695C', logo: 'https://logo.clearbit.com/vgu.ac.in',                      modes: ['Online', 'Distance'] },
  { name: 'Manglaytan University',                     abbr: 'MYU',  color: '#558B2F', logo: 'https://logo.clearbit.com/manglayatan.com',                modes: ['Online', 'Distance'] },
  { name: 'SGVU',                                      abbr: 'SGVU', color: '#7B1FA2', logo: 'https://logo.clearbit.com/sgvu.edu.in',                    modes: ['Distance'] },
  { name: 'Swami Vivekanand Subharti University',      abbr: 'SVSU', color: '#0288D1', logo: 'https://logo.clearbit.com/subharti.org',                   modes: ['Distance'] },
  { name: 'University of Technology',                  abbr: 'UOT',  color: '#5D4037', logo: 'https://logo.clearbit.com/uot.edu.in',                     modes: ['Regular'] },
];

const modeStyle = {
  Online:   { bgcolor: '#E3F2FD', color: '#1565C0', border: '1px solid #BBDEFB' },
  Distance: { bgcolor: '#E8F5E9', color: '#2E7D32', border: '1px solid #C8E6C9' },
  Regular:  { bgcolor: '#FFF3E0', color: '#E65100', border: '1px solid #FFE0B2' },
};

function UniLogo({ uni, size = 60 }) {
  const [err, setErr] = useState(false);
  if (!err) {
    return (
      <Box component="img" src={uni.logo} alt={uni.name}
        onError={() => setErr(true)}
        sx={{ width: size, height: size, objectFit: 'contain', display: 'block' }} />
    );
  }
  return (
    <Box sx={{ width: size, height: size, bgcolor: `${uni.color}12`, borderRadius: 1.5,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden' }}>
      <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, bgcolor: uni.color }} />
      <Typography sx={{ fontWeight: 800, color: uni.color, mt: 0.5,
        fontSize: uni.abbr.length > 3 ? '0.55rem' : uni.abbr.length === 3 ? '0.7rem' : '0.85rem' }}>
        {uni.abbr}
      </Typography>
    </Box>
  );
}

function ModeTags({ modes }) {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
      {modes.map((m) => (
        <Chip key={m} label={m} size="small"
          sx={{ ...modeStyle[m], fontSize: '0.62rem', fontWeight: 700, height: 20, '& .MuiChip-label': { px: 1 } }} />
      ))}
    </Box>
  );
}

function SectionHeader({ light = false }) {
  return (
    <Box sx={{ textAlign: 'center', mb: 5 }}>
      <Typography variant="overline" sx={{ color: light ? '#D4AF37' : '#7A1F2B', fontWeight: 800,
        letterSpacing: 3, fontSize: '0.85rem', display: 'block', mb: 1 }}>
        Our Network
      </Typography>
      <Typography variant="h2" sx={{ color: light ? '#FFFFFF' : '#0C2340', fontWeight: 800,
        fontSize: { xs: '1.8rem', md: '2.4rem' }, mb: 1.5 }}>
        100+ University Tie-Ups Across India
      </Typography>
      <Box sx={{ width: 60, height: 4, bgcolor: '#D4AF37', borderRadius: 2, mx: 'auto' }} />
    </Box>
  );
}

/* ─── DESIGN 1: Card Grid — logo centered in white card ─── */
function Design1() {
  return (
    <Box sx={{ py: 7, bgcolor: '#FAF8F5' }}>
      <Container maxWidth="lg">
        <SectionHeader />
        <Grid container spacing={2.5}>
          {universities.map((uni, i) => (
            <Grid size={{ xs: 6, sm: 4, md: 3 }} key={uni.name}>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.04 }}>
                <Box sx={{ bgcolor: '#FFFFFF', borderRadius: 3, p: 2.5, textAlign: 'center',
                  border: '1px solid #E8E4E0', height: '100%',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1.5,
                  transition: 'all 0.25s ease',
                  '&:hover': { borderColor: '#D4AF37', boxShadow: '0 8px 28px rgba(212,175,55,0.18)', transform: 'translateY(-5px)' } }}>
                  <Box sx={{ width: 80, height: 80, bgcolor: '#F8F9FA', borderRadius: 2,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    border: '1px solid #EEE', overflow: 'hidden' }}>
                    <UniLogo uni={uni} size={64} />
                  </Box>
                  <Typography sx={{ color: '#0C2340', fontWeight: 700, fontSize: '0.83rem', lineHeight: 1.35, flex: 1 }}>
                    {uni.name}
                  </Typography>
                  <ModeTags modes={uni.modes} />
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

/* ─── DESIGN 2: Horizontal List Rows ─── */
function Design2() {
  return (
    <Box sx={{ py: 7, bgcolor: '#FFFFFF' }}>
      <Container maxWidth="lg">
        <SectionHeader />
        <Grid container spacing={1.5}>
          {universities.map((uni, i) => (
            <Grid size={{ xs: 12, sm: 6 }} key={uni.name}>
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.04 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, p: 2,
                  borderRadius: 2.5, border: '1px solid #E8E4E0',
                  bgcolor: i % 2 === 0 ? '#FFFFFF' : '#FAF8F5',
                  transition: 'all 0.2s ease',
                  '&:hover': { borderColor: '#D4AF37', transform: 'translateX(5px)', boxShadow: '0 4px 16px rgba(212,175,55,0.12)' } }}>
                  <Box sx={{ width: 56, height: 56, bgcolor: '#F8F9FA', borderRadius: 1.5,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    border: '1px solid #EEE', flexShrink: 0, overflow: 'hidden' }}>
                    <UniLogo uni={uni} size={46} />
                  </Box>
                  <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Typography sx={{ color: '#0C2340', fontWeight: 700, fontSize: '0.88rem', mb: 0.5, lineHeight: 1.3 }}>
                      {uni.name}
                    </Typography>
                    <ModeTags modes={uni.modes} />
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

/* ─── DESIGN 3: Dark Navy Wall ─── */
function Design3() {
  return (
    <Box sx={{ py: 7, bgcolor: '#0C2340' }}>
      <Container maxWidth="lg">
        <SectionHeader light />
        <Grid container spacing={2}>
          {universities.map((uni, i) => (
            <Grid size={{ xs: 6, sm: 4, md: 3 }} key={uni.name}>
              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.04 }}>
                <Box sx={{ bgcolor: 'rgba(255,255,255,0.05)', borderRadius: 3, p: 2.5,
                  border: '1px solid rgba(212,175,55,0.15)', textAlign: 'center',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1.5,
                  transition: 'all 0.3s ease',
                  '&:hover': { bgcolor: 'rgba(212,175,55,0.08)', borderColor: '#D4AF37',
                    transform: 'translateY(-5px)', boxShadow: '0 14px 36px rgba(212,175,55,0.15)' } }}>
                  <Box sx={{ width: 76, height: 76, bgcolor: '#FFFFFF', borderRadius: 2,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    overflow: 'hidden', boxShadow: '0 4px 16px rgba(0,0,0,0.35)' }}>
                    <UniLogo uni={uni} size={62} />
                  </Box>
                  <Typography sx={{ color: '#FFFFFF', fontWeight: 600, fontSize: '0.8rem', lineHeight: 1.35 }}>
                    {uni.name}
                  </Typography>
                  <ModeTags modes={uni.modes} />
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

/* ─── DESIGN 4: Logo left + color top-bar card (3-col) ─── */
function Design4() {
  return (
    <Box sx={{ py: 7, bgcolor: '#FAF8F5' }}>
      <Container maxWidth="lg">
        <SectionHeader />
        <Grid container spacing={2}>
          {universities.map((uni, i) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={uni.name}>
              <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.04 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, p: 2.5,
                  borderRadius: 3, bgcolor: '#FFFFFF',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                  borderLeft: `4px solid ${uni.color}`,
                  transition: 'all 0.25s ease',
                  '&:hover': { boxShadow: '0 8px 28px rgba(12,35,64,0.13)', transform: 'translateY(-3px)', borderLeft: `4px solid #D4AF37` } }}>
                  <Box sx={{ width: 64, height: 64, bgcolor: `${uni.color}08`, borderRadius: 2,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    border: `1px solid ${uni.color}25`, flexShrink: 0, overflow: 'hidden' }}>
                    <UniLogo uni={uni} size={52} />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography sx={{ color: '#0C2340', fontWeight: 700, fontSize: '0.87rem', mb: 0.8, lineHeight: 1.3 }}>
                      {uni.name}
                    </Typography>
                    <ModeTags modes={uni.modes} />
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

/* ─── Showcase wrapper ─── */
function Label({ n }) {
  return (
    <Box sx={{ bgcolor: '#162d4e', py: 2.5, textAlign: 'center', borderTop: '3px solid #D4AF37', borderBottom: '1px solid rgba(212,175,55,0.2)' }}>
      <Typography sx={{ color: '#D4AF37', fontWeight: 800, fontSize: '0.95rem', letterSpacing: 4 }}>
        ▼  DESIGN {n}  ▼
      </Typography>
    </Box>
  );
}

export default function UniversityShowcase() {
  return (
    <>
      <Label n={1} />
      <Design1 />
      <Label n={2} />
      <Design2 />
      <Label n={3} />
      <Design3 />
      <Label n={4} />
      <Design4 />
    </>
  );
}
