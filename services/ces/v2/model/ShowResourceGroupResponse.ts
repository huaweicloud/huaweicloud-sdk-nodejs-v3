import { Instance } from './Instance';
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
}

/**
    * @export
    * @enum {string}
    */
export enum ShowResourceGroupResponseTypeEnum {
    EPS = 'EPS',
    TAG = 'TAG',
    MANUAL = 'Manual'
}
