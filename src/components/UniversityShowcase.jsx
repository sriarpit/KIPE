import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Box, Container, Typography, Grid, Chip, IconButton } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const universities = [
  {
    name: 'GLA University', abbr: 'GLA', color: '#1565C0',
    domain: 'gla.ac.in', modes: ['Online'],
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/42/GLA_University_logo.png/500px-GLA_University_logo.png',
  },
  {
    name: 'Manipal University', abbr: 'MU', color: '#6A1B9A',
    domain: 'manipal.edu', modes: ['Online'],
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/ff/Manipal_University_logo.png/500px-Manipal_University_logo.png',
  },
  {
    name: 'NMIMS', abbr: 'NM', color: '#2E7D32',
    domain: 'nmims.edu', modes: ['Online'],
  },
  {
    name: 'Sikkim Manipal University', abbr: 'SMU', color: '#C62828',
    domain: 'smude.edu.in', modes: ['Online'],
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Logo_of_Sikkim_Manipal_University.jpg/500px-Logo_of_Sikkim_Manipal_University.jpg',
  },
  {
    name: 'OP Jindal University', abbr: 'OPJ', color: '#E65100',
    domain: 'jgu.edu.in', modes: ['Online'],
  },
  {
    name: 'Chandigarh University', abbr: 'CU', color: '#0277BD',
    domain: 'chandigarhuniversity.ac.in', modes: ['Online'],
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Chandigarh_University_Seal.png/500px-Chandigarh_University_Seal.png',
  },
  {
    name: 'Kurukshetra University', abbr: 'KU', color: '#4A148C',
    domain: 'kuk.ac.in', modes: ['Online'],
    logo: 'https://upload.wikimedia.org/wikipedia/en/1/1d/Kurukshetra_University_logo.png',
  },
  {
    name: 'LPU', abbr: 'LPU', color: '#BF360C',
    domain: 'lpu.in', modes: ['Online'],
    logo: 'https://upload.wikimedia.org/wikipedia/en/3/3a/Lovely_Professional_University_logo.png',
  },
  {
    name: 'Parul University', abbr: 'PU', color: '#1B5E20',
    domain: 'paruluniversity.ac.in', modes: ['Online'],
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Parul_University_logo.svg/500px-Parul_University_logo.svg.png',
  },
  {
    name: 'Shoolini University', abbr: 'SHU', color: '#880E4F',
    domain: 'shooliniuniversity.com', modes: ['Online'],
    logo: 'https://shooliniuniversity.com/assets/images/logo.png',
  },
  {
    name: 'Amity University', abbr: 'AU', color: '#F57F17',
    domain: 'amity.edu', modes: ['Online'],
    logo: 'https://amity.edu/images/logo-amity.png',
  },
  {
    name: 'Galgotias University', abbr: 'GU', color: '#006064',
    domain: 'galgotiasuniversity.edu.in', modes: ['Online'],
  },
  {
    name: 'Uttaranchal University', abbr: 'UU', color: '#37474F',
    domain: 'uttaranchaluniversity.ac.in', modes: ['Online'],
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/25/Logo_Uttaranchal_University.svg/500px-Logo_Uttaranchal_University.svg.png',
  },
  {
    name: 'Jain University', abbr: 'JU', color: '#4E342E',
    domain: 'jainuniversity.ac.in', modes: ['Online'],
  },
  {
    name: 'Sharda University', abbr: 'SHD', color: '#283593',
    domain: 'sharda.ac.in', modes: ['Online'],
    logo: 'https://upload.wikimedia.org/wikipedia/en/1/16/Sharda_University_logo_no_wordmark.png',
  },
  {
    name: 'DY Patil University', abbr: 'DYP', color: '#AD1457',
    domain: 'dypatil.edu', modes: ['Online'],
    logo: 'https://dypatil-edu-cms.s3.ap-south-1.amazonaws.com/static-images/icons/logo.svg',
  },
  {
    name: 'Vivekanand Global University', abbr: 'VGU', color: '#00695C',
    domain: 'vgu.ac.in', modes: ['Online', 'Distance'],
    logo: 'https://vgu.ac.in/assets/images/vgu-logo-n.png',
  },
  {
    name: 'Mangalayatan University', abbr: 'MYU', color: '#558B2F',
    domain: 'mangalayatan.in', modes: ['Online', 'Distance'],
    logo: 'https://www.mangalayatan.in/images/logo.webp',
  },
  {
    name: 'SGVU', abbr: 'SGVU', color: '#7B1FA2',
    domain: 'sgvu.edu.in', modes: ['Distance'],
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Gyan_Vihar_Logo.jpg',
  },
  {
    name: 'Swami Vivekanand Subharti University', abbr: 'SVSU', color: '#0288D1',
    domain: 'subharti.org', modes: ['Distance'],
    logo: 'https://upload.wikimedia.org/wikipedia/en/3/3d/SVSU-transparent-Logo.png',
  },
  {
    name: 'University of Technology', abbr: 'UOT', color: '#5D4037',
    domain: 'universityoftechnology.edu.in', modes: ['Regular'],
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/03/University_of_Technology%2C_Jaipur_logo.svg/500px-University_of_Technology%2C_Jaipur_logo.svg.png',
  },
  {
    name: 'Jaipur National University', abbr: 'JNU', color: '#B71C1C',
    domain: 'jnujaipur.ac.in', modes: ['Online', 'Distance'],
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e5/Jaipur_National_University_logo.png/500px-Jaipur_National_University_logo.png',
  },
  {
    name: 'Desh Bhagat University', abbr: 'DBU', color: '#1A237E',
    domain: 'deshbhagatuniversity.in', modes: ['Online', 'Distance'],
    logo: 'https://deshbhagatuniversity.in/wp-content/uploads/2024/12/logopng.png',
  },
  {
    name: 'Ganpat University', abbr: 'GUNI', color: '#E65100',
    domain: 'ganpatuniversity.ac.in', modes: ['Online', 'Regular'],
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/16/Logo_of_Ganpat_University.png/500px-Logo_of_Ganpat_University.png',
  },
];

const CARDS_PER_PAGE = 6;
const AUTO_INTERVAL = 5000;
const PAUSE_DURATION = 15000;

const pages = [];
for (let i = 0; i < universities.length; i += CARDS_PER_PAGE) {
  pages.push(universities.slice(i, i + CARDS_PER_PAGE));
}


const modeStyle = {
  Online:   { bgcolor: '#E3F2FD', color: '#1565C0', border: '1px solid #BBDEFB' },
  Distance: { bgcolor: '#E8F5E9', color: '#2E7D32', border: '1px solid #C8E6C9' },
  Regular:  { bgcolor: '#FFF3E0', color: '#E65100', border: '1px solid #FFE0B2' },
};

function UniLogo({ uni, size = 60 }) {
  const [attempt, setAttempt] = useState(0);
  const sources = [
    ...(uni.logo ? [uni.logo] : []),
    `https://logo.clearbit.com/${uni.domain}?size=512`,
    `https://www.google.com/s2/favicons?domain=${uni.domain}&sz=256`,
  ];
  if (attempt < sources.length) {
    return (
      <Box
        component="img"
        src={sources[attempt]}
        alt={uni.name}
        onError={() => setAttempt(a => a + 1)}
        sx={{ width: size, height: size, objectFit: 'contain', display: 'block' }}
      />
    );
  }
  return (
    <Box sx={{
      width: size, height: size, bgcolor: `${uni.color}15`, borderRadius: 1.5,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden',
    }}>
      <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, bgcolor: uni.color }} />
      <Typography sx={{
        fontWeight: 800, color: uni.color, mt: 0.5,
        fontSize: uni.abbr.length > 3 ? '0.55rem' : uni.abbr.length === 3 ? '0.7rem' : '0.85rem',
      }}>
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

function UniCard({ uni }) {
  return (
    <Box sx={{
      display: 'flex', alignItems: 'center', gap: 2, p: 2.5,
      borderRadius: 3, bgcolor: '#FFFFFF',
      boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
      borderLeft: `4px solid ${uni.color}`,
      height: '100%',
      transition: 'all 0.25s ease',
      '&:hover': {
        boxShadow: '0 8px 28px rgba(12,35,64,0.13)',
        transform: 'translateY(-3px)',
        borderLeft: '4px solid #D4AF37',
      },
    }}>
      <Box sx={{
        width: 64, height: 64,
        bgcolor: `${uni.color}08`,
        borderRadius: 2,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        border: `1px solid ${uni.color}25`,
        flexShrink: 0, overflow: 'hidden',
      }}>
        <UniLogo uni={uni} size={52} />
      </Box>
      <Box sx={{ flex: 1 }}>
        <Typography sx={{
          color: '#0C2340', fontWeight: 700,
          fontSize: '0.87rem', mb: 0.8, lineHeight: 1.3,
        }}>
          {uni.name}
        </Typography>
        <ModeTags modes={uni.modes} />
      </Box>
    </Box>
  );
}

export default function UniversityShowcase() {
  const [page, setPage] = useState(0);
  const [paused, setPaused] = useState(false);
  const pauseTimer = useRef(null);
  const autoTimer = useRef(null);

  const triggerPause = useCallback(() => {
    setPaused(true);
    clearTimeout(pauseTimer.current);
    pauseTimer.current = setTimeout(() => setPaused(false), PAUSE_DURATION);
  }, []);

  const goTo = useCallback((newPage, manual = false) => {
    setPage(newPage);
    if (manual) triggerPause();
  }, [triggerPause]);

  const prev = useCallback(() => {
    goTo((page - 1 + pages.length) % pages.length, true);
  }, [page, goTo]);

  const next = useCallback(() => {
    goTo((page + 1) % pages.length, true);
  }, [page, goTo]);

  /* auto-advance */
  useEffect(() => {
    if (paused) return;
    autoTimer.current = setInterval(() => {
      setPage(p => (p + 1) % pages.length);
    }, AUTO_INTERVAL);
    return () => clearInterval(autoTimer.current);
  }, [paused]);

  /* cleanup on unmount */
  useEffect(() => () => {
    clearInterval(autoTimer.current);
    clearTimeout(pauseTimer.current);
  }, []);

  return (
    <Box id="partners" sx={{ py: 7, bgcolor: '#FAF8F5' }}>
      <Container maxWidth="lg">

        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 5 }}>
          <Typography variant="overline" sx={{
            color: '#7A1F2B', fontWeight: 800,
            letterSpacing: 3, fontSize: '0.85rem', display: 'block', mb: 1,
          }}>
            Trusted University Network
          </Typography>
          <Typography variant="h2" sx={{
            color: '#0C2340', fontWeight: 800,
            fontSize: { xs: '1.8rem', md: '2.4rem' }, mb: 1,
          }}>
            One Expert. 100+ Universities.{' '}
            <Box component="span" sx={{
              background: 'linear-gradient(135deg, #D4AF37 0%, #C09B22 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Endless Possibilities.
            </Box>
          </Typography>
          <Typography sx={{
            color: '#5C6B7A', fontSize: { xs: '0.9rem', md: '1rem' },
            mb: 2, fontWeight: 400,
          }}>
            All UGC-recognised universities. Expert guidance at every step.
          </Typography>
          <Box sx={{ width: 60, height: 4, bgcolor: '#D4AF37', borderRadius: 2, mx: 'auto' }} />
        </Box>

        {/* Carousel */}
        <Box sx={{ position: 'relative' }}>

          {/* Prev arrow */}
          <IconButton
            onClick={prev}
            sx={{
              position: 'absolute',
              left: { xs: -8, md: -52 },
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              bgcolor: '#FFFFFF',
              boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
              border: '1px solid #E8E4E0',
              width: 44, height: 44,
              '&:hover': { bgcolor: '#0C2340', color: '#D4AF37', borderColor: '#0C2340' },
              transition: 'all 0.2s ease',
            }}
          >
            <ChevronLeftIcon />
          </IconButton>

          {/* Slide window — all slides stay in DOM, no logo reloads */}
          <Box sx={{ overflow: 'hidden', mx: { xs: 4, md: 0 } }}>
            <Box sx={{
              display: 'flex',
              transform: `translateX(${-page * 100}%)`,
              transition: 'transform 0.42s cubic-bezier(0.4, 0, 0.2, 1)',
            }}>
              {pages.map((slide, slideIdx) => (
                <Box key={slideIdx} sx={{ minWidth: '100%' }}>
                  <Grid container spacing={2}>
                    {slide.map((uni) => (
                      <Grid size={{ xs: 6, sm: 6, md: 4 }} key={uni.name}>
                        <UniCard uni={uni} />
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Next arrow */}
          <IconButton
            onClick={next}
            sx={{
              position: 'absolute',
              right: { xs: -8, md: -52 },
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              bgcolor: '#FFFFFF',
              boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
              border: '1px solid #E8E4E0',
              width: 44, height: 44,
              '&:hover': { bgcolor: '#0C2340', color: '#D4AF37', borderColor: '#0C2340' },
              transition: 'all 0.2s ease',
            }}
          >
            <ChevronRightIcon />
          </IconButton>
        </Box>

        {/* Dots + progress bar */}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4, gap: 1.5 }}>
          <Box sx={{ display: 'flex', gap: 1 }}>
            {pages.map((_, i) => (
              <Box
                key={i}
                onClick={() => goTo(i, true)}
                sx={{
                  width: i === page ? 28 : 8,
                  height: 8,
                  borderRadius: 4,
                  bgcolor: i === page ? '#D4AF37' : '#CBD5E0',
                  cursor: 'pointer',
                  transition: 'all 0.35s ease',
                  '&:hover': { bgcolor: i === page ? '#D4AF37' : '#A0AEC0' },
                }}
              />
            ))}
          </Box>

          <Box sx={{ width: 200, height: 3, bgcolor: '#E8E4E0', borderRadius: 2, overflow: 'hidden' }}>
            <Box
              key={`${page}-${paused}`}
              sx={{
                height: '100%',
                bgcolor: '#D4AF37',
                borderRadius: 2,
                width: paused ? '0%' : '100%',
                transition: paused ? 'none' : `width ${AUTO_INTERVAL}ms linear`,
              }}
            />
          </Box>
        </Box>

      </Container>
    </Box>
  );
}
