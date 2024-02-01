import { CreatePrivateProviderVersionRequestBody } from './CreatePrivateProviderVersionRequestBody';


export class CreatePrivateProviderVersionRequest {
    private 'Client-Request-Id'?: string;
    private 'provider_name'?: string;
    public body?: CreatePrivateProviderVersionRequestBody;
    public constructor(clientRequestId?: string, providerName?: string) { 
        this['Client-Request-Id'] = clientRequestId;
        this['provider_name'] = providerName;
    }
    public withClientRequestId(clientRequestId: string): CreatePrivateProviderVersionRequest {
        this['Client-Request-Id'] = clientRequestId;
        return this;
    }
    public set clientRequestId(clientRequestId: string  | undefined) {
        this['Client-Request-Id'] = clientRequestId;
    }
    public get clientRequestId(): string | undefined {
        return this['Client-Request-Id'];
    }
    public withProviderName(providerName: string): CreatePrivateProviderVersionRequest {
        this['provider_name'] = providerName;
        return this;
    }
    public set providerName(providerName: string  | undefined) {
        this['provider_name'] = providerName;
    }
    public get providerName(): string | undefined {
        return this['provider_name'];
    }
    public withBody(body: CreatePrivateProviderVersionRequestBody): CreatePrivateProviderVersionRequest {
        this['body'] = body;
        return this;
    }
}