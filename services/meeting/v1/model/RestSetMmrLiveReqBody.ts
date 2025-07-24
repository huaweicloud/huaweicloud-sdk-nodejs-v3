

export class RestSetMmrLiveReqBody {
    public liveState?: number;
    public constructor(liveState?: number) { 
        this['liveState'] = liveState;
    }
    public withLiveState(liveState: number): RestSetMmrLiveReqBody {
        this['liveState'] = liveState;
        return this;
    }
}