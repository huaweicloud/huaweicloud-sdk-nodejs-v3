import { CreatePrivateModuleRequestBody } from './CreatePrivateModuleRequestBody';


export class CreatePrivateModuleRequest {
    private 'Client-Request-Id'?: string;
    public body?: CreatePrivateModuleRequestBody;
    public constructor(clientRequestId?: string) { 
        this['Client-Request-Id'] = clientRequestId;
    }
    public withClientRequestId(clientRequestId: string): CreatePrivateModuleRequest {
        this['Client-Request-Id'] = clientRequestId;
        return this;
    }
    public set clientRequestId(clientRequestId: string  | undefined) {
        this['Client-Request-Id'] = clientRequestId;
    }
    public get clientRequestId(): string | undefined {
        return this['Client-Request-Id'];
    }
    public withBody(body: CreatePrivateModuleRequestBody): CreatePrivateModuleRequest {
        this['body'] = body;
        return this;
    }
}