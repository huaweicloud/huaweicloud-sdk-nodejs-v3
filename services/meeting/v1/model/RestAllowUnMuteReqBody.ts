

export class RestAllowUnMuteReqBody {
    public allowUnmuteByOneself: number;
    public constructor(allowUnmuteByOneself?: any) { 
        this['allowUnmuteByOneself'] = allowUnmuteByOneself;
    }
    public withAllowUnmuteByOneself(allowUnmuteByOneself: number): RestAllowUnMuteReqBody {
        this['allowUnmuteByOneself'] = allowUnmuteByOneself;
        return this;
    }
}