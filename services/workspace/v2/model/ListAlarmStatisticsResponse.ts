
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAlarmStatisticsResponse extends SdkResponse {
    private 'critical_count'?: number;
    private 'major_count'?: number;
    private 'minor_count'?: number;
    private 'info_count'?: number;
    public total?: number;
    public constructor() { 
        super();
    }
    public withCriticalCount(criticalCount: number): ListAlarmStatisticsResponse {
        this['critical_count'] = criticalCount;
        return this;
    }
    public set criticalCount(criticalCount: number  | undefined) {
        this['critical_count'] = criticalCount;
    }
    public get criticalCount(): number | undefined {
        return this['critical_count'];
    }
    public withMajorCount(majorCount: number): ListAlarmStatisticsResponse {
        this['major_count'] = majorCount;
        return this;
    }
    public set majorCount(majorCount: number  | undefined) {
        this['major_count'] = majorCount;
    }
    public get majorCount(): number | undefined {
        return this['major_count'];
    }
    public withMinorCount(minorCount: number): ListAlarmStatisticsResponse {
        this['minor_count'] = minorCount;
        return this;
    }
    public set minorCount(minorCount: number  | undefined) {
        this['minor_count'] = minorCount;
    }
    public get minorCount(): number | undefined {
        return this['minor_count'];
    }
    public withInfoCount(infoCount: number): ListAlarmStatisticsResponse {
        this['info_count'] = infoCount;
        return this;
    }
    public set infoCount(infoCount: number  | undefined) {
        this['info_count'] = infoCount;
    }
    public get infoCount(): number | undefined {
        return this['info_count'];
    }
    public withTotal(total: number): ListAlarmStatisticsResponse {
        this['total'] = total;
        return this;
    }
}