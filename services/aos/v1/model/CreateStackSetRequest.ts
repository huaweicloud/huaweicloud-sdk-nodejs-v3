import { CreateStackSetRequestBody } from './CreateStackSetRequestBody';


export class CreateStackSetRequest {
    private 'Client-Request-Id'?: string;
    public body?: CreateStackSetRequestBody;
    public constructor(clientRequestId?: string) { 
        this['Client-Request-Id'] = clientRequestId;
    }
    public withClientRequestId(clientRequestId: string): CreateStackSetRequest {
        this['Client-Request-Id'] = clientRequestId;
        return this;
    }
    public set clientRequestId(clientRequestId: string  | undefined) {
        this['Client-Request-Id'] = clientRequestId;
    }
    public get clientRequestId(): string | undefined {
        return this['Client-Request-Id'];
    }
    public withBody(body: CreateStackSetRequestBody): CreateStackSetRequest {
        this['body'] = body;
        return this;
    }
}