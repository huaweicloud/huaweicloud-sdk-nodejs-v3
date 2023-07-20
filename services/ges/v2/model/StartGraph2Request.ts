import { StartGraphReq } from './StartGraphReq';


export class StartGraph2Request {
    private 'graph_id'?: string;
    public body?: StartGraphReq;
    public constructor(graphId?: string) { 
        this['graph_id'] = graphId;
    }
    public withGraphId(graphId: string): StartGraph2Request {
        this['graph_id'] = graphId;
        return this;
    }
    public set graphId(graphId: string  | undefined) {
        this['graph_id'] = graphId;
    }
    public get graphId(): string | undefined {
        return this['graph_id'];
    }
    public withBody(body: StartGraphReq): StartGraph2Request {
        this['body'] = body;
        return this;
    }
}