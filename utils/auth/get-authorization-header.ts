import Cookies from 'js-cookie';

export const getAuthorizationHeader = () => {

    const currentUser = Cookies.get('currentUser');

    return {
        Authorization: `Bearer ${JSON.parse(currentUser || '')?.accessToken || ''}`
    }
};
