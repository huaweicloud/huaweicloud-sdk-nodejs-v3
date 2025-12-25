

export class ShowShipperResponseBodyDataShipperDestination {
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
    public constructor() { 
    }
    public withDataParam(dataParam: string): ShowShipperResponseBodyDataShipperDestination {
        this['data_param'] = dataParam;
        return this;
    }
    public set dataParam(dataParam: string  | undefined) {
        this['data_param'] = dataParam;
    }
    public get dataParam(): string | undefined {
        return this['data_param'];
    }
    public withDataType(dataType: number): ShowShipperResponseBodyDataShipperDestination {
        this['data_type'] = dataType;
        return this;
    }
    public set dataType(dataType: number  | undefined) {
        this['data_type'] = dataType;
    }
    public get dataType(): number | undefined {
        return this['data_type'];
    }
    public withDataspace(dataspace: string): ShowShipperResponseBodyDataShipperDestination {
        this['dataspace'] = dataspace;
        return this;
    }
    public withDataspaceName(dataspaceName: string): ShowShipperResponseBodyDataShipperDestination {
        this['dataspace_name'] = dataspaceName;
        return this;
    }
    public set dataspaceName(dataspaceName: string  | undefined) {
        this['dataspace_name'] = dataspaceName;
    }
    public get dataspaceName(): string | undefined {
        return this['dataspace_name'];
    }
    public withDestinationInfo(destinationInfo: string): ShowShipperResponseBodyDataShipperDestination {
        this['destination_info'] = destinationInfo;
        return this;
    }
    public set destinationInfo(destinationInfo: string  | undefined) {
        this['destination_info'] = destinationInfo;
    }
    public get destinationInfo(): string | undefined {
        return this['destination_info'];
    }
    public withId(id: number): ShowShipperResponseBodyDataShipperDestination {
        this['id'] = id;
        return this;
    }
    public withIdentity(identity: string): ShowShipperResponseBodyDataShipperDestination {
        this['identity'] = identity;
        return this;
    }
    public withPipe(pipe: string): ShowShipperResponseBodyDataShipperDestination {
        this['pipe'] = pipe;
        return this;
    }
    public withPipeName(pipeName: string): ShowShipperResponseBodyDataShipperDestination {
        this['pipe_name'] = pipeName;
        return this;
    }
    public set pipeName(pipeName: string  | undefined) {
        this['pipe_name'] = pipeName;
    }
    public get pipeName(): string | undefined {
        return this['pipe_name'];
    }
    public withRegion(region: string): ShowShipperResponseBodyDataShipperDestination {
        this['region'] = region;
        return this;
    }
    public withType(type: number): ShowShipperResponseBodyDataShipperDestination {
        this['type'] = type;
        return this;
    }
    public withWorkspace(workspace: string): ShowShipperResponseBodyDataShipperDestination {
        this['workspace'] = workspace;
        return this;
    }
    public withWorkspaceName(workspaceName: string): ShowShipperResponseBodyDataShipperDestination {
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