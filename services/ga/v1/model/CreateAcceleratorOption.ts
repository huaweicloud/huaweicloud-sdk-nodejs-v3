import { CreateAcceleratorOptionIpSets } from './CreateAcceleratorOptionIpSets';
import { ResourceTag } from './ResourceTag';


export class CreateAcceleratorOption {
    public name?: string;
    public description?: string;
    private 'ip_sets'?: Array<CreateAcceleratorOptionIpSets>;
    private 'enterprise_project_id'?: string;
    public tags?: Array<ResourceTag>;
    public constructor(name?: string, ipSets?: Array<CreateAcceleratorOptionIpSets>, enterpriseProjectId?: string) { 
        this['name'] = name;
        this['ip_sets'] = ipSets;
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public withName(name: string): CreateAcceleratorOption {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateAcceleratorOption {
        this['description'] = description;
        return this;
    }
    public withIpSets(ipSets: Array<CreateAcceleratorOptionIpSets>): CreateAcceleratorOption {
        this['ip_sets'] = ipSets;
        return this;
    }
    public set ipSets(ipSets: Array<CreateAcceleratorOptionIpSets>  | undefined) {
        this['ip_sets'] = ipSets;
    }
    public get ipSets(): Array<CreateAcceleratorOptionIpSets> | undefined {
        return this['ip_sets'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateAcceleratorOption {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withTags(tags: Array<ResourceTag>): CreateAcceleratorOption {
        this['tags'] = tags;
        return this;
    }
}