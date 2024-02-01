import { CreatePrivateProviderRequestBody } from './CreatePrivateProviderRequestBody';


export class CreatePrivateProviderRequest {
    private 'Client-Request-Id'?: string;
    public body?: CreatePrivateProviderRequestBody;
    public constructor(clientRequestId?: string) { 
        this['Client-Request-Id'] = clientRequestId;
    }
    public withClientRequestId(clientRequestId: string): CreatePrivateProviderRequest {
        this['Client-Request-Id'] = clientRequestId;
        return this;
    }
    public set clientRequestId(clientRequestId: string  | undefined) {
        this['Client-Request-Id'] = clientRequestId;
    }
    public get clientRequestId(): string | undefined {
        return this['Client-Request-Id'];
    }
    public withBody(body: CreatePrivateProviderRequestBody): CreatePrivateProviderRequest {
        this['body'] = body;
        return this;
    }
}