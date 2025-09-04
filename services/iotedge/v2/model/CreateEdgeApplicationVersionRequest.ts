import { CreateEdgeApplicationVersionDTO } from './CreateEdgeApplicationVersionDTO';


export class CreateEdgeApplicationVersionRequest {
    private 'edge_app_id'?: string;
    public body?: CreateEdgeApplicationVersionDTO;
    public constructor(edgeAppId?: string) { 
        this['edge_app_id'] = edgeAppId;
    }
    public withEdgeAppId(edgeAppId: string): CreateEdgeApplicationVersionRequest {
        this['edge_app_id'] = edgeAppId;
        return this;
    }
    public set edgeAppId(edgeAppId: string  | undefined) {
        this['edge_app_id'] = edgeAppId;
    }
    public get edgeAppId(): string | undefined {
        return this['edge_app_id'];
    }
    public withBody(body: CreateEdgeApplicationVersionDTO): CreateEdgeApplicationVersionRequest {
        this['body'] = body;
        return this;
    }
}