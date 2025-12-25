

export class ShipperSource {
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
    public constructor(dataType?: number, dataspace?: string, dataspaceName?: string, id?: number, identity?: string, pipe?: string, pipeName?: string, region?: string, type?: number, workspace?: string, workspaceName?: string) { 
        this['data_type'] = dataType;
        this['dataspace'] = dataspace;
        this['dataspace_name'] = dataspaceName;
        this['id'] = id;
        this['identity'] = identity;
        this['pipe'] = pipe;
        this['pipe_name'] = pipeName;
        this['region'] = region;
        this['type'] = type;
        this['workspace'] = workspace;
        this['workspace_name'] = workspaceName;
    }
    public withDataType(dataType: number): ShipperSource {
        this['data_type'] = dataType;
        return this;
    }
    public set dataType(dataType: number  | undefined) {
        this['data_type'] = dataType;
    }
    public get dataType(): number | undefined {
        return this['data_type'];
    }
    public withDataspace(dataspace: string): ShipperSource {
        this['dataspace'] = dataspace;
        return this;
    }
    public withDataspaceName(dataspaceName: string): ShipperSource {
        this['dataspace_name'] = dataspaceName;
        return this;
    }
    public set dataspaceName(dataspaceName: string  | undefined) {
        this['dataspace_name'] = dataspaceName;
    }
    public get dataspaceName(): string | undefined {
        return this['dataspace_name'];
    }
    public withId(id: number): ShipperSource {
        this['id'] = id;
        return this;
    }
    public withIdentity(identity: string): ShipperSource {
        this['identity'] = identity;
        return this;
    }
    public withPipe(pipe: string): ShipperSource {
        this['pipe'] = pipe;
        return this;
    }
    public withPipeName(pipeName: string): ShipperSource {
        this['pipe_name'] = pipeName;
        return this;
    }
    public set pipeName(pipeName: string  | undefined) {
        this['pipe_name'] = pipeName;
    }
    public get pipeName(): string | undefined {
        return this['pipe_name'];
    }
    public withRegion(region: string): ShipperSource {
        this['region'] = region;
        return this;
    }
    public withType(type: number): ShipperSource {
        this['type'] = type;
        return this;
    }
    public withWorkspace(workspace: string): ShipperSource {
        this['workspace'] = workspace;
        return this;
    }
    public withWorkspaceName(workspaceName: string): ShipperSource {
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