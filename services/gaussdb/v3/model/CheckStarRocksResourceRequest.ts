import { ResourceCheck } from './ResourceCheck';


export class CheckStarRocksResourceRequest {
    private 'X-Language'?: string;
    public body?: ResourceCheck;
    public constructor() { 
    }
    public withXLanguage(xLanguage: string): CheckStarRocksResourceRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withBody(body: ResourceCheck): CheckStarRocksResourceRequest {
        this['body'] = body;
        return this;
    }
}