import { CreateConnectionReq } from './CreateConnectionReq';


export class CreateConnectionRequest {
    private 'X-Language'?: string;
    public body?: CreateConnectionReq;
    public constructor() { 
    }
    public withXLanguage(xLanguage: string): CreateConnectionRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withBody(body: CreateConnectionReq): CreateConnectionRequest {
        this['body'] = body;
        return this;
    }
}