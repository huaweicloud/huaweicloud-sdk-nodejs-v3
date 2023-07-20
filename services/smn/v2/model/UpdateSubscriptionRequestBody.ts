

export class UpdateSubscriptionRequestBody {
    public remark?: string;
    public constructor(remark?: string) { 
        this['remark'] = remark;
    }
    public withRemark(remark: string): UpdateSubscriptionRequestBody {
        this['remark'] = remark;
        return this;
    }
}