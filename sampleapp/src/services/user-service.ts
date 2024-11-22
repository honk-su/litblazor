import { Injectable } from '../../../core/src/di';
import { ServiceLifetime } from '../../../core/src/di';

interface User {
    id: string;
    name: string;
}

@Injectable(ServiceLifetime.Singleton)
export class UserService {
    private currentUser: User | null = null;

    setUser(user: User) {
        this.currentUser = user;
    }

    getUser(): User | null {
        return this.currentUser;
    }

    getUserById(userId: never): User | null {
        return userId > 0 ? this.currentUser : null;
    }
}
