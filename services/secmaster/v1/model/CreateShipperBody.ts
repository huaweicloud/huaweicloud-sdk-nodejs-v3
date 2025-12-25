import { CreateShipperBodyShipperDestination } from './CreateShipperBodyShipperDestination';
import { CreateShipperBodyShipperSource } from './CreateShipperBodyShipperSource';


export class CreateShipperBody {
    private 'consumption_type'?: number;
    private 'dataspace_id'?: string;
    private 'dataspace_name'?: string;
    private 'domain_id'?: string;
    private 'pipe_id'?: string;
    private 'pipe_name'?: string;
    private 'project_id'?: string;
    private 'shipper_destination'?: CreateShipperBodyShipperDestination;
    private 'shipper_name'?: string;
    private 'shipper_source'?: CreateShipperBodyShipperSource;
    public version?: string;
    private 'workspace_id'?: string;
    private 'workspace_name'?: string;
    public constructor() { 
    }
    public withConsumptionType(consumptionType: number): CreateShipperBody {
        this['consumption_type'] = consumptionType;
        return this;
    }
    public set consumptionType(consumptionType: number  | undefined) {
        this['consumption_type'] = consumptionType;
    }
    public get consumptionType(): number | undefined {
        return this['consumption_type'];
    }
    public withDataspaceId(dataspaceId: string): CreateShipperBody {
        this['dataspace_id'] = dataspaceId;
        return this;
    }
    public set dataspaceId(dataspaceId: string  | undefined) {
        this['dataspace_id'] = dataspaceId;
    }
    public get dataspaceId(): string | undefined {
        return this['dataspace_id'];
    }
    public withDataspaceName(dataspaceName: string): CreateShipperBody {
        this['dataspace_name'] = dataspaceName;
        return this;
    }
    public set dataspaceName(dataspaceName: string  | undefined) {
        this['dataspace_name'] = dataspaceName;
    }
    public get dataspaceName(): string | undefined {
        return this['dataspace_name'];
    }
    public withDomainId(domainId: string): CreateShipperBody {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withPipeId(pipeId: string): CreateShipperBody {
        this['pipe_id'] = pipeId;
        return this;
    }
    public set pipeId(pipeId: string  | undefined) {
        this['pipe_id'] = pipeId;
    }
    public get pipeId(): string | undefined {
        return this['pipe_id'];
    }
    public withPipeName(pipeName: string): CreateShipperBody {
        this['pipe_name'] = pipeName;
        return this;
    }
    public set pipeName(pipeName: string  | undefined) {
        this['pipe_name'] = pipeName;
    }
    public get pipeName(): string | undefined {
        return this['pipe_name'];
    }
    public withProjectId(projectId: string): CreateShipperBody {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withShipperDestination(shipperDestination: CreateShipperBodyShipperDestination): CreateShipperBody {
        this['shipper_destination'] = shipperDestination;
        return this;
    }
    public set shipperDestination(shipperDestination: CreateShipperBodyShipperDestination  | undefined) {
        this['shipper_destination'] = shipperDestination;
    }
    public get shipperDestination(): CreateShipperBodyShipperDestination | undefined {
        return this['shipper_destination'];
    }
    public withShipperName(shipperName: string): CreateShipperBody {
        this['shipper_name'] = shipperName;
        return this;
    }
    public set shipperName(shipperName: string  | undefined) {
        this['shipper_name'] = shipperName;
    }
    public get shipperName(): string | undefined {
        return this['shipper_name'];
    }
    public withShipperSource(shipperSource: CreateShipperBodyShipperSource): CreateShipperBody {
        this['shipper_source'] = shipperSource;
        return this;
    }
    public set shipperSource(shipperSource: CreateShipperBodyShipperSource  | undefined) {
        this['shipper_source'] = shipperSource;
    }
    public get shipperSource(): CreateShipperBodyShipperSource | undefined {
        return this['shipper_source'];
    }
    public withVersion(version: string): CreateShipperBody {
        this['version'] = version;
        return this;
    }
    public withWorkspaceId(workspaceId: string): CreateShipperBody {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withWorkspaceName(workspaceName: string): CreateShipperBody {
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