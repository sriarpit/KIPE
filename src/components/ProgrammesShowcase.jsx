import React, { useRef, useState } from 'react';
import { Box, Container, Typography, Grid, Chip, Tabs, Tab, Button } from '@mui/material';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import ComputerIcon from '@mui/icons-material/Computer';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DevicesIcon from '@mui/icons-material/Devices';
import ApartmentIcon from '@mui/icons-material/Apartment';

const ugCourses = ['BBA', 'BCA', 'BA', 'B.Sc (PCM)', 'B.Lib', 'BA Journalism', 'B.Com'];
const pgCourses = ['MBA', 'MCA', 'M.Sc Maths', 'PGDCA', 'M.Com (Acc)', 'MA'];

const SectionBadge = ({ num }) => (
  <Box sx={{
    py: 1.5, bgcolor: '#111', textAlign: 'center',
    borderTop: '2px solid #D4AF37', borderBottom: '2px solid #D4AF37',
  }}>
    <Typography sx={{ color: '#D4AF37', fontWeight: 800, fontSize: '0.85rem', letterSpacing: 4 }}>
      ── DESIGN {num} ──
    </Typography>
  </Box>
);

const SectionHeader = ({ dark }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
      <Box sx={{ textAlign: 'center', mb: 5 }}>
        <Typography variant="overline" sx={{ color: dark ? '#D4AF37' : '#7A1F2B', fontWeight: 800, letterSpacing: 3, fontSize: '0.95rem', display: 'block', mb: 1.5 }}>
          What We Offer
        </Typography>
        <Typography variant="h2" sx={{ color: dark ? '#FFFFFF' : '#0C2340', fontWeight: 800, fontSize: { xs: '2rem', md: '2.6rem' }, mb: 2 }}>
          Programmes Offered
        </Typography>
        <Box sx={{ width: 60, height: 4, bgcolor: '#D4AF37', borderRadius: 2, mx: 'auto' }} />
      </Box>
    </motion.div>
  );
};

/* ════════════════════════════════════════
   DESIGN 1 — Individual Course Card Grid
   ════════════════════════════════════════ */
function Design1() {
  const CourseCard = ({ name, color, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
    >
      <Box sx={{
        bgcolor: '#FFFFFF',
        border: '1px solid #E8E4E0',
        borderTop: `3px solid ${color}`,
        borderRadius: 2,
        p: 2,
        textAlign: 'center',
        cursor: 'default',
        transition: 'all 0.25s ease',
        '&:hover': {
          borderColor: '#D4AF37',
          borderTopColor: '#D4AF37',
          boxShadow: '0 8px 24px rgba(212,175,55,0.18)',
          transform: 'translateY(-4px)',
        },
      }}>
        <Typography sx={{ fontWeight: 700, color: '#0C2340', fontSize: '0.9rem' }}>{name}</Typography>
      </Box>
    </motion.div>
  );

  const Divider = ({ color, label }) => (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
      <Box sx={{ height: 3, width: 36, bgcolor: color, borderRadius: 2 }} />
      <Typography sx={{ color, fontWeight: 800, fontSize: '0.78rem', letterSpacing: 2.5, textTransform: 'uppercase' }}>{label}</Typography>
      <Box sx={{ height: 1, flex: 1, bgcolor: '#E8E4E0' }} />
    </Box>
  );

  return (
    <Box sx={{ py: { xs: 5, md: 7 }, bgcolor: '#FAF8F5' }}>
      <Container maxWidth="lg">
        <SectionHeader />
        <Box sx={{ mb: 5 }}>
          <Divider color="#0C2340" label="Undergraduate" />
          <Grid container spacing={2}>
            {ugCourses.map((c, i) => <Grid size={{ xs: 6, sm: 4, md: 3 }} key={c}><CourseCard name={c} color="#0C2340" index={i} /></Grid>)}
          </Grid>
        </Box>
        <Box sx={{ mb: 5 }}>
          <Divider color="#7A1F2B" label="Postgraduate" />
          <Grid container spacing={2}>
            {pgCourses.map((c, i) => <Grid size={{ xs: 6, sm: 4, md: 3 }} key={c}><CourseCard name={c} color="#7A1F2B" index={i} /></Grid>)}
          </Grid>
        </Box>
        <Box sx={{
          bgcolor: '#0C2340', borderRadius: 3, p: { xs: 3, md: 4 },
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: 2, border: '1px solid rgba(212,175,55,0.25)',
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <ImportContactsIcon sx={{ color: '#D4AF37', fontSize: 38 }} />
            <Box>
              <Typography sx={{ color: '#D4AF37', fontWeight: 800, fontSize: '1.1rem' }}>Class 10th & 12th via NIOS</Typography>
              <Typography sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.87rem' }}>National Institute of Open Schooling — Flexible board option</Typography>
            </Box>
          </Box>
          <Chip label="Learn More →" sx={{ bgcolor: 'rgba(212,175,55,0.15)', color: '#D4AF37', border: '1px solid rgba(212,175,55,0.4)', fontWeight: 700 }} />
        </Box>
      </Container>
    </Box>
  );
}

/* ════════════════════════════════════
   DESIGN 2 — Tabs + Animated Grid
   ════════════════════════════════════ */
function Design2() {
  const [tab, setTab] = useState(0);
  const tabs = [
    { label: 'UG Programmes', courses: ugCourses, color: '#0C2340' },
    { label: 'PG Programmes', courses: pgCourses, color: '#7A1F2B' },
    { label: 'NIOS', courses: ['Class 10th', 'Class 12th'], color: '#5C4800' },
  ];

  return (
    <Box sx={{ py: { xs: 5, md: 7 }, bgcolor: '#FFFFFF' }}>
      <Container maxWidth="lg">
        <SectionHeader />
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
          <Tabs
            value={tab}
            onChange={(_, v) => setTab(v)}
            TabIndicatorProps={{ style: { backgroundColor: '#D4AF37', height: 3 } }}
            sx={{
              bgcolor: '#FAF8F5', borderRadius: 2, border: '1px solid #E8E4E0', px: 0.5,
              '& .MuiTab-root': { fontWeight: 700, textTransform: 'none', color: '#5C5C5C', fontSize: '0.95rem', minWidth: { xs: 90, sm: 150 }, '&.Mui-selected': { color: '#0C2340' } },
            }}
          >
            {tabs.map((t, i) => <Tab key={i} label={t.label} />)}
          </Tabs>
        </Box>
        <AnimatePresence mode="wait">
          <motion.div key={tab} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
            <Grid container spacing={2} sx={{ mb: 4 }}>
              {tabs[tab].courses.map((c) => (
                <Grid size={{ xs: 6, sm: 4, md: 3 }} key={c}>
                  <Box sx={{
                    bgcolor: '#FAF8F5', borderLeft: `4px solid ${tabs[tab].color}`,
                    border: '1px solid #E8E4E0', borderRadius: 2, p: 2.5,
                    transition: 'all 0.2s', cursor: 'default',
                    '&:hover': { borderColor: '#D4AF37', borderLeftColor: '#D4AF37', bgcolor: '#FFFDF5', transform: 'translateY(-3px)', boxShadow: '0 8px 24px rgba(212,175,55,0.15)' },
                  }}>
                    <Typography sx={{ fontWeight: 700, color: '#0C2340', fontSize: '0.95rem' }}>{c}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </AnimatePresence>
        <Box sx={{ textAlign: 'center' }}>
          <Button variant="contained" endIcon={<ArrowForwardIcon />} sx={{
            bgcolor: '#0C2340', color: '#D4AF37', fontWeight: 700, px: 4, py: 1.5, borderRadius: 2,
            '&:hover': { bgcolor: '#7A1F2B', boxShadow: '0 8px 24px rgba(122,31,43,0.3)' }, transition: 'all 0.2s',
          }}>
            Enquire Now
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

/* ════════════════════════════════════════
   DESIGN 3 — Cards + Mode Strips + NIOS
   ════════════════════════════════════════ */
function Design3() {
  const modes = [
    { icon: <DevicesIcon sx={{ fontSize: 28 }} />, label: 'Online', desc: 'Study anytime, anywhere' },
    { icon: <MenuBookIcon sx={{ fontSize: 28 }} />, label: 'Distance', desc: 'Flexible, self-paced learning' },
    { icon: <ApartmentIcon sx={{ fontSize: 28 }} />, label: 'Regular', desc: 'Traditional classroom experience' },
  ];

  return (
    <Box sx={{ py: { xs: 5, md: 7 }, bgcolor: '#FAF8F5' }}>
      <Container maxWidth="lg">
        <SectionHeader />
        <Grid container spacing={3} sx={{ mb: 4 }}>
          {[
            { label: 'UNDERGRADUATE', title: 'UG Programmes', courses: ugCourses, color: '#0C2340' },
            { label: 'POSTGRADUATE', title: 'PG Programmes', courses: pgCourses, color: '#7A1F2B' },
          ].map((item, i) => (
            <Grid size={{ xs: 12, md: 6 }} key={item.title}>
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.15 }}>
                <Box sx={{
                  bgcolor: item.color, borderRadius: 3, p: 4, height: '100%',
                  position: 'relative', overflow: 'hidden',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': { transform: 'translateY(-5px)', boxShadow: '0 20px 48px rgba(0,0,0,0.3)' },
                }}>
                  <Box sx={{ position: 'absolute', top: -50, right: -50, width: 200, height: 200, bgcolor: 'rgba(255,255,255,0.04)', borderRadius: '50%' }} />
                  <Typography sx={{ color: '#D4AF37', fontWeight: 700, fontSize: '0.72rem', letterSpacing: 3, textTransform: 'uppercase', mb: 1 }}>{item.label}</Typography>
                  <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 2, mb: 0.5 }}>
                    <Typography sx={{ color: '#FFFFFF', fontWeight: 800, fontSize: '1.6rem' }}>{item.title}</Typography>
                    <Typography sx={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem' }}>{item.courses.length} Courses</Typography>
                  </Box>
                  <Box sx={{ width: 40, height: 2, bgcolor: '#D4AF37', borderRadius: 1, mb: 3 }} />
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {item.courses.map(c => (
                      <Chip key={c} label={c} sx={{
                        bgcolor: 'rgba(212,175,55,0.12)', color: '#D4AF37',
                        border: '1px solid rgba(212,175,55,0.3)', fontWeight: 600, fontSize: '0.83rem',
                        '&:hover': { bgcolor: 'rgba(212,175,55,0.25)' },
                      }} />
                    ))}
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
        <Grid container spacing={2} sx={{ mb: 3 }}>
          {modes.map((m, i) => (
            <Grid size={{ xs: 12, sm: 4 }} key={m.label}>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <Box sx={{
                  bgcolor: '#FFFFFF', borderRadius: 2.5, p: 3,
                  display: 'flex', alignItems: 'center', gap: 2,
                  border: '1px solid #E8E4E0',
                  transition: 'all 0.25s ease',
                  '&:hover': { borderColor: '#D4AF37', boxShadow: '0 8px 24px rgba(212,175,55,0.15)', transform: 'translateY(-3px)' },
                }}>
                  <Box sx={{ color: '#0C2340', bgcolor: '#FAF8F5', width: 50, height: 50, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '2px solid #E8E4E0' }}>
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
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <Box sx={{
            background: 'linear-gradient(135deg, #D4AF37 0%, #C09B22 100%)',
            borderRadius: 3, p: { xs: 3, md: 3.5 },
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2,
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <ImportContactsIcon sx={{ color: '#0C2340', fontSize: 36 }} />
              <Box>
                <Typography sx={{ color: '#0C2340', fontWeight: 800, fontSize: '1.05rem' }}>Class 10th & 12th via NIOS</Typography>
                <Typography sx={{ color: 'rgba(12,35,64,0.65)', fontSize: '0.85rem' }}>National Institute of Open Schooling</Typography>
              </Box>
            </Box>
            <Chip label="Know More →" sx={{ bgcolor: '#0C2340', color: '#D4AF37', fontWeight: 700 }} />
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}

/* ════════════════════════════════════════
   DESIGN 4 — Full Dark Navy
   ════════════════════════════════════════ */
function Design4() {
  const modeTiles = [
    { icon: <DevicesIcon sx={{ fontSize: 26 }} />, label: 'Online', desc: 'Study from anywhere' },
    { icon: <MenuBookIcon sx={{ fontSize: 26 }} />, label: 'Distance', desc: 'Self-paced learning' },
    { icon: <ApartmentIcon sx={{ fontSize: 26 }} />, label: 'Regular', desc: 'On-campus classes' },
    { icon: <ImportContactsIcon sx={{ fontSize: 26 }} />, label: 'NIOS', desc: '10th & 12th' },
  ];

  return (
    <Box sx={{ py: { xs: 5, md: 7 }, bgcolor: '#0C2340', position: 'relative', overflow: 'hidden' }}>
      {[420, 680].map((size, i) => (
        <Box key={i} sx={{
          position: 'absolute', top: '50%',
          right: i === 0 ? '-8%' : '15%',
          transform: 'translateY(-50%)',
          width: size, height: size, borderRadius: '50%',
          border: '1px solid rgba(212,175,55,0.06)', pointerEvents: 'none',
        }} />
      ))}
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <SectionHeader dark />
        <Grid container spacing={3} sx={{ mb: 3 }}>
          {[
            { label: 'UNDERGRADUATE', title: 'UG Programmes', courses: ugCourses, border: 'rgba(212,175,55,0.3)', bg: 'rgba(212,175,55,0.07)' },
            { label: 'POSTGRADUATE', title: 'PG Programmes', courses: pgCourses, border: 'rgba(122,31,43,0.6)', bg: 'rgba(122,31,43,0.2)' },
          ].map((item, i) => (
            <Grid size={{ xs: 12, md: 6 }} key={item.title}>
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, delay: i * 0.15 }}>
                <Box sx={{
                  bgcolor: item.bg, border: `1px solid ${item.border}`,
                  borderRadius: 3, p: 4, height: '100%',
                  transition: 'all 0.3s ease',
                  '&:hover': { bgcolor: i === 0 ? 'rgba(212,175,55,0.14)' : 'rgba(122,31,43,0.32)', borderColor: '#D4AF37', boxShadow: '0 12px 36px rgba(212,175,55,0.12)', transform: 'translateY(-4px)' },
                }}>
                  <Typography sx={{ color: '#D4AF37', fontWeight: 700, fontSize: '0.72rem', letterSpacing: 3, textTransform: 'uppercase', mb: 1 }}>{item.label}</Typography>
                  <Typography sx={{ color: '#FFFFFF', fontWeight: 800, fontSize: '1.6rem', mb: 2 }}>{item.title}</Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {item.courses.map(c => (
                      <Chip key={c} label={c} sx={{
                        bgcolor: 'rgba(212,175,55,0.1)', color: '#D4AF37',
                        border: '1px solid rgba(212,175,55,0.25)', fontWeight: 600, fontSize: '0.83rem',
                        '&:hover': { bgcolor: 'rgba(212,175,55,0.2)' },
                      }} />
                    ))}
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
        <Grid container spacing={2}>
          {modeTiles.map((m, i) => (
            <Grid size={{ xs: 6, sm: 3 }} key={m.label}>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}>
                <Box sx={{
                  bgcolor: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(212,175,55,0.15)',
                  borderRadius: 2.5, p: 3, textAlign: 'center',
                  transition: 'all 0.25s ease',
                  '&:hover': { bgcolor: 'rgba(212,175,55,0.1)', borderColor: '#D4AF37', transform: 'translateY(-3px)', boxShadow: '0 8px 24px rgba(212,175,55,0.12)' },
                }}>
                  <Box sx={{ color: '#D4AF37', mb: 1 }}>{m.icon}</Box>
                  <Typography sx={{ color: '#FFFFFF', fontWeight: 700, fontSize: '0.95rem', mb: 0.3 }}>{m.label}</Typography>
                  <Typography sx={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.78rem' }}>{m.desc}</Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default function ProgrammesShowcase() {
  return (
    <>
      <SectionBadge num={1} />
      <Design1 />
      <SectionBadge num={2} />
      <Design2 />
      <SectionBadge num={3} />
      <Design3 />
      <SectionBadge num={4} />
      <Design4 />
    </>
  );
}
