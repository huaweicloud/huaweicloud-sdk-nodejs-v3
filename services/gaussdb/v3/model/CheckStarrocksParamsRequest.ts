import { CheckStarrocksParamsRequestBody } from './CheckStarrocksParamsRequestBody';


export class CheckStarrocksParamsRequest {
    private 'X-Language'?: string;
    public body?: CheckStarrocksParamsRequestBody;
    public constructor() { 
    }
    public withXLanguage(xLanguage: string): CheckStarrocksParamsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withBody(body: CheckStarrocksParamsRequestBody): CheckStarrocksParamsRequest {
        this['body'] = body;
        return this;
    }
}