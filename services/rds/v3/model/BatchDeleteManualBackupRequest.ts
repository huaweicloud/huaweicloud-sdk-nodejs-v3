import { BatchDeleteBackupRequestBody } from './BatchDeleteBackupRequestBody';


export class BatchDeleteManualBackupRequest {
    private 'X-Language'?: string;
    public body?: BatchDeleteBackupRequestBody;
    public constructor() { 
    }
    public withXLanguage(xLanguage: string): BatchDeleteManualBackupRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withBody(body: BatchDeleteBackupRequestBody): BatchDeleteManualBackupRequest {
        this['body'] = body;
        return this;
    }
}