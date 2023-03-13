import { Auth } from "./auth.interface";

export interface UserAdmin extends Auth {
    id?: number;
    name: string;
    lastname: string;
    phone?: string;
    roleId: number;
}