import { CancelShareConnectionsRequestBody } from './CancelShareConnectionsRequestBody';


export class CancelShareConnectionsRequest {
    private 'X-Language'?: string;
    public body?: CancelShareConnectionsRequestBody;
    public constructor() { 
    }
    public withXLanguage(xLanguage: string): CancelShareConnectionsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withBody(body: CancelShareConnectionsRequestBody): CancelShareConnectionsRequest {
        this['body'] = body;
        return this;
    }
}