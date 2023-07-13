

export class ListAppDetailsRequest {
    private 'Content-Type': string | undefined;
    private 'app_name'?: string | undefined;
    private 'start_time'?: string | undefined;
    private 'end_time'?: string | undefined;
    public limit?: number;
    public offset?: number;
    public region?: string;
    private 'sort_dir'?: string | undefined;
    private 'sort_key'?: string | undefined;
    public status?: string;
    public constructor(contentType?: any) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): ListAppDetailsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withAppName(appName: string): ListAppDetailsRequest {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string | undefined) {
        this['app_name'] = appName;
    }
    public get appName() {
        return this['app_name'];
    }
    public withStartTime(startTime: string): ListAppDetailsRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListAppDetailsRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
        return this['end_time'];
    }
    public withLimit(limit: number): ListAppDetailsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListAppDetailsRequest {
        this['offset'] = offset;
        return this;
    }
    public withRegion(region: string): ListAppDetailsRequest {
        this['region'] = region;
        return this;
    }
    public withSortDir(sortDir: string): ListAppDetailsRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: string | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir() {
        return this['sort_dir'];
    }
    public withSortKey(sortKey: string): ListAppDetailsRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey() {
        return this['sort_key'];
    }
    public withStatus(status: string): ListAppDetailsRequest {
        this['status'] = status;
        return this;
    }
}