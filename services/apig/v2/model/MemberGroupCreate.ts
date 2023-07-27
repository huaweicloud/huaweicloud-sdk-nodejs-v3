import { MicroserviceLabel } from './MicroserviceLabel';


export class MemberGroupCreate {
    private 'member_group_name'?: string;
    private 'member_group_remark'?: string;
    private 'member_group_weight'?: number;
    private 'dict_code'?: string;
    private 'microservice_version'?: string;
    private 'microservice_port'?: number;
    private 'microservice_labels'?: Array<MicroserviceLabel>;
    public constructor(memberGroupName?: string) { 
        this['member_group_name'] = memberGroupName;
    }
    public withMemberGroupName(memberGroupName: string): MemberGroupCreate {
        this['member_group_name'] = memberGroupName;
        return this;
    }
    public set memberGroupName(memberGroupName: string  | undefined) {
        this['member_group_name'] = memberGroupName;
    }
    public get memberGroupName(): string | undefined {
        return this['member_group_name'];
    }
    public withMemberGroupRemark(memberGroupRemark: string): MemberGroupCreate {
        this['member_group_remark'] = memberGroupRemark;
        return this;
    }
    public set memberGroupRemark(memberGroupRemark: string  | undefined) {
        this['member_group_remark'] = memberGroupRemark;
    }
    public get memberGroupRemark(): string | undefined {
        return this['member_group_remark'];
    }
    public withMemberGroupWeight(memberGroupWeight: number): MemberGroupCreate {
        this['member_group_weight'] = memberGroupWeight;
        return this;
    }
    public set memberGroupWeight(memberGroupWeight: number  | undefined) {
        this['member_group_weight'] = memberGroupWeight;
    }
    public get memberGroupWeight(): number | undefined {
        return this['member_group_weight'];
    }
    public withDictCode(dictCode: string): MemberGroupCreate {
        this['dict_code'] = dictCode;
        return this;
    }
    public set dictCode(dictCode: string  | undefined) {
        this['dict_code'] = dictCode;
    }
    public get dictCode(): string | undefined {
        return this['dict_code'];
    }
    public withMicroserviceVersion(microserviceVersion: string): MemberGroupCreate {
        this['microservice_version'] = microserviceVersion;
        return this;
    }
    public set microserviceVersion(microserviceVersion: string  | undefined) {
        this['microservice_version'] = microserviceVersion;
    }
    public get microserviceVersion(): string | undefined {
        return this['microservice_version'];
    }
    public withMicroservicePort(microservicePort: number): MemberGroupCreate {
        this['microservice_port'] = microservicePort;
        return this;
    }
    public set microservicePort(microservicePort: number  | undefined) {
        this['microservice_port'] = microservicePort;
    }
    public get microservicePort(): number | undefined {
        return this['microservice_port'];
    }
    public withMicroserviceLabels(microserviceLabels: Array<MicroserviceLabel>): MemberGroupCreate {
        this['microservice_labels'] = microserviceLabels;
        return this;
    }
    public set microserviceLabels(microserviceLabels: Array<MicroserviceLabel>  | undefined) {
        this['microservice_labels'] = microserviceLabels;
    }
    public get microserviceLabels(): Array<MicroserviceLabel> | undefined {
        return this['microservice_labels'];
    }
}