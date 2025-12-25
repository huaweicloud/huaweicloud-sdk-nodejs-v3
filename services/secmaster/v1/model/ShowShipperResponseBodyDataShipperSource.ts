

export class ShowShipperResponseBodyDataShipperSource {
    private 'data_type'?: number;
    public dataspace?: string;
    private 'dataspace_name'?: string;
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
    public withDataType(dataType: number): ShowShipperResponseBodyDataShipperSource {
        this['data_type'] = dataType;
        return this;
    }
    public set dataType(dataType: number  | undefined) {
        this['data_type'] = dataType;
    }
    public get dataType(): number | undefined {
        return this['data_type'];
    }
    public withDataspace(dataspace: string): ShowShipperResponseBodyDataShipperSource {
        this['dataspace'] = dataspace;
        return this;
    }
    public withDataspaceName(dataspaceName: string): ShowShipperResponseBodyDataShipperSource {
        this['dataspace_name'] = dataspaceName;
        return this;
    }
    public set dataspaceName(dataspaceName: string  | undefined) {
        this['dataspace_name'] = dataspaceName;
    }
    public get dataspaceName(): string | undefined {
        return this['dataspace_name'];
    }
    public withId(id: number): ShowShipperResponseBodyDataShipperSource {
        this['id'] = id;
        return this;
    }
    public withIdentity(identity: string): ShowShipperResponseBodyDataShipperSource {
        this['identity'] = identity;
        return this;
    }
    public withPipe(pipe: string): ShowShipperResponseBodyDataShipperSource {
        this['pipe'] = pipe;
        return this;
    }
    public withPipeName(pipeName: string): ShowShipperResponseBodyDataShipperSource {
        this['pipe_name'] = pipeName;
        return this;
    }
    public set pipeName(pipeName: string  | undefined) {
        this['pipe_name'] = pipeName;
    }
    public get pipeName(): string | undefined {
        return this['pipe_name'];
    }
    public withRegion(region: string): ShowShipperResponseBodyDataShipperSource {
        this['region'] = region;
        return this;
    }
    public withType(type: number): ShowShipperResponseBodyDataShipperSource {
        this['type'] = type;
        return this;
    }
    public withWorkspace(workspace: string): ShowShipperResponseBodyDataShipperSource {
        this['workspace'] = workspace;
        return this;
    }
    public withWorkspaceName(workspaceName: string): ShowShipperResponseBodyDataShipperSource {
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