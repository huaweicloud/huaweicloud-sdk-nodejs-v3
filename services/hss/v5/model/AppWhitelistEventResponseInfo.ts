import { AppWhitelistEventDetailResInfo } from './AppWhitelistEventDetailResInfo';
import { EventProcessResInfo } from './EventProcessResInfo';
import { ProcessEventResourceResponseInfo } from './ProcessEventResourceResponseInfo';


export class AppWhitelistEventResponseInfo {
    private 'event_id'?: string;
    private 'event_class_id'?: string;
    private 'event_type'?: number;
    private 'event_name'?: string;
    public severity?: string;
    private 'host_name'?: string;
    private 'host_id'?: string;
    private 'private_ip'?: string;
    private 'public_ip'?: string;
    private 'attack_phase'?: string;
    private 'attack_tag'?: string;
    private 'occur_time'?: number;
    private 'handle_time'?: number;
    private 'handle_status'?: string;
    private 'handle_method'?: string;
    private 'operate_accept_list'?: Array<string>;
    private 'operate_detail_list'?: Array<AppWhitelistEventDetailResInfo>;
    private 'resource_info'?: ProcessEventResourceResponseInfo;
    public recommendation?: string;
    private 'process_info'?: Array<EventProcessResInfo>;
    private 'policy_id'?: string;
    private 'policy_name'?: string;
    private 'os_type'?: string;
    private 'asset_value'?: string;
    private 'host_status'?: string;
    private 'agent_status'?: string;
    private 'protect_status'?: string;
    public constructor() { 
    }
    public withEventId(eventId: string): AppWhitelistEventResponseInfo {
        this['event_id'] = eventId;
        return this;
    }
    public set eventId(eventId: string  | undefined) {
        this['event_id'] = eventId;
    }
    public get eventId(): string | undefined {
        return this['event_id'];
    }
    public withEventClassId(eventClassId: string): AppWhitelistEventResponseInfo {
        this['event_class_id'] = eventClassId;
        return this;
    }
    public set eventClassId(eventClassId: string  | undefined) {
        this['event_class_id'] = eventClassId;
    }
    public get eventClassId(): string | undefined {
        return this['event_class_id'];
    }
    public withEventType(eventType: number): AppWhitelistEventResponseInfo {
        this['event_type'] = eventType;
        return this;
    }
    public set eventType(eventType: number  | undefined) {
        this['event_type'] = eventType;
    }
    public get eventType(): number | undefined {
        return this['event_type'];
    }
    public withEventName(eventName: string): AppWhitelistEventResponseInfo {
        this['event_name'] = eventName;
        return this;
    }
    public set eventName(eventName: string  | undefined) {
        this['event_name'] = eventName;
    }
    public get eventName(): string | undefined {
        return this['event_name'];
    }
    public withSeverity(severity: string): AppWhitelistEventResponseInfo {
        this['severity'] = severity;
        return this;
    }
    public withHostName(hostName: string): AppWhitelistEventResponseInfo {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withHostId(hostId: string): AppWhitelistEventResponseInfo {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withPrivateIp(privateIp: string): AppWhitelistEventResponseInfo {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
    public withPublicIp(publicIp: string): AppWhitelistEventResponseInfo {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
    public withAttackPhase(attackPhase: string): AppWhitelistEventResponseInfo {
        this['attack_phase'] = attackPhase;
        return this;
    }
    public set attackPhase(attackPhase: string  | undefined) {
        this['attack_phase'] = attackPhase;
    }
    public get attackPhase(): string | undefined {
        return this['attack_phase'];
    }
    public withAttackTag(attackTag: string): AppWhitelistEventResponseInfo {
        this['attack_tag'] = attackTag;
        return this;
    }
    public set attackTag(attackTag: string  | undefined) {
        this['attack_tag'] = attackTag;
    }
    public get attackTag(): string | undefined {
        return this['attack_tag'];
    }
    public withOccurTime(occurTime: number): AppWhitelistEventResponseInfo {
        this['occur_time'] = occurTime;
        return this;
    }
    public set occurTime(occurTime: number  | undefined) {
        this['occur_time'] = occurTime;
    }
    public get occurTime(): number | undefined {
        return this['occur_time'];
    }
    public withHandleTime(handleTime: number): AppWhitelistEventResponseInfo {
        this['handle_time'] = handleTime;
        return this;
    }
    public set handleTime(handleTime: number  | undefined) {
        this['handle_time'] = handleTime;
    }
    public get handleTime(): number | undefined {
        return this['handle_time'];
    }
    public withHandleStatus(handleStatus: string): AppWhitelistEventResponseInfo {
        this['handle_status'] = handleStatus;
        return this;
    }
    public set handleStatus(handleStatus: string  | undefined) {
        this['handle_status'] = handleStatus;
    }
    public get handleStatus(): string | undefined {
        return this['handle_status'];
    }
    public withHandleMethod(handleMethod: string): AppWhitelistEventResponseInfo {
        this['handle_method'] = handleMethod;
        return this;
    }
    public set handleMethod(handleMethod: string  | undefined) {
        this['handle_method'] = handleMethod;
    }
    public get handleMethod(): string | undefined {
        return this['handle_method'];
    }
    public withOperateAcceptList(operateAcceptList: Array<string>): AppWhitelistEventResponseInfo {
        this['operate_accept_list'] = operateAcceptList;
        return this;
    }
    public set operateAcceptList(operateAcceptList: Array<string>  | undefined) {
        this['operate_accept_list'] = operateAcceptList;
    }
    public get operateAcceptList(): Array<string> | undefined {
        return this['operate_accept_list'];
    }
    public withOperateDetailList(operateDetailList: Array<AppWhitelistEventDetailResInfo>): AppWhitelistEventResponseInfo {
        this['operate_detail_list'] = operateDetailList;
        return this;
    }
    public set operateDetailList(operateDetailList: Array<AppWhitelistEventDetailResInfo>  | undefined) {
        this['operate_detail_list'] = operateDetailList;
    }
    public get operateDetailList(): Array<AppWhitelistEventDetailResInfo> | undefined {
        return this['operate_detail_list'];
    }
    public withResourceInfo(resourceInfo: ProcessEventResourceResponseInfo): AppWhitelistEventResponseInfo {
        this['resource_info'] = resourceInfo;
        return this;
    }
    public set resourceInfo(resourceInfo: ProcessEventResourceResponseInfo  | undefined) {
        this['resource_info'] = resourceInfo;
    }
    public get resourceInfo(): ProcessEventResourceResponseInfo | undefined {
        return this['resource_info'];
    }
    public withRecommendation(recommendation: string): AppWhitelistEventResponseInfo {
        this['recommendation'] = recommendation;
        return this;
    }
    public withProcessInfo(processInfo: Array<EventProcessResInfo>): AppWhitelistEventResponseInfo {
        this['process_info'] = processInfo;
        return this;
    }
    public set processInfo(processInfo: Array<EventProcessResInfo>  | undefined) {
        this['process_info'] = processInfo;
    }
    public get processInfo(): Array<EventProcessResInfo> | undefined {
        return this['process_info'];
    }
    public withPolicyId(policyId: string): AppWhitelistEventResponseInfo {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withPolicyName(policyName: string): AppWhitelistEventResponseInfo {
        this['policy_name'] = policyName;
        return this;
    }
    public set policyName(policyName: string  | undefined) {
        this['policy_name'] = policyName;
    }
    public get policyName(): string | undefined {
        return this['policy_name'];
    }
    public withOsType(osType: string): AppWhitelistEventResponseInfo {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): string | undefined {
        return this['os_type'];
    }
    public withAssetValue(assetValue: string): AppWhitelistEventResponseInfo {
        this['asset_value'] = assetValue;
        return this;
    }
    public set assetValue(assetValue: string  | undefined) {
        this['asset_value'] = assetValue;
    }
    public get assetValue(): string | undefined {
        return this['asset_value'];
    }
    public withHostStatus(hostStatus: string): AppWhitelistEventResponseInfo {
        this['host_status'] = hostStatus;
        return this;
    }
    public set hostStatus(hostStatus: string  | undefined) {
        this['host_status'] = hostStatus;
    }
    public get hostStatus(): string | undefined {
        return this['host_status'];
    }
    public withAgentStatus(agentStatus: string): AppWhitelistEventResponseInfo {
        this['agent_status'] = agentStatus;
        return this;
    }
    public set agentStatus(agentStatus: string  | undefined) {
        this['agent_status'] = agentStatus;
    }
    public get agentStatus(): string | undefined {
        return this['agent_status'];
    }
    public withProtectStatus(protectStatus: string): AppWhitelistEventResponseInfo {
        this['protect_status'] = protectStatus;
        return this;
    }
    public set protectStatus(protectStatus: string  | undefined) {
        this['protect_status'] = protectStatus;
    }
    public get protectStatus(): string | undefined {
        return this['protect_status'];
    }
}