import { IntelligentKillSessionReq } from './IntelligentKillSessionReq';


export class CreateIntelligentKillSessionRequest {
    private 'instance_id'?: string;
    public body?: IntelligentKillSessionReq;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CreateIntelligentKillSessionRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: IntelligentKillSessionReq): CreateIntelligentKillSessionRequest {
        this['body'] = body;
        return this;
    }
}