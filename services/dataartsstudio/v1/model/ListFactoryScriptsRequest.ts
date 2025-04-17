

export class ListFactoryScriptsRequest {
    public workspace?: string;
    private 'X-Project-Id'?: string;
    public limit?: number;
    public offset?: number;
    private 'script_name'?: string;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): ListFactoryScriptsRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withXProjectId(xProjectId: string): ListFactoryScriptsRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withLimit(limit: number): ListFactoryScriptsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListFactoryScriptsRequest {
        this['offset'] = offset;
        return this;
    }
    public withScriptName(scriptName: string): ListFactoryScriptsRequest {
        this['script_name'] = scriptName;
        return this;
    }
    public set scriptName(scriptName: string  | undefined) {
        this['script_name'] = scriptName;
    }
    public get scriptName(): string | undefined {
        return this['script_name'];
    }
}