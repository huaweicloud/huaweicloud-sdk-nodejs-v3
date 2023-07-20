import { VodSampleData } from './VodSampleData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowVodStatisticsResponse extends SdkResponse {
    private 'start_time'?: string;
    public interval?: number;
    private 'sample_data'?: Array<VodSampleData>;
    public constructor() { 
        super();
    }
    public withStartTime(startTime: string): ShowVodStatisticsResponse {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withInterval(interval: number): ShowVodStatisticsResponse {
        this['interval'] = interval;
        return this;
    }
    public withSampleData(sampleData: Array<VodSampleData>): ShowVodStatisticsResponse {
        this['sample_data'] = sampleData;
        return this;
    }
    public set sampleData(sampleData: Array<VodSampleData>  | undefined) {
        this['sample_data'] = sampleData;
    }
    public get sampleData(): Array<VodSampleData> | undefined {
        return this['sample_data'];
    }
}