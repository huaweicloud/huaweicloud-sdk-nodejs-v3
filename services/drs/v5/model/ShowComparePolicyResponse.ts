
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowComparePolicyResponse extends SdkResponse {
    public period?: string;
    public status?: ShowComparePolicyResponseStatusEnum | string;
    private 'begin_time'?: string;
    private 'end_time'?: string;
    private 'compare_type'?: Array<string>;
    private 'next_compare_time'?: string;
    private 'compare_policy'?: string;
    private 'interval_hour'?: number;
    public constructor() { 
        super();
    }
    public withPeriod(period: string): ShowComparePolicyResponse {
        this['period'] = period;
        return this;
    }
    public withStatus(status: ShowComparePolicyResponseStatusEnum | string): ShowComparePolicyResponse {
        this['status'] = status;
        return this;
    }
    public withBeginTime(beginTime: string): ShowComparePolicyResponse {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): ShowComparePolicyResponse {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withCompareType(compareType: Array<string>): ShowComparePolicyResponse {
        this['compare_type'] = compareType;
        return this;
    }
    public set compareType(compareType: Array<string>  | undefined) {
        this['compare_type'] = compareType;
    }
    public get compareType(): Array<string> | undefined {
        return this['compare_type'];
    }
    public withNextCompareTime(nextCompareTime: string): ShowComparePolicyResponse {
        this['next_compare_time'] = nextCompareTime;
        return this;
    }
    public set nextCompareTime(nextCompareTime: string  | undefined) {
        this['next_compare_time'] = nextCompareTime;
    }
    public get nextCompareTime(): string | undefined {
        return this['next_compare_time'];
    }
    public withComparePolicy(comparePolicy: string): ShowComparePolicyResponse {
        this['compare_policy'] = comparePolicy;
        return this;
    }
    public set comparePolicy(comparePolicy: string  | undefined) {
        this['compare_policy'] = comparePolicy;
    }
    public get comparePolicy(): string | undefined {
        return this['compare_policy'];
    }
    public withIntervalHour(intervalHour: number): ShowComparePolicyResponse {
        this['interval_hour'] = intervalHour;
        return this;
    }
    public set intervalHour(intervalHour: number  | undefined) {
        this['interval_hour'] = intervalHour;
    }
    public get intervalHour(): number | undefined {
        return this['interval_hour'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowComparePolicyResponseStatusEnum {
    OPEN = 'OPEN',
    CLOSED = 'CLOSED',
    NO_SUPPORT = 'NO_SUPPORT'
}
