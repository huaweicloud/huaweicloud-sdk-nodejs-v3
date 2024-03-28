import { Tag } from './Tag';


export class CreateDatasourceConnectionRequestBody {
    public name?: string;
    public service?: string;
    private 'security_group_id'?: string;
    private 'network_id'?: string;
    public url?: string;
    public tags?: Array<Tag>;
    public constructor(name?: string, service?: string, securityGroupId?: string, networkId?: string, url?: string) { 
        this['name'] = name;
        this['service'] = service;
        this['security_group_id'] = securityGroupId;
        this['network_id'] = networkId;
        this['url'] = url;
    }
    public withName(name: string): CreateDatasourceConnectionRequestBody {
        this['name'] = name;
        return this;
    }
    public withService(service: string): CreateDatasourceConnectionRequestBody {
        this['service'] = service;
        return this;
    }
    public withSecurityGroupId(securityGroupId: string): CreateDatasourceConnectionRequestBody {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string  | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId(): string | undefined {
        return this['security_group_id'];
    }
    public withNetworkId(networkId: string): CreateDatasourceConnectionRequestBody {
        this['network_id'] = networkId;
        return this;
    }
    public set networkId(networkId: string  | undefined) {
        this['network_id'] = networkId;
    }
    public get networkId(): string | undefined {
        return this['network_id'];
    }
    public withUrl(url: string): CreateDatasourceConnectionRequestBody {
        this['url'] = url;
        return this;
    }
    public withTags(tags: Array<Tag>): CreateDatasourceConnectionRequestBody {
        this['tags'] = tags;
        return this;
    }
}