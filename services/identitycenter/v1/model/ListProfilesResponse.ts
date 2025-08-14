import { ApplicationProfileDto } from './ApplicationProfileDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListProfilesResponse extends SdkResponse {
    public applicationProfiles?: Array<ApplicationProfileDto>;
    public constructor() { 
        super();
    }
    public withApplicationProfiles(applicationProfiles: Array<ApplicationProfileDto>): ListProfilesResponse {
        this['applicationProfiles'] = applicationProfiles;
        return this;
    }
}