import { AttachEipReq } from './AttachEipReq';


export class AttachEip2Request {
    private 'graph_id': string | undefined;
    public body?: AttachEipReq;
    public constructor(graphId?: any) { 
        this['graph_id'] = graphId;
    }
    public withGraphId(graphId: string): AttachEip2Request {
        this['graph_id'] = graphId;
        return this;
    }
    public set graphId(graphId: string | undefined) {
        this['graph_id'] = graphId;
    }
    public get graphId() {
        return this['graph_id'];
    }
    public withBody(body: AttachEipReq): AttachEip2Request {
        this['body'] = body;
        return this;
    }
}