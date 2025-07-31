

export class ShowAccessTopRequest {
    private 'project_id'?: string;
    private 'fw_instance_id'?: string;
    public direction?: ShowAccessTopRequestDirectionEnum | string;
    public range?: ShowAccessTopRequestRangeEnum | number;
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'vgw_id'?: Array<string>;
    private 'log_type'?: ShowAccessTopRequestLogTypeEnum | string;
    public item?: ShowAccessTopRequestItemEnum | string;
    private 'rule_id'?: Array<string>;
    public constructor(projectId?: string, fwInstanceId?: string, item?: string) { 
        this['project_id'] = projectId;
        this['fw_instance_id'] = fwInstanceId;
        this['item'] = item;
    }
    public withProjectId(projectId: string): ShowAccessTopRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withFwInstanceId(fwInstanceId: string): ShowAccessTopRequest {
        this['fw_instance_id'] = fwInstanceId;
        return this;
    }
    public set fwInstanceId(fwInstanceId: string  | undefined) {
        this['fw_instance_id'] = fwInstanceId;
    }
    public get fwInstanceId(): string | undefined {
        return this['fw_instance_id'];
    }
    public withDirection(direction: ShowAccessTopRequestDirectionEnum | string): ShowAccessTopRequest {
        this['direction'] = direction;
        return this;
    }
    public withRange(range: ShowAccessTopRequestRangeEnum | number): ShowAccessTopRequest {
        this['range'] = range;
        return this;
    }
    public withStartTime(startTime: number): ShowAccessTopRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ShowAccessTopRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withVgwId(vgwId: Array<string>): ShowAccessTopRequest {
        this['vgw_id'] = vgwId;
        return this;
    }
    public set vgwId(vgwId: Array<string>  | undefined) {
        this['vgw_id'] = vgwId;
    }
    public get vgwId(): Array<string> | undefined {
        return this['vgw_id'];
    }
    public withLogType(logType: ShowAccessTopRequestLogTypeEnum | string): ShowAccessTopRequest {
        this['log_type'] = logType;
        return this;
    }
    public set logType(logType: ShowAccessTopRequestLogTypeEnum | string  | undefined) {
        this['log_type'] = logType;
    }
    public get logType(): ShowAccessTopRequestLogTypeEnum | string | undefined {
        return this['log_type'];
    }
    public withItem(item: ShowAccessTopRequestItemEnum | string): ShowAccessTopRequest {
        this['item'] = item;
        return this;
    }
    public withRuleId(ruleId: Array<string>): ShowAccessTopRequest {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: Array<string>  | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId(): Array<string> | undefined {
        return this['rule_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowAccessTopRequestDirectionEnum {
    IN2OUT = 'in2out',
    OUT2IN = 'out2in'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowAccessTopRequestRangeEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
/**
    * @export
    * @enum {string}
    */
export enum ShowAccessTopRequestLogTypeEnum {
    INTERNET = 'internet',
    NAT = 'nat',
    VPC = 'vpc',
    VGW = 'vgw'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowAccessTopRequestItemEnum {
    STRATEGY_DASHBOARD = 'strategy_dashboard',
    STRATEGY_HIT_INFO = 'strategy_hit_info',
    TOP_DENY_RULE = 'top_deny_rule',
    SRC_IP = 'src_ip',
    DST_IP = 'dst_ip',
    SRC_REGION = 'src_region',
    DST_REGION = 'dst_region',
    DST_PORT = 'dst_port'
}
