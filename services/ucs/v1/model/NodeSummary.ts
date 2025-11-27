

export class NodeSummary {
    public totalNum?: number;
    public readyNum?: number;
    public constructor() { 
    }
    public withTotalNum(totalNum: number): NodeSummary {
        this['totalNum'] = totalNum;
        return this;
    }
    public withReadyNum(readyNum: number): NodeSummary {
        this['readyNum'] = readyNum;
        return this;
    }
}