import { Tag } from './Tag';


export class CreatePublicZoneReq {
    public name?: string;
    public description?: string;
    private 'zone_type'?: string;
    public email?: string;
    public ttl?: number;
    private 'enterprise_project_id'?: string;
    public tags?: Array<Tag>;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): CreatePublicZoneReq {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreatePublicZoneReq {
        this['description'] = description;
        return this;
    }
    public withZoneType(zoneType: string): CreatePublicZoneReq {
        this['zone_type'] = zoneType;
        return this;
    }
    public set zoneType(zoneType: string  | undefined) {
        this['zone_type'] = zoneType;
    }
    public get zoneType(): string | undefined {
        return this['zone_type'];
    }
    public withEmail(email: string): CreatePublicZoneReq {
        this['email'] = email;
        return this;
    }
    public withTtl(ttl: number): CreatePublicZoneReq {
        this['ttl'] = ttl;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreatePublicZoneReq {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withTags(tags: Array<Tag>): CreatePublicZoneReq {
        this['tags'] = tags;
        return this;
    }
}