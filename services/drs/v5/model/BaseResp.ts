

export class BaseResp {
    private 'total_count'?: number;
    public constructor(totalCount?: number) { 
        this['total_count'] = totalCount;
    }
    public withTotalCount(totalCount: number): BaseResp {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}