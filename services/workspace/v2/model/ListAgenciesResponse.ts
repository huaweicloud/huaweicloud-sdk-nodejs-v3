import { AgenciesInfo } from './AgenciesInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAgenciesResponse extends SdkResponse {
    private 'existing_agencies'?: Array<AgenciesInfo>;
    public constructor() { 
        super();
    }
    public withExistingAgencies(existingAgencies: Array<AgenciesInfo>): ListAgenciesResponse {
        this['existing_agencies'] = existingAgencies;
        return this;
    }
    public set existingAgencies(existingAgencies: Array<AgenciesInfo>  | undefined) {
        this['existing_agencies'] = existingAgencies;
    }
    public get existingAgencies(): Array<AgenciesInfo> | undefined {
        return this['existing_agencies'];
    }
}