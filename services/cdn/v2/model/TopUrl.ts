

export class TopUrl {
    public enable?: boolean;
    public limit?: number;
    private 'sort_by_code'?: boolean;
    public constructor() { 
    }
    public withEnable(enable: boolean): TopUrl {
        this['enable'] = enable;
        return this;
    }
    public withLimit(limit: number): TopUrl {
        this['limit'] = limit;
        return this;
    }
    public withSortByCode(sortByCode: boolean): TopUrl {
        this['sort_by_code'] = sortByCode;
        return this;
    }
    public set sortByCode(sortByCode: boolean  | undefined) {
        this['sort_by_code'] = sortByCode;
    }
    public get sortByCode(): boolean | undefined {
        return this['sort_by_code'];
    }
}