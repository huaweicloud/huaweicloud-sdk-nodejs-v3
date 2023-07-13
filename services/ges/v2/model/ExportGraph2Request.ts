import { ExportGraphReq } from './ExportGraphReq';


export class ExportGraph2Request {
    private 'graph_id': string | undefined;
    public body?: ExportGraphReq;
    public constructor(graphId?: any) { 
        this['graph_id'] = graphId;
    }
    public withGraphId(graphId: string): ExportGraph2Request {
        this['graph_id'] = graphId;
        return this;
    }
    public set graphId(graphId: string | undefined) {
        this['graph_id'] = graphId;
    }
    public get graphId() {
        return this['graph_id'];
    }
    public withBody(body: ExportGraphReq): ExportGraph2Request {
        this['body'] = body;
        return this;
    }
}