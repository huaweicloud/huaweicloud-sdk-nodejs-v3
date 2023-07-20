import { AgencyMapping } from './AgencyMapping';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAgencyMappingResponse extends SdkResponse {
    private 'agency_mappings'?: Array<AgencyMapping>;
    public constructor() { 
        super();
    }
    public withAgencyMappings(agencyMappings: Array<AgencyMapping>): ShowAgencyMappingResponse {
        this['agency_mappings'] = agencyMappings;
        return this;
    }
    public set agencyMappings(agencyMappings: Array<AgencyMapping>  | undefined) {
        this['agency_mappings'] = agencyMappings;
    }
    public get agencyMappings(): Array<AgencyMapping> | undefined {
        return this['agency_mappings'];
    }
}