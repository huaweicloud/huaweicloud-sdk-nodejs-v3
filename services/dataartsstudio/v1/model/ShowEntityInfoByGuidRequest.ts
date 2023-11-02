

export class ShowEntityInfoByGuidRequest {
    public workspace?: string;
    public guid?: string;
    public constructor(workspace?: string, guid?: string) { 
        this['workspace'] = workspace;
        this['guid'] = guid;
    }
    public withWorkspace(workspace: string): ShowEntityInfoByGuidRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withGuid(guid: string): ShowEntityInfoByGuidRequest {
        this['guid'] = guid;
        return this;
    }
}