import { AddClientIDToOIDCProviderReqBody } from './AddClientIDToOIDCProviderReqBody';


export class AddClientIDToOIDCProviderV5Request {
    private 'provider_id'?: string;
    public body?: AddClientIDToOIDCProviderReqBody;
    public constructor(providerId?: string) { 
        this['provider_id'] = providerId;
    }
    public withProviderId(providerId: string): AddClientIDToOIDCProviderV5Request {
        this['provider_id'] = providerId;
        return this;
    }
    public set providerId(providerId: string  | undefined) {
        this['provider_id'] = providerId;
    }
    public get providerId(): string | undefined {
        return this['provider_id'];
    }
    public withBody(body: AddClientIDToOIDCProviderReqBody): AddClientIDToOIDCProviderV5Request {
        this['body'] = body;
        return this;
    }
}