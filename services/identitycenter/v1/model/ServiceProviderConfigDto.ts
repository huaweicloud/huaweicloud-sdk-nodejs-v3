import { ConsumersDto } from './ConsumersDto';


export class ServiceProviderConfigDto {
    public audience?: string;
    private 'require_request_signature'?: boolean;
    public consumers?: Array<ConsumersDto>;
    private 'start_url'?: string;
    public constructor(audience?: string, consumers?: Array<ConsumersDto>) { 
        this['audience'] = audience;
        this['consumers'] = consumers;
    }
    public withAudience(audience: string): ServiceProviderConfigDto {
        this['audience'] = audience;
        return this;
    }
    public withRequireRequestSignature(requireRequestSignature: boolean): ServiceProviderConfigDto {
        this['require_request_signature'] = requireRequestSignature;
        return this;
    }
    public set requireRequestSignature(requireRequestSignature: boolean  | undefined) {
        this['require_request_signature'] = requireRequestSignature;
    }
    public get requireRequestSignature(): boolean | undefined {
        return this['require_request_signature'];
    }
    public withConsumers(consumers: Array<ConsumersDto>): ServiceProviderConfigDto {
        this['consumers'] = consumers;
        return this;
    }
    public withStartUrl(startUrl: string): ServiceProviderConfigDto {
        this['start_url'] = startUrl;
        return this;
    }
    public set startUrl(startUrl: string  | undefined) {
        this['start_url'] = startUrl;
    }
    public get startUrl(): string | undefined {
        return this['start_url'];
    }
}