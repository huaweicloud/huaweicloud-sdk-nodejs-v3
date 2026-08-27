import { BatchUpdateBackupPolicyRequestBody } from './BatchUpdateBackupPolicyRequestBody';


export class BatchUpdateBackupPolicyRequest {
    private 'X-Language'?: string;
    public body?: BatchUpdateBackupPolicyRequestBody;
    public constructor() { 
    }
    public withXLanguage(xLanguage: string): BatchUpdateBackupPolicyRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withBody(body: BatchUpdateBackupPolicyRequestBody): BatchUpdateBackupPolicyRequest {
        this['body'] = body;
        return this;
    }
}