

export class ResizeClusterRequestExtendParam {
    public decMasterFlavor?: string;
    public isAutoPay?: string;
    public constructor() { 
    }
    public withDecMasterFlavor(decMasterFlavor: string): ResizeClusterRequestExtendParam {
        this['decMasterFlavor'] = decMasterFlavor;
        return this;
    }
    public withIsAutoPay(isAutoPay: string): ResizeClusterRequestExtendParam {
        this['isAutoPay'] = isAutoPay;
        return this;
    }
}