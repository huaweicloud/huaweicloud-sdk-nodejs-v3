import { OpenGaussInstanceRequestBody } from './OpenGaussInstanceRequestBody';


export class CreateGaussDbInstanceRequest {
    private 'X-Language'?: string;
    private 'Subscription-Agency'?: string;
    public body?: OpenGaussInstanceRequestBody;
    public constructor() { 
    }
    public withXLanguage(xLanguage: string): CreateGaussDbInstanceRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withSubscriptionAgency(subscriptionAgency: string): CreateGaussDbInstanceRequest {
        this['Subscription-Agency'] = subscriptionAgency;
        return this;
    }
    public set subscriptionAgency(subscriptionAgency: string  | undefined) {
        this['Subscription-Agency'] = subscriptionAgency;
    }
    public get subscriptionAgency(): string | undefined {
        return this['Subscription-Agency'];
    }
    public withBody(body: OpenGaussInstanceRequestBody): CreateGaussDbInstanceRequest {
        this['body'] = body;
        return this;
    }
}