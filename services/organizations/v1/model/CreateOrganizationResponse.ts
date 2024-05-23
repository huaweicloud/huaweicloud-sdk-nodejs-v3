import { OrganizationDto } from './OrganizationDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateOrganizationResponse extends SdkResponse {
    public organization?: OrganizationDto;
    public constructor() { 
        super();
    }
    public withOrganization(organization: OrganizationDto): CreateOrganizationResponse {
        this['organization'] = organization;
        return this;
    }
}