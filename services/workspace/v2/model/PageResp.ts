

export class PageResp {
    public count?: number;
    public constructor() { 
    }
    public withCount(count: number): PageResp {
        this['count'] = count;
        return this;
    }
}