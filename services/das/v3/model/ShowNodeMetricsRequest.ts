import { ShowNodeMetricsRequestBody } from './ShowNodeMetricsRequestBody';


export class ShowNodeMetricsRequest {
    private 'node_id'?: string;
    public body?: ShowNodeMetricsRequestBody;
    public constructor(nodeId?: string) { 
        this['node_id'] = nodeId;
    }
    public withNodeId(nodeId: string): ShowNodeMetricsRequest {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withBody(body: ShowNodeMetricsRequestBody): ShowNodeMetricsRequest {
        this['body'] = body;
        return this;
    }
}