

export class UpdateFlavorByTypeReq {
    public needCheckReplica?: boolean;
    public newFlavorId?: string;
    public isAutoPay?: number;
    public constructor(newFlavorId?: string) { 
        this['newFlavorId'] = newFlavorId;
    }
    public withNeedCheckReplica(needCheckReplica: boolean): UpdateFlavorByTypeReq {
        this['needCheckReplica'] = needCheckReplica;
        return this;
    }
    public withNewFlavorId(newFlavorId: string): UpdateFlavorByTypeReq {
        this['newFlavorId'] = newFlavorId;
        return this;
    }
    public withIsAutoPay(isAutoPay: number): UpdateFlavorByTypeReq {
        this['isAutoPay'] = isAutoPay;
        return this;
    }
}