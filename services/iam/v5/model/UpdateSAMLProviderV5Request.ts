import { UpdateSAMLProviderReqBody } from './UpdateSAMLProviderReqBody';


export class UpdateSAMLProviderV5Request {
    private 'provider_id'?: string;
    public body?: UpdateSAMLProviderReqBody;
    public constructor(providerId?: string) { 
        this['provider_id'] = providerId;
    }
    public withProviderId(providerId: string): UpdateSAMLProviderV5Request {
        this['provider_id'] = providerId;
        return this;
    }
    public set providerId(providerId: string  | undefined) {
        this['provider_id'] = providerId;
    }
    public get providerId(): string | undefined {
        return this['provider_id'];
    }
    public withBody(body: UpdateSAMLProviderReqBody): UpdateSAMLProviderV5Request {
        this['body'] = body;
        return this;
    }
}