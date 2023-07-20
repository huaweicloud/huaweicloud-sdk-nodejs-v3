

export class ModifyVolumeRequestBody {
    public size?: number;
    private 'is_auto_pay'?: boolean;
    public constructor(size?: number) { 
        this['size'] = size;
    }
    public withSize(size: number): ModifyVolumeRequestBody {
        this['size'] = size;
        return this;
    }
    public withIsAutoPay(isAutoPay: boolean): ModifyVolumeRequestBody {
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