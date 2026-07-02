

export class BatchChangeInstanceSpecificationRequestBody {
    private 'instance_ids'?: Array<string>;
    private 'spec_code'?: string;
    private 'is_auto_pay'?: string;
    public constructor(instanceIds?: Array<string>, specCode?: string) { 
        this['instance_ids'] = instanceIds;
        this['spec_code'] = specCode;
    }
    public withInstanceIds(instanceIds: Array<string>): BatchChangeInstanceSpecificationRequestBody {
        this['instance_ids'] = instanceIds;
        return this;
    }
    public set instanceIds(instanceIds: Array<string>  | undefined) {
        this['instance_ids'] = instanceIds;
    }
    public get instanceIds(): Array<string> | undefined {
        return this['instance_ids'];
    }
    public withSpecCode(specCode: string): BatchChangeInstanceSpecificationRequestBody {
        this['spec_code'] = specCode;
        return this;
    }
    public set specCode(specCode: string  | undefined) {
        this['spec_code'] = specCode;
    }
    public get specCode(): string | undefined {
        return this['spec_code'];
    }
    public withIsAutoPay(isAutoPay: string): BatchChangeInstanceSpecificationRequestBody {
        this['is_auto_pay'] = isAutoPay;
        return this;
    }
    public set isAutoPay(isAutoPay: string  | undefined) {
        this['is_auto_pay'] = isAutoPay;
    }
    public get isAutoPay(): string | undefined {
        return this['is_auto_pay'];
    }
}