const baseUrl = 'https://dev-bos.smartlink.id/'

class Services {
  static getInquiry = async () => {
    const response = await fetch(`${baseUrl}/salary/inquiry`)

    if (!response.ok) {
      throw new Error('Error fetch data')
    }

    return await response.json()
  }
}

export default Services
