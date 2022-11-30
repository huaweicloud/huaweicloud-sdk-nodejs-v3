

export class ResizeServerExtendParam {
    public isAutoPay?: string;
    public constructor() { 
    }
    public withIsAutoPay(isAutoPay: string): ResizeServerExtendParam {
        this['isAutoPay'] = isAutoPay;
        return this;
    }
}