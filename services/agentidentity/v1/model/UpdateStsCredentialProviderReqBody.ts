import { Tag } from './Tag';


export class UpdateStsCredentialProviderReqBody {
    private 'agency_urn'?: string;
    public tags?: Array<Tag>;
    public constructor() { 
    }
    public withAgencyUrn(agencyUrn: string): UpdateStsCredentialProviderReqBody {
        this['agency_urn'] = agencyUrn;
        return this;
    }
    public set agencyUrn(agencyUrn: string  | undefined) {
        this['agency_urn'] = agencyUrn;
    }
    public get agencyUrn(): string | undefined {
        return this['agency_urn'];
    }
    public withTags(tags: Array<Tag>): UpdateStsCredentialProviderReqBody {
        this['tags'] = tags;
        return this;
    }
}