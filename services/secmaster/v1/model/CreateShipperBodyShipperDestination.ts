

export class CreateShipperBodyShipperDestination {
    private 'data_param'?: string;
    private 'destination_dataspace'?: string;
    private 'destination_dataspace_name'?: string;
    private 'destination_identity_role'?: string;
    private 'destination_table'?: string;
    private 'destination_table_name'?: string;
    private 'destination_pipe'?: string;
    private 'destination_pipe_name'?: string;
    private 'destination_region'?: string;
    private 'destination_shipper_type'?: number;
    private 'destination_workspace'?: string;
    private 'destination_workspace_name'?: string;
    public constructor() { 
    }
    public withDataParam(dataParam: string): CreateShipperBodyShipperDestination {
        this['data_param'] = dataParam;
        return this;
    }
    public set dataParam(dataParam: string  | undefined) {
        this['data_param'] = dataParam;
    }
    public get dataParam(): string | undefined {
        return this['data_param'];
    }
    public withDestinationDataspace(destinationDataspace: string): CreateShipperBodyShipperDestination {
        this['destination_dataspace'] = destinationDataspace;
        return this;
    }
    public set destinationDataspace(destinationDataspace: string  | undefined) {
        this['destination_dataspace'] = destinationDataspace;
    }
    public get destinationDataspace(): string | undefined {
        return this['destination_dataspace'];
    }
    public withDestinationDataspaceName(destinationDataspaceName: string): CreateShipperBodyShipperDestination {
        this['destination_dataspace_name'] = destinationDataspaceName;
        return this;
    }
    public set destinationDataspaceName(destinationDataspaceName: string  | undefined) {
        this['destination_dataspace_name'] = destinationDataspaceName;
    }
    public get destinationDataspaceName(): string | undefined {
        return this['destination_dataspace_name'];
    }
    public withDestinationIdentityRole(destinationIdentityRole: string): CreateShipperBodyShipperDestination {
        this['destination_identity_role'] = destinationIdentityRole;
        return this;
    }
    public set destinationIdentityRole(destinationIdentityRole: string  | undefined) {
        this['destination_identity_role'] = destinationIdentityRole;
    }
    public get destinationIdentityRole(): string | undefined {
        return this['destination_identity_role'];
    }
    public withDestinationTable(destinationTable: string): CreateShipperBodyShipperDestination {
        this['destination_table'] = destinationTable;
        return this;
    }
    public set destinationTable(destinationTable: string  | undefined) {
        this['destination_table'] = destinationTable;
    }
    public get destinationTable(): string | undefined {
        return this['destination_table'];
    }
    public withDestinationTableName(destinationTableName: string): CreateShipperBodyShipperDestination {
        this['destination_table_name'] = destinationTableName;
        return this;
    }
    public set destinationTableName(destinationTableName: string  | undefined) {
        this['destination_table_name'] = destinationTableName;
    }
    public get destinationTableName(): string | undefined {
        return this['destination_table_name'];
    }
    public withDestinationPipe(destinationPipe: string): CreateShipperBodyShipperDestination {
        this['destination_pipe'] = destinationPipe;
        return this;
    }
    public set destinationPipe(destinationPipe: string  | undefined) {
        this['destination_pipe'] = destinationPipe;
    }
    public get destinationPipe(): string | undefined {
        return this['destination_pipe'];
    }
    public withDestinationPipeName(destinationPipeName: string): CreateShipperBodyShipperDestination {
        this['destination_pipe_name'] = destinationPipeName;
        return this;
    }
    public set destinationPipeName(destinationPipeName: string  | undefined) {
        this['destination_pipe_name'] = destinationPipeName;
    }
    public get destinationPipeName(): string | undefined {
        return this['destination_pipe_name'];
    }
    public withDestinationRegion(destinationRegion: string): CreateShipperBodyShipperDestination {
        this['destination_region'] = destinationRegion;
        return this;
    }
    public set destinationRegion(destinationRegion: string  | undefined) {
        this['destination_region'] = destinationRegion;
    }
    public get destinationRegion(): string | undefined {
        return this['destination_region'];
    }
    public withDestinationShipperType(destinationShipperType: number): CreateShipperBodyShipperDestination {
        this['destination_shipper_type'] = destinationShipperType;
        return this;
    }
    public set destinationShipperType(destinationShipperType: number  | undefined) {
        this['destination_shipper_type'] = destinationShipperType;
    }
    public get destinationShipperType(): number | undefined {
        return this['destination_shipper_type'];
    }
    public withDestinationWorkspace(destinationWorkspace: string): CreateShipperBodyShipperDestination {
        this['destination_workspace'] = destinationWorkspace;
        return this;
    }
    public set destinationWorkspace(destinationWorkspace: string  | undefined) {
        this['destination_workspace'] = destinationWorkspace;
    }
    public get destinationWorkspace(): string | undefined {
        return this['destination_workspace'];
    }
    public withDestinationWorkspaceName(destinationWorkspaceName: string): CreateShipperBodyShipperDestination {
        this['destination_workspace_name'] = destinationWorkspaceName;
        return this;
    }
    public set destinationWorkspaceName(destinationWorkspaceName: string  | undefined) {
        this['destination_workspace_name'] = destinationWorkspaceName;
    }
    public get destinationWorkspaceName(): string | undefined {
        return this['destination_workspace_name'];
    }
}