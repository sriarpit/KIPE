import React from 'react';
import { Box, Container, Typography } from '@mui/material';

/* ── shared label ── */
function Label({ n }) {
  return (
    <Box sx={{ bgcolor: '#162d4e', py: 2, textAlign: 'center', borderTop: '3px solid #D4AF37', borderBottom: '1px solid rgba(212,175,55,0.2)' }}>
      <Typography sx={{ color: '#D4AF37', fontWeight: 800, fontSize: '0.9rem', letterSpacing: 4 }}>
        ▼  DESIGN {n}  ▼
      </Typography>
    </Box>
  );
}

/* ── Design 1: Bold Typographic ── */
function Design1() {
  return (
    <Box sx={{ bgcolor: '#0C2340', borderRadius: 3, p: 4, textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
      <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: 'linear-gradient(90deg, #D4AF37, #F5D76E, #D4AF37)' }} />
      <Typography sx={{
        fontWeight: 900, fontSize: '4.5rem', lineHeight: 1,
        letterSpacing: '-3px',
        background: 'linear-gradient(135deg, #F5D76E 0%, #D4AF37 60%, #C09B22 100%)',
        backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
        mb: 1.5,
      }}>
        KIPE
      </Typography>
      <Box sx={{ width: 60, height: 1.5, bgcolor: 'rgba(212,175,55,0.4)', mx: 'auto', mb: 1.5 }} />
      <Typography sx={{ color: '#FFFFFF', fontWeight: 600, fontSize: '0.85rem', lineHeight: 1.6, letterSpacing: 0.5 }}>
        Kalpataru Institute
      </Typography>
      <Typography sx={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.72rem', letterSpacing: 1.5, textTransform: 'uppercase' }}>
        of Professional Education
      </Typography>
      <Box sx={{ position: 'absolute', bottom: -40, right: -40, width: 140, height: 140, borderRadius: '50%', border: '1px solid rgba(212,175,55,0.08)' }} />
    </Box>
  );
}

/* ── Design 2: Two-Tone Split ── */
function Design2() {
  return (
    <Box sx={{ borderRadius: 3, overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.12)' }}>
      {/* Top: gold */}
      <Box sx={{
        background: 'linear-gradient(135deg, #D4AF37 0%, #F5D76E 50%, #C09B22 100%)',
        py: 3, px: 3.5, textAlign: 'center',
      }}>
        <Typography sx={{ fontWeight: 900, fontSize: '3rem', color: '#0C2340', letterSpacing: '-2px', lineHeight: 1 }}>
          KIPE
        </Typography>
      </Box>
      {/* Bottom: navy */}
      <Box sx={{ bgcolor: '#0C2340', py: 2.5, px: 3, textAlign: 'center' }}>
        <Typography sx={{ color: '#FFFFFF', fontWeight: 700, fontSize: '0.9rem', mb: 0.3 }}>
          Kalpataru Institute
        </Typography>
        <Typography sx={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.72rem', letterSpacing: 1 }}>
          of Professional Education
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 1.5 }}>
          {['Online', 'Distance', 'Regular'].map(m => (
            <Box key={m} sx={{ px: 1.2, py: 0.3, border: '1px solid rgba(212,175,55,0.3)', borderRadius: 5 }}>
              <Typography sx={{ color: '#D4AF37', fontSize: '0.6rem', fontWeight: 600, letterSpacing: 0.5 }}>{m}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

/* ── Design 3: Crest / Seal Style ── */
function Design3() {
  return (
    <Box sx={{
      bgcolor: '#0C2340', borderRadius: 3, p: 3.5,
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1.5,
      border: '1px solid rgba(212,175,55,0.15)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Outer decorative ring */}
      <Box sx={{
        width: 120, height: 120, borderRadius: '50%',
        border: '2px solid rgba(212,175,55,0.3)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        position: 'relative',
      }}>
        {/* Inner ring */}
        <Box sx={{
          width: 96, height: 96, borderRadius: '50%',
          border: '1px dashed rgba(212,175,55,0.2)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexDirection: 'column',
        }}>
          <Typography sx={{
            fontWeight: 900, fontSize: '1.8rem', letterSpacing: '-1px',
            background: 'linear-gradient(135deg, #F5D76E, #D4AF37)',
            backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            lineHeight: 1,
          }}>
            KIPE
          </Typography>
          <Box sx={{ width: 28, height: 1.5, bgcolor: 'rgba(212,175,55,0.5)', mt: 0.5 }} />
        </Box>
        {/* Star accents at cardinal points */}
        {[0, 90, 180, 270].map(deg => (
          <Box key={deg} sx={{
            position: 'absolute', width: 6, height: 6, borderRadius: '50%', bgcolor: '#D4AF37',
            top: '50%', left: '50%',
            transform: `rotate(${deg}deg) translate(56px) rotate(-${deg}deg) translate(-3px, -3px)`,
          }} />
        ))}
      </Box>

      <Box sx={{ textAlign: 'center' }}>
        <Typography sx={{ color: '#FFFFFF', fontWeight: 700, fontSize: '0.88rem', letterSpacing: 0.5 }}>
          Kalpataru Institute
        </Typography>
        <Typography sx={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.7rem', letterSpacing: 1.5, textTransform: 'uppercase' }}>
          of Professional Education
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Box sx={{ width: 24, height: 1, bgcolor: 'rgba(212,175,55,0.35)' }} />
        <Typography sx={{ color: '#D4AF37', fontSize: '0.65rem', fontWeight: 700, letterSpacing: 2 }}>JAIPUR, INDIA</Typography>
        <Box sx={{ width: 24, height: 1, bgcolor: 'rgba(212,175,55,0.35)' }} />
      </Box>
    </Box>
  );
}

/* ── Design 4: Glassmorphism / Gradient Card ── */
function Design4() {
  return (
    <Box sx={{
      background: 'linear-gradient(145deg, #0C2340 0%, #1a3a5c 60%, #0C2340 100%)',
      borderRadius: 3, p: 3.5, position: 'relative', overflow: 'hidden',
    }}>
      {/* Glowing blob */}
      <Box sx={{ position: 'absolute', top: -20, left: '50%', transform: 'translateX(-50%)', width: 180, height: 180, borderRadius: '50%', background: 'radial-gradient(circle, rgba(212,175,55,0.18) 0%, transparent 70%)' }} />

      {/* K lettermark */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
        <Box sx={{
          width: 72, height: 72,
          background: 'linear-gradient(135deg, rgba(212,175,55,0.2), rgba(212,175,55,0.05))',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(212,175,55,0.35)',
          borderRadius: 2.5,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 8px 32px rgba(212,175,55,0.15)',
        }}>
          <Typography sx={{
            fontWeight: 900, fontSize: '2.4rem',
            background: 'linear-gradient(135deg, #F5D76E, #D4AF37)',
            backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>
            K
          </Typography>
        </Box>
      </Box>

      <Box sx={{ textAlign: 'center' }}>
        <Typography sx={{
          fontWeight: 800, fontSize: '1.4rem', letterSpacing: 6,
          color: '#FFFFFF', mb: 0.5,
        }}>
          KIPE
        </Typography>
        <Box sx={{ width: 50, height: 2, background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)', mx: 'auto', mb: 1 }} />
        <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontWeight: 500, fontSize: '0.82rem', lineHeight: 1.6 }}>
          Kalpataru Institute of<br />Professional Education
        </Typography>
      </Box>

      {/* Corner accents */}
      <Box sx={{ position: 'absolute', top: 12, left: 12, width: 20, height: 20, borderTop: '2px solid rgba(212,175,55,0.4)', borderLeft: '2px solid rgba(212,175,55,0.4)', borderRadius: '2px 0 0 0' }} />
      <Box sx={{ position: 'absolute', top: 12, right: 12, width: 20, height: 20, borderTop: '2px solid rgba(212,175,55,0.4)', borderRight: '2px solid rgba(212,175,55,0.4)', borderRadius: '0 2px 0 0' }} />
      <Box sx={{ position: 'absolute', bottom: 12, left: 12, width: 20, height: 20, borderBottom: '2px solid rgba(212,175,55,0.4)', borderLeft: '2px solid rgba(212,175,55,0.4)', borderRadius: '0 0 0 2px' }} />
      <Box sx={{ position: 'absolute', bottom: 12, right: 12, width: 20, height: 20, borderBottom: '2px solid rgba(212,175,55,0.4)', borderRight: '2px solid rgba(212,175,55,0.4)', borderRadius: '0 0 2px 0' }} />
    </Box>
  );
}

export default function AboutBrandShowcase() {
  return (
    <Box sx={{ bgcolor: '#FAF8F5', py: 6 }}>
      <Container maxWidth="sm">
        <Typography variant="h5" sx={{ textAlign: 'center', mb: 4, fontWeight: 700, color: '#0C2340' }}>
          Brand Card — Choose a Design
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          <Label n={1} />
          <Box sx={{ p: 3, bgcolor: '#0C2340' }}><Design1 /></Box>
          <Label n={2} />
          <Box sx={{ p: 3, bgcolor: '#FAF8F5' }}><Design2 /></Box>
          <Label n={3} />
          <Box sx={{ p: 3, bgcolor: '#0C2340' }}><Design3 /></Box>
          <Label n={4} />
          <Box sx={{ p: 3, bgcolor: '#FAF8F5' }}><Design4 /></Box>
        </Box>
      </Container>
    </Box>
  );
}
