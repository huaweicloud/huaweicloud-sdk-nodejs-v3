

export class ShowAttackTopRequest {
    private 'project_id'?: string;
    private 'fw_instance_id'?: string;
    public range?: ShowAttackTopRequestRangeEnum | number;
    private 'log_type'?: ShowAttackTopRequestLogTypeEnum | string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'vgw_id'?: Array<string>;
    public action?: ShowAttackTopRequestActionEnum | number;
    public item?: Array<string>;
    public size?: number;
    public constructor(projectId?: string, fwInstanceId?: string, logType?: string, action?: number, item?: Array<string>) { 
        this['project_id'] = projectId;
        this['fw_instance_id'] = fwInstanceId;
        this['log_type'] = logType;
        this['action'] = action;
        this['item'] = item;
    }
    public withProjectId(projectId: string): ShowAttackTopRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withFwInstanceId(fwInstanceId: string): ShowAttackTopRequest {
        this['fw_instance_id'] = fwInstanceId;
        return this;
    }
    public set fwInstanceId(fwInstanceId: string  | undefined) {
        this['fw_instance_id'] = fwInstanceId;
    }
    public get fwInstanceId(): string | undefined {
        return this['fw_instance_id'];
    }
    public withRange(range: ShowAttackTopRequestRangeEnum | number): ShowAttackTopRequest {
        this['range'] = range;
        return this;
    }
    public withLogType(logType: ShowAttackTopRequestLogTypeEnum | string): ShowAttackTopRequest {
        this['log_type'] = logType;
        return this;
    }
    public set logType(logType: ShowAttackTopRequestLogTypeEnum | string  | undefined) {
        this['log_type'] = logType;
    }
    public get logType(): ShowAttackTopRequestLogTypeEnum | string | undefined {
        return this['log_type'];
    }
    public withStartTime(startTime: number): ShowAttackTopRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ShowAttackTopRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withVgwId(vgwId: Array<string>): ShowAttackTopRequest {
        this['vgw_id'] = vgwId;
        return this;
    }
    public set vgwId(vgwId: Array<string>  | undefined) {
        this['vgw_id'] = vgwId;
    }
    public get vgwId(): Array<string> | undefined {
        return this['vgw_id'];
    }
    public withAction(action: ShowAttackTopRequestActionEnum | number): ShowAttackTopRequest {
        this['action'] = action;
        return this;
    }
    public withItem(item: Array<string>): ShowAttackTopRequest {
        this['item'] = item;
        return this;
    }
    public withSize(size: number): ShowAttackTopRequest {
        this['size'] = size;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowAttackTopRequestRangeEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
/**
    * @export
    * @enum {string}
    */
export enum ShowAttackTopRequestLogTypeEnum {
    INTERNET = 'internet',
    NAT = 'nat',
    VPC = 'vpc',
    VGW = 'vgw'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowAttackTopRequestActionEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
