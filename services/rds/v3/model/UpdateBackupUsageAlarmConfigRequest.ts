import { UpdateBackupUsageAlarmConfigRequestBody } from './UpdateBackupUsageAlarmConfigRequestBody';


export class UpdateBackupUsageAlarmConfigRequest {
    private 'X-Language'?: string;
    public body?: UpdateBackupUsageAlarmConfigRequestBody;
    public constructor() { 
    }
    public withXLanguage(xLanguage: string): UpdateBackupUsageAlarmConfigRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withBody(body: UpdateBackupUsageAlarmConfigRequestBody): UpdateBackupUsageAlarmConfigRequest {
        this['body'] = body;
        return this;
    }
}