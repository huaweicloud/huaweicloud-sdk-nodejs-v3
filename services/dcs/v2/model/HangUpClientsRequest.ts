import { HangUpClientsRequestBody } from './HangUpClientsRequestBody';


export class HangUpClientsRequest {
    private 'instance_id'?: string;
    public body?: HangUpClientsRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): HangUpClientsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: HangUpClientsRequestBody): HangUpClientsRequest {
        this['body'] = body;
        return this;
    }
}