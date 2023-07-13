import { DeregisterScenesReq } from './DeregisterScenesReq';


export class DeregisterScenes2Request {
    private 'graph_id': string | undefined;
    public body?: DeregisterScenesReq;
    public constructor(graphId?: any) { 
        this['graph_id'] = graphId;
    }
    public withGraphId(graphId: string): DeregisterScenes2Request {
        this['graph_id'] = graphId;
        return this;
    }
    public set graphId(graphId: string | undefined) {
        this['graph_id'] = graphId;
    }
    public get graphId() {
        return this['graph_id'];
    }
    public withBody(body: DeregisterScenesReq): DeregisterScenes2Request {
        this['body'] = body;
        return this;
    }
}