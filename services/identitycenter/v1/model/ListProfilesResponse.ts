import { ApplicationProfileDto } from './ApplicationProfileDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListProfilesResponse extends SdkResponse {
    private 'application_profiles'?: Array<ApplicationProfileDto>;
    public constructor() { 
        super();
    }
    public withApplicationProfiles(applicationProfiles: Array<ApplicationProfileDto>): ListProfilesResponse {
        this['application_profiles'] = applicationProfiles;
        return this;
    }
    public set applicationProfiles(applicationProfiles: Array<ApplicationProfileDto>  | undefined) {
        this['application_profiles'] = applicationProfiles;
    }
    public get applicationProfiles(): Array<ApplicationProfileDto> | undefined {
        return this['application_profiles'];
    }
}