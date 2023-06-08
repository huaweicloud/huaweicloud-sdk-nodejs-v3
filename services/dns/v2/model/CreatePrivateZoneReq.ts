import { Router } from './Router';
import { Tag } from './Tag';


export class CreatePrivateZoneReq {
    public name: string;
    public description?: string;
    private 'zone_type': string | undefined;
    public email?: string;
    public ttl?: number;
    public router: Router;
    private 'proxy_pattern'?: string | undefined;
    public tags?: Array<Tag>;
    private 'enterprise_project_id'?: string | undefined;
    public constructor(name?: any, zoneType?: any, router?: any) { 
        this['name'] = name;
        this['zone_type'] = zoneType;
        this['router'] = router;
    }
    public withName(name: string): CreatePrivateZoneReq {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreatePrivateZoneReq {
        this['description'] = description;
        return this;
    }
    public withZoneType(zoneType: string): CreatePrivateZoneReq {
        this['zone_type'] = zoneType;
        return this;
    }
    public set zoneType(zoneType: string | undefined) {
        this['zone_type'] = zoneType;
    }
    public get zoneType() {
        return this['zone_type'];
    }
    public withEmail(email: string): CreatePrivateZoneReq {
        this['email'] = email;
        return this;
    }
    public withTtl(ttl: number): CreatePrivateZoneReq {
        this['ttl'] = ttl;
        return this;
    }
    public withRouter(router: Router): CreatePrivateZoneReq {
        this['router'] = router;
        return this;
    }
    public withProxyPattern(proxyPattern: string): CreatePrivateZoneReq {
        this['proxy_pattern'] = proxyPattern;
        return this;
    }
    public set proxyPattern(proxyPattern: string | undefined) {
        this['proxy_pattern'] = proxyPattern;
    }
    public get proxyPattern() {
        return this['proxy_pattern'];
    }
    public withTags(tags: Array<Tag>): CreatePrivateZoneReq {
        this['tags'] = tags;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreatePrivateZoneReq {
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