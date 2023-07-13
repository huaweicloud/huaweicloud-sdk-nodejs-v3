import { ExpandGraphReq } from './ExpandGraphReq';


export class ExpandGraph2Request {
    private 'graph_id': string | undefined;
    public body?: ExpandGraphReq;
    public constructor(graphId?: any) { 
        this['graph_id'] = graphId;
    }
    public withGraphId(graphId: string): ExpandGraph2Request {
        this['graph_id'] = graphId;
        return this;
    }
    public set graphId(graphId: string | undefined) {
        this['graph_id'] = graphId;
    }
    public get graphId() {
        return this['graph_id'];
    }
    public withBody(body: ExpandGraphReq): ExpandGraph2Request {
        this['body'] = body;
        return this;
    }
}