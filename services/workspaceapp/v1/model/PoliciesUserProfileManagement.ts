import { UserProfileManagementOptions } from './UserProfileManagementOptions';


export class PoliciesUserProfileManagement {
    private 'upm_status'?: number;
    public options?: UserProfileManagementOptions;
    public constructor() { 
    }
    public withUpmStatus(upmStatus: number): PoliciesUserProfileManagement {
        this['upm_status'] = upmStatus;
        return this;
    }
    public set upmStatus(upmStatus: number  | undefined) {
        this['upm_status'] = upmStatus;
    }
    public get upmStatus(): number | undefined {
        return this['upm_status'];
    }
    public withOptions(options: UserProfileManagementOptions): PoliciesUserProfileManagement {
        this['options'] = options;
        return this;
    }
}