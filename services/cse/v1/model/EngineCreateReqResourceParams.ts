

export class EngineCreateReqResourceParams {
    public isAutoRenew?: number;
    public constructor() { 
    }
    public withIsAutoRenew(isAutoRenew: number): EngineCreateReqResourceParams {
        this['isAutoRenew'] = isAutoRenew;
        return this;
    }
}