import { DownloadDdlLogsRequestBody } from './DownloadDdlLogsRequestBody';


export class DownloadDdlLogsRequest {
    private 'X-Language'?: string;
    private 'instance_id'?: string;
    public body?: DownloadDdlLogsRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: string): DownloadDdlLogsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): DownloadDdlLogsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: DownloadDdlLogsRequestBody): DownloadDdlLogsRequest {
        this['body'] = body;
        return this;
    }
}