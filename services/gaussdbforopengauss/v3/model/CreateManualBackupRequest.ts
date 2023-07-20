import { CreateManualBackupRequestBody } from './CreateManualBackupRequestBody';


export class CreateManualBackupRequest {
    private 'X-Language'?: string;
    public body?: CreateManualBackupRequestBody;
    public constructor() { 
    }
    public withXLanguage(xLanguage: string): CreateManualBackupRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withBody(body: CreateManualBackupRequestBody): CreateManualBackupRequest {
        this['body'] = body;
        return this;
    }
}