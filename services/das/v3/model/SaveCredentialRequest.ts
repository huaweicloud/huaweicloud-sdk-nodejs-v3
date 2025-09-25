import { SaveCredentialRequestBody } from './SaveCredentialRequestBody';


export class SaveCredentialRequest {
    private 'instance_id'?: string;
    public body?: SaveCredentialRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): SaveCredentialRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: SaveCredentialRequestBody): SaveCredentialRequest {
        this['body'] = body;
        return this;
    }
}