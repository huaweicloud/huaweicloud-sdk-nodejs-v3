import { PageLink } from './PageLink';
import { RouterWithStatus } from './RouterWithStatus';
import { Tag } from './Tag';


export class PrivateZoneResp {
    public id?: string;
    public name?: string;
    public description?: string;
    public email?: string;
    private 'zone_type'?: string | undefined;
    public ttl?: number;
    public serial?: number;
    public status?: string;
    private 'record_num'?: number | undefined;
    private 'proxy_pattern'?: string | undefined;
    private 'pool_id'?: string | undefined;
    private 'project_id'?: string | undefined;
    private 'created_at'?: string | undefined;
    private 'updated_at'?: string | undefined;
    public links?: PageLink;
    public tags?: Array<Tag>;
    public masters?: Array<string>;
    public routers?: Array<RouterWithStatus>;
    private 'enterprise_project_id'?: string | undefined;
    public constructor() { 
    }
    public withId(id: string): PrivateZoneResp {
        this['id'] = id;
        return this;
    }
    public withName(name: string): PrivateZoneResp {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): PrivateZoneResp {
        this['description'] = description;
        return this;
    }
    public withEmail(email: string): PrivateZoneResp {
        this['email'] = email;
        return this;
    }
    public withZoneType(zoneType: string): PrivateZoneResp {
        this['zone_type'] = zoneType;
        return this;
    }
    public set zoneType(zoneType: string | undefined) {
        this['zone_type'] = zoneType;
    }
    public get zoneType() {
        return this['zone_type'];
    }
    public withTtl(ttl: number): PrivateZoneResp {
        this['ttl'] = ttl;
        return this;
    }
    public withSerial(serial: number): PrivateZoneResp {
        this['serial'] = serial;
        return this;
    }
    public withStatus(status: string): PrivateZoneResp {
        this['status'] = status;
        return this;
    }
    public withRecordNum(recordNum: number): PrivateZoneResp {
        this['record_num'] = recordNum;
        return this;
    }
    public set recordNum(recordNum: number | undefined) {
        this['record_num'] = recordNum;
    }
    public get recordNum() {
        return this['record_num'];
    }
    public withProxyPattern(proxyPattern: string): PrivateZoneResp {
        this['proxy_pattern'] = proxyPattern;
        return this;
    }
    public set proxyPattern(proxyPattern: string | undefined) {
        this['proxy_pattern'] = proxyPattern;
    }
    public get proxyPattern() {
        return this['proxy_pattern'];
    }
    public withPoolId(poolId: string): PrivateZoneResp {
        this['pool_id'] = poolId;
        return this;
    }
    public set poolId(poolId: string | undefined) {
        this['pool_id'] = poolId;
    }
    public get poolId() {
        return this['pool_id'];
    }
    public withProjectId(projectId: string): PrivateZoneResp {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withCreatedAt(createdAt: string): PrivateZoneResp {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): PrivateZoneResp {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt() {
        return this['updated_at'];
    }
    public withLinks(links: PageLink): PrivateZoneResp {
        this['links'] = links;
        return this;
    }
    public withTags(tags: Array<Tag>): PrivateZoneResp {
        this['tags'] = tags;
        return this;
    }
    public withMasters(masters: Array<string>): PrivateZoneResp {
        this['masters'] = masters;
        return this;
    }
    public withRouters(routers: Array<RouterWithStatus>): PrivateZoneResp {
        this['routers'] = routers;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): PrivateZoneResp {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
}