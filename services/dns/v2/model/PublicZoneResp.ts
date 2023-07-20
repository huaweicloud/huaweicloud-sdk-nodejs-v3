import { PageLink } from './PageLink';
import { Tag } from './Tag';


export class PublicZoneResp {
    public id?: string;
    public name?: string;
    public description?: string;
    public email?: string;
    private 'zone_type'?: string;
    public ttl?: number;
    public serial?: number;
    public status?: string;
    private 'record_num'?: number;
    private 'pool_id'?: string;
    private 'project_id'?: string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    public links?: PageLink;
    public tags?: Array<Tag>;
    public masters?: Array<string>;
    private 'enterprise_project_id'?: string;
    public constructor() { 
    }
    public withId(id: string): PublicZoneResp {
        this['id'] = id;
        return this;
    }
    public withName(name: string): PublicZoneResp {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): PublicZoneResp {
        this['description'] = description;
        return this;
    }
    public withEmail(email: string): PublicZoneResp {
        this['email'] = email;
        return this;
    }
    public withZoneType(zoneType: string): PublicZoneResp {
        this['zone_type'] = zoneType;
        return this;
    }
    public set zoneType(zoneType: string  | undefined) {
        this['zone_type'] = zoneType;
    }
    public get zoneType(): string | undefined {
        return this['zone_type'];
    }
    public withTtl(ttl: number): PublicZoneResp {
        this['ttl'] = ttl;
        return this;
    }
    public withSerial(serial: number): PublicZoneResp {
        this['serial'] = serial;
        return this;
    }
    public withStatus(status: string): PublicZoneResp {
        this['status'] = status;
        return this;
    }
    public withRecordNum(recordNum: number): PublicZoneResp {
        this['record_num'] = recordNum;
        return this;
    }
    public set recordNum(recordNum: number  | undefined) {
        this['record_num'] = recordNum;
    }
    public get recordNum(): number | undefined {
        return this['record_num'];
    }
    public withPoolId(poolId: string): PublicZoneResp {
        this['pool_id'] = poolId;
        return this;
    }
    public set poolId(poolId: string  | undefined) {
        this['pool_id'] = poolId;
    }
    public get poolId(): string | undefined {
        return this['pool_id'];
    }
    public withProjectId(projectId: string): PublicZoneResp {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withCreatedAt(createdAt: string): PublicZoneResp {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): PublicZoneResp {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withLinks(links: PageLink): PublicZoneResp {
        this['links'] = links;
        return this;
    }
    public withTags(tags: Array<Tag>): PublicZoneResp {
        this['tags'] = tags;
        return this;
    }
    public withMasters(masters: Array<string>): PublicZoneResp {
        this['masters'] = masters;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): PublicZoneResp {
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