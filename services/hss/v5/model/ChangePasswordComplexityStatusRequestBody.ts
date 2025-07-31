

export class ChangePasswordComplexityStatusRequestBody {
    private 'operate_all'?: boolean;
    private 'host_ids'?: Array<string>;
    public constructor() { 
    }
    public withOperateAll(operateAll: boolean): ChangePasswordComplexityStatusRequestBody {
        this['operate_all'] = operateAll;
        return this;
    }
    public set operateAll(operateAll: boolean  | undefined) {
        this['operate_all'] = operateAll;
    }
    public get operateAll(): boolean | undefined {
        return this['operate_all'];
    }
    public withHostIds(hostIds: Array<string>): ChangePasswordComplexityStatusRequestBody {
        this['host_ids'] = hostIds;
        return this;
    }
    public set hostIds(hostIds: Array<string>  | undefined) {
        this['host_ids'] = hostIds;
    }
    public get hostIds(): Array<string> | undefined {
        return this['host_ids'];
    }
}