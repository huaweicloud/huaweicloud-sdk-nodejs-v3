import { Agency } from './Agency';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateServiceLinkedAgencyV5Response extends SdkResponse {
    public agency?: Agency;
    public constructor() { 
        super();
    }
    public withAgency(agency: Agency): CreateServiceLinkedAgencyV5Response {
        this['agency'] = agency;
        return this;
    }
}