import { UpdatePrivateProviderMetadataRequestBody } from './UpdatePrivateProviderMetadataRequestBody';


export class UpdatePrivateProviderMetadataRequest {
    private 'Client-Request-Id'?: string;
    private 'provider_name'?: string;
    public body?: UpdatePrivateProviderMetadataRequestBody;
    public constructor(clientRequestId?: string, providerName?: string) { 
        this['Client-Request-Id'] = clientRequestId;
        this['provider_name'] = providerName;
    }
    public withClientRequestId(clientRequestId: string): UpdatePrivateProviderMetadataRequest {
        this['Client-Request-Id'] = clientRequestId;
        return this;
    }
    public set clientRequestId(clientRequestId: string  | undefined) {
        this['Client-Request-Id'] = clientRequestId;
    }
    public get clientRequestId(): string | undefined {
        return this['Client-Request-Id'];
    }
    public withProviderName(providerName: string): UpdatePrivateProviderMetadataRequest {
        this['provider_name'] = providerName;
        return this;
    }
    public set providerName(providerName: string  | undefined) {
        this['provider_name'] = providerName;
    }
    public get providerName(): string | undefined {
        return this['provider_name'];
    }
    public withBody(body: UpdatePrivateProviderMetadataRequestBody): UpdatePrivateProviderMetadataRequest {
        this['body'] = body;
        return this;
    }
}