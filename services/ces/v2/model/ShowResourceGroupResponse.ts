import { CombRelation } from './CombRelation';
import { EnterpriseProjectIdAndTags } from './EnterpriseProjectIdAndTags';
import { EpResourceStatistics } from './EpResourceStatistics';
import { Instance } from './Instance';
import { OneResourceGroupRespResourceStatistics } from './OneResourceGroupRespResourceStatistics';
import { ResourceGroupTagRelation } from './ResourceGroupTagRelation';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowResourceGroupResponse extends SdkResponse {
    private 'group_name'?: string;
    private 'group_id'?: string;
    private 'create_time'?: Date;
    private 'enterprise_project_id'?: string;
    public type?: ShowResourceGroupResponseTypeEnum | string;
    private 'association_ep_ids'?: Array<string>;
    public tags?: Array<ResourceGroupTagRelation>;
    public instances?: Array<Instance>;
    private 'comb_relation'?: CombRelation;
    private 'related_ep_ids'?: Array<string>;
    private 'enterprise_project_id_and_tags'?: Array<EnterpriseProjectIdAndTags>;
    public status?: ShowResourceGroupResponseStatusEnum | string;
    private 'event_status'?: ShowResourceGroupResponseEventStatusEnum | string;
    private 'resource_statistics'?: OneResourceGroupRespResourceStatistics;
    private 'resource_level'?: ShowResourceGroupResponseResourceLevelEnum | string;
    private 'product_names'?: string;
    private 'ep_resource_statistics'?: Array<EpResourceStatistics>;
    public constructor() { 
        super();
    }
    public withGroupName(groupName: string): ShowResourceGroupResponse {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withGroupId(groupId: string): ShowResourceGroupResponse {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withCreateTime(createTime: Date): ShowResourceGroupResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowResourceGroupResponse {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withType(type: ShowResourceGroupResponseTypeEnum | string): ShowResourceGroupResponse {
        this['type'] = type;
        return this;
    }
    public withAssociationEpIds(associationEpIds: Array<string>): ShowResourceGroupResponse {
        this['association_ep_ids'] = associationEpIds;
        return this;
    }
    public set associationEpIds(associationEpIds: Array<string>  | undefined) {
        this['association_ep_ids'] = associationEpIds;
    }
    public get associationEpIds(): Array<string> | undefined {
        return this['association_ep_ids'];
    }
    public withTags(tags: Array<ResourceGroupTagRelation>): ShowResourceGroupResponse {
        this['tags'] = tags;
        return this;
    }
    public withInstances(instances: Array<Instance>): ShowResourceGroupResponse {
        this['instances'] = instances;
        return this;
    }
    public withCombRelation(combRelation: CombRelation): ShowResourceGroupResponse {
        this['comb_relation'] = combRelation;
        return this;
    }
    public set combRelation(combRelation: CombRelation  | undefined) {
        this['comb_relation'] = combRelation;
    }
    public get combRelation(): CombRelation | undefined {
        return this['comb_relation'];
    }
    public withRelatedEpIds(relatedEpIds: Array<string>): ShowResourceGroupResponse {
        this['related_ep_ids'] = relatedEpIds;
        return this;
    }
    public set relatedEpIds(relatedEpIds: Array<string>  | undefined) {
        this['related_ep_ids'] = relatedEpIds;
    }
    public get relatedEpIds(): Array<string> | undefined {
        return this['related_ep_ids'];
    }
    public withEnterpriseProjectIdAndTags(enterpriseProjectIdAndTags: Array<EnterpriseProjectIdAndTags>): ShowResourceGroupResponse {
        this['enterprise_project_id_and_tags'] = enterpriseProjectIdAndTags;
        return this;
    }
    public set enterpriseProjectIdAndTags(enterpriseProjectIdAndTags: Array<EnterpriseProjectIdAndTags>  | undefined) {
        this['enterprise_project_id_and_tags'] = enterpriseProjectIdAndTags;
    }
    public get enterpriseProjectIdAndTags(): Array<EnterpriseProjectIdAndTags> | undefined {
        return this['enterprise_project_id_and_tags'];
    }
    public withStatus(status: ShowResourceGroupResponseStatusEnum | string): ShowResourceGroupResponse {
        this['status'] = status;
        return this;
    }
    public withEventStatus(eventStatus: ShowResourceGroupResponseEventStatusEnum | string): ShowResourceGroupResponse {
        this['event_status'] = eventStatus;
        return this;
    }
    public set eventStatus(eventStatus: ShowResourceGroupResponseEventStatusEnum | string  | undefined) {
        this['event_status'] = eventStatus;
    }
    public get eventStatus(): ShowResourceGroupResponseEventStatusEnum | string | undefined {
        return this['event_status'];
    }
    public withResourceStatistics(resourceStatistics: OneResourceGroupRespResourceStatistics): ShowResourceGroupResponse {
        this['resource_statistics'] = resourceStatistics;
        return this;
    }
    public set resourceStatistics(resourceStatistics: OneResourceGroupRespResourceStatistics  | undefined) {
        this['resource_statistics'] = resourceStatistics;
    }
    public get resourceStatistics(): OneResourceGroupRespResourceStatistics | undefined {
        return this['resource_statistics'];
    }
    public withResourceLevel(resourceLevel: ShowResourceGroupResponseResourceLevelEnum | string): ShowResourceGroupResponse {
        this['resource_level'] = resourceLevel;
        return this;
    }
    public set resourceLevel(resourceLevel: ShowResourceGroupResponseResourceLevelEnum | string  | undefined) {
        this['resource_level'] = resourceLevel;
    }
    public get resourceLevel(): ShowResourceGroupResponseResourceLevelEnum | string | undefined {
        return this['resource_level'];
    }
    public withProductNames(productNames: string): ShowResourceGroupResponse {
        this['product_names'] = productNames;
        return this;
    }
    public set productNames(productNames: string  | undefined) {
        this['product_names'] = productNames;
    }
    public get productNames(): string | undefined {
        return this['product_names'];
    }
    public withEpResourceStatistics(epResourceStatistics: Array<EpResourceStatistics>): ShowResourceGroupResponse {
        this['ep_resource_statistics'] = epResourceStatistics;
        return this;
    }
    public set epResourceStatistics(epResourceStatistics: Array<EpResourceStatistics>  | undefined) {
        this['ep_resource_statistics'] = epResourceStatistics;
    }
    public get epResourceStatistics(): Array<EpResourceStatistics> | undefined {
        return this['ep_resource_statistics'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowResourceGroupResponseTypeEnum {
    EPS = 'EPS',
    TAG = 'TAG',
    NAME = 'NAME',
    COMB = 'COMB',
    MANUAL = 'Manual'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowResourceGroupResponseStatusEnum {
    HEALTH = 'health',
    UNHEALTHY = 'unhealthy',
    NO_ALARM_RULE = 'no_alarm_rule'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowResourceGroupResponseEventStatusEnum {
    HEALTH = 'health',
    UNHEALTHY = 'unhealthy',
    NO_ALARM_RULE = 'no_alarm_rule'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowResourceGroupResponseResourceLevelEnum {
    DIMENSION = 'dimension',
    PRODUCT = 'product'
}
