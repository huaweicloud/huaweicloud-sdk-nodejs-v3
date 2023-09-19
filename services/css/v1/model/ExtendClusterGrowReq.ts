

export class ExtendClusterGrowReq {
    public modifySize?: number;
    public constructor(modifySize?: number) { 
        this['modifySize'] = modifySize;
    }
    public withModifySize(modifySize: number): ExtendClusterGrowReq {
        this['modifySize'] = modifySize;
        return this;
    }
}