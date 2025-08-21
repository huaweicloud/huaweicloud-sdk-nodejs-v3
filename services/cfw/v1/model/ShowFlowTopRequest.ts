

export class ShowFlowTopRequest {
    private 'project_id'?: string;
    private 'fw_instance_id'?: string;
    public range?: ShowFlowTopRequestRangeEnum | number;
    private 'log_type'?: ShowFlowTopRequestLogTypeEnum | string;
    public direction?: ShowFlowTopRequestDirectionEnum | string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'vgw_id'?: Array<string>;
    private 'asset_type'?: ShowFlowTopRequestAssetTypeEnum | string;
    public item?: Array<string>;
    public order?: ShowFlowTopRequestOrderEnum | string;
    public size?: number;
    public constructor(projectId?: string, fwInstanceId?: string, logType?: string, item?: Array<string>, order?: string) { 
        this['project_id'] = projectId;
        this['fw_instance_id'] = fwInstanceId;
        this['log_type'] = logType;
        this['item'] = item;
        this['order'] = order;
    }
    public withProjectId(projectId: string): ShowFlowTopRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withFwInstanceId(fwInstanceId: string): ShowFlowTopRequest {
        this['fw_instance_id'] = fwInstanceId;
        return this;
    }
    public set fwInstanceId(fwInstanceId: string  | undefined) {
        this['fw_instance_id'] = fwInstanceId;
    }
    public get fwInstanceId(): string | undefined {
        return this['fw_instance_id'];
    }
    public withRange(range: ShowFlowTopRequestRangeEnum | number): ShowFlowTopRequest {
        this['range'] = range;
        return this;
    }
    public withLogType(logType: ShowFlowTopRequestLogTypeEnum | string): ShowFlowTopRequest {
        this['log_type'] = logType;
        return this;
    }
    public set logType(logType: ShowFlowTopRequestLogTypeEnum | string  | undefined) {
        this['log_type'] = logType;
    }
    public get logType(): ShowFlowTopRequestLogTypeEnum | string | undefined {
        return this['log_type'];
    }
    public withDirection(direction: ShowFlowTopRequestDirectionEnum | string): ShowFlowTopRequest {
        this['direction'] = direction;
        return this;
    }
    public withStartTime(startTime: number): ShowFlowTopRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ShowFlowTopRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withVgwId(vgwId: Array<string>): ShowFlowTopRequest {
        this['vgw_id'] = vgwId;
        return this;
    }
    public set vgwId(vgwId: Array<string>  | undefined) {
        this['vgw_id'] = vgwId;
    }
    public get vgwId(): Array<string> | undefined {
        return this['vgw_id'];
    }
    public withAssetType(assetType: ShowFlowTopRequestAssetTypeEnum | string): ShowFlowTopRequest {
        this['asset_type'] = assetType;
        return this;
    }
    public set assetType(assetType: ShowFlowTopRequestAssetTypeEnum | string  | undefined) {
        this['asset_type'] = assetType;
    }
    public get assetType(): ShowFlowTopRequestAssetTypeEnum | string | undefined {
        return this['asset_type'];
    }
    public withItem(item: Array<string>): ShowFlowTopRequest {
        this['item'] = item;
        return this;
    }
    public withOrder(order: ShowFlowTopRequestOrderEnum | string): ShowFlowTopRequest {
        this['order'] = order;
        return this;
    }
    public withSize(size: number): ShowFlowTopRequest {
        this['size'] = size;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowFlowTopRequestRangeEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
/**
    * @export
    * @enum {string}
    */
export enum ShowFlowTopRequestLogTypeEnum {
    INTERNET = 'internet',
    NAT = 'nat',
    VPC = 'vpc',
    VGW = 'vgw'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowFlowTopRequestDirectionEnum {
    IN2OUT = 'in2out',
    OUT2IN = 'out2in'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowFlowTopRequestAssetTypeEnum {
    PUBLIC = 'public',
    PRIVATE = 'private'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowFlowTopRequestOrderEnum {
    RECORD = 'record',
    BYTE = 'byte'
}
