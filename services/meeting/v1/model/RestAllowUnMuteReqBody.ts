

export class RestAllowUnMuteReqBody {
    public allowUnmuteByOneself?: number;
    public constructor(allowUnmuteByOneself?: number) { 
        this['allowUnmuteByOneself'] = allowUnmuteByOneself;
    }
    public withAllowUnmuteByOneself(allowUnmuteByOneself: number): RestAllowUnMuteReqBody {
        this['allowUnmuteByOneself'] = allowUnmuteByOneself;
        return this;
    }
}