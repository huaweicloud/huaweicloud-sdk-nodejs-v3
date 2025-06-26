import { Credential } from './Credential';
import { DnsConf } from './DnsConf';


export class UpdateRegistryRequestBody {
    public name?: string;
    public description?: string;
    public type?: string;
    private 'project_id'?: string;
    private 'region_id'?: string;
    private 'instance_id'?: string;
    public url?: string;
    public credential?: Credential;
    private 'dns_conf'?: DnsConf;
    public insecure?: boolean;
    public constructor(name?: string, type?: string, url?: string, credential?: Credential, insecure?: boolean) { 
        this['name'] = name;
        this['type'] = type;
        this['url'] = url;
        this['credential'] = credential;
        this['insecure'] = insecure;
    }
    public withName(name: string): UpdateRegistryRequestBody {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateRegistryRequestBody {
        this['description'] = description;
        return this;
    }
    public withType(type: string): UpdateRegistryRequestBody {
        this['type'] = type;
        return this;
    }
    public withProjectId(projectId: string): UpdateRegistryRequestBody {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withRegionId(regionId: string): UpdateRegistryRequestBody {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withInstanceId(instanceId: string): UpdateRegistryRequestBody {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withUrl(url: string): UpdateRegistryRequestBody {
        this['url'] = url;
        return this;
    }
    public withCredential(credential: Credential): UpdateRegistryRequestBody {
        this['credential'] = credential;
        return this;
    }
    public withDnsConf(dnsConf: DnsConf): UpdateRegistryRequestBody {
        this['dns_conf'] = dnsConf;
        return this;
    }
    public set dnsConf(dnsConf: DnsConf  | undefined) {
        this['dns_conf'] = dnsConf;
    }
    public get dnsConf(): DnsConf | undefined {
        return this['dns_conf'];
    }
    public withInsecure(insecure: boolean): UpdateRegistryRequestBody {
        this['insecure'] = insecure;
        return this;
    }
}