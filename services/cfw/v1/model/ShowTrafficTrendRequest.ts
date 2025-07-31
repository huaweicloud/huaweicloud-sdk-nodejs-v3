

export class ShowTrafficTrendRequest {
    private 'project_id'?: string;
    private 'fw_instance_id'?: string;
    public range?: ShowTrafficTrendRequestRangeEnum | number;
    private 'log_type'?: ShowTrafficTrendRequestLogTypeEnum | string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'vgw_id'?: Array<string>;
    private 'agg_type'?: ShowTrafficTrendRequestAggTypeEnum | string;
    public ip?: Array<string>;
    public constructor(projectId?: string, fwInstanceId?: string, logType?: string, aggType?: string) { 
        this['project_id'] = projectId;
        this['fw_instance_id'] = fwInstanceId;
        this['log_type'] = logType;
        this['agg_type'] = aggType;
    }
    public withProjectId(projectId: string): ShowTrafficTrendRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withFwInstanceId(fwInstanceId: string): ShowTrafficTrendRequest {
        this['fw_instance_id'] = fwInstanceId;
        return this;
    }
    public set fwInstanceId(fwInstanceId: string  | undefined) {
        this['fw_instance_id'] = fwInstanceId;
    }
    public get fwInstanceId(): string | undefined {
        return this['fw_instance_id'];
    }
    public withRange(range: ShowTrafficTrendRequestRangeEnum | number): ShowTrafficTrendRequest {
        this['range'] = range;
        return this;
    }
    public withLogType(logType: ShowTrafficTrendRequestLogTypeEnum | string): ShowTrafficTrendRequest {
        this['log_type'] = logType;
        return this;
    }
    public set logType(logType: ShowTrafficTrendRequestLogTypeEnum | string  | undefined) {
        this['log_type'] = logType;
    }
    public get logType(): ShowTrafficTrendRequestLogTypeEnum | string | undefined {
        return this['log_type'];
    }
    public withStartTime(startTime: number): ShowTrafficTrendRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ShowTrafficTrendRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withVgwId(vgwId: Array<string>): ShowTrafficTrendRequest {
        this['vgw_id'] = vgwId;
        return this;
    }
    public set vgwId(vgwId: Array<string>  | undefined) {
        this['vgw_id'] = vgwId;
    }
    public get vgwId(): Array<string> | undefined {
        return this['vgw_id'];
    }
    public withAggType(aggType: ShowTrafficTrendRequestAggTypeEnum | string): ShowTrafficTrendRequest {
        this['agg_type'] = aggType;
        return this;
    }
    public set aggType(aggType: ShowTrafficTrendRequestAggTypeEnum | string  | undefined) {
        this['agg_type'] = aggType;
    }
    public get aggType(): ShowTrafficTrendRequestAggTypeEnum | string | undefined {
        return this['agg_type'];
    }
    public withIp(ip: Array<string>): ShowTrafficTrendRequest {
        this['ip'] = ip;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowTrafficTrendRequestRangeEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
/**
    * @export
    * @enum {string}
    */
export enum ShowTrafficTrendRequestLogTypeEnum {
    INTERNET = 'internet',
    NAT = 'nat',
    VPC = 'vpc',
    VGW = 'vgw'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowTrafficTrendRequestAggTypeEnum {
    AVG = 'avg',
    MAX = 'max'
}
