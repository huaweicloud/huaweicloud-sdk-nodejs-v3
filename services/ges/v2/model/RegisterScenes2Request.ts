import { RegisterScenesReq } from './RegisterScenesReq';


export class RegisterScenes2Request {
    private 'graph_id'?: string;
    public body?: RegisterScenesReq;
    public constructor(graphId?: string) { 
        this['graph_id'] = graphId;
    }
    public withGraphId(graphId: string): RegisterScenes2Request {
        this['graph_id'] = graphId;
        return this;
    }
    public set graphId(graphId: string  | undefined) {
        this['graph_id'] = graphId;
    }
    public get graphId(): string | undefined {
        return this['graph_id'];
    }
    public withBody(body: RegisterScenesReq): RegisterScenes2Request {
        this['body'] = body;
        return this;
    }
}