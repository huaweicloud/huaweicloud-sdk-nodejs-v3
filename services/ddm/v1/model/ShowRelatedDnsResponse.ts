import { RelatedDnVO } from './RelatedDnVO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRelatedDnsResponse extends SdkResponse {
    private 'related_data_nodes'?: Array<RelatedDnVO>;
    private 'latest_restorable_time'?: string;
    public constructor() { 
        super();
    }
    public withRelatedDataNodes(relatedDataNodes: Array<RelatedDnVO>): ShowRelatedDnsResponse {
        this['related_data_nodes'] = relatedDataNodes;
        return this;
    }
    public set relatedDataNodes(relatedDataNodes: Array<RelatedDnVO>  | undefined) {
        this['related_data_nodes'] = relatedDataNodes;
    }
    public get relatedDataNodes(): Array<RelatedDnVO> | undefined {
        return this['related_data_nodes'];
    }
    public withLatestRestorableTime(latestRestorableTime: string): ShowRelatedDnsResponse {
        this['latest_restorable_time'] = latestRestorableTime;
        return this;
    }
    public set latestRestorableTime(latestRestorableTime: string  | undefined) {
        this['latest_restorable_time'] = latestRestorableTime;
    }
    public get latestRestorableTime(): string | undefined {
        return this['latest_restorable_time'];
    }
}