import { SmartConnectValidateEntity } from './SmartConnectValidateEntity';


export class ValidateConnectorConnectivityRequest {
    private 'instance_id'?: string;
    public body?: SmartConnectValidateEntity;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ValidateConnectorConnectivityRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: SmartConnectValidateEntity): ValidateConnectorConnectivityRequest {
        this['body'] = body;
        return this;
    }
}