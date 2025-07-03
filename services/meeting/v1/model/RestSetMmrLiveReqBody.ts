

export class RestSetMmrLiveReqBody {
    public liveState?: number;
    public constructor() { 
    }
    public withLiveState(liveState: number): RestSetMmrLiveReqBody {
        this['liveState'] = liveState;
        return this;
    }
}