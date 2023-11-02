

export class DeleteAssetRequest {
    public workspace?: string;
    public guid?: string;
    public constructor(workspace?: string, guid?: string) { 
        this['workspace'] = workspace;
        this['guid'] = guid;
    }
    public withWorkspace(workspace: string): DeleteAssetRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withGuid(guid: string): DeleteAssetRequest {
        this['guid'] = guid;
        return this;
    }
}