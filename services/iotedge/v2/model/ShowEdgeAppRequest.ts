

export class ShowEdgeAppRequest {
    private 'edge_app_id'?: string;
    public constructor(edgeAppId?: string) { 
        this['edge_app_id'] = edgeAppId;
    }
    public withEdgeAppId(edgeAppId: string): ShowEdgeAppRequest {
        this['edge_app_id'] = edgeAppId;
        return this;
    }
    public set edgeAppId(edgeAppId: string  | undefined) {
        this['edge_app_id'] = edgeAppId;
    }
    public get edgeAppId(): string | undefined {
        return this['edge_app_id'];
    }
}