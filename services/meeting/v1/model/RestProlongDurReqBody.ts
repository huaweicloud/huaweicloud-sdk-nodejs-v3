

export class RestProlongDurReqBody {
    public auto?: number;
    public duration?: number;
    public constructor(auto?: number) { 
        this['auto'] = auto;
    }
    public withAuto(auto: number): RestProlongDurReqBody {
        this['auto'] = auto;
        return this;
    }
    public withDuration(duration: number): RestProlongDurReqBody {
        this['duration'] = duration;
        return this;
    }
}