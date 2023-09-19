

export class UpdateFlavorReq {
    public needCheckReplica?: boolean;
    public newFlavorId?: string;
    public isAutoPay?: number;
    public constructor(newFlavorId?: string) { 
        this['newFlavorId'] = newFlavorId;
    }
    public withNeedCheckReplica(needCheckReplica: boolean): UpdateFlavorReq {
        this['needCheckReplica'] = needCheckReplica;
        return this;
    }
    public withNewFlavorId(newFlavorId: string): UpdateFlavorReq {
        this['newFlavorId'] = newFlavorId;
        return this;
    }
    public withIsAutoPay(isAutoPay: number): UpdateFlavorReq {
        this['isAutoPay'] = isAutoPay;
        return this;
    }
}