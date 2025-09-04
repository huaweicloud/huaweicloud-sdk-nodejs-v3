

export class DeleteEdgeApplicationVersionRequest {
    private 'edge_app_id'?: string;
    public version?: string;
    public constructor(edgeAppId?: string, version?: string) { 
        this['edge_app_id'] = edgeAppId;
        this['version'] = version;
    }
    public withEdgeAppId(edgeAppId: string): DeleteEdgeApplicationVersionRequest {
        this['edge_app_id'] = edgeAppId;
        return this;
    }
    public set edgeAppId(edgeAppId: string  | undefined) {
        this['edge_app_id'] = edgeAppId;
    }
    public get edgeAppId(): string | undefined {
        return this['edge_app_id'];
    }
    public withVersion(version: string): DeleteEdgeApplicationVersionRequest {
        this['version'] = version;
        return this;
    }
}