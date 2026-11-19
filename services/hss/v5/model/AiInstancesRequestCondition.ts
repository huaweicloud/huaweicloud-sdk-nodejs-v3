

export class AiInstancesRequestCondition {
    private 'agent_name'?: string;
    private 'detect_time'?: number;
    private 'security_risk_num'?: number;
    private 'free_health_check_total_host_num'?: number;
    private 'agent_id'?: string;
    private 'agent_id_list'?: Array<string>;
    private 'runtime_name'?: string;
    private 'runtime_id'?: string;
    private 'image_url'?: string;
    private 'sdk_status'?: string;
    private 'exist_risk_trace'?: boolean;
    private 'exist_risk_runtime'?: boolean;
    public source?: string;
    private 'agent_type'?: AiInstancesRequestConditionAgentTypeEnum | string;
    public constructor() { 
    }
    public withAgentName(agentName: string): AiInstancesRequestCondition {
        this['agent_name'] = agentName;
        return this;
    }
    public set agentName(agentName: string  | undefined) {
        this['agent_name'] = agentName;
    }
    public get agentName(): string | undefined {
        return this['agent_name'];
    }
    public withDetectTime(detectTime: number): AiInstancesRequestCondition {
        this['detect_time'] = detectTime;
        return this;
    }
    public set detectTime(detectTime: number  | undefined) {
        this['detect_time'] = detectTime;
    }
    public get detectTime(): number | undefined {
        return this['detect_time'];
    }
    public withSecurityRiskNum(securityRiskNum: number): AiInstancesRequestCondition {
        this['security_risk_num'] = securityRiskNum;
        return this;
    }
    public set securityRiskNum(securityRiskNum: number  | undefined) {
        this['security_risk_num'] = securityRiskNum;
    }
    public get securityRiskNum(): number | undefined {
        return this['security_risk_num'];
    }
    public withFreeHealthCheckTotalHostNum(freeHealthCheckTotalHostNum: number): AiInstancesRequestCondition {
        this['free_health_check_total_host_num'] = freeHealthCheckTotalHostNum;
        return this;
    }
    public set freeHealthCheckTotalHostNum(freeHealthCheckTotalHostNum: number  | undefined) {
        this['free_health_check_total_host_num'] = freeHealthCheckTotalHostNum;
    }
    public get freeHealthCheckTotalHostNum(): number | undefined {
        return this['free_health_check_total_host_num'];
    }
    public withAgentId(agentId: string): AiInstancesRequestCondition {
        this['agent_id'] = agentId;
        return this;
    }
    public set agentId(agentId: string  | undefined) {
        this['agent_id'] = agentId;
    }
    public get agentId(): string | undefined {
        return this['agent_id'];
    }
    public withAgentIdList(agentIdList: Array<string>): AiInstancesRequestCondition {
        this['agent_id_list'] = agentIdList;
        return this;
    }
    public set agentIdList(agentIdList: Array<string>  | undefined) {
        this['agent_id_list'] = agentIdList;
    }
    public get agentIdList(): Array<string> | undefined {
        return this['agent_id_list'];
    }
    public withRuntimeName(runtimeName: string): AiInstancesRequestCondition {
        this['runtime_name'] = runtimeName;
        return this;
    }
    public set runtimeName(runtimeName: string  | undefined) {
        this['runtime_name'] = runtimeName;
    }
    public get runtimeName(): string | undefined {
        return this['runtime_name'];
    }
    public withRuntimeId(runtimeId: string): AiInstancesRequestCondition {
        this['runtime_id'] = runtimeId;
        return this;
    }
    public set runtimeId(runtimeId: string  | undefined) {
        this['runtime_id'] = runtimeId;
    }
    public get runtimeId(): string | undefined {
        return this['runtime_id'];
    }
    public withImageUrl(imageUrl: string): AiInstancesRequestCondition {
        this['image_url'] = imageUrl;
        return this;
    }
    public set imageUrl(imageUrl: string  | undefined) {
        this['image_url'] = imageUrl;
    }
    public get imageUrl(): string | undefined {
        return this['image_url'];
    }
    public withSdkStatus(sdkStatus: string): AiInstancesRequestCondition {
        this['sdk_status'] = sdkStatus;
        return this;
    }
    public set sdkStatus(sdkStatus: string  | undefined) {
        this['sdk_status'] = sdkStatus;
    }
    public get sdkStatus(): string | undefined {
        return this['sdk_status'];
    }
    public withExistRiskTrace(existRiskTrace: boolean): AiInstancesRequestCondition {
        this['exist_risk_trace'] = existRiskTrace;
        return this;
    }
    public set existRiskTrace(existRiskTrace: boolean  | undefined) {
        this['exist_risk_trace'] = existRiskTrace;
    }
    public get existRiskTrace(): boolean | undefined {
        return this['exist_risk_trace'];
    }
    public withExistRiskRuntime(existRiskRuntime: boolean): AiInstancesRequestCondition {
        this['exist_risk_runtime'] = existRiskRuntime;
        return this;
    }
    public set existRiskRuntime(existRiskRuntime: boolean  | undefined) {
        this['exist_risk_runtime'] = existRiskRuntime;
    }
    public get existRiskRuntime(): boolean | undefined {
        return this['exist_risk_runtime'];
    }
    public withSource(source: string): AiInstancesRequestCondition {
        this['source'] = source;
        return this;
    }
    public withAgentType(agentType: AiInstancesRequestConditionAgentTypeEnum | string): AiInstancesRequestCondition {
        this['agent_type'] = agentType;
        return this;
    }
    public set agentType(agentType: AiInstancesRequestConditionAgentTypeEnum | string  | undefined) {
        this['agent_type'] = agentType;
    }
    public get agentType(): AiInstancesRequestConditionAgentTypeEnum | string | undefined {
        return this['agent_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AiInstancesRequestConditionAgentTypeEnum {
    AGENT = 'agent',
    CHAT = 'chat',
    CONTROLLER = 'controller',
    TEAMAGENT = 'teamAgent'
}
