import { ResizeInstanceOption } from './ResizeInstanceOption';


export class ResizeInstanceRequestBody {
    public resize?: ResizeInstanceOption;
    private 'is_auto_pay'?: boolean;
    private 'is_force_resize'?: boolean;
    public constructor(resize?: ResizeInstanceOption) { 
        this['resize'] = resize;
    }
    public withResize(resize: ResizeInstanceOption): ResizeInstanceRequestBody {
        this['resize'] = resize;
        return this;
    }
    public withIsAutoPay(isAutoPay: boolean): ResizeInstanceRequestBody {
        this['is_auto_pay'] = isAutoPay;
        return this;
    }
    public set isAutoPay(isAutoPay: boolean  | undefined) {
        this['is_auto_pay'] = isAutoPay;
    }
    public get isAutoPay(): boolean | undefined {
        return this['is_auto_pay'];
    }
    public withIsForceResize(isForceResize: boolean): ResizeInstanceRequestBody {
        this['is_force_resize'] = isForceResize;
        return this;
    }
    public set isForceResize(isForceResize: boolean  | undefined) {
        this['is_force_resize'] = isForceResize;
    }
    public get isForceResize(): boolean | undefined {
        return this['is_force_resize'];
    }
}