

export class AgencyAuthorizeInfo {
    public csms?: boolean;
    public kms?: boolean;
    public constructor() { 
    }
    public withCsms(csms: boolean): AgencyAuthorizeInfo {
        this['csms'] = csms;
        return this;
    }
    public withKms(kms: boolean): AgencyAuthorizeInfo {
        this['kms'] = kms;
        return this;
    }
}