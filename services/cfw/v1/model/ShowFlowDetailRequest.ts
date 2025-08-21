

export class ShowFlowDetailRequest {
    private 'project_id'?: string;
    private 'fw_instance_id'?: string;
    public range?: ShowFlowDetailRequestRangeEnum | number;
    private 'log_type'?: ShowFlowDetailRequestLogTypeEnum | string;
    public direction?: ShowFlowDetailRequestDirectionEnum | string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'vgw_id'?: Array<string>;
    private 'asset_type'?: ShowFlowDetailRequestAssetTypeEnum | string;
    public item?: ShowFlowDetailRequestItemEnum | string;
    public value?: string;
    public constructor(projectId?: string, fwInstanceId?: string, logType?: string, item?: string, value?: string) { 
        this['project_id'] = projectId;
        this['fw_instance_id'] = fwInstanceId;
        this['log_type'] = logType;
        this['item'] = item;
        this['value'] = value;
    }
    public withProjectId(projectId: string): ShowFlowDetailRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withFwInstanceId(fwInstanceId: string): ShowFlowDetailRequest {
        this['fw_instance_id'] = fwInstanceId;
        return this;
    }
    public set fwInstanceId(fwInstanceId: string  | undefined) {
        this['fw_instance_id'] = fwInstanceId;
    }
    public get fwInstanceId(): string | undefined {
        return this['fw_instance_id'];
    }
    public withRange(range: ShowFlowDetailRequestRangeEnum | number): ShowFlowDetailRequest {
        this['range'] = range;
        return this;
    }
    public withLogType(logType: ShowFlowDetailRequestLogTypeEnum | string): ShowFlowDetailRequest {
        this['log_type'] = logType;
        return this;
    }
    public set logType(logType: ShowFlowDetailRequestLogTypeEnum | string  | undefined) {
        this['log_type'] = logType;
    }
    public get logType(): ShowFlowDetailRequestLogTypeEnum | string | undefined {
        return this['log_type'];
    }
    public withDirection(direction: ShowFlowDetailRequestDirectionEnum | string): ShowFlowDetailRequest {
        this['direction'] = direction;
        return this;
    }
    public withStartTime(startTime: number): ShowFlowDetailRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ShowFlowDetailRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withVgwId(vgwId: Array<string>): ShowFlowDetailRequest {
        this['vgw_id'] = vgwId;
        return this;
    }
    public set vgwId(vgwId: Array<string>  | undefined) {
        this['vgw_id'] = vgwId;
    }
    public get vgwId(): Array<string> | undefined {
        return this['vgw_id'];
    }
    public withAssetType(assetType: ShowFlowDetailRequestAssetTypeEnum | string): ShowFlowDetailRequest {
        this['asset_type'] = assetType;
        return this;
    }
    public set assetType(assetType: ShowFlowDetailRequestAssetTypeEnum | string  | undefined) {
        this['asset_type'] = assetType;
    }
    public get assetType(): ShowFlowDetailRequestAssetTypeEnum | string | undefined {
        return this['asset_type'];
    }
    public withItem(item: ShowFlowDetailRequestItemEnum | string): ShowFlowDetailRequest {
        this['item'] = item;
        return this;
    }
    public withValue(value: string): ShowFlowDetailRequest {
        this['value'] = value;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowFlowDetailRequestRangeEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
/**
    * @export
    * @enum {string}
    */
export enum ShowFlowDetailRequestLogTypeEnum {
    INTERNET = 'internet',
    NAT = 'nat',
    VPC = 'vpc',
    VGW = 'vgw'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowFlowDetailRequestDirectionEnum {
    IN2OUT = 'in2out',
    OUT2IN = 'out2in'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowFlowDetailRequestAssetTypeEnum {
    PUBLIC = 'public',
    PRIVATE = 'private'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowFlowDetailRequestItemEnum {
    SRC_IP = 'src_ip',
    DST_IP = 'dst_ip',
    DST_PORT = 'dst_port',
    PROTOCOL = 'protocol',
    DST_HOST = 'dst_host',
    APP = 'app',
    DST_REGION_NAME = 'dst_region_name',
    SRC_REGION_NAME = 'src_region_name'
}
