import api from '../../api'
import { configuration } from '../../../config/configuration'

const uploadFile = async (file: FormData) => {
	try {
		const response = await api.post(
			configuration.BASE_URL + 'files/',
			file,
			{
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			}
		)
		return response
	} catch (error: any) {
		throw new Error(error.response.data.error)
	}
}

export default uploadFile
