

export class ShowHistorySessionAnalyseDownloadInfoRequest {
    private 'instance_id'?: string;
    public type?: string;
    private 'X-Language'?: string;
    public constructor(instanceId?: string, type?: string) { 
        this['instance_id'] = instanceId;
        this['type'] = type;
    }
    public withInstanceId(instanceId: string): ShowHistorySessionAnalyseDownloadInfoRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withType(type: string): ShowHistorySessionAnalyseDownloadInfoRequest {
        this['type'] = type;
        return this;
    }
    public withXLanguage(xLanguage: string): ShowHistorySessionAnalyseDownloadInfoRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
}