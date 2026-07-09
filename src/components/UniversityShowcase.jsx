import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Chip } from '@mui/material';
import { motion } from 'framer-motion';

const universities = [
  {
    name: 'GLA University', abbr: 'GLA', color: '#1565C0',
    domain: 'gla.ac.in', modes: ['Online'],
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
  },
  {
    name: 'LPU', abbr: 'LPU', color: '#BF360C',
    domain: 'lpu.in', modes: ['Online'],
  },
  {
    name: 'Parul University', abbr: 'PU', color: '#1B5E20',
    domain: 'paruluniversity.ac.in', modes: ['Online'],
  },
  {
    name: 'Shoolini University', abbr: 'SHU', color: '#880E4F',
    domain: 'shooliniuniversity.com', modes: ['Online'],
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
  },
  {
    name: 'DY Patil University', abbr: 'DYP', color: '#AD1457',
    domain: 'dypatil.edu', modes: ['Online'],
  },
  {
    name: 'Vivekanand Global University', abbr: 'VGU', color: '#00695C',
    domain: 'vgu.ac.in', modes: ['Online', 'Distance'],
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

export default function UniversityShowcase() {
  return (
    <Box id="partners" sx={{ py: 7, bgcolor: '#FAF8F5' }}>
      <Container maxWidth="lg">

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

        <Grid container spacing={2}>
          {universities.map((uni, i) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={uni.name}>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
              >
                <Box sx={{
                  display: 'flex', alignItems: 'center', gap: 2, p: 2.5,
                  borderRadius: 3, bgcolor: '#FFFFFF',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                  borderLeft: `4px solid ${uni.color}`,
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
              </motion.div>
            </Grid>
          ))}
        </Grid>

      </Container>
    </Box>
  );
}
