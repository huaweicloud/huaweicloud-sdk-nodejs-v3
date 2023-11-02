

export class ImportResultRequest {
    public workspace?: string;
    public uuid?: string;
    public constructor(workspace?: string, uuid?: string) { 
        this['workspace'] = workspace;
        this['uuid'] = uuid;
    }
    public withWorkspace(workspace: string): ImportResultRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withUuid(uuid: string): ImportResultRequest {
        this['uuid'] = uuid;
        return this;
    }
}