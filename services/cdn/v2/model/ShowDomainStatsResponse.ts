
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDomainStatsResponse extends SdkResponse {
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'stat_type'?: string;
    public action?: string;
    public interval?: number;
    public result?: { [key: string]: object; };
    public constructor() { 
        super();
    }
    public withStartTime(startTime: number): ShowDomainStatsResponse {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ShowDomainStatsResponse {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withStatType(statType: string): ShowDomainStatsResponse {
        this['stat_type'] = statType;
        return this;
    }
    public set statType(statType: string  | undefined) {
        this['stat_type'] = statType;
    }
    public get statType(): string | undefined {
        return this['stat_type'];
    }
    public withAction(action: string): ShowDomainStatsResponse {
        this['action'] = action;
        return this;
    }
    public withInterval(interval: number): ShowDomainStatsResponse {
        this['interval'] = interval;
        return this;
    }
    public withResult(result: { [key: string]: object; }): ShowDomainStatsResponse {
        this['result'] = result;
        return this;
    }
}