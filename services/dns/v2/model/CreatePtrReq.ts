import { Tag } from './Tag';


export class CreatePtrReq {
    public ptrdname: string;
    public description?: string;
    public ttl?: number;
    private 'enterprise_project_id'?: string | undefined;
    public tags?: Array<Tag>;
    public constructor(ptrdname?: any) { 
        this['ptrdname'] = ptrdname;
    }
    public withPtrdname(ptrdname: string): CreatePtrReq {
        this['ptrdname'] = ptrdname;
        return this;
    }
    public withDescription(description: string): CreatePtrReq {
        this['description'] = description;
        return this;
    }
    public withTtl(ttl: number): CreatePtrReq {
        this['ttl'] = ttl;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreatePtrReq {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withTags(tags: Array<Tag>): CreatePtrReq {
        this['tags'] = tags;
        return this;
    }
}