import { CreateDatabaseInstanceRequestBody } from './CreateDatabaseInstanceRequestBody';


export class CreateDatabaseInstanceRequest {
    private 'X-Language'?: string;
    public body?: CreateDatabaseInstanceRequestBody;
    public constructor() { 
    }
    public withXLanguage(xLanguage: string): CreateDatabaseInstanceRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withBody(body: CreateDatabaseInstanceRequestBody): CreateDatabaseInstanceRequest {
        this['body'] = body;
        return this;
    }
}