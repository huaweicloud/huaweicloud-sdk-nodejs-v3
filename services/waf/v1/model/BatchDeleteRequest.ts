

export class BatchDeleteRequest {
    private 'app_ids'?: Array<string>;
    public constructor(appIds?: Array<string>) { 
        this['app_ids'] = appIds;
    }
    public withAppIds(appIds: Array<string>): BatchDeleteRequest {
        this['app_ids'] = appIds;
        return this;
    }
    public set appIds(appIds: Array<string>  | undefined) {
        this['app_ids'] = appIds;
    }
    public get appIds(): Array<string> | undefined {
        return this['app_ids'];
    }
}