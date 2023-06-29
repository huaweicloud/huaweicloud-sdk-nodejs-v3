import { DetachEipReq } from './DetachEipReq';


export class DetachEip2Request {
    private 'graph_id': string | undefined;
    public body?: DetachEipReq;
    public constructor(graphId?: any) { 
        this['graph_id'] = graphId;
    }
    public withGraphId(graphId: string): DetachEip2Request {
        this['graph_id'] = graphId;
        return this;
    }
    public set graphId(graphId: string | undefined) {
        this['graph_id'] = graphId;
    }
    public get graphId() {
        return this['graph_id'];
    }
    public withBody(body: DetachEipReq): DetachEip2Request {
        this['body'] = body;
        return this;
    }
}