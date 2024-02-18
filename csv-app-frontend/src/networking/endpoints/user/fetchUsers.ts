import api from '../../api'
import { configuration } from '../../../config/configuration'

const fetchUsers = async (query: string) => {
	try {
		const response = await api.get(
			configuration.BASE_URL + 'users?q=' + query
		)
		return response
	} catch (error: any) {
		throw new Error(error.response.data.message)
	}
}

export default fetchUsers
