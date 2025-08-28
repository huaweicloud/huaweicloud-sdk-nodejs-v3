import { ConfigurationInfo } from './ConfigurationInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDdmConfigurationsResponse extends SdkResponse {
    public configurations?: Array<ConfigurationInfo>;
    public total?: number;
    public offset?: number;
    public limit?: number;
    public constructor() { 
        super();
    }
    public withConfigurations(configurations: Array<ConfigurationInfo>): ListDdmConfigurationsResponse {
        this['configurations'] = configurations;
        return this;
    }
    public withTotal(total: number): ListDdmConfigurationsResponse {
        this['total'] = total;
        return this;
    }
    public withOffset(offset: number): ListDdmConfigurationsResponse {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListDdmConfigurationsResponse {
        this['limit'] = limit;
        return this;
    }
}