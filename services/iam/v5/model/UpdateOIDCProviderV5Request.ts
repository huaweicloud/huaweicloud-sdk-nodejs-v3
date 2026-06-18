import { UpdateOIDCProviderReqBody } from './UpdateOIDCProviderReqBody';


export class UpdateOIDCProviderV5Request {
    private 'provider_id'?: string;
    public body?: UpdateOIDCProviderReqBody;
    public constructor(providerId?: string) { 
        this['provider_id'] = providerId;
    }
    public withProviderId(providerId: string): UpdateOIDCProviderV5Request {
        this['provider_id'] = providerId;
        return this;
    }
    public set providerId(providerId: string  | undefined) {
        this['provider_id'] = providerId;
    }
    public get providerId(): string | undefined {
        return this['provider_id'];
    }
    public withBody(body: UpdateOIDCProviderReqBody): UpdateOIDCProviderV5Request {
        this['body'] = body;
        return this;
    }
}