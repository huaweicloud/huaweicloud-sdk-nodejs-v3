import { UpmOptions } from './UpmOptions';


export class PoliciesUserProfile {
    private 'user_profile_enable'?: boolean;
    public options?: UpmOptions;
    public constructor() { 
    }
    public withUserProfileEnable(userProfileEnable: boolean): PoliciesUserProfile {
        this['user_profile_enable'] = userProfileEnable;
        return this;
    }
    public set userProfileEnable(userProfileEnable: boolean  | undefined) {
        this['user_profile_enable'] = userProfileEnable;
    }
    public get userProfileEnable(): boolean | undefined {
        return this['user_profile_enable'];
    }
    public withOptions(options: UpmOptions): PoliciesUserProfile {
        this['options'] = options;
        return this;
    }
}