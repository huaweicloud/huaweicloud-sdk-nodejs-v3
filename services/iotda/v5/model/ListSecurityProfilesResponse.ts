import { Page } from './Page';
import { SecurityProfileDTO } from './SecurityProfileDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSecurityProfilesResponse extends SdkResponse {
    private 'security_profiles'?: Array<SecurityProfileDTO>;
    public page?: Page;
    public constructor() { 
        super();
    }
    public withSecurityProfiles(securityProfiles: Array<SecurityProfileDTO>): ListSecurityProfilesResponse {
        this['security_profiles'] = securityProfiles;
        return this;
    }
    public set securityProfiles(securityProfiles: Array<SecurityProfileDTO>  | undefined) {
        this['security_profiles'] = securityProfiles;
    }
    public get securityProfiles(): Array<SecurityProfileDTO> | undefined {
        return this['security_profiles'];
    }
    public withPage(page: Page): ListSecurityProfilesResponse {
        this['page'] = page;
        return this;
    }
}