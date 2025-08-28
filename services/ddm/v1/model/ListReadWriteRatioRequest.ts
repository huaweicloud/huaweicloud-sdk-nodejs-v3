

export class ListReadWriteRatioRequest {
    private 'instance_id'?: string;
    public curPage?: string;
    public perPage?: string;
    public startDate?: string;
    public endDate?: string;
    public constructor(instanceId?: string, curPage?: string, perPage?: string, startDate?: string, endDate?: string) { 
        this['instance_id'] = instanceId;
        this['curPage'] = curPage;
        this['perPage'] = perPage;
        this['startDate'] = startDate;
        this['endDate'] = endDate;
    }
    public withInstanceId(instanceId: string): ListReadWriteRatioRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withCurPage(curPage: string): ListReadWriteRatioRequest {
        this['curPage'] = curPage;
        return this;
    }
    public withPerPage(perPage: string): ListReadWriteRatioRequest {
        this['perPage'] = perPage;
        return this;
    }
    public withStartDate(startDate: string): ListReadWriteRatioRequest {
        this['startDate'] = startDate;
        return this;
    }
    public withEndDate(endDate: string): ListReadWriteRatioRequest {
        this['endDate'] = endDate;
        return this;
    }
}