import { ImportGraphReq } from './ImportGraphReq';


export class ImportGraph2Request {
    private 'graph_id'?: string;
    public body?: ImportGraphReq;
    public constructor(graphId?: string) { 
        this['graph_id'] = graphId;
    }
    public withGraphId(graphId: string): ImportGraph2Request {
        this['graph_id'] = graphId;
        return this;
    }
    public set graphId(graphId: string  | undefined) {
        this['graph_id'] = graphId;
    }
    public get graphId(): string | undefined {
        return this['graph_id'];
    }
    public withBody(body: ImportGraphReq): ImportGraph2Request {
        this['body'] = body;
        return this;
    }
}