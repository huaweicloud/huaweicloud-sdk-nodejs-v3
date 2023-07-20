import { ExpandGraphReq } from './ExpandGraphReq';


export class ExpandGraph2Request {
    private 'graph_id'?: string;
    public body?: ExpandGraphReq;
    public constructor(graphId?: string) { 
        this['graph_id'] = graphId;
    }
    public withGraphId(graphId: string): ExpandGraph2Request {
        this['graph_id'] = graphId;
        return this;
    }
    public set graphId(graphId: string  | undefined) {
        this['graph_id'] = graphId;
    }
    public get graphId(): string | undefined {
        return this['graph_id'];
    }
    public withBody(body: ExpandGraphReq): ExpandGraph2Request {
        this['body'] = body;
        return this;
    }
}