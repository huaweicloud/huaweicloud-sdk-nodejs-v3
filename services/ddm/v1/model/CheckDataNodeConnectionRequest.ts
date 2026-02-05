import { EsdbCheckRdsConnectionsRequestV3 } from './EsdbCheckRdsConnectionsRequestV3';


export class CheckDataNodeConnectionRequest {
    private 'instance_id'?: string;
    public body?: EsdbCheckRdsConnectionsRequestV3;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CheckDataNodeConnectionRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: EsdbCheckRdsConnectionsRequestV3): CheckDataNodeConnectionRequest {
        this['body'] = body;
        return this;
    }
}