import { UserProfileManagementProfiles } from './UserProfileManagementProfiles';


export class UserProfileManagementOptions {
    public profiles?: UserProfileManagementProfiles;
    public constructor() { 
    }
    public withProfiles(profiles: UserProfileManagementProfiles): UserProfileManagementOptions {
        this['profiles'] = profiles;
        return this;
    }
}