
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowEventSeverityResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'low_num'?: number;
    private 'medium_num'?: number;
    private 'high_num'?: number;
    private 'critical_num'?: number;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ShowEventSeverityResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withLowNum(lowNum: number): ShowEventSeverityResponse {
        this['low_num'] = lowNum;
        return this;
    }
    public set lowNum(lowNum: number  | undefined) {
        this['low_num'] = lowNum;
    }
    public get lowNum(): number | undefined {
        return this['low_num'];
    }
    public withMediumNum(mediumNum: number): ShowEventSeverityResponse {
        this['medium_num'] = mediumNum;
        return this;
    }
    public set mediumNum(mediumNum: number  | undefined) {
        this['medium_num'] = mediumNum;
    }
    public get mediumNum(): number | undefined {
        return this['medium_num'];
    }
    public withHighNum(highNum: number): ShowEventSeverityResponse {
        this['high_num'] = highNum;
        return this;
    }
    public set highNum(highNum: number  | undefined) {
        this['high_num'] = highNum;
    }
    public get highNum(): number | undefined {
        return this['high_num'];
    }
    public withCriticalNum(criticalNum: number): ShowEventSeverityResponse {
        this['critical_num'] = criticalNum;
        return this;
    }
    public set criticalNum(criticalNum: number  | undefined) {
        this['critical_num'] = criticalNum;
    }
    public get criticalNum(): number | undefined {
        return this['critical_num'];
    }
}