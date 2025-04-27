import { PublicIpReq } from './PublicIpReq';
import { Tag } from './Tag';


export class CreatePtrRequestBody {
    public publicip?: PublicIpReq;
    public ptrdnames?: Array<string>;
    public description?: string;
    public ttl?: number;
    public tags?: Array<Tag>;
    private 'enterprise_project_id'?: string;
    public constructor(ptrdnames?: Array<string>) { 
        this['ptrdnames'] = ptrdnames;
    }
    public withPublicip(publicip: PublicIpReq): CreatePtrRequestBody {
        this['publicip'] = publicip;
        return this;
    }
    public withPtrdnames(ptrdnames: Array<string>): CreatePtrRequestBody {
        this['ptrdnames'] = ptrdnames;
        return this;
    }
    public withDescription(description: string): CreatePtrRequestBody {
        this['description'] = description;
        return this;
    }
    public withTtl(ttl: number): CreatePtrRequestBody {
        this['ttl'] = ttl;
        return this;
    }
    public withTags(tags: Array<Tag>): CreatePtrRequestBody {
        this['tags'] = tags;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreatePtrRequestBody {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
}