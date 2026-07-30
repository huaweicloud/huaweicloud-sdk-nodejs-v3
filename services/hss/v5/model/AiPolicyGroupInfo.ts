import { AiPolicyList } from './AiPolicyList';


export class AiPolicyGroupInfo {
    private 'group_id'?: string;
    private 'group_name'?: string;
    private 'group_type'?: number;
    private 'project_id'?: string;
    private 'protection_object'?: string;
    private 'object_type'?: number;
    private 'object_num'?: number;
    private 'is_default'?: boolean;
    private 'is_exclusive'?: boolean;
    public enabled?: boolean;
    private 'detail_is_used'?: boolean;
    public description?: string;
    private 'create_time'?: number;
    private 'update_time'?: number;
    private 'policy_list'?: Array<AiPolicyList>;
    private 'agent_id_list'?: Array<string>;
    public constructor() { 
    }
    public withGroupId(groupId: string): AiPolicyGroupInfo {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withGroupName(groupName: string): AiPolicyGroupInfo {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withGroupType(groupType: number): AiPolicyGroupInfo {
        this['group_type'] = groupType;
        return this;
    }
    public set groupType(groupType: number  | undefined) {
        this['group_type'] = groupType;
    }
    public get groupType(): number | undefined {
        return this['group_type'];
    }
    public withProjectId(projectId: string): AiPolicyGroupInfo {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withProtectionObject(protectionObject: string): AiPolicyGroupInfo {
        this['protection_object'] = protectionObject;
        return this;
    }
    public set protectionObject(protectionObject: string  | undefined) {
        this['protection_object'] = protectionObject;
    }
    public get protectionObject(): string | undefined {
        return this['protection_object'];
    }
    public withObjectType(objectType: number): AiPolicyGroupInfo {
        this['object_type'] = objectType;
        return this;
    }
    public set objectType(objectType: number  | undefined) {
        this['object_type'] = objectType;
    }
    public get objectType(): number | undefined {
        return this['object_type'];
    }
    public withObjectNum(objectNum: number): AiPolicyGroupInfo {
        this['object_num'] = objectNum;
        return this;
    }
    public set objectNum(objectNum: number  | undefined) {
        this['object_num'] = objectNum;
    }
    public get objectNum(): number | undefined {
        return this['object_num'];
    }
    public withIsDefault(isDefault: boolean): AiPolicyGroupInfo {
        this['is_default'] = isDefault;
        return this;
    }
    public set isDefault(isDefault: boolean  | undefined) {
        this['is_default'] = isDefault;
    }
    public get isDefault(): boolean | undefined {
        return this['is_default'];
    }
    public withIsExclusive(isExclusive: boolean): AiPolicyGroupInfo {
        this['is_exclusive'] = isExclusive;
        return this;
    }
    public set isExclusive(isExclusive: boolean  | undefined) {
        this['is_exclusive'] = isExclusive;
    }
    public get isExclusive(): boolean | undefined {
        return this['is_exclusive'];
    }
    public withEnabled(enabled: boolean): AiPolicyGroupInfo {
        this['enabled'] = enabled;
        return this;
    }
    public withDetailIsUsed(detailIsUsed: boolean): AiPolicyGroupInfo {
        this['detail_is_used'] = detailIsUsed;
        return this;
    }
    public set detailIsUsed(detailIsUsed: boolean  | undefined) {
        this['detail_is_used'] = detailIsUsed;
    }
    public get detailIsUsed(): boolean | undefined {
        return this['detail_is_used'];
    }
    public withDescription(description: string): AiPolicyGroupInfo {
        this['description'] = description;
        return this;
    }
    public withCreateTime(createTime: number): AiPolicyGroupInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): AiPolicyGroupInfo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withPolicyList(policyList: Array<AiPolicyList>): AiPolicyGroupInfo {
        this['policy_list'] = policyList;
        return this;
    }
    public set policyList(policyList: Array<AiPolicyList>  | undefined) {
        this['policy_list'] = policyList;
    }
    public get policyList(): Array<AiPolicyList> | undefined {
        return this['policy_list'];
    }
    public withAgentIdList(agentIdList: Array<string>): AiPolicyGroupInfo {
        this['agent_id_list'] = agentIdList;
        return this;
    }
    public set agentIdList(agentIdList: Array<string>  | undefined) {
        this['agent_id_list'] = agentIdList;
    }
    public get agentIdList(): Array<string> | undefined {
        return this['agent_id_list'];
    }
}