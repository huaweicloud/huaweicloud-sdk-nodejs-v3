

export class UpdateInstanceRemarkRequestBody {
    public remark?: string;
    public constructor(remark?: string) { 
        this['remark'] = remark;
    }
    public withRemark(remark: string): UpdateInstanceRemarkRequestBody {
        this['remark'] = remark;
        return this;
    }
}