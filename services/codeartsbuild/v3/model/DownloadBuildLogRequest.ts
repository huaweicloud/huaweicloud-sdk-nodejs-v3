

export class DownloadBuildLogRequest {
    private 'record_id'?: string;
    private 'log_level'?: string;
    public constructor(recordId?: string) { 
        this['record_id'] = recordId;
    }
    public withRecordId(recordId: string): DownloadBuildLogRequest {
        this['record_id'] = recordId;
        return this;
    }
    public set recordId(recordId: string  | undefined) {
        this['record_id'] = recordId;
    }
    public get recordId(): string | undefined {
        return this['record_id'];
    }
    public withLogLevel(logLevel: string): DownloadBuildLogRequest {
        this['log_level'] = logLevel;
        return this;
    }
    public set logLevel(logLevel: string  | undefined) {
        this['log_level'] = logLevel;
    }
    public get logLevel(): string | undefined {
        return this['log_level'];
    }
}