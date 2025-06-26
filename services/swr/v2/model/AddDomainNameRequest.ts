import { AddDomainNameRequestBody } from './AddDomainNameRequestBody';


export class AddDomainNameRequest {
    private 'instance_id'?: string;
    public body?: AddDomainNameRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): AddDomainNameRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: AddDomainNameRequestBody): AddDomainNameRequest {
        this['body'] = body;
        return this;
    }
}