import { CombRelation } from './CombRelation';
import { EnterpriseProjectIdAndTags } from './EnterpriseProjectIdAndTags';
import { Instance } from './Instance';
import { ProductResource } from './ProductResource';
import { Resource } from './Resource';
import { ResourceGroupTagRelation } from './ResourceGroupTagRelation';


export class CreateResourceGroupRequestBody {
    private 'group_name'?: string;
    private 'enterprise_project_id'?: string;
    public type?: string;
    public tags?: Array<ResourceGroupTagRelation>;
    private 'association_ep_ids'?: Array<string>;
    public providers?: string;
    private 'enterprise_project_id_and_tags'?: Array<EnterpriseProjectIdAndTags>;
    public resources?: Array<Resource>;
    private 'product_resources'?: Array<ProductResource>;
    public instances?: Array<Instance>;
    private 'product_names'?: string;
    private 'resource_level'?: CreateResourceGroupRequestBodyResourceLevelEnum | string;
    private 'comb_relation'?: CombRelation;
    public constructor(groupName?: string) { 
        this['group_name'] = groupName;
    }
    public withGroupName(groupName: string): CreateResourceGroupRequestBody {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateResourceGroupRequestBody {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withType(type: string): CreateResourceGroupRequestBody {
        this['type'] = type;
        return this;
    }
    public withTags(tags: Array<ResourceGroupTagRelation>): CreateResourceGroupRequestBody {
        this['tags'] = tags;
        return this;
    }
    public withAssociationEpIds(associationEpIds: Array<string>): CreateResourceGroupRequestBody {
        this['association_ep_ids'] = associationEpIds;
        return this;
    }
    public set associationEpIds(associationEpIds: Array<string>  | undefined) {
        this['association_ep_ids'] = associationEpIds;
    }
    public get associationEpIds(): Array<string> | undefined {
        return this['association_ep_ids'];
    }
    public withProviders(providers: string): CreateResourceGroupRequestBody {
        this['providers'] = providers;
        return this;
    }
    public withEnterpriseProjectIdAndTags(enterpriseProjectIdAndTags: Array<EnterpriseProjectIdAndTags>): CreateResourceGroupRequestBody {
        this['enterprise_project_id_and_tags'] = enterpriseProjectIdAndTags;
        return this;
    }
    public set enterpriseProjectIdAndTags(enterpriseProjectIdAndTags: Array<EnterpriseProjectIdAndTags>  | undefined) {
        this['enterprise_project_id_and_tags'] = enterpriseProjectIdAndTags;
    }
    public get enterpriseProjectIdAndTags(): Array<EnterpriseProjectIdAndTags> | undefined {
        return this['enterprise_project_id_and_tags'];
    }
    public withResources(resources: Array<Resource>): CreateResourceGroupRequestBody {
        this['resources'] = resources;
        return this;
    }
    public withProductResources(productResources: Array<ProductResource>): CreateResourceGroupRequestBody {
        this['product_resources'] = productResources;
        return this;
    }
    public set productResources(productResources: Array<ProductResource>  | undefined) {
        this['product_resources'] = productResources;
    }
    public get productResources(): Array<ProductResource> | undefined {
        return this['product_resources'];
    }
    public withInstances(instances: Array<Instance>): CreateResourceGroupRequestBody {
        this['instances'] = instances;
        return this;
    }
    public withProductNames(productNames: string): CreateResourceGroupRequestBody {
        this['product_names'] = productNames;
        return this;
    }
    public set productNames(productNames: string  | undefined) {
        this['product_names'] = productNames;
    }
    public get productNames(): string | undefined {
        return this['product_names'];
    }
    public withResourceLevel(resourceLevel: CreateResourceGroupRequestBodyResourceLevelEnum | string): CreateResourceGroupRequestBody {
        this['resource_level'] = resourceLevel;
        return this;
    }
    public set resourceLevel(resourceLevel: CreateResourceGroupRequestBodyResourceLevelEnum | string  | undefined) {
        this['resource_level'] = resourceLevel;
    }
    public get resourceLevel(): CreateResourceGroupRequestBodyResourceLevelEnum | string | undefined {
        return this['resource_level'];
    }
    public withCombRelation(combRelation: CombRelation): CreateResourceGroupRequestBody {
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

/**
    * @export
    * @enum {string}
    */
export enum CreateResourceGroupRequestBodyResourceLevelEnum {
    PRODUCT = 'product',
    DIMENSION = 'dimension'
}
