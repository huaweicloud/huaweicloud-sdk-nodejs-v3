

export class RestorePtrReq {
    public ptrdname?: object;
    public constructor(ptrdname?: object) { 
        this['ptrdname'] = ptrdname;
    }
    public withPtrdname(ptrdname: object): RestorePtrReq {
        this['ptrdname'] = ptrdname;
        return this;
    }
}