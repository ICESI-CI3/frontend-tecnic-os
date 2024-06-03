export interface User {
    username: string;
    id: string;
    email: string;
    rating: number;
    role: string[];
    accessToken: string;
    expiredAt: number;
}