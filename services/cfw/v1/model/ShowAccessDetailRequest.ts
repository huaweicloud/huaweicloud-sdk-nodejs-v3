

export class ShowAccessDetailRequest {
    private 'project_id'?: string;
    private 'fw_instance_id'?: string;
    public range?: ShowAccessDetailRequestRangeEnum | number;
    public direction?: ShowAccessDetailRequestDirectionEnum | string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'vgw_id'?: Array<string>;
    private 'log_type'?: ShowAccessDetailRequestLogTypeEnum | string;
    public item?: ShowAccessDetailRequestItemEnum | string;
    private 'item_id'?: string;
    public constructor(projectId?: string, fwInstanceId?: string, item?: string, itemId?: string) { 
        this['project_id'] = projectId;
        this['fw_instance_id'] = fwInstanceId;
        this['item'] = item;
        this['item_id'] = itemId;
    }
    public withProjectId(projectId: string): ShowAccessDetailRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withFwInstanceId(fwInstanceId: string): ShowAccessDetailRequest {
        this['fw_instance_id'] = fwInstanceId;
        return this;
    }
    public set fwInstanceId(fwInstanceId: string  | undefined) {
        this['fw_instance_id'] = fwInstanceId;
    }
    public get fwInstanceId(): string | undefined {
        return this['fw_instance_id'];
    }
    public withRange(range: ShowAccessDetailRequestRangeEnum | number): ShowAccessDetailRequest {
        this['range'] = range;
        return this;
    }
    public withDirection(direction: ShowAccessDetailRequestDirectionEnum | string): ShowAccessDetailRequest {
        this['direction'] = direction;
        return this;
    }
    public withStartTime(startTime: number): ShowAccessDetailRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ShowAccessDetailRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withVgwId(vgwId: Array<string>): ShowAccessDetailRequest {
        this['vgw_id'] = vgwId;
        return this;
    }
    public set vgwId(vgwId: Array<string>  | undefined) {
        this['vgw_id'] = vgwId;
    }
    public get vgwId(): Array<string> | undefined {
        return this['vgw_id'];
    }
    public withLogType(logType: ShowAccessDetailRequestLogTypeEnum | string): ShowAccessDetailRequest {
        this['log_type'] = logType;
        return this;
    }
    public set logType(logType: ShowAccessDetailRequestLogTypeEnum | string  | undefined) {
        this['log_type'] = logType;
    }
    public get logType(): ShowAccessDetailRequestLogTypeEnum | string | undefined {
        return this['log_type'];
    }
    public withItem(item: ShowAccessDetailRequestItemEnum | string): ShowAccessDetailRequest {
        this['item'] = item;
        return this;
    }
    public withItemId(itemId: string): ShowAccessDetailRequest {
        this['item_id'] = itemId;
        return this;
    }
    public set itemId(itemId: string  | undefined) {
        this['item_id'] = itemId;
    }
    public get itemId(): string | undefined {
        return this['item_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowAccessDetailRequestRangeEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
/**
    * @export
    * @enum {string}
    */
export enum ShowAccessDetailRequestDirectionEnum {
    IN2OUT = 'in2out',
    OUT2IN = 'out2in'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowAccessDetailRequestLogTypeEnum {
    INTERNET = 'internet',
    NAT = 'nat',
    VPC = 'vpc',
    VGW = 'vgw'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowAccessDetailRequestItemEnum {
    TOP_DENY_RULE = 'top_deny_rule',
    SRC_IP = 'src_ip',
    DST_IP = 'dst_ip',
    SRC_REGION = 'src_region',
    DST_REGION = 'dst_region',
    DST_PORT = 'dst_port'
}
