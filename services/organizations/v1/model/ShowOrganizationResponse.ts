import { OrganizationDto } from './OrganizationDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowOrganizationResponse extends SdkResponse {
    public organization?: OrganizationDto;
    public constructor() { 
        super();
    }
    public withOrganization(organization: OrganizationDto): ShowOrganizationResponse {
        this['organization'] = organization;
        return this;
    }
}