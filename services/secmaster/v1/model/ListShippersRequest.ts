

export class ListShippersRequest {
    private 'workspace_id'?: string;
    private 'dataspace_id'?: string;
    private 'pipe_id'?: string;
    private 'shipper_name'?: string;
    private 'shipper_source_region'?: string;
    private 'shipper_source_strategy'?: string;
    private 'shipper_consumption_type'?: string;
    private 'destination_shipper_type'?: string;
    private 'shipper_status'?: string;
    private 'create_time'?: string;
    public limit?: number;
    public offset?: number;
    public constructor(workspaceId?: string) { 
        this['workspace_id'] = workspaceId;
    }
    public withWorkspaceId(workspaceId: string): ListShippersRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withDataspaceId(dataspaceId: string): ListShippersRequest {
        this['dataspace_id'] = dataspaceId;
        return this;
    }
    public set dataspaceId(dataspaceId: string  | undefined) {
        this['dataspace_id'] = dataspaceId;
    }
    public get dataspaceId(): string | undefined {
        return this['dataspace_id'];
    }
    public withPipeId(pipeId: string): ListShippersRequest {
        this['pipe_id'] = pipeId;
        return this;
    }
    public set pipeId(pipeId: string  | undefined) {
        this['pipe_id'] = pipeId;
    }
    public get pipeId(): string | undefined {
        return this['pipe_id'];
    }
    public withShipperName(shipperName: string): ListShippersRequest {
        this['shipper_name'] = shipperName;
        return this;
    }
    public set shipperName(shipperName: string  | undefined) {
        this['shipper_name'] = shipperName;
    }
    public get shipperName(): string | undefined {
        return this['shipper_name'];
    }
    public withShipperSourceRegion(shipperSourceRegion: string): ListShippersRequest {
        this['shipper_source_region'] = shipperSourceRegion;
        return this;
    }
    public set shipperSourceRegion(shipperSourceRegion: string  | undefined) {
        this['shipper_source_region'] = shipperSourceRegion;
    }
    public get shipperSourceRegion(): string | undefined {
        return this['shipper_source_region'];
    }
    public withShipperSourceStrategy(shipperSourceStrategy: string): ListShippersRequest {
        this['shipper_source_strategy'] = shipperSourceStrategy;
        return this;
    }
    public set shipperSourceStrategy(shipperSourceStrategy: string  | undefined) {
        this['shipper_source_strategy'] = shipperSourceStrategy;
    }
    public get shipperSourceStrategy(): string | undefined {
        return this['shipper_source_strategy'];
    }
    public withShipperConsumptionType(shipperConsumptionType: string): ListShippersRequest {
        this['shipper_consumption_type'] = shipperConsumptionType;
        return this;
    }
    public set shipperConsumptionType(shipperConsumptionType: string  | undefined) {
        this['shipper_consumption_type'] = shipperConsumptionType;
    }
    public get shipperConsumptionType(): string | undefined {
        return this['shipper_consumption_type'];
    }
    public withDestinationShipperType(destinationShipperType: string): ListShippersRequest {
        this['destination_shipper_type'] = destinationShipperType;
        return this;
    }
    public set destinationShipperType(destinationShipperType: string  | undefined) {
        this['destination_shipper_type'] = destinationShipperType;
    }
    public get destinationShipperType(): string | undefined {
        return this['destination_shipper_type'];
    }
    public withShipperStatus(shipperStatus: string): ListShippersRequest {
        this['shipper_status'] = shipperStatus;
        return this;
    }
    public set shipperStatus(shipperStatus: string  | undefined) {
        this['shipper_status'] = shipperStatus;
    }
    public get shipperStatus(): string | undefined {
        return this['shipper_status'];
    }
    public withCreateTime(createTime: string): ListShippersRequest {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withLimit(limit: number): ListShippersRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListShippersRequest {
        this['offset'] = offset;
        return this;
    }
}