

export class RestBatchHandsUpReqBody {
    public handsState: number;
    public pids: Array<string>;
    public constructor(handsState?: any, pids?: any) { 
        this['handsState'] = handsState;
        this['pids'] = pids;
    }
    public withHandsState(handsState: number): RestBatchHandsUpReqBody {
        this['handsState'] = handsState;
        return this;
    }
    public withPids(pids: Array<string>): RestBatchHandsUpReqBody {
        this['pids'] = pids;
        return this;
    }
}