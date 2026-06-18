import { RemoveClientIDFromOIDCProviderReqBody } from './RemoveClientIDFromOIDCProviderReqBody';


export class RemoveClientIDFromOIDCProviderV5Request {
    private 'provider_id'?: string;
    public body?: RemoveClientIDFromOIDCProviderReqBody;
    public constructor(providerId?: string) { 
        this['provider_id'] = providerId;
    }
    public withProviderId(providerId: string): RemoveClientIDFromOIDCProviderV5Request {
        this['provider_id'] = providerId;
        return this;
    }
    public set providerId(providerId: string  | undefined) {
        this['provider_id'] = providerId;
    }
    public get providerId(): string | undefined {
        return this['provider_id'];
    }
    public withBody(body: RemoveClientIDFromOIDCProviderReqBody): RemoveClientIDFromOIDCProviderV5Request {
        this['body'] = body;
        return this;
    }
}