

export class ResizeFlavorReq {
    private 'spec_code'?: string;
    private 'group_id'?: string;
    private 'is_auto_pay'?: boolean;
    public constructor(specCode?: string) { 
        this['spec_code'] = specCode;
    }
    public withSpecCode(specCode: string): ResizeFlavorReq {
        this['spec_code'] = specCode;
        return this;
    }
    public set specCode(specCode: string  | undefined) {
        this['spec_code'] = specCode;
    }
    public get specCode(): string | undefined {
        return this['spec_code'];
    }
    public withGroupId(groupId: string): ResizeFlavorReq {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withIsAutoPay(isAutoPay: boolean): ResizeFlavorReq {
        this['is_auto_pay'] = isAutoPay;
        return this;
    }
    public set isAutoPay(isAutoPay: boolean  | undefined) {
        this['is_auto_pay'] = isAutoPay;
    }
    public get isAutoPay(): boolean | undefined {
        return this['is_auto_pay'];
    }
}