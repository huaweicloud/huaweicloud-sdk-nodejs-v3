

export class RestMuteReqBody {
    public isMute?: number;
    public allowUnmuteByOneself?: number;
    public constructor(isMute?: number) { 
        this['isMute'] = isMute;
    }
    public withIsMute(isMute: number): RestMuteReqBody {
        this['isMute'] = isMute;
        return this;
    }
    public withAllowUnmuteByOneself(allowUnmuteByOneself: number): RestMuteReqBody {
        this['allowUnmuteByOneself'] = allowUnmuteByOneself;
        return this;
    }
}