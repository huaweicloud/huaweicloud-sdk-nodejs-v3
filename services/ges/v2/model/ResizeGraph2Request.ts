import { ResizeGraphReq } from './ResizeGraphReq';


export class ResizeGraph2Request {
    private 'graph_id'?: string;
    public body?: ResizeGraphReq;
    public constructor(graphId?: string) { 
        this['graph_id'] = graphId;
    }
    public withGraphId(graphId: string): ResizeGraph2Request {
        this['graph_id'] = graphId;
        return this;
    }
    public set graphId(graphId: string  | undefined) {
        this['graph_id'] = graphId;
    }
    public get graphId(): string | undefined {
        return this['graph_id'];
    }
    public withBody(body: ResizeGraphReq): ResizeGraph2Request {
        this['body'] = body;
        return this;
    }
}