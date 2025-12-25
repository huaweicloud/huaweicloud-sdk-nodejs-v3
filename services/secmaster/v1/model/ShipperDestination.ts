

export class ShipperDestination {
    private 'data_param'?: string;
    private 'data_type'?: number;
    public dataspace?: string;
    private 'dataspace_name'?: string;
    private 'destination_info'?: string;
    public id?: number;
    public identity?: string;
    public pipe?: string;
    private 'pipe_name'?: string;
    public region?: string;
    public type?: number;
    public workspace?: string;
    private 'workspace_name'?: string;
    public constructor(dataParam?: string, dataType?: number, dataspace?: string, dataspaceName?: string, destinationInfo?: string, id?: number, identity?: string, pipe?: string, pipeName?: string, region?: string, type?: number, workspace?: string, workspaceName?: string) { 
        this['data_param'] = dataParam;
        this['data_type'] = dataType;
        this['dataspace'] = dataspace;
        this['dataspace_name'] = dataspaceName;
        this['destination_info'] = destinationInfo;
        this['id'] = id;
        this['identity'] = identity;
        this['pipe'] = pipe;
        this['pipe_name'] = pipeName;
        this['region'] = region;
        this['type'] = type;
        this['workspace'] = workspace;
        this['workspace_name'] = workspaceName;
    }
    public withDataParam(dataParam: string): ShipperDestination {
        this['data_param'] = dataParam;
        return this;
    }
    public set dataParam(dataParam: string  | undefined) {
        this['data_param'] = dataParam;
    }
    public get dataParam(): string | undefined {
        return this['data_param'];
    }
    public withDataType(dataType: number): ShipperDestination {
        this['data_type'] = dataType;
        return this;
    }
    public set dataType(dataType: number  | undefined) {
        this['data_type'] = dataType;
    }
    public get dataType(): number | undefined {
        return this['data_type'];
    }
    public withDataspace(dataspace: string): ShipperDestination {
        this['dataspace'] = dataspace;
        return this;
    }
    public withDataspaceName(dataspaceName: string): ShipperDestination {
        this['dataspace_name'] = dataspaceName;
        return this;
    }
    public set dataspaceName(dataspaceName: string  | undefined) {
        this['dataspace_name'] = dataspaceName;
    }
    public get dataspaceName(): string | undefined {
        return this['dataspace_name'];
    }
    public withDestinationInfo(destinationInfo: string): ShipperDestination {
        this['destination_info'] = destinationInfo;
        return this;
    }
    public set destinationInfo(destinationInfo: string  | undefined) {
        this['destination_info'] = destinationInfo;
    }
    public get destinationInfo(): string | undefined {
        return this['destination_info'];
    }
    public withId(id: number): ShipperDestination {
        this['id'] = id;
        return this;
    }
    public withIdentity(identity: string): ShipperDestination {
        this['identity'] = identity;
        return this;
    }
    public withPipe(pipe: string): ShipperDestination {
        this['pipe'] = pipe;
        return this;
    }
    public withPipeName(pipeName: string): ShipperDestination {
        this['pipe_name'] = pipeName;
        return this;
    }
    public set pipeName(pipeName: string  | undefined) {
        this['pipe_name'] = pipeName;
    }
    public get pipeName(): string | undefined {
        return this['pipe_name'];
    }
    public withRegion(region: string): ShipperDestination {
        this['region'] = region;
        return this;
    }
    public withType(type: number): ShipperDestination {
        this['type'] = type;
        return this;
    }
    public withWorkspace(workspace: string): ShipperDestination {
        this['workspace'] = workspace;
        return this;
    }
    public withWorkspaceName(workspaceName: string): ShipperDestination {
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