import { ShipperDestination } from './ShipperDestination';
import { ShipperSource } from './ShipperSource';


export class ApiResponseDataItem {
    private 'consumption_type'?: number;
    private 'create_time'?: number;
    private 'dataspace_id'?: string;
    private 'dataspace_name'?: string;
    private 'domain_id'?: string;
    public id?: number;
    private 'pipe_id'?: string;
    private 'pipe_name'?: string;
    private 'project_id'?: string;
    private 'shipper_destination'?: ShipperDestination;
    private 'shipper_id'?: string;
    private 'shipper_name'?: string;
    private 'shipper_source'?: ShipperSource;
    public status?: number;
    private 'update_time'?: number;
    public version?: string;
    private 'workspace_id'?: string;
    public constructor(consumptionType?: number, createTime?: number, dataspaceId?: string, dataspaceName?: string, domainId?: string, id?: number, pipeId?: string, pipeName?: string, projectId?: string, shipperDestination?: ShipperDestination, shipperId?: string, shipperName?: string, shipperSource?: ShipperSource, status?: number, updateTime?: number, version?: string, workspaceId?: string) { 
        this['consumption_type'] = consumptionType;
        this['create_time'] = createTime;
        this['dataspace_id'] = dataspaceId;
        this['dataspace_name'] = dataspaceName;
        this['domain_id'] = domainId;
        this['id'] = id;
        this['pipe_id'] = pipeId;
        this['pipe_name'] = pipeName;
        this['project_id'] = projectId;
        this['shipper_destination'] = shipperDestination;
        this['shipper_id'] = shipperId;
        this['shipper_name'] = shipperName;
        this['shipper_source'] = shipperSource;
        this['status'] = status;
        this['update_time'] = updateTime;
        this['version'] = version;
        this['workspace_id'] = workspaceId;
    }
    public withConsumptionType(consumptionType: number): ApiResponseDataItem {
        this['consumption_type'] = consumptionType;
        return this;
    }
    public set consumptionType(consumptionType: number  | undefined) {
        this['consumption_type'] = consumptionType;
    }
    public get consumptionType(): number | undefined {
        return this['consumption_type'];
    }
    public withCreateTime(createTime: number): ApiResponseDataItem {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withDataspaceId(dataspaceId: string): ApiResponseDataItem {
        this['dataspace_id'] = dataspaceId;
        return this;
    }
    public set dataspaceId(dataspaceId: string  | undefined) {
        this['dataspace_id'] = dataspaceId;
    }
    public get dataspaceId(): string | undefined {
        return this['dataspace_id'];
    }
    public withDataspaceName(dataspaceName: string): ApiResponseDataItem {
        this['dataspace_name'] = dataspaceName;
        return this;
    }
    public set dataspaceName(dataspaceName: string  | undefined) {
        this['dataspace_name'] = dataspaceName;
    }
    public get dataspaceName(): string | undefined {
        return this['dataspace_name'];
    }
    public withDomainId(domainId: string): ApiResponseDataItem {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withId(id: number): ApiResponseDataItem {
        this['id'] = id;
        return this;
    }
    public withPipeId(pipeId: string): ApiResponseDataItem {
        this['pipe_id'] = pipeId;
        return this;
    }
    public set pipeId(pipeId: string  | undefined) {
        this['pipe_id'] = pipeId;
    }
    public get pipeId(): string | undefined {
        return this['pipe_id'];
    }
    public withPipeName(pipeName: string): ApiResponseDataItem {
        this['pipe_name'] = pipeName;
        return this;
    }
    public set pipeName(pipeName: string  | undefined) {
        this['pipe_name'] = pipeName;
    }
    public get pipeName(): string | undefined {
        return this['pipe_name'];
    }
    public withProjectId(projectId: string): ApiResponseDataItem {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withShipperDestination(shipperDestination: ShipperDestination): ApiResponseDataItem {
        this['shipper_destination'] = shipperDestination;
        return this;
    }
    public set shipperDestination(shipperDestination: ShipperDestination  | undefined) {
        this['shipper_destination'] = shipperDestination;
    }
    public get shipperDestination(): ShipperDestination | undefined {
        return this['shipper_destination'];
    }
    public withShipperId(shipperId: string): ApiResponseDataItem {
        this['shipper_id'] = shipperId;
        return this;
    }
    public set shipperId(shipperId: string  | undefined) {
        this['shipper_id'] = shipperId;
    }
    public get shipperId(): string | undefined {
        return this['shipper_id'];
    }
    public withShipperName(shipperName: string): ApiResponseDataItem {
        this['shipper_name'] = shipperName;
        return this;
    }
    public set shipperName(shipperName: string  | undefined) {
        this['shipper_name'] = shipperName;
    }
    public get shipperName(): string | undefined {
        return this['shipper_name'];
    }
    public withShipperSource(shipperSource: ShipperSource): ApiResponseDataItem {
        this['shipper_source'] = shipperSource;
        return this;
    }
    public set shipperSource(shipperSource: ShipperSource  | undefined) {
        this['shipper_source'] = shipperSource;
    }
    public get shipperSource(): ShipperSource | undefined {
        return this['shipper_source'];
    }
    public withStatus(status: number): ApiResponseDataItem {
        this['status'] = status;
        return this;
    }
    public withUpdateTime(updateTime: number): ApiResponseDataItem {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withVersion(version: string): ApiResponseDataItem {
        this['version'] = version;
        return this;
    }
    public withWorkspaceId(workspaceId: string): ApiResponseDataItem {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
}