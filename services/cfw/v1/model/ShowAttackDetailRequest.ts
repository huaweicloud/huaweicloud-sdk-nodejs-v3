

export class ShowAttackDetailRequest {
    private 'project_id'?: string;
    private 'fw_instance_id'?: string;
    public range?: ShowAttackDetailRequestRangeEnum | number;
    private 'log_type'?: ShowAttackDetailRequestLogTypeEnum | string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'vgw_id'?: Array<string>;
    public action?: ShowAttackDetailRequestActionEnum | number;
    public item?: ShowAttackDetailRequestItemEnum | string;
    public value?: string;
    public constructor(projectId?: string, fwInstanceId?: string, logType?: string, action?: number, item?: string, value?: string) { 
        this['project_id'] = projectId;
        this['fw_instance_id'] = fwInstanceId;
        this['log_type'] = logType;
        this['action'] = action;
        this['item'] = item;
        this['value'] = value;
    }
    public withProjectId(projectId: string): ShowAttackDetailRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withFwInstanceId(fwInstanceId: string): ShowAttackDetailRequest {
        this['fw_instance_id'] = fwInstanceId;
        return this;
    }
    public set fwInstanceId(fwInstanceId: string  | undefined) {
        this['fw_instance_id'] = fwInstanceId;
    }
    public get fwInstanceId(): string | undefined {
        return this['fw_instance_id'];
    }
    public withRange(range: ShowAttackDetailRequestRangeEnum | number): ShowAttackDetailRequest {
        this['range'] = range;
        return this;
    }
    public withLogType(logType: ShowAttackDetailRequestLogTypeEnum | string): ShowAttackDetailRequest {
        this['log_type'] = logType;
        return this;
    }
    public set logType(logType: ShowAttackDetailRequestLogTypeEnum | string  | undefined) {
        this['log_type'] = logType;
    }
    public get logType(): ShowAttackDetailRequestLogTypeEnum | string | undefined {
        return this['log_type'];
    }
    public withStartTime(startTime: number): ShowAttackDetailRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ShowAttackDetailRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withVgwId(vgwId: Array<string>): ShowAttackDetailRequest {
        this['vgw_id'] = vgwId;
        return this;
    }
    public set vgwId(vgwId: Array<string>  | undefined) {
        this['vgw_id'] = vgwId;
    }
    public get vgwId(): Array<string> | undefined {
        return this['vgw_id'];
    }
    public withAction(action: ShowAttackDetailRequestActionEnum | number): ShowAttackDetailRequest {
        this['action'] = action;
        return this;
    }
    public withItem(item: ShowAttackDetailRequestItemEnum | string): ShowAttackDetailRequest {
        this['item'] = item;
        return this;
    }
    public withValue(value: string): ShowAttackDetailRequest {
        this['value'] = value;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowAttackDetailRequestRangeEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
/**
    * @export
    * @enum {string}
    */
export enum ShowAttackDetailRequestLogTypeEnum {
    INTERNET = 'internet',
    NAT = 'nat',
    VPC = 'vpc',
    VGW = 'vgw'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowAttackDetailRequestActionEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
/**
    * @export
    * @enum {string}
    */
export enum ShowAttackDetailRequestItemEnum {
    SRC_REGION_ID = 'src_region_id',
    ATTACK_TYPE = 'attack_type',
    IN_SRC_IP = 'in_src_ip',
    OUT_SRC_IP = 'out_src_ip',
    DST_PORT = 'dst_port',
    DST_IP = 'dst_ip',
    ATTACK_RULE = 'attack_rule',
    SRC_IP = 'src_ip'
}
