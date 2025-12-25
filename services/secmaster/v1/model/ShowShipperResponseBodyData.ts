import { ShowShipperResponseBodyDataShipperDestination } from './ShowShipperResponseBodyDataShipperDestination';
import { ShowShipperResponseBodyDataShipperSource } from './ShowShipperResponseBodyDataShipperSource';


export class ShowShipperResponseBodyData {
    private 'consumption_type'?: number;
    private 'create_time'?: number;
    private 'dataspace_id'?: string;
    private 'dataspace_name'?: string;
    private 'domain_id'?: string;
    public id?: number;
    private 'pipe_id'?: string;
    private 'pipe_name'?: string;
    private 'project_id'?: string;
    private 'shipper_destination'?: ShowShipperResponseBodyDataShipperDestination;
    private 'shipper_id'?: string;
    private 'shipper_name'?: string;
    private 'shipper_source'?: ShowShipperResponseBodyDataShipperSource;
    public status?: number;
    private 'update_time'?: number;
    public version?: string;
    private 'workspace_id'?: string;
    private 'workspace_name'?: string;
    public constructor() { 
    }
    public withConsumptionType(consumptionType: number): ShowShipperResponseBodyData {
        this['consumption_type'] = consumptionType;
        return this;
    }
    public set consumptionType(consumptionType: number  | undefined) {
        this['consumption_type'] = consumptionType;
    }
    public get consumptionType(): number | undefined {
        return this['consumption_type'];
    }
    public withCreateTime(createTime: number): ShowShipperResponseBodyData {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withDataspaceId(dataspaceId: string): ShowShipperResponseBodyData {
        this['dataspace_id'] = dataspaceId;
        return this;
    }
    public set dataspaceId(dataspaceId: string  | undefined) {
        this['dataspace_id'] = dataspaceId;
    }
    public get dataspaceId(): string | undefined {
        return this['dataspace_id'];
    }
    public withDataspaceName(dataspaceName: string): ShowShipperResponseBodyData {
        this['dataspace_name'] = dataspaceName;
        return this;
    }
    public set dataspaceName(dataspaceName: string  | undefined) {
        this['dataspace_name'] = dataspaceName;
    }
    public get dataspaceName(): string | undefined {
        return this['dataspace_name'];
    }
    public withDomainId(domainId: string): ShowShipperResponseBodyData {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withId(id: number): ShowShipperResponseBodyData {
        this['id'] = id;
        return this;
    }
    public withPipeId(pipeId: string): ShowShipperResponseBodyData {
        this['pipe_id'] = pipeId;
        return this;
    }
    public set pipeId(pipeId: string  | undefined) {
        this['pipe_id'] = pipeId;
    }
    public get pipeId(): string | undefined {
        return this['pipe_id'];
    }
    public withPipeName(pipeName: string): ShowShipperResponseBodyData {
        this['pipe_name'] = pipeName;
        return this;
    }
    public set pipeName(pipeName: string  | undefined) {
        this['pipe_name'] = pipeName;
    }
    public get pipeName(): string | undefined {
        return this['pipe_name'];
    }
    public withProjectId(projectId: string): ShowShipperResponseBodyData {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withShipperDestination(shipperDestination: ShowShipperResponseBodyDataShipperDestination): ShowShipperResponseBodyData {
        this['shipper_destination'] = shipperDestination;
        return this;
    }
    public set shipperDestination(shipperDestination: ShowShipperResponseBodyDataShipperDestination  | undefined) {
        this['shipper_destination'] = shipperDestination;
    }
    public get shipperDestination(): ShowShipperResponseBodyDataShipperDestination | undefined {
        return this['shipper_destination'];
    }
    public withShipperId(shipperId: string): ShowShipperResponseBodyData {
        this['shipper_id'] = shipperId;
        return this;
    }
    public set shipperId(shipperId: string  | undefined) {
        this['shipper_id'] = shipperId;
    }
    public get shipperId(): string | undefined {
        return this['shipper_id'];
    }
    public withShipperName(shipperName: string): ShowShipperResponseBodyData {
        this['shipper_name'] = shipperName;
        return this;
    }
    public set shipperName(shipperName: string  | undefined) {
        this['shipper_name'] = shipperName;
    }
    public get shipperName(): string | undefined {
        return this['shipper_name'];
    }
    public withShipperSource(shipperSource: ShowShipperResponseBodyDataShipperSource): ShowShipperResponseBodyData {
        this['shipper_source'] = shipperSource;
        return this;
    }
    public set shipperSource(shipperSource: ShowShipperResponseBodyDataShipperSource  | undefined) {
        this['shipper_source'] = shipperSource;
    }
    public get shipperSource(): ShowShipperResponseBodyDataShipperSource | undefined {
        return this['shipper_source'];
    }
    public withStatus(status: number): ShowShipperResponseBodyData {
        this['status'] = status;
        return this;
    }
    public withUpdateTime(updateTime: number): ShowShipperResponseBodyData {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withVersion(version: string): ShowShipperResponseBodyData {
        this['version'] = version;
        return this;
    }
    public withWorkspaceId(workspaceId: string): ShowShipperResponseBodyData {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withWorkspaceName(workspaceName: string): ShowShipperResponseBodyData {
        this['workspace_name'] = workspaceName;
        return this;
    }
    public set workspaceName(workspaceName: string  | undefined) {
        this['workspace_name'] = workspaceName;
    }
    public get workspaceName(): string | undefined {
        return this['workspace_name'];
    }
}