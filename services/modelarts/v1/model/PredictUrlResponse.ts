

export class PredictUrlResponse {
    public type?: string;
    public urls?: Array<string>;
    public constructor() { 
    }
    public withType(type: string): PredictUrlResponse {
        this['type'] = type;
        return this;
    }
    public withUrls(urls: Array<string>): PredictUrlResponse {
        this['urls'] = urls;
        return this;
    }
}