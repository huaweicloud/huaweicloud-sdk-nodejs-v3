import { SetBackupRetainPolicyRequestBody } from './SetBackupRetainPolicyRequestBody';


export class SetBackupRetainPolicyRequest {
    private 'Content-Type'?: string;
    private 'X-Language'?: string;
    public body?: SetBackupRetainPolicyRequestBody;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): SetBackupRetainPolicyRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withXLanguage(xLanguage: string): SetBackupRetainPolicyRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withBody(body: SetBackupRetainPolicyRequestBody): SetBackupRetainPolicyRequest {
        this['body'] = body;
        return this;
    }
}