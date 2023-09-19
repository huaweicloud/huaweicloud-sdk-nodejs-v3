

export class ShrinkNodeReq {
    public reducedNodeNum?: number;
    public type?: string;
    public constructor(reducedNodeNum?: number, type?: string) { 
        this['reducedNodeNum'] = reducedNodeNum;
        this['type'] = type;
    }
    public withReducedNodeNum(reducedNodeNum: number): ShrinkNodeReq {
        this['reducedNodeNum'] = reducedNodeNum;
        return this;
    }
    public withType(type: string): ShrinkNodeReq {
        this['type'] = type;
        return this;
    }
}