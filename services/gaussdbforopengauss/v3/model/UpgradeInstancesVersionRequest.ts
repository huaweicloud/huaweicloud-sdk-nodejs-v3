import { GaussDBUpgradeInstancesVersionRequest } from './GaussDBUpgradeInstancesVersionRequest';


export class UpgradeInstancesVersionRequest {
    private 'X-Language'?: string;
    public body?: GaussDBUpgradeInstancesVersionRequest;
    public constructor() { 
    }
    public withXLanguage(xLanguage: string): UpgradeInstancesVersionRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withBody(body: GaussDBUpgradeInstancesVersionRequest): UpgradeInstancesVersionRequest {
        this['body'] = body;
        return this;
    }
}