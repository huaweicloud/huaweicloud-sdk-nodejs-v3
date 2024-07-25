import { ChangeSecurityGroupReq } from './ChangeSecurityGroupReq';


export class ChangeSecurityGroupRequest {
    private 'graph_id'?: string;
    public body?: ChangeSecurityGroupReq;
    public constructor(graphId?: string) { 
        this['graph_id'] = graphId;
    }
    public withGraphId(graphId: string): ChangeSecurityGroupRequest {
        this['graph_id'] = graphId;
        return this;
    }
    public set graphId(graphId: string  | undefined) {
        this['graph_id'] = graphId;
    }
    public get graphId(): string | undefined {
        return this['graph_id'];
    }
    public withBody(body: ChangeSecurityGroupReq): ChangeSecurityGroupRequest {
        this['body'] = body;
        return this;
    }
}