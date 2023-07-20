

export class CreateColdVolumeRequestBody {
    public size?: number;
    private 'is_auto_pay'?: string;
    public constructor(size?: number) { 
        this['size'] = size;
    }
    public withSize(size: number): CreateColdVolumeRequestBody {
        this['size'] = size;
        return this;
    }
    public withIsAutoPay(isAutoPay: string): CreateColdVolumeRequestBody {
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