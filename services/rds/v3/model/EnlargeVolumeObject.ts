

export class EnlargeVolumeObject {
    public size?: number;
    private 'is_auto_pay'?: boolean;
    public constructor(size?: number) { 
        this['size'] = size;
    }
    public withSize(size: number): EnlargeVolumeObject {
        this['size'] = size;
        return this;
    }
    public withIsAutoPay(isAutoPay: boolean): EnlargeVolumeObject {
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