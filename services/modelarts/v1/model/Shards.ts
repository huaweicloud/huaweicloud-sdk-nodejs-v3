

export class Shards {
    private 'object_urls'?: Array<string>;
    public count?: number;
    public total?: number;
    public constructor() { 
    }
    public withObjectUrls(objectUrls: Array<string>): Shards {
        this['object_urls'] = objectUrls;
        return this;
    }
    public set objectUrls(objectUrls: Array<string>  | undefined) {
        this['object_urls'] = objectUrls;
    }
    public get objectUrls(): Array<string> | undefined {
        return this['object_urls'];
    }
    public withCount(count: number): Shards {
        this['count'] = count;
        return this;
    }
    public withTotal(total: number): Shards {
        this['total'] = total;
        return this;
    }
}