import { MemberGroupCreate } from './MemberGroupCreate';
import { MicroserviceLabel } from './MicroserviceLabel';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateMemberGroupResponse extends SdkResponse {
    private 'member_group_name'?: string;
    private 'member_group_remark'?: string;
    private 'member_group_weight'?: number;
    private 'dict_code'?: string;
    private 'microservice_version'?: string;
    private 'microservice_port'?: number;
    private 'microservice_labels'?: Array<MicroserviceLabel>;
    private 'reference_vpc_channel_id'?: string;
    private 'member_group_id'?: string;
    private 'create_time'?: Date;
    private 'update_time'?: Date;
    public constructor(memberGroupName?: string) { 
        super();
        this['member_group_name'] = memberGroupName;
    }
    public withMemberGroupName(memberGroupName: string): UpdateMemberGroupResponse {
        this['member_group_name'] = memberGroupName;
        return this;
    }
    public set memberGroupName(memberGroupName: string  | undefined) {
        this['member_group_name'] = memberGroupName;
    }
    public get memberGroupName(): string | undefined {
        return this['member_group_name'];
    }
    public withMemberGroupRemark(memberGroupRemark: string): UpdateMemberGroupResponse {
        this['member_group_remark'] = memberGroupRemark;
        return this;
    }
    public set memberGroupRemark(memberGroupRemark: string  | undefined) {
        this['member_group_remark'] = memberGroupRemark;
    }
    public get memberGroupRemark(): string | undefined {
        return this['member_group_remark'];
    }
    public withMemberGroupWeight(memberGroupWeight: number): UpdateMemberGroupResponse {
        this['member_group_weight'] = memberGroupWeight;
        return this;
    }
    public set memberGroupWeight(memberGroupWeight: number  | undefined) {
        this['member_group_weight'] = memberGroupWeight;
    }
    public get memberGroupWeight(): number | undefined {
        return this['member_group_weight'];
    }
    public withDictCode(dictCode: string): UpdateMemberGroupResponse {
        this['dict_code'] = dictCode;
        return this;
    }
    public set dictCode(dictCode: string  | undefined) {
        this['dict_code'] = dictCode;
    }
    public get dictCode(): string | undefined {
        return this['dict_code'];
    }
    public withMicroserviceVersion(microserviceVersion: string): UpdateMemberGroupResponse {
        this['microservice_version'] = microserviceVersion;
        return this;
    }
    public set microserviceVersion(microserviceVersion: string  | undefined) {
        this['microservice_version'] = microserviceVersion;
    }
    public get microserviceVersion(): string | undefined {
        return this['microservice_version'];
    }
    public withMicroservicePort(microservicePort: number): UpdateMemberGroupResponse {
        this['microservice_port'] = microservicePort;
        return this;
    }
    public set microservicePort(microservicePort: number  | undefined) {
        this['microservice_port'] = microservicePort;
    }
    public get microservicePort(): number | undefined {
        return this['microservice_port'];
    }
    public withMicroserviceLabels(microserviceLabels: Array<MicroserviceLabel>): UpdateMemberGroupResponse {
        this['microservice_labels'] = microserviceLabels;
        return this;
    }
    public set microserviceLabels(microserviceLabels: Array<MicroserviceLabel>  | undefined) {
        this['microservice_labels'] = microserviceLabels;
    }
    public get microserviceLabels(): Array<MicroserviceLabel> | undefined {
        return this['microservice_labels'];
    }
    public withReferenceVpcChannelId(referenceVpcChannelId: string): UpdateMemberGroupResponse {
        this['reference_vpc_channel_id'] = referenceVpcChannelId;
        return this;
    }
    public set referenceVpcChannelId(referenceVpcChannelId: string  | undefined) {
        this['reference_vpc_channel_id'] = referenceVpcChannelId;
    }
    public get referenceVpcChannelId(): string | undefined {
        return this['reference_vpc_channel_id'];
    }
    public withMemberGroupId(memberGroupId: string): UpdateMemberGroupResponse {
        this['member_group_id'] = memberGroupId;
        return this;
    }
    public set memberGroupId(memberGroupId: string  | undefined) {
        this['member_group_id'] = memberGroupId;
    }
    public get memberGroupId(): string | undefined {
        return this['member_group_id'];
    }
    public withCreateTime(createTime: Date): UpdateMemberGroupResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: Date): UpdateMemberGroupResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
}