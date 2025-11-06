import { MetaData } from './MetaData';
import { ResourceGroup } from './ResourceGroup';
import { StatusSchema } from './StatusSchema';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowResourceGroupResponse extends SdkResponse {
    private 'group_name'?: string;
    private 'group_id'?: string;
    public resources?: Array<ResourceGroup>;
    public status?: StatusSchema;
    private 'create_time'?: number;
    private 'meta_data'?: MetaData;
    private 'enterprise_project_id'?: string;
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
    public withResources(resources: Array<ResourceGroup>): ShowResourceGroupResponse {
        this['resources'] = resources;
        return this;
    }
    public withStatus(status: StatusSchema): ShowResourceGroupResponse {
        this['status'] = status;
        return this;
    }
    public withCreateTime(createTime: number): ShowResourceGroupResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withMetaData(metaData: MetaData): ShowResourceGroupResponse {
        this['meta_data'] = metaData;
        return this;
    }
    public set metaData(metaData: MetaData  | undefined) {
        this['meta_data'] = metaData;
    }
    public get metaData(): MetaData | undefined {
        return this['meta_data'];
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
}