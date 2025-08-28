import { CreateShareConnectionsRequestBody } from './CreateShareConnectionsRequestBody';


export class CreateShareConnectionsRequest {
    private 'X-Language'?: string;
    public body?: CreateShareConnectionsRequestBody;
    public constructor() { 
    }
    public withXLanguage(xLanguage: string): CreateShareConnectionsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withBody(body: CreateShareConnectionsRequestBody): CreateShareConnectionsRequest {
        this['body'] = body;
        return this;
    }
}