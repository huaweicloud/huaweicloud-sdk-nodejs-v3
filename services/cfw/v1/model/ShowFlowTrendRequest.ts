

export class ShowFlowTrendRequest {
    private 'project_id'?: string;
    private 'fw_instance_id'?: string;
    public range?: ShowFlowTrendRequestRangeEnum | number;
    private 'log_type'?: ShowFlowTrendRequestLogTypeEnum | string;
    public direction?: ShowFlowTrendRequestDirectionEnum | string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'vgw_id'?: Array<string>;
    private 'asset_type'?: ShowFlowTrendRequestAssetTypeEnum | string;
    public ip?: Array<string>;
    public vpc?: Array<string>;
    public constructor(projectId?: string, fwInstanceId?: string, logType?: string) { 
        this['project_id'] = projectId;
        this['fw_instance_id'] = fwInstanceId;
        this['log_type'] = logType;
    }
    public withProjectId(projectId: string): ShowFlowTrendRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withFwInstanceId(fwInstanceId: string): ShowFlowTrendRequest {
        this['fw_instance_id'] = fwInstanceId;
        return this;
    }
    public set fwInstanceId(fwInstanceId: string  | undefined) {
        this['fw_instance_id'] = fwInstanceId;
    }
    public get fwInstanceId(): string | undefined {
        return this['fw_instance_id'];
    }
    public withRange(range: ShowFlowTrendRequestRangeEnum | number): ShowFlowTrendRequest {
        this['range'] = range;
        return this;
    }
    public withLogType(logType: ShowFlowTrendRequestLogTypeEnum | string): ShowFlowTrendRequest {
        this['log_type'] = logType;
        return this;
    }
    public set logType(logType: ShowFlowTrendRequestLogTypeEnum | string  | undefined) {
        this['log_type'] = logType;
    }
    public get logType(): ShowFlowTrendRequestLogTypeEnum | string | undefined {
        return this['log_type'];
    }
    public withDirection(direction: ShowFlowTrendRequestDirectionEnum | string): ShowFlowTrendRequest {
        this['direction'] = direction;
        return this;
    }
    public withStartTime(startTime: number): ShowFlowTrendRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ShowFlowTrendRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withVgwId(vgwId: Array<string>): ShowFlowTrendRequest {
        this['vgw_id'] = vgwId;
        return this;
    }
    public set vgwId(vgwId: Array<string>  | undefined) {
        this['vgw_id'] = vgwId;
    }
    public get vgwId(): Array<string> | undefined {
        return this['vgw_id'];
    }
    public withAssetType(assetType: ShowFlowTrendRequestAssetTypeEnum | string): ShowFlowTrendRequest {
        this['asset_type'] = assetType;
        return this;
    }
    public set assetType(assetType: ShowFlowTrendRequestAssetTypeEnum | string  | undefined) {
        this['asset_type'] = assetType;
    }
    public get assetType(): ShowFlowTrendRequestAssetTypeEnum | string | undefined {
        return this['asset_type'];
    }
    public withIp(ip: Array<string>): ShowFlowTrendRequest {
        this['ip'] = ip;
        return this;
    }
    public withVpc(vpc: Array<string>): ShowFlowTrendRequest {
        this['vpc'] = vpc;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowFlowTrendRequestRangeEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
/**
    * @export
    * @enum {string}
    */
export enum ShowFlowTrendRequestLogTypeEnum {
    INTERNET = 'internet',
    NAT = 'nat',
    VPC = 'vpc',
    VGW = 'vgw'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowFlowTrendRequestDirectionEnum {
    IN2OUT = 'in2out',
    OUT2IN = 'out2in'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowFlowTrendRequestAssetTypeEnum {
    PUBLIC = 'public',
    PRIVATE = 'private'
}
