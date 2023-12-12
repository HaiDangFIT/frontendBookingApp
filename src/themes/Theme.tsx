import { createTheme } from '@mui/material/styles';

const cssVar = (name: string) =>
  getComputedStyle(document.documentElement).getPropertyValue(name).trim();

const sizeButton = {
  small: '6px 12px',
  medium: '8px 16px',
  large: '12px 32px',
};

export const theme = createTheme({
  palette: {
    primary: {
      main: cssVar('--primary'),
    },
    secondary: {
      main: cssVar('--white'),
    },
    tertiary: {
      main: cssVar('--grey-primary-60'),
    },
    background: {
      default: cssVar('--bg'),
    },
    text: {
      primary: '#1E2020',
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        fontFamily: 'Inter',
        variantMapping: {
          label1: 'p',
          label2: 'p',
          label3: 'p',
          body3: 'p',
          button1: 'p',
          button2: 'p',
          caption1: 'p',
          caption2: 'p',
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        size: 'medium',
      },
      styleOverrides: {
        sizeLarge: {
          padding: sizeButton.large,
          fontSize: '20px',
        },
        sizeMedium: {
          padding: sizeButton.medium,
          fontSize: '16px',
        },
        sizeSmall: {
          padding: sizeButton.small,
          fontSize: '14px',
        },

        root: ({ ownerState }) => ({
          borderRadius: 6,
          textTransform: 'none',
          fontWeight: 500,

          '&.Mui-disabled': {
            borderColor: 'var(--grey-neutral-80)',
            background: 'var(--grey-neutral-700)',
            color: 'var(--text-tertiary)',
          },
          ...(ownerState.variant === 'contained' &&
            ownerState.color === 'primary' && {
              color: 'var(--white) ',
              backgroundColor: 'var(--primary)',
              '&:hover': {
                backgroundColor: 'var(--orange-500)',
              },
              '&:active': {
                backgroundColor: 'var(--orange-500)',
              },
            }),
          ...(ownerState.variant === 'contained' &&
            ownerState.color === 'secondary' && {
              color: 'var(--primary) ',
              backgroundColor: 'var(--grey-neutral-800)',
              '&:hover': {
                backgroundColor: 'var(--grey-primary-700)',
              },
              '&:active': {
                backgroundColor: 'var(--orange-900)',
              },
            }),
          ...(ownerState.variant === 'contained' &&
            ownerState.color === 'tertiary' && {
              color: 'var(--text-primary) ',
              backgroundColor: 'var(--grey-primary-700)',
              '&:hover': {
                backgroundColor: 'var(--grey-primary-600)',
              },
              '&:active': {
                color: 'var(--text-primary) ',
                backgroundColor: 'var(--primary)',
              },
            }),

          ...(ownerState.variant === 'outlined' &&
            ownerState.color === 'primary' && {
              color: 'var(--primary)',
              borderWidth: 1,
              borderColor: 'var(--primary)',
              '&:hover': {
                backgroundColor: 'var(--primary)',
                borderColor: 'var(--primary)',
                color: 'var(--text-primary)',
              },
              '&:active': {
                backgroundColor: 'var(--orange-500)',
                borderColor: 'var(--orange-500)',
                color: 'var(--text-primary)',
              },
            }),
          ...(ownerState.variant === 'outlined' &&
            ownerState.color === 'secondary' && {
              color: 'var(--primary)',
              backgroundColor: 'var(--grey-neutral-800)',
              borderWidth: 1,
              borderColor: 'var(--border-color)',
              '&:hover': {
                borderColor: 'var(--primary)',
                backgroundColor: 'var(--grey-neutral-800)',
              },
              '&:active': {
                color: 'var(--primary)',
                backgroundColor: 'var(--orange-900)',
                borderColor: 'var(--orange-700)',
              },
            }),
          ...(ownerState.variant === 'outlined' &&
            ownerState.color === 'tertiary' && {
              color: 'var(--text-primary)',
              borderWidth: 1,
              borderColor: 'transparent',

              '&:hover': {
                backgroundColor: 'var(--grey-primary-700)',
                borderWidth: 1,
                borderColor: 'var(--grey-primary-700)',
              },
              '&:active': {
                color: 'var(--primary)',
                borderWidth: 1,
                borderColor: 'transparent',
              },
            }),

          ...(ownerState.variant === 'text' &&
            ownerState.color === 'primary' && {
              color: 'var(--primary)',

              '&:hover': {
                textDecoration: 'underline',
              },
              '&:active': {
                textDecoration: 'underline',
              },
            }),
        }),
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          padding: 0,
          color: 'var(--border-color)',

          '&.Mui-checked, &.MuiCheckbox-indeterminate': {
            color: 'var(--primary)',
          },
          '&.Mui-disabled': {
            color: 'var(--orange-500)',
          },
        },
      },
    },
    
    MuiTextField: {
      defaultProps: {
        fullWidth: true,
        InputLabelProps: {
          shrink: false,
        },
      },

      styleOverrides: {
        root: ({ ownerState }) => ({
          '& .MuiFormHelperText-root': {
            marginLeft: 0,
            marginTop: '6px',
            '&.Mui-error': {
              color: 'var(--alert)',
            },
          },
          '& .MuiInputLabel-root': {
            position: 'static',
            //color: 'var(--text-primary) ',
            transform: 'none',
            fontWeight: '600',
            fontSize: '14px',
            marginBottom: '8px',
            '&.Mui-focused ': {
              //color: 'var(--text-primary)',
            },
            '&.Mui-error ': {
              //color: 'var(--text-primary)',
            },
            '&.Mui-disabled ': {
              //color: 'var(--text-tertiary)',
            },
          },
          '& .MuiOutlinedInput-root': {
            borderRadius: '8px',
            paddingRight: '16px',
            '& input': {
              //color: 'var(--text-primary)',
              '&::placeholder': {
                color: 'var(--text-secondary)',
              },
              overflow: 'hidden',
              fontSize: 16,
              padding: '8px 16px',
              height: '24px',
            },
            '& fieldset': {
              border: '1px solid',
              borderColor: 'var(--border-color)',
            },
            //hover
            '&:hover fieldset': {
              borderColor: 'var(--grey-neutral-300)',
            },
            //focus
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: 'var(--primary)',
              borderWidth: '1px',
            },

            '&.Mui-error fieldset': {
              borderColor: 'var(--alert) ',
            },
            '&.Mui-disabled fieldset': {
              backgroundColor: 'var(--grey-neutral-700) ',
              borderColor: 'var(--grey-primary-7000)',
            },
          },
        }),
      },
    },

    MuiTab: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          textTransform: 'none',
        }),
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          padding: 0,
        }),
      },
    },
    MuiSnackbar: {
      styleOverrides: {
        root: ({ owerState }) => ({
          '&.MuiSnackbar-anchorOriginTopRight': {
            left: 'auto',
          },
        }),
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          border: '1px solid',
          borderRadius: '8px',

          '&.MuiAlert-root': {
            width: '450px',
            backgroundColor: 'var(--grey-primary-800)',
            padding: '24px',
            '& .MuiAlert-icon': {
              padding: '0 16px 0 0',
              margin: 0,
            },
            '& .MuiAlert-action': {
              color: 'var(--white)',
            },
            '& .MuiAlert-message': {
              padding: 0,
              color: 'var(--white)',
              '& .MuiAlertTitle-root': {
                marginBottom: '8px',
              },
            },
          },
        }),
      },
    },

    MuiMenu: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          borderRadius: '100px',
          '& .MuiPaper-root': {
            marginTop: '5px',
            padding: '12px',
          },
          '& .MuiList-root': {
            padding: '0px',
          },
          '& .MuiButtonBase-root': {
            borderRadius: '8px',
            padding: '0 12px',
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          backgroundColor: '#fff',
          '&.Mui-selected': {
            '&.Mui-focusVisible': {
              backgroundColor: 'var(--grey-primary-700)',
            },
            backgroundColor: 'var(--grey-primary-700)',

            '&:hover': {
              backgroundColor: 'var(--grey-primary-700)',
            },
          },
        },
      },
    },
  },
  typography: {
    fontFamily: ['Inter'].join(','),
    button1: {
      fontSize: 20,
      fontWeight: 500,
      lineHeight: '32px',
    },
    button2: {
      fontSize: 16,
      fontWeight: 500,
      lineHeight: '24px',
    },
    button3: {
      fontSize: 14,
      fontWeight: 500,
      lineHeight: '20px',
    },
    h1: {
      fontSize: 56,
      lineHeight: '72px',
      fontWeight: 700,
    },
    h2: {
      fontSize: 48,
      lineHeight: '60px',
      fontWeight: 700,
    },
    h3: {
      fontSize: 40,
      lineHeight: '48px',
      fontWeight: 700,
    },
    h4: {
      fontSize: 32,
      lineHeight: '40px',
      fontWeight: 600,
    },
    h5: {
      fontSize: 24,
      lineHeight: '32px',
      fontWeight: 600,
    },
    h6: {
      fontSize: 20,
      lineHeight: '28px',
      fontWeight: 600,
    },

    label1: {
      fontSize: 18,
      lineHeight: '28px',
      fontWeight: 600,
    },
    label2: {
      fontSize: 16,
      lineHeight: '24px',
      fontWeight: 600,
    },
    label3: {
      fontSize: 14,
      lineHeight: '20px',
      fontWeight: 600,
    },
    label4: {
      fontSize: 12,
      lineHeight: '18px',
      fontWeight: 600,
    },
    body1: {
      fontSize: 18,
      lineHeight: '28px',
      fontWeight: 400,
    },
    body2: {
      fontSize: 16,
      lineHeight: '24px',
      fontWeight: 400,
    },
    body3: {
      fontSize: 14,
      lineHeight: '20px',
      fontWeight: 400,
    },
    caption1: {
      fontSize: 12,
      lineHeight: '18px',
      fontWeight: 400,
    },
    caption2: {
      fontSize: 10,
      lineHeight: '16px',
      fontWeight: 400,
    },
  },
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 800,
      desktop: 1200,
      oversize: 1600,
    },
  },
});
