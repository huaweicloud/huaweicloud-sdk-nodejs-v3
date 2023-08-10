import { ShowTopicStatusRespBrokers } from './ShowTopicStatusRespBrokers';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTopicStatusResponse extends SdkResponse {
    private 'max_offset'?: number;
    private 'min_offset'?: number;
    public brokers?: Array<ShowTopicStatusRespBrokers>;
    public constructor() { 
        super();
    }
    public withMaxOffset(maxOffset: number): ShowTopicStatusResponse {
        this['max_offset'] = maxOffset;
        return this;
    }
    public set maxOffset(maxOffset: number  | undefined) {
        this['max_offset'] = maxOffset;
    }
    public get maxOffset(): number | undefined {
        return this['max_offset'];
    }
    public withMinOffset(minOffset: number): ShowTopicStatusResponse {
        this['min_offset'] = minOffset;
        return this;
    }
    public set minOffset(minOffset: number  | undefined) {
        this['min_offset'] = minOffset;
    }
    public get minOffset(): number | undefined {
        return this['min_offset'];
    }
    public withBrokers(brokers: Array<ShowTopicStatusRespBrokers>): ShowTopicStatusResponse {
        this['brokers'] = brokers;
        return this;
    }
}