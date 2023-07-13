

export class BaseResp {
    private 'total_count': number | undefined;
    public constructor(totalCount?: any) { 
        this['total_count'] = totalCount;
    }
    public withTotalCount(totalCount: number): BaseResp {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount() {
        return this['total_count'];
    }
}