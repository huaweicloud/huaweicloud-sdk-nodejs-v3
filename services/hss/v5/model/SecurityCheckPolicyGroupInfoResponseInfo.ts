import { SecurityCheckPolicyInfoResponseInfo } from './SecurityCheckPolicyInfoResponseInfo';
import { SecurityCheckTaskCondition } from './SecurityCheckTaskCondition';


export class SecurityCheckPolicyGroupInfoResponseInfo {
    private 'group_id'?: string;
    private 'group_name'?: string;
    private 'check_rule_num'?: number;
    private 'host_num'?: number;
    public deletable?: boolean;
    private 'default_group'?: boolean;
    private 'support_os'?: string;
    private 'policy_info'?: SecurityCheckPolicyInfoResponseInfo;
    private 'weak_pwd_policy_info'?: SecurityCheckPolicyInfoResponseInfo;
    private 'agent_id_list'?: Array<string>;
    private 'task_condition'?: SecurityCheckTaskCondition;
    private 'detection_period'?: string;
    public constructor(policyInfo?: SecurityCheckPolicyInfoResponseInfo) { 
        this['policy_info'] = policyInfo;
    }
    public withGroupId(groupId: string): SecurityCheckPolicyGroupInfoResponseInfo {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withGroupName(groupName: string): SecurityCheckPolicyGroupInfoResponseInfo {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withCheckRuleNum(checkRuleNum: number): SecurityCheckPolicyGroupInfoResponseInfo {
        this['check_rule_num'] = checkRuleNum;
        return this;
    }
    public set checkRuleNum(checkRuleNum: number  | undefined) {
        this['check_rule_num'] = checkRuleNum;
    }
    public get checkRuleNum(): number | undefined {
        return this['check_rule_num'];
    }
    public withHostNum(hostNum: number): SecurityCheckPolicyGroupInfoResponseInfo {
        this['host_num'] = hostNum;
        return this;
    }
    public set hostNum(hostNum: number  | undefined) {
        this['host_num'] = hostNum;
    }
    public get hostNum(): number | undefined {
        return this['host_num'];
    }
    public withDeletable(deletable: boolean): SecurityCheckPolicyGroupInfoResponseInfo {
        this['deletable'] = deletable;
        return this;
    }
    public withDefaultGroup(defaultGroup: boolean): SecurityCheckPolicyGroupInfoResponseInfo {
        this['default_group'] = defaultGroup;
        return this;
    }
    public set defaultGroup(defaultGroup: boolean  | undefined) {
        this['default_group'] = defaultGroup;
    }
    public get defaultGroup(): boolean | undefined {
        return this['default_group'];
    }
    public withSupportOs(supportOs: string): SecurityCheckPolicyGroupInfoResponseInfo {
        this['support_os'] = supportOs;
        return this;
    }
    public set supportOs(supportOs: string  | undefined) {
        this['support_os'] = supportOs;
    }
    public get supportOs(): string | undefined {
        return this['support_os'];
    }
    public withPolicyInfo(policyInfo: SecurityCheckPolicyInfoResponseInfo): SecurityCheckPolicyGroupInfoResponseInfo {
        this['policy_info'] = policyInfo;
        return this;
    }
    public set policyInfo(policyInfo: SecurityCheckPolicyInfoResponseInfo  | undefined) {
        this['policy_info'] = policyInfo;
    }
    public get policyInfo(): SecurityCheckPolicyInfoResponseInfo | undefined {
        return this['policy_info'];
    }
    public withWeakPwdPolicyInfo(weakPwdPolicyInfo: SecurityCheckPolicyInfoResponseInfo): SecurityCheckPolicyGroupInfoResponseInfo {
        this['weak_pwd_policy_info'] = weakPwdPolicyInfo;
        return this;
    }
    public set weakPwdPolicyInfo(weakPwdPolicyInfo: SecurityCheckPolicyInfoResponseInfo  | undefined) {
        this['weak_pwd_policy_info'] = weakPwdPolicyInfo;
    }
    public get weakPwdPolicyInfo(): SecurityCheckPolicyInfoResponseInfo | undefined {
        return this['weak_pwd_policy_info'];
    }
    public withAgentIdList(agentIdList: Array<string>): SecurityCheckPolicyGroupInfoResponseInfo {
        this['agent_id_list'] = agentIdList;
        return this;
    }
    public set agentIdList(agentIdList: Array<string>  | undefined) {
        this['agent_id_list'] = agentIdList;
    }
    public get agentIdList(): Array<string> | undefined {
        return this['agent_id_list'];
    }
    public withTaskCondition(taskCondition: SecurityCheckTaskCondition): SecurityCheckPolicyGroupInfoResponseInfo {
        this['task_condition'] = taskCondition;
        return this;
    }
    public set taskCondition(taskCondition: SecurityCheckTaskCondition  | undefined) {
        this['task_condition'] = taskCondition;
    }
    public get taskCondition(): SecurityCheckTaskCondition | undefined {
        return this['task_condition'];
    }
    public withDetectionPeriod(detectionPeriod: string): SecurityCheckPolicyGroupInfoResponseInfo {
        this['detection_period'] = detectionPeriod;
        return this;
    }
    public set detectionPeriod(detectionPeriod: string  | undefined) {
        this['detection_period'] = detectionPeriod;
    }
    public get detectionPeriod(): string | undefined {
        return this['detection_period'];
    }
}