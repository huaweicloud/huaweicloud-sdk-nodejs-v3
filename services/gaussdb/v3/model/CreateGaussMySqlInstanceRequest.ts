import { MysqlInstanceRequest } from './MysqlInstanceRequest';


export class CreateGaussMySqlInstanceRequest {
    private 'X-Language'?: string;
    public body?: MysqlInstanceRequest;
    public constructor() { 
    }
    public withXLanguage(xLanguage: string): CreateGaussMySqlInstanceRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withBody(body: MysqlInstanceRequest): CreateGaussMySqlInstanceRequest {
        this['body'] = body;
        return this;
    }
}