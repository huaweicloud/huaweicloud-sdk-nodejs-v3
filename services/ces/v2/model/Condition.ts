import { ResourceGroupTagRelation } from './ResourceGroupTagRelation';
import { ResourceNameItem } from './ResourceNameItem';


export class Condition {
    private 'enterprise_project_id'?: string;
    private 'instance_name'?: ResourceNameItem;
    public tag?: ResourceGroupTagRelation;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): Condition {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withInstanceName(instanceName: ResourceNameItem): Condition {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: ResourceNameItem  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): ResourceNameItem | undefined {
        return this['instance_name'];
    }
    public withTag(tag: ResourceGroupTagRelation): Condition {
        this['tag'] = tag;
        return this;
    }
}