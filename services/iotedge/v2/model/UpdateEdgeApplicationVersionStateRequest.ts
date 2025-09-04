import { UpdateEdgeAppVersionStateDTO } from './UpdateEdgeAppVersionStateDTO';


export class UpdateEdgeApplicationVersionStateRequest {
    private 'edge_app_id'?: string;
    public version?: string;
    public body?: UpdateEdgeAppVersionStateDTO;
    public constructor(edgeAppId?: string, version?: string) { 
        this['edge_app_id'] = edgeAppId;
        this['version'] = version;
    }
    public withEdgeAppId(edgeAppId: string): UpdateEdgeApplicationVersionStateRequest {
        this['edge_app_id'] = edgeAppId;
        return this;
    }
    public set edgeAppId(edgeAppId: string  | undefined) {
        this['edge_app_id'] = edgeAppId;
    }
    public get edgeAppId(): string | undefined {
        return this['edge_app_id'];
    }
    public withVersion(version: string): UpdateEdgeApplicationVersionStateRequest {
        this['version'] = version;
        return this;
    }
    public withBody(body: UpdateEdgeAppVersionStateDTO): UpdateEdgeApplicationVersionStateRequest {
        this['body'] = body;
        return this;
    }
}