import { BatchDeleteBackupRequestBody } from './BatchDeleteBackupRequestBody';


export class BatchDeleteBackupRequest {
    private 'X-Language'?: string;
    public body?: BatchDeleteBackupRequestBody;
    public constructor() { 
    }
    public withXLanguage(xLanguage: string): BatchDeleteBackupRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withBody(body: BatchDeleteBackupRequestBody): BatchDeleteBackupRequest {
        this['body'] = body;
        return this;
    }
}