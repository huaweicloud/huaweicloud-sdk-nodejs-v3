import { CreatePublicationsRequestBody } from './CreatePublicationsRequestBody';


export class CreatePublicationRequest {
    private 'instance_id'?: string;
    public body?: CreatePublicationsRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CreatePublicationRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: CreatePublicationsRequestBody): CreatePublicationRequest {
        this['body'] = body;
        return this;
    }
}