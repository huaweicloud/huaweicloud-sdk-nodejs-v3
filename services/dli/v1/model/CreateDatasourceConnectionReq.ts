import { TmsTagEntity } from './TmsTagEntity';


export class CreateDatasourceConnectionReq {
    public name?: string;
    public service?: string;
    private 'security_group_id'?: string;
    private 'network_id'?: string;
    public url?: string;
    public tags?: Array<TmsTagEntity>;
    public constructor(name?: string, service?: string, securityGroupId?: string, networkId?: string, url?: string) { 
        this['name'] = name;
        this['service'] = service;
        this['security_group_id'] = securityGroupId;
        this['network_id'] = networkId;
        this['url'] = url;
    }
    public withName(name: string): CreateDatasourceConnectionReq {
        this['name'] = name;
        return this;
    }
    public withService(service: string): CreateDatasourceConnectionReq {
        this['service'] = service;
        return this;
    }
    public withSecurityGroupId(securityGroupId: string): CreateDatasourceConnectionReq {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string  | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId(): string | undefined {
        return this['security_group_id'];
    }
    public withNetworkId(networkId: string): CreateDatasourceConnectionReq {
        this['network_id'] = networkId;
        return this;
    }
    public set networkId(networkId: string  | undefined) {
        this['network_id'] = networkId;
    }
    public get networkId(): string | undefined {
        return this['network_id'];
    }
    public withUrl(url: string): CreateDatasourceConnectionReq {
        this['url'] = url;
        return this;
    }
    public withTags(tags: Array<TmsTagEntity>): CreateDatasourceConnectionReq {
        this['tags'] = tags;
        return this;
    }
}