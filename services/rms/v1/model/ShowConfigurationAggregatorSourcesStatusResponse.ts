import { AggregatedSourceStatus } from './AggregatedSourceStatus';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowConfigurationAggregatorSourcesStatusResponse extends SdkResponse {
    private 'aggregated_source_statuses'?: Array<AggregatedSourceStatus>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withAggregatedSourceStatuses(aggregatedSourceStatuses: Array<AggregatedSourceStatus>): ShowConfigurationAggregatorSourcesStatusResponse {
        this['aggregated_source_statuses'] = aggregatedSourceStatuses;
        return this;
    }
    public set aggregatedSourceStatuses(aggregatedSourceStatuses: Array<AggregatedSourceStatus>  | undefined) {
        this['aggregated_source_statuses'] = aggregatedSourceStatuses;
    }
    public get aggregatedSourceStatuses(): Array<AggregatedSourceStatus> | undefined {
        return this['aggregated_source_statuses'];
    }
    public withPageInfo(pageInfo: PageInfo): ShowConfigurationAggregatorSourcesStatusResponse {
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