

export class ShowLineageRequest {
    public workspace?: string;
    public guid?: string;
    public direction?: string;
    public depth?: number;
    public constructor(workspace?: string, guid?: string) { 
        this['workspace'] = workspace;
        this['guid'] = guid;
    }
    public withWorkspace(workspace: string): ShowLineageRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withGuid(guid: string): ShowLineageRequest {
        this['guid'] = guid;
        return this;
    }
    public withDirection(direction: string): ShowLineageRequest {
        this['direction'] = direction;
        return this;
    }
    public withDepth(depth: number): ShowLineageRequest {
        this['depth'] = depth;
        return this;
    }
}