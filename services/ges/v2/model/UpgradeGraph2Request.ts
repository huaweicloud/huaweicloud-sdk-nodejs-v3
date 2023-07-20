import { UpgradeGraphReq } from './UpgradeGraphReq';


export class UpgradeGraph2Request {
    private 'graph_id'?: string;
    public body?: UpgradeGraphReq;
    public constructor(graphId?: string) { 
        this['graph_id'] = graphId;
    }
    public withGraphId(graphId: string): UpgradeGraph2Request {
        this['graph_id'] = graphId;
        return this;
    }
    public set graphId(graphId: string  | undefined) {
        this['graph_id'] = graphId;
    }
    public get graphId(): string | undefined {
        return this['graph_id'];
    }
    public withBody(body: UpgradeGraphReq): UpgradeGraph2Request {
        this['body'] = body;
        return this;
    }
}