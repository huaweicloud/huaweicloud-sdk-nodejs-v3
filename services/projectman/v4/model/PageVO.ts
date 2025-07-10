

export class PageVO {
    public page?: number;
    public size?: number;
    public count?: number;
    public constructor() { 
    }
    public withPage(page: number): PageVO {
        this['page'] = page;
        return this;
    }
    public withSize(size: number): PageVO {
        this['size'] = size;
        return this;
    }
    public withCount(count: number): PageVO {
        this['count'] = count;
        return this;
    }
}