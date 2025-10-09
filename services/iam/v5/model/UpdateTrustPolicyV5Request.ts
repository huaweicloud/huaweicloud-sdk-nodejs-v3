import { UpdateTrustPolicyReqBody } from './UpdateTrustPolicyReqBody';


export class UpdateTrustPolicyV5Request {
    private 'agency_id'?: string;
    public body?: UpdateTrustPolicyReqBody;
    public constructor(agencyId?: string) { 
        this['agency_id'] = agencyId;
    }
    public withAgencyId(agencyId: string): UpdateTrustPolicyV5Request {
        this['agency_id'] = agencyId;
        return this;
    }
    public set agencyId(agencyId: string  | undefined) {
        this['agency_id'] = agencyId;
    }
    public get agencyId(): string | undefined {
        return this['agency_id'];
    }
    public withBody(body: UpdateTrustPolicyReqBody): UpdateTrustPolicyV5Request {
        this['body'] = body;
        return this;
    }
}