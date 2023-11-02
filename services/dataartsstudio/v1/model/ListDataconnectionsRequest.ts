

export class ListDataconnectionsRequest {
    public workspace?: string;
    public name?: string;
    public type?: string;
    public limit?: string;
    public offset?: string;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): ListDataconnectionsRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withName(name: string): ListDataconnectionsRequest {
        this['name'] = name;
        return this;
    }
    public withType(type: string): ListDataconnectionsRequest {
        this['type'] = type;
        return this;
    }
    public withLimit(limit: string): ListDataconnectionsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: string): ListDataconnectionsRequest {
        this['offset'] = offset;
        return this;
    }
}