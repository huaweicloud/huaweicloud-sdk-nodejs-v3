

export class LtslogInfo {
    public status?: string;
    public id?: string;
    private 'log_type'?: string;
    private 'log_desc'?: string;
    private 'access_url'?: string;
    public constructor(status?: string, id?: string, logType?: string, logDesc?: string, accessUrl?: string) { 
        this['status'] = status;
        this['id'] = id;
        this['log_type'] = logType;
        this['log_desc'] = logDesc;
        this['access_url'] = accessUrl;
    }
    public withStatus(status: string): LtslogInfo {
        this['status'] = status;
        return this;
    }
    public withId(id: string): LtslogInfo {
        this['id'] = id;
        return this;
    }
    public withLogType(logType: string): LtslogInfo {
        this['log_type'] = logType;
        return this;
    }
    public set logType(logType: string  | undefined) {
        this['log_type'] = logType;
    }
    public get logType(): string | undefined {
        return this['log_type'];
    }
    public withLogDesc(logDesc: string): LtslogInfo {
        this['log_desc'] = logDesc;
        return this;
    }
    public set logDesc(logDesc: string  | undefined) {
        this['log_desc'] = logDesc;
    }
    public get logDesc(): string | undefined {
        return this['log_desc'];
    }
    public withAccessUrl(accessUrl: string): LtslogInfo {
        this['access_url'] = accessUrl;
        return this;
    }
    public set accessUrl(accessUrl: string  | undefined) {
        this['access_url'] = accessUrl;
    }
    public get accessUrl(): string | undefined {
        return this['access_url'];
    }
}