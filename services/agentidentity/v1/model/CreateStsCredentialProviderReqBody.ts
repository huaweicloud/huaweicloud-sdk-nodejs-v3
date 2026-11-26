import { Tag } from './Tag';


export class CreateStsCredentialProviderReqBody {
    public name?: string;
    private 'agency_urn'?: string;
    public tags?: Array<Tag>;
    public constructor(name?: string, agencyUrn?: string) { 
        this['name'] = name;
        this['agency_urn'] = agencyUrn;
    }
    public withName(name: string): CreateStsCredentialProviderReqBody {
        this['name'] = name;
        return this;
    }
    public withAgencyUrn(agencyUrn: string): CreateStsCredentialProviderReqBody {
        this['agency_urn'] = agencyUrn;
        return this;
    }
    public set agencyUrn(agencyUrn: string  | undefined) {
        this['agency_urn'] = agencyUrn;
    }
    public get agencyUrn(): string | undefined {
        return this['agency_urn'];
    }
    public withTags(tags: Array<Tag>): CreateStsCredentialProviderReqBody {
        this['tags'] = tags;
        return this;
    }
}