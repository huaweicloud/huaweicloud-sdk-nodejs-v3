

export class InitExecuteTaskInfo {
    private 'release_dev'?: string;
    private 'version_uri'?: string;
    private 'is_query'?: boolean;
    public constructor() { 
    }
    public withReleaseDev(releaseDev: string): InitExecuteTaskInfo {
        this['release_dev'] = releaseDev;
        return this;
    }
    public set releaseDev(releaseDev: string  | undefined) {
        this['release_dev'] = releaseDev;
    }
    public get releaseDev(): string | undefined {
        return this['release_dev'];
    }
    public withVersionUri(versionUri: string): InitExecuteTaskInfo {
        this['version_uri'] = versionUri;
        return this;
    }
    public set versionUri(versionUri: string  | undefined) {
        this['version_uri'] = versionUri;
    }
    public get versionUri(): string | undefined {
        return this['version_uri'];
    }
    public withIsQuery(isQuery: boolean): InitExecuteTaskInfo {
        this['is_query'] = isQuery;
        return this;
    }
    public set isQuery(isQuery: boolean  | undefined) {
        this['is_query'] = isQuery;
    }
    public get isQuery(): boolean | undefined {
        return this['is_query'];
    }
}