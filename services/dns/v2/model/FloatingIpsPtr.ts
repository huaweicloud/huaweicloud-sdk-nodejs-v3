import { PageLink } from './PageLink';
import { PublicIpRes } from './PublicIpRes';
import { Tag } from './Tag';


export class FloatingIpsPtr {
    public ptrdnames?: Array<string>;
    public id?: string;
    public publicip?: PublicIpRes;
    public description?: string;
    public ttl?: number;
    public status?: string;
    public links?: PageLink;
    private 'enterprise_project_id'?: string;
    public tags?: Array<Tag>;
    public constructor() { 
    }
    public withPtrdnames(ptrdnames: Array<string>): FloatingIpsPtr {
        this['ptrdnames'] = ptrdnames;
        return this;
    }
    public withId(id: string): FloatingIpsPtr {
        this['id'] = id;
        return this;
    }
    public withPublicip(publicip: PublicIpRes): FloatingIpsPtr {
        this['publicip'] = publicip;
        return this;
    }
    public withDescription(description: string): FloatingIpsPtr {
        this['description'] = description;
        return this;
    }
    public withTtl(ttl: number): FloatingIpsPtr {
        this['ttl'] = ttl;
        return this;
    }
    public withStatus(status: string): FloatingIpsPtr {
        this['status'] = status;
        return this;
    }
    public withLinks(links: PageLink): FloatingIpsPtr {
        this['links'] = links;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): FloatingIpsPtr {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withTags(tags: Array<Tag>): FloatingIpsPtr {
        this['tags'] = tags;
        return this;
    }
}