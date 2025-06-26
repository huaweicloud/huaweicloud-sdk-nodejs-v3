import { StatisticsDetail } from './StatisticsDetail';
import { SumCountDetail } from './SumCountDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTopicMessageStatisticsResponse extends SdkResponse {
    private 'request_id'?: string;
    public total?: SumCountDetail;
    public statistics?: Array<StatisticsDetail>;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ListTopicMessageStatisticsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withTotal(total: SumCountDetail): ListTopicMessageStatisticsResponse {
        this['total'] = total;
        return this;
    }
    public withStatistics(statistics: Array<StatisticsDetail>): ListTopicMessageStatisticsResponse {
        this['statistics'] = statistics;
        return this;
    }
}