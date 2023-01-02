import { useTheme } from '@mui/material/styles'
import { Typography } from '@mui/material'

export const MuiMode = () => {
  const theme = useTheme()
  return (
    <>
      <Typography
        sx={{ my: 3 }}
        component="h1"
      >{`${theme.palette.mode} mode`}</Typography>
    </>
  )
}
