import { VodRetrievalData } from './VodRetrievalData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowVodRetrievalResponse extends SdkResponse {
    private 'start_time'?: string;
    public interval?: number;
    private 'sample_data'?: Array<VodRetrievalData>;
    public constructor() { 
        super();
    }
    public withStartTime(startTime: string): ShowVodRetrievalResponse {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withInterval(interval: number): ShowVodRetrievalResponse {
        this['interval'] = interval;
        return this;
    }
    public withSampleData(sampleData: Array<VodRetrievalData>): ShowVodRetrievalResponse {
        this['sample_data'] = sampleData;
        return this;
    }
    public set sampleData(sampleData: Array<VodRetrievalData>  | undefined) {
        this['sample_data'] = sampleData;
    }
    public get sampleData(): Array<VodRetrievalData> | undefined {
        return this['sample_data'];
    }
}