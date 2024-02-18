import * as React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import { user } from '../../types/types'
import Avatar from '@mui/material/Avatar'
import FaceIcon from '@mui/icons-material/Face'
import { CardContent } from '@mui/material'

interface InfoCardProps {
	user: user
}

export default function InfoCard({ user }: InfoCardProps) {
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardHeader
				avatar={
					<Avatar>
						<FaceIcon />
					</Avatar>
				}
				title={user.name}
				subheader={user.country}
			/>
			<CardContent>
				<p>
					{user.name} lives in {user.city} and likes{' '}
					{user.favorite_sport}
				</p>
			</CardContent>
		</Card>
	)
}
