

export class CertRevokeConfigRequestBody {
    public userId?: string;
    public agencyId?: string;
    public constructor() { 
    }
    public withUserId(userId: string): CertRevokeConfigRequestBody {
        this['userId'] = userId;
        return this;
    }
    public withAgencyId(agencyId: string): CertRevokeConfigRequestBody {
        this['agencyId'] = agencyId;
        return this;
    }
}