import { ProductInfo } from './ProductInfo';


export class CheckProductHealthyRequest {
    private 'X-Language'?: string;
    public body?: ProductInfo;
    public constructor() { 
    }
    public withXLanguage(xLanguage: string): CheckProductHealthyRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withBody(body: ProductInfo): CheckProductHealthyRequest {
        this['body'] = body;
        return this;
    }
}