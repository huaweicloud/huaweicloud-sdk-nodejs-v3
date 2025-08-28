

export class UpdateFlavorReq {
    public newFlavorId?: string;
    public operationType?: string;
    public needCheckReplica?: boolean;
    public isAutoPay?: number;
    public needCheckClusterStatus?: boolean;
    public clusterLoadCheck?: boolean;
    public constructor(newFlavorId?: string) { 
        this['newFlavorId'] = newFlavorId;
    }
    public withNewFlavorId(newFlavorId: string): UpdateFlavorReq {
        this['newFlavorId'] = newFlavorId;
        return this;
    }
    public withOperationType(operationType: string): UpdateFlavorReq {
        this['operationType'] = operationType;
        return this;
    }
    public withNeedCheckReplica(needCheckReplica: boolean): UpdateFlavorReq {
        this['needCheckReplica'] = needCheckReplica;
        return this;
    }
    public withIsAutoPay(isAutoPay: number): UpdateFlavorReq {
        this['isAutoPay'] = isAutoPay;
        return this;
    }
    public withNeedCheckClusterStatus(needCheckClusterStatus: boolean): UpdateFlavorReq {
        this['needCheckClusterStatus'] = needCheckClusterStatus;
        return this;
    }
    public withClusterLoadCheck(clusterLoadCheck: boolean): UpdateFlavorReq {
        this['clusterLoadCheck'] = clusterLoadCheck;
        return this;
    }
}