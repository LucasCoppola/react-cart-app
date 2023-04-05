import React from 'react'
import { Alert, IconButton, Collapse } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

const ShowAlert = ({ open, setOpen, message }) => {
	return (
		<Collapse in={open}>
			<Alert
				variant="filled"
				severity="success"
				action={
					<IconButton
						aria-label="close"
						color="inherit"
						size="small"
						onClick={() => {
							setOpen(false)
						}}
					>
						<CloseIcon fontSize="inherit" />
					</IconButton>
				}
				sx={{
					position: 'fixed',
					bottom: '0',
					left: '0',
					margin: '1rem'
				}}
			>
				{message}
			</Alert>
		</Collapse>
	)
}

export default ShowAlert
