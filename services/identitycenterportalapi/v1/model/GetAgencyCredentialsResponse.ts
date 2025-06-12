import { AgencyCredentials } from './AgencyCredentials';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class GetAgencyCredentialsResponse extends SdkResponse {
    private 'agency_credentials'?: AgencyCredentials;
    public constructor() { 
        super();
    }
    public withAgencyCredentials(agencyCredentials: AgencyCredentials): GetAgencyCredentialsResponse {
        this['agency_credentials'] = agencyCredentials;
        return this;
    }
    public set agencyCredentials(agencyCredentials: AgencyCredentials  | undefined) {
        this['agency_credentials'] = agencyCredentials;
    }
    public get agencyCredentials(): AgencyCredentials | undefined {
        return this['agency_credentials'];
    }
}