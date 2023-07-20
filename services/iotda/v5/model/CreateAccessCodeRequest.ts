import { CreateAccessCodeRequestBody } from './CreateAccessCodeRequestBody';


export class CreateAccessCodeRequest {
    private 'Instance-Id'?: string;
    public body?: CreateAccessCodeRequestBody;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): CreateAccessCodeRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['Instance-Id'];
    }
    public withBody(body: CreateAccessCodeRequestBody): CreateAccessCodeRequest {
        this['body'] = body;
        return this;
    }
}