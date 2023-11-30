

export class ResizeClusterRequestBodyExtendParam {
    public decMasterFlavor?: string;
    public isAutoPay?: string;
    public constructor() { 
    }
    public withDecMasterFlavor(decMasterFlavor: string): ResizeClusterRequestBodyExtendParam {
        this['decMasterFlavor'] = decMasterFlavor;
        return this;
    }
    public withIsAutoPay(isAutoPay: string): ResizeClusterRequestBodyExtendParam {
        this['isAutoPay'] = isAutoPay;
        return this;
    }
}