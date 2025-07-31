

export class ShowAttackTrendRequest {
    private 'project_id'?: string;
    private 'fw_instance_id'?: string;
    public range?: ShowAttackTrendRequestRangeEnum | number;
    private 'log_type'?: ShowAttackTrendRequestLogTypeEnum | string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'vgw_id'?: Array<string>;
    public constructor(projectId?: string, fwInstanceId?: string, logType?: string) { 
        this['project_id'] = projectId;
        this['fw_instance_id'] = fwInstanceId;
        this['log_type'] = logType;
    }
    public withProjectId(projectId: string): ShowAttackTrendRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withFwInstanceId(fwInstanceId: string): ShowAttackTrendRequest {
        this['fw_instance_id'] = fwInstanceId;
        return this;
    }
    public set fwInstanceId(fwInstanceId: string  | undefined) {
        this['fw_instance_id'] = fwInstanceId;
    }
    public get fwInstanceId(): string | undefined {
        return this['fw_instance_id'];
    }
    public withRange(range: ShowAttackTrendRequestRangeEnum | number): ShowAttackTrendRequest {
        this['range'] = range;
        return this;
    }
    public withLogType(logType: ShowAttackTrendRequestLogTypeEnum | string): ShowAttackTrendRequest {
        this['log_type'] = logType;
        return this;
    }
    public set logType(logType: ShowAttackTrendRequestLogTypeEnum | string  | undefined) {
        this['log_type'] = logType;
    }
    public get logType(): ShowAttackTrendRequestLogTypeEnum | string | undefined {
        return this['log_type'];
    }
    public withStartTime(startTime: number): ShowAttackTrendRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ShowAttackTrendRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withVgwId(vgwId: Array<string>): ShowAttackTrendRequest {
        this['vgw_id'] = vgwId;
        return this;
    }
    public set vgwId(vgwId: Array<string>  | undefined) {
        this['vgw_id'] = vgwId;
    }
    public get vgwId(): Array<string> | undefined {
        return this['vgw_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowAttackTrendRequestRangeEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
/**
    * @export
    * @enum {string}
    */
export enum ShowAttackTrendRequestLogTypeEnum {
    INTERNET = 'internet',
    NAT = 'nat',
    VPC = 'vpc',
    VGW = 'vgw'
}
