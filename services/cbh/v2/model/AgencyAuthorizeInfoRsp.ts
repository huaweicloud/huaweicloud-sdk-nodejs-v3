

export class AgencyAuthorizeInfoRsp {
    public csms?: boolean;
    public kms?: boolean;
    public constructor() { 
    }
    public withCsms(csms: boolean): AgencyAuthorizeInfoRsp {
        this['csms'] = csms;
        return this;
    }
    public withKms(kms: boolean): AgencyAuthorizeInfoRsp {
        this['kms'] = kms;
        return this;
    }
}