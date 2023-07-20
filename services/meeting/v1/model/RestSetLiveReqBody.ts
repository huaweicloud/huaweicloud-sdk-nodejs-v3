

export class RestSetLiveReqBody {
    public isLive?: number;
    public constructor(isLive?: number) { 
        this['isLive'] = isLive;
    }
    public withIsLive(isLive: number): RestSetLiveReqBody {
        this['isLive'] = isLive;
        return this;
    }
}