

export class BatchAccessKeysRequestBody {
    private 'access_key_ids'?: Array<string>;
    public constructor(accessKeyIds?: Array<string>) { 
        this['access_key_ids'] = accessKeyIds;
    }
    public withAccessKeyIds(accessKeyIds: Array<string>): BatchAccessKeysRequestBody {
        this['access_key_ids'] = accessKeyIds;
        return this;
    }
    public set accessKeyIds(accessKeyIds: Array<string>  | undefined) {
        this['access_key_ids'] = accessKeyIds;
    }
    public get accessKeyIds(): Array<string> | undefined {
        return this['access_key_ids'];
    }
}