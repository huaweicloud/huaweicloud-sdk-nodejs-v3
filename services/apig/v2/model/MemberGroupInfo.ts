import { MemberGroupCreate } from './MemberGroupCreate';
import { MicroserviceLabel } from './MicroserviceLabel';


export class MemberGroupInfo {
    private 'member_group_name'?: string;
    private 'member_group_remark'?: string;
    private 'member_group_weight'?: number;
    private 'dict_code'?: string;
    private 'microservice_version'?: string;
    private 'microservice_port'?: number;
    private 'microservice_labels'?: Array<MicroserviceLabel>;
    private 'member_group_id'?: string;
    private 'create_time'?: Date;
    private 'update_time'?: Date;
    public constructor(memberGroupName?: string) { 
        this['member_group_name'] = memberGroupName;
    }
    public withMemberGroupName(memberGroupName: string): MemberGroupInfo {
        this['member_group_name'] = memberGroupName;
        return this;
    }
    public set memberGroupName(memberGroupName: string  | undefined) {
        this['member_group_name'] = memberGroupName;
    }
    public get memberGroupName(): string | undefined {
        return this['member_group_name'];
    }
    public withMemberGroupRemark(memberGroupRemark: string): MemberGroupInfo {
        this['member_group_remark'] = memberGroupRemark;
        return this;
    }
    public set memberGroupRemark(memberGroupRemark: string  | undefined) {
        this['member_group_remark'] = memberGroupRemark;
    }
    public get memberGroupRemark(): string | undefined {
        return this['member_group_remark'];
    }
    public withMemberGroupWeight(memberGroupWeight: number): MemberGroupInfo {
        this['member_group_weight'] = memberGroupWeight;
        return this;
    }
    public set memberGroupWeight(memberGroupWeight: number  | undefined) {
        this['member_group_weight'] = memberGroupWeight;
    }
    public get memberGroupWeight(): number | undefined {
        return this['member_group_weight'];
    }
    public withDictCode(dictCode: string): MemberGroupInfo {
        this['dict_code'] = dictCode;
        return this;
    }
    public set dictCode(dictCode: string  | undefined) {
        this['dict_code'] = dictCode;
    }
    public get dictCode(): string | undefined {
        return this['dict_code'];
    }
    public withMicroserviceVersion(microserviceVersion: string): MemberGroupInfo {
        this['microservice_version'] = microserviceVersion;
        return this;
    }
    public set microserviceVersion(microserviceVersion: string  | undefined) {
        this['microservice_version'] = microserviceVersion;
    }
    public get microserviceVersion(): string | undefined {
        return this['microservice_version'];
    }
    public withMicroservicePort(microservicePort: number): MemberGroupInfo {
        this['microservice_port'] = microservicePort;
        return this;
    }
    public set microservicePort(microservicePort: number  | undefined) {
        this['microservice_port'] = microservicePort;
    }
    public get microservicePort(): number | undefined {
        return this['microservice_port'];
    }
    public withMicroserviceLabels(microserviceLabels: Array<MicroserviceLabel>): MemberGroupInfo {
        this['microservice_labels'] = microserviceLabels;
        return this;
    }
    public set microserviceLabels(microserviceLabels: Array<MicroserviceLabel>  | undefined) {
        this['microservice_labels'] = microserviceLabels;
    }
    public get microserviceLabels(): Array<MicroserviceLabel> | undefined {
        return this['microservice_labels'];
    }
    public withMemberGroupId(memberGroupId: string): MemberGroupInfo {
        this['member_group_id'] = memberGroupId;
        return this;
    }
    public set memberGroupId(memberGroupId: string  | undefined) {
        this['member_group_id'] = memberGroupId;
    }
    public get memberGroupId(): string | undefined {
        return this['member_group_id'];
    }
    public withCreateTime(createTime: Date): MemberGroupInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: Date): MemberGroupInfo {
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