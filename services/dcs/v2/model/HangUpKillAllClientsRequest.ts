import { HangUpKillAllClientsRequestBody } from './HangUpKillAllClientsRequestBody';


export class HangUpKillAllClientsRequest {
    private 'instance_id'?: string;
    public body?: HangUpKillAllClientsRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): HangUpKillAllClientsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: HangUpKillAllClientsRequestBody): HangUpKillAllClientsRequest {
        this['body'] = body;
        return this;
    }
}