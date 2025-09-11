import { CombResourceName } from './CombResourceName';
import { ResourceGroupTagRelation } from './ResourceGroupTagRelation';


export class Condition {
    private 'enterprise_project_id'?: string;
    private 'instance_name'?: CombResourceName;
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
    public withInstanceName(instanceName: CombResourceName): Condition {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: CombResourceName  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): CombResourceName | undefined {
        return this['instance_name'];
    }
    public withTag(tag: ResourceGroupTagRelation): Condition {
        this['tag'] = tag;
        return this;
    }
}