

export class ShowAiOverviewStatisticsRequest {
    private 'enterprise_project_id'?: string;
    public type?: ShowAiOverviewStatisticsRequestTypeEnum | string;
    private 'begin_time'?: number;
    private 'end_time'?: number;
    public constructor(beginTime?: number, endTime?: number) { 
        this['begin_time'] = beginTime;
        this['end_time'] = endTime;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowAiOverviewStatisticsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withType(type: ShowAiOverviewStatisticsRequestTypeEnum | string): ShowAiOverviewStatisticsRequest {
        this['type'] = type;
        return this;
    }
    public withBeginTime(beginTime: number): ShowAiOverviewStatisticsRequest {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: number  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): number | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: number): ShowAiOverviewStatisticsRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowAiOverviewStatisticsRequestTypeEnum {
    ALARM = 'alarm',
    RISK = 'risk',
    SOURCE = 'source'
}
