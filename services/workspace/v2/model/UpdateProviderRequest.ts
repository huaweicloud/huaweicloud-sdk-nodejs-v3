import { UpdateProviderReq } from './UpdateProviderReq';


export class UpdateProviderRequest {
    private 'provider_id'?: string;
    public body?: UpdateProviderReq;
    public constructor(providerId?: string) { 
        this['provider_id'] = providerId;
    }
    public withProviderId(providerId: string): UpdateProviderRequest {
        this['provider_id'] = providerId;
        return this;
    }
    public set providerId(providerId: string  | undefined) {
        this['provider_id'] = providerId;
    }
    public get providerId(): string | undefined {
        return this['provider_id'];
    }
    public withBody(body: UpdateProviderReq): UpdateProviderRequest {
        this['body'] = body;
        return this;
    }
}