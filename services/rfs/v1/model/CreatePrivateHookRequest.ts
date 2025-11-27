import { CreatePrivateHookRequestBody } from './CreatePrivateHookRequestBody';


export class CreatePrivateHookRequest {
    private 'Client-Request-Id'?: string;
    public body?: CreatePrivateHookRequestBody;
    public constructor(clientRequestId?: string) { 
        this['Client-Request-Id'] = clientRequestId;
    }
    public withClientRequestId(clientRequestId: string): CreatePrivateHookRequest {
        this['Client-Request-Id'] = clientRequestId;
        return this;
    }
    public set clientRequestId(clientRequestId: string  | undefined) {
        this['Client-Request-Id'] = clientRequestId;
    }
    public get clientRequestId(): string | undefined {
        return this['Client-Request-Id'];
    }
    public withBody(body: CreatePrivateHookRequestBody): CreatePrivateHookRequest {
        this['body'] = body;
        return this;
    }
}