import { TopUrlSummary } from './TopUrlSummary';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTopUrlResponse extends SdkResponse {
    private 'service_area'?: string;
    private 'top_url_summary'?: Array<TopUrlSummary>;
    public constructor() { 
        super();
    }
    public withServiceArea(serviceArea: string): ShowTopUrlResponse {
        this['service_area'] = serviceArea;
        return this;
    }
    public set serviceArea(serviceArea: string  | undefined) {
        this['service_area'] = serviceArea;
    }
    public get serviceArea(): string | undefined {
        return this['service_area'];
    }
    public withTopUrlSummary(topUrlSummary: Array<TopUrlSummary>): ShowTopUrlResponse {
        this['top_url_summary'] = topUrlSummary;
        return this;
    }
    public set topUrlSummary(topUrlSummary: Array<TopUrlSummary>  | undefined) {
        this['top_url_summary'] = topUrlSummary;
    }
    public get topUrlSummary(): Array<TopUrlSummary> | undefined {
        return this['top_url_summary'];
    }
}