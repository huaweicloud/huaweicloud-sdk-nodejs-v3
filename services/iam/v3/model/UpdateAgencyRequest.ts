import { UpdateAgencyRequestBody } from './UpdateAgencyRequestBody';


export class UpdateAgencyRequest {
    private 'agency_id'?: string;
    public body?: UpdateAgencyRequestBody;
    public constructor(agencyId?: string) { 
        this['agency_id'] = agencyId;
    }
    public withAgencyId(agencyId: string): UpdateAgencyRequest {
        this['agency_id'] = agencyId;
        return this;
    }
    public set agencyId(agencyId: string  | undefined) {
        this['agency_id'] = agencyId;
    }
    public get agencyId(): string | undefined {
        return this['agency_id'];
    }
    public withBody(body: UpdateAgencyRequestBody): UpdateAgencyRequest {
        this['body'] = body;
        return this;
    }
}