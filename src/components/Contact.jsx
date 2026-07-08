import React, { useState, useRef } from 'react';
import {
  Box, Container, Typography, Grid, TextField, Button,
  MenuItem, Alert, Snackbar,
} from '@mui/material';
import { motion, useInView } from 'framer-motion';
import SendIcon from '@mui/icons-material/Send';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const programmes = [
  'BBA', 'BCA', 'BA', 'B.Sc (PCM)', 'B.Lib', 'BA Journalism', 'B.Com',
  'MBA', 'MCA', 'M.Sc Maths', 'PGDCA', 'M.Com (Acc)', 'MA', 'Other',
];

const modes = ['Online', 'Distance', 'Regular'];

const initialForm = {
  fullName: '', email: '', phone: '',
  programme: '', mode: '', message: '',
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' });

  const validate = () => {
    const e = {};
    if (!form.fullName.trim()) e.fullName = 'Name is required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required';
    if (!form.phone.trim() || !/^\d{10}$/.test(form.phone.replace(/\s/g, ''))) e.phone = '10-digit phone required';
    if (!form.programme) e.programme = 'Please select a programme';
    if (!form.mode) e.mode = 'Please select a mode';
    return e;
  };

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setErrors((er) => ({ ...er, [e.target.name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length) { setErrors(e2); return; }
    setSubmitted(true);
    setForm(initialForm);
  };

  const inputSx = {
    '& .MuiOutlinedInput-root': {
      borderRadius: 2,
      '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#D4AF37' },
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#0C2340' },
    },
    '& .MuiInputLabel-root.Mui-focused': { color: '#0C2340' },
  };

  return (
    <Box
      id="contact"
      sx={{ py: { xs: 8, md: 12 }, bgcolor: '#FAF8F5' }}
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
              sx={{ color: '#7A1F2B', fontWeight: 700, letterSpacing: 3, fontSize: '0.75rem', display: 'block', mb: 1.5 }}
            >
              Get In Touch
            </Typography>
            <Typography
              variant="h2"
              sx={{ color: '#0C2340', fontWeight: 800, fontSize: { xs: '2rem', md: '2.6rem' }, mb: 1 }}
            >
              Start Your Learning Journey Today
            </Typography>
            <Typography sx={{ color: '#5C5C5C', fontSize: '1rem', maxWidth: 560, mx: 'auto', mb: 3 }}>
              Whether you're exploring online, distance, or regular programmes, our counsellors are here to help.
            </Typography>
            <Box sx={{ width: 60, height: 4, bgcolor: '#D4AF37', borderRadius: 2, mx: 'auto' }} />
          </Box>
        </motion.div>

        <Grid container spacing={{ xs: 4, md: 6 }}>
          {/* Left: Info */}
          <Grid size={{ xs: 12, md: 4 }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Box
                sx={{
                  bgcolor: '#0C2340',
                  borderRadius: 3,
                  p: 4,
                  height: '100%',
                  minHeight: 400,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 3,
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box component="img" src="/kipe-logo.png" alt="KIPE" sx={{ width: 80, flexShrink: 0 }} />
                  <Typography sx={{ color: '#D4AF37', fontWeight: 700, fontSize: '1.05rem', lineHeight: 1.4 }}>
                    Kalpataru Institute of Professional Education
                  </Typography>
                </Box>
                <Typography sx={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                  Your trusted partner for university admissions across Online, Distance, and Regular learning modes.
                </Typography>

                {[
                  { icon: <PhoneIcon sx={{ fontSize: 20 }} />, label: 'Call Us', value: '+91 91160 32816' },
                  { icon: <EmailIcon sx={{ fontSize: 20 }} />, label: 'Email Us', value: 'info@kipe.org.in' },
                  { icon: <LocationOnIcon sx={{ fontSize: 20 }} />, label: 'Visit Us', value: 'A 5 First Floor, SSB Nagar, Swej Farm Road, Ram Nagar, Sodala, Jaipur – 302019' },
                ].map(({ icon, label, value }) => (
                  <Box key={label} sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <Box sx={{ color: '#D4AF37', mt: 0.2 }}>{icon}</Box>
                    <Box>
                      <Typography sx={{ color: '#D4AF37', fontWeight: 600, fontSize: '0.8rem', mb: 0.3 }}>{label}</Typography>
                      <Typography sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>{value}</Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </motion.div>
          </Grid>

          {/* Right: Form */}
          <Grid size={{ xs: 12, md: 8 }}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                  bgcolor: '#FFFFFF',
                  borderRadius: 3,
                  p: { xs: 3, md: 5 },
                  border: '1px solid #E8E4E0',
                }}
              >
                <Grid container spacing={2.5}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Full Name"
                      name="fullName"
                      value={form.fullName}
                      onChange={handleChange}
                      error={!!errors.fullName}
                      helperText={errors.fullName}
                      sx={inputSx}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Email Address"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      error={!!errors.email}
                      helperText={errors.email}
                      sx={inputSx}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Phone Number"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      error={!!errors.phone}
                      helperText={errors.phone}
                      sx={inputSx}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      select
                      fullWidth
                      label="Preferred Programme"
                      name="programme"
                      value={form.programme}
                      onChange={handleChange}
                      error={!!errors.programme}
                      helperText={errors.programme}
                      sx={inputSx}
                    >
                      {programmes.map((p) => (
                        <MenuItem key={p} value={p}>{p}</MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      select
                      fullWidth
                      label="Preferred Mode"
                      name="mode"
                      value={form.mode}
                      onChange={handleChange}
                      error={!!errors.mode}
                      helperText={errors.mode}
                      sx={inputSx}
                    >
                      {modes.map((m) => (
                        <MenuItem key={m} value={m}>{m}</MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid size={12}>
                    <TextField
                      fullWidth
                      multiline
                      rows={4}
                      label="Message (Optional)"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      sx={inputSx}
                    />
                  </Grid>
                  <Grid size={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                      endIcon={<SendIcon />}
                      sx={{
                        bgcolor: '#0C2340',
                        color: '#D4AF37',
                        fontWeight: 700,
                        py: 1.7,
                        fontSize: '1rem',
                        borderRadius: 2,
                        '&:hover': {
                          bgcolor: '#7A1F2B',
                          transform: 'translateY(-2px)',
                          boxShadow: '0 8px 24px rgba(122,31,43,0.3)',
                        },
                        transition: 'all 0.2s ease',
                      }}
                    >
                      Get Free Counselling
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      <Snackbar
        open={submitted}
        autoHideDuration={5000}
        onClose={() => setSubmitted(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={() => setSubmitted(false)} severity="success" variant="filled" sx={{ bgcolor: '#0C2340' }}>
          Thank you! Our counsellor will contact you soon.
        </Alert>
      </Snackbar>
    </Box>
  );
}
