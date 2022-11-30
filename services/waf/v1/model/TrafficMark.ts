

export class TrafficMark {
    public sip?: Array<string>;
    public cookie?: string;
    public params?: string;
    public constructor() { 
    }
    public withSip(sip: Array<string>): TrafficMark {
        this['sip'] = sip;
        return this;
    }
    public withCookie(cookie: string): TrafficMark {
        this['cookie'] = cookie;
        return this;
    }
    public withParams(params: string): TrafficMark {
        this['params'] = params;
        return this;
    }
}