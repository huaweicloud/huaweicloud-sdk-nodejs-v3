

export class ShowBusinessAssetsTreeRequest {
    public workspace?: string;
    public guid?: string;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): ShowBusinessAssetsTreeRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withGuid(guid: string): ShowBusinessAssetsTreeRequest {
        this['guid'] = guid;
        return this;
    }
}