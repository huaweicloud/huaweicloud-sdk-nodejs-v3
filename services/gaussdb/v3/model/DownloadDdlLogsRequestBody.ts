

export class DownloadDdlLogsRequestBody {
    private 'log_ids'?: Array<string>;
    public constructor(logIds?: Array<string>) { 
        this['log_ids'] = logIds;
    }
    public withLogIds(logIds: Array<string>): DownloadDdlLogsRequestBody {
        this['log_ids'] = logIds;
        return this;
    }
    public set logIds(logIds: Array<string>  | undefined) {
        this['log_ids'] = logIds;
    }
    public get logIds(): Array<string> | undefined {
        return this['log_ids'];
    }
}