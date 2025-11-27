
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDomainCountryStatResponse extends SdkResponse {
    public action?: string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'stat_type'?: string;
    public constructor() { 
        super();
    }
    public withAction(action: string): ShowDomainCountryStatResponse {
        this['action'] = action;
        return this;
    }
    public withStartTime(startTime: number): ShowDomainCountryStatResponse {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ShowDomainCountryStatResponse {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withStatType(statType: string): ShowDomainCountryStatResponse {
        this['stat_type'] = statType;
        return this;
    }
    public set statType(statType: string  | undefined) {
        this['stat_type'] = statType;
    }
    public get statType(): string | undefined {
        return this['stat_type'];
    }
}