import { MysqlCreateBackupRequest } from './MysqlCreateBackupRequest';


export class CreateGaussMySqlBackupRequest {
    private 'X-Language'?: string;
    public body?: MysqlCreateBackupRequest;
    public constructor() { 
    }
    public withXLanguage(xLanguage: string): CreateGaussMySqlBackupRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withBody(body: MysqlCreateBackupRequest): CreateGaussMySqlBackupRequest {
        this['body'] = body;
        return this;
    }
}