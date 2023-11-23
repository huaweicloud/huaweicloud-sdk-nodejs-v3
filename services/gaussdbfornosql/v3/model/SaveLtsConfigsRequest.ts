import { SaveLtsConfigsRequestBody } from './SaveLtsConfigsRequestBody';


export class SaveLtsConfigsRequest {
    private 'X-Language'?: string;
    public body?: SaveLtsConfigsRequestBody;
    public constructor() { 
    }
    public withXLanguage(xLanguage: string): SaveLtsConfigsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withBody(body: SaveLtsConfigsRequestBody): SaveLtsConfigsRequest {
        this['body'] = body;
        return this;
    }
}