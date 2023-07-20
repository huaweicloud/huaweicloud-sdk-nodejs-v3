import { DeregisterScenesReq } from './DeregisterScenesReq';


export class DeregisterScenes2Request {
    private 'graph_id'?: string;
    public body?: DeregisterScenesReq;
    public constructor(graphId?: string) { 
        this['graph_id'] = graphId;
    }
    public withGraphId(graphId: string): DeregisterScenes2Request {
        this['graph_id'] = graphId;
        return this;
    }
    public set graphId(graphId: string  | undefined) {
        this['graph_id'] = graphId;
    }
    public get graphId(): string | undefined {
        return this['graph_id'];
    }
    public withBody(body: DeregisterScenesReq): DeregisterScenes2Request {
        this['body'] = body;
        return this;
    }
}