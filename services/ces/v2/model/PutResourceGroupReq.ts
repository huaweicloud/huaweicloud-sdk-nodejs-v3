import { CombRelation } from './CombRelation';
import { EnterpriseProjectIdAndTags } from './EnterpriseProjectIdAndTags';
import { Instance } from './Instance';
import { ResourceGroupTagRelation } from './ResourceGroupTagRelation';


export class PutResourceGroupReq {
    private 'group_name'?: string;
    public tags?: Array<ResourceGroupTagRelation>;
    private 'enterprise_project_id_and_tags'?: Array<EnterpriseProjectIdAndTags>;
    private 'extend_relation_ids'?: Array<string>;
    public instances?: Array<Instance>;
    private 'product_names'?: string;
    private 'comb_relation'?: CombRelation;
    public constructor(groupName?: string) { 
        this['group_name'] = groupName;
    }
    public withGroupName(groupName: string): PutResourceGroupReq {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withTags(tags: Array<ResourceGroupTagRelation>): PutResourceGroupReq {
        this['tags'] = tags;
        return this;
    }
    public withEnterpriseProjectIdAndTags(enterpriseProjectIdAndTags: Array<EnterpriseProjectIdAndTags>): PutResourceGroupReq {
        this['enterprise_project_id_and_tags'] = enterpriseProjectIdAndTags;
        return this;
    }
    public set enterpriseProjectIdAndTags(enterpriseProjectIdAndTags: Array<EnterpriseProjectIdAndTags>  | undefined) {
        this['enterprise_project_id_and_tags'] = enterpriseProjectIdAndTags;
    }
    public get enterpriseProjectIdAndTags(): Array<EnterpriseProjectIdAndTags> | undefined {
        return this['enterprise_project_id_and_tags'];
    }
    public withExtendRelationIds(extendRelationIds: Array<string>): PutResourceGroupReq {
        this['extend_relation_ids'] = extendRelationIds;
        return this;
    }
    public set extendRelationIds(extendRelationIds: Array<string>  | undefined) {
        this['extend_relation_ids'] = extendRelationIds;
    }
    public get extendRelationIds(): Array<string> | undefined {
        return this['extend_relation_ids'];
    }
    public withInstances(instances: Array<Instance>): PutResourceGroupReq {
        this['instances'] = instances;
        return this;
    }
    public withProductNames(productNames: string): PutResourceGroupReq {
        this['product_names'] = productNames;
        return this;
    }
    public set productNames(productNames: string  | undefined) {
        this['product_names'] = productNames;
    }
    public get productNames(): string | undefined {
        return this['product_names'];
    }
    public withCombRelation(combRelation: CombRelation): PutResourceGroupReq {
        this['comb_relation'] = combRelation;
        return this;
    }
    public set combRelation(combRelation: CombRelation  | undefined) {
        this['comb_relation'] = combRelation;
    }
    public get combRelation(): CombRelation | undefined {
        return this['comb_relation'];
    }
}