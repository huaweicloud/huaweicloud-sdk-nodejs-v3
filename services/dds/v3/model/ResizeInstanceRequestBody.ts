import { ResizeInstanceOption } from './ResizeInstanceOption';


export class ResizeInstanceRequestBody {
    public resize?: ResizeInstanceOption;
    private 'is_auto_pay'?: boolean;
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
}