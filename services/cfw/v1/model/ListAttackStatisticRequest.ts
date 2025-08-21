

export class ListAttackStatisticRequest {
    private 'project_id'?: string;
    private 'fw_instance_id'?: string;
    public range?: ListAttackStatisticRequestRangeEnum | number;
    private 'log_type'?: ListAttackStatisticRequestLogTypeEnum | string;
    public direction?: ListAttackStatisticRequestDirectionEnum | string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'vgw_id'?: Array<string>;
    public item?: ListAttackStatisticRequestItemEnum | string;
    public size?: number;
    public constructor(projectId?: string, fwInstanceId?: string, logType?: string, item?: string) { 
        this['project_id'] = projectId;
        this['fw_instance_id'] = fwInstanceId;
        this['log_type'] = logType;
        this['item'] = item;
    }
    public withProjectId(projectId: string): ListAttackStatisticRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withFwInstanceId(fwInstanceId: string): ListAttackStatisticRequest {
        this['fw_instance_id'] = fwInstanceId;
        return this;
    }
    public set fwInstanceId(fwInstanceId: string  | undefined) {
        this['fw_instance_id'] = fwInstanceId;
    }
    public get fwInstanceId(): string | undefined {
        return this['fw_instance_id'];
    }
    public withRange(range: ListAttackStatisticRequestRangeEnum | number): ListAttackStatisticRequest {
        this['range'] = range;
        return this;
    }
    public withLogType(logType: ListAttackStatisticRequestLogTypeEnum | string): ListAttackStatisticRequest {
        this['log_type'] = logType;
        return this;
    }
    public set logType(logType: ListAttackStatisticRequestLogTypeEnum | string  | undefined) {
        this['log_type'] = logType;
    }
    public get logType(): ListAttackStatisticRequestLogTypeEnum | string | undefined {
        return this['log_type'];
    }
    public withDirection(direction: ListAttackStatisticRequestDirectionEnum | string): ListAttackStatisticRequest {
        this['direction'] = direction;
        return this;
    }
    public withStartTime(startTime: number): ListAttackStatisticRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ListAttackStatisticRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withVgwId(vgwId: Array<string>): ListAttackStatisticRequest {
        this['vgw_id'] = vgwId;
        return this;
    }
    public set vgwId(vgwId: Array<string>  | undefined) {
        this['vgw_id'] = vgwId;
    }
    public get vgwId(): Array<string> | undefined {
        return this['vgw_id'];
    }
    public withItem(item: ListAttackStatisticRequestItemEnum | string): ListAttackStatisticRequest {
        this['item'] = item;
        return this;
    }
    public withSize(size: number): ListAttackStatisticRequest {
        this['size'] = size;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListAttackStatisticRequestRangeEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
/**
    * @export
    * @enum {string}
    */
export enum ListAttackStatisticRequestLogTypeEnum {
    INTERNET = 'internet',
    NAT = 'nat',
    VPC = 'vpc',
    VGW = 'vgw'
}
/**
    * @export
    * @enum {string}
    */
export enum ListAttackStatisticRequestDirectionEnum {
    IN2OUT = 'in2out',
    OUT2IN = 'out2in'
}
/**
    * @export
    * @enum {string}
    */
export enum ListAttackStatisticRequestItemEnum {
    DST = 'dst',
    SRC = 'src'
}
