import { UpgradeGraphReq } from './UpgradeGraphReq';


export class UpgradeGraph2Request {
    private 'graph_id': string | undefined;
    public body?: UpgradeGraphReq;
    public constructor(graphId?: any) { 
        this['graph_id'] = graphId;
    }
    public withGraphId(graphId: string): UpgradeGraph2Request {
        this['graph_id'] = graphId;
        return this;
    }
    public set graphId(graphId: string | undefined) {
        this['graph_id'] = graphId;
    }
    public get graphId() {
        return this['graph_id'];
    }
    public withBody(body: UpgradeGraphReq): UpgradeGraph2Request {
        this['body'] = body;
        return this;
    }
}