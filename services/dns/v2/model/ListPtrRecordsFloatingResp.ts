import { PageLink } from './PageLink';
import { Tag } from './Tag';


export class ListPtrRecordsFloatingResp {
    public id?: string;
    public ptrdname?: string;
    public description?: string;
    public ttl?: number;
    public address?: string;
    public status?: string;
    public action?: string;
    public links?: PageLink;
    public tags?: Array<Tag>;
    private 'enterprise_project_id'?: string;
    public constructor() { 
    }
    public withId(id: string): ListPtrRecordsFloatingResp {
        this['id'] = id;
        return this;
    }
    public withPtrdname(ptrdname: string): ListPtrRecordsFloatingResp {
        this['ptrdname'] = ptrdname;
        return this;
    }
    public withDescription(description: string): ListPtrRecordsFloatingResp {
        this['description'] = description;
        return this;
    }
    public withTtl(ttl: number): ListPtrRecordsFloatingResp {
        this['ttl'] = ttl;
        return this;
    }
    public withAddress(address: string): ListPtrRecordsFloatingResp {
        this['address'] = address;
        return this;
    }
    public withStatus(status: string): ListPtrRecordsFloatingResp {
        this['status'] = status;
        return this;
    }
    public withAction(action: string): ListPtrRecordsFloatingResp {
        this['action'] = action;
        return this;
    }
    public withLinks(links: PageLink): ListPtrRecordsFloatingResp {
        this['links'] = links;
        return this;
    }
    public withTags(tags: Array<Tag>): ListPtrRecordsFloatingResp {
        this['tags'] = tags;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListPtrRecordsFloatingResp {
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