import { ConfigurationAggregatorResp } from './ConfigurationAggregatorResp';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListConfigurationAggregatorsResponse extends SdkResponse {
    private 'configuration_aggregators'?: Array<ConfigurationAggregatorResp>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withConfigurationAggregators(configurationAggregators: Array<ConfigurationAggregatorResp>): ListConfigurationAggregatorsResponse {
        this['configuration_aggregators'] = configurationAggregators;
        return this;
    }
    public set configurationAggregators(configurationAggregators: Array<ConfigurationAggregatorResp>  | undefined) {
        this['configuration_aggregators'] = configurationAggregators;
    }
    public get configurationAggregators(): Array<ConfigurationAggregatorResp> | undefined {
        return this['configuration_aggregators'];
    }
    public withPageInfo(pageInfo: PageInfo): ListConfigurationAggregatorsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
}