import { ClientNetworkRequestBody } from './ClientNetworkRequestBody';


export class UpdateClientNetworkRequest {
    private 'instance_id'?: string;
    public body?: ClientNetworkRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): UpdateClientNetworkRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ClientNetworkRequestBody): UpdateClientNetworkRequest {
        this['body'] = body;
        return this;
    }
}