

export class GlobalConnectionBandwidthQuotas {
    public quota?: number;
    public used?: number;
    public type?: GlobalConnectionBandwidthQuotasTypeEnum | string;
    public constructor() { 
    }
    public withQuota(quota: number): GlobalConnectionBandwidthQuotas {
        this['quota'] = quota;
        return this;
    }
    public withUsed(used: number): GlobalConnectionBandwidthQuotas {
        this['used'] = used;
        return this;
    }
    public withType(type: GlobalConnectionBandwidthQuotasTypeEnum | string): GlobalConnectionBandwidthQuotas {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum GlobalConnectionBandwidthQuotasTypeEnum {
    GCB_SIZE = 'gcb.size',
    GCB_COUNT = 'gcb.count'
}
