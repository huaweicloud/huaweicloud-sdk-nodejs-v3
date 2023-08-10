

export class ListAgentDimensionInfoRequest {
    private 'instance_id'?: string;
    private 'dim_name'?: ListAgentDimensionInfoRequestDimNameEnum | string;
    private 'dim_value'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(instanceId?: string, dimName?: string) { 
        this['instance_id'] = instanceId;
        this['dim_name'] = dimName;
    }
    public withInstanceId(instanceId: string): ListAgentDimensionInfoRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withDimName(dimName: ListAgentDimensionInfoRequestDimNameEnum | string): ListAgentDimensionInfoRequest {
        this['dim_name'] = dimName;
        return this;
    }
    public set dimName(dimName: ListAgentDimensionInfoRequestDimNameEnum | string  | undefined) {
        this['dim_name'] = dimName;
    }
    public get dimName(): ListAgentDimensionInfoRequestDimNameEnum | string | undefined {
        return this['dim_name'];
    }
    public withDimValue(dimValue: string): ListAgentDimensionInfoRequest {
        this['dim_value'] = dimValue;
        return this;
    }
    public set dimValue(dimValue: string  | undefined) {
        this['dim_value'] = dimValue;
    }
    public get dimValue(): string | undefined {
        return this['dim_value'];
    }
    public withOffset(offset: number): ListAgentDimensionInfoRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListAgentDimensionInfoRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListAgentDimensionInfoRequestDimNameEnum {
    MOUNT_POINT = 'mount_point',
    DISK = 'disk',
    PROC = 'proc',
    GPU = 'gpu',
    RAID = 'raid'
}
