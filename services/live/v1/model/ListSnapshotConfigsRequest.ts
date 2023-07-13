

export class ListSnapshotConfigsRequest {
    public domain: string;
    private 'app_name'?: string | undefined;
    public limit?: number;
    public offset?: number;
    public constructor(domain?: any) { 
        this['domain'] = domain;
    }
    public withDomain(domain: string): ListSnapshotConfigsRequest {
        this['domain'] = domain;
        return this;
    }
    public withAppName(appName: string): ListSnapshotConfigsRequest {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string | undefined) {
        this['app_name'] = appName;
    }
    public get appName() {
        return this['app_name'];
    }
    public withLimit(limit: number): ListSnapshotConfigsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListSnapshotConfigsRequest {
        this['offset'] = offset;
        return this;
    }
}