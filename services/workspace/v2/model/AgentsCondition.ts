import { AgentInfo } from './AgentInfo';


export class AgentsCondition {
    private 'desktop_id'?: string;
    private 'desktop_name'?: string;
    private 'desktop_pool_id'?: string;
    public status?: string;
    private 'task_status'?: string;
    private 'ip_address'?: string;
    private 'enterprise_project_id'?: string;
    public process?: number;
    private 'agent_info'?: Array<AgentInfo>;
    public constructor() { 
    }
    public withDesktopId(desktopId: string): AgentsCondition {
        this['desktop_id'] = desktopId;
        return this;
    }
    public set desktopId(desktopId: string  | undefined) {
        this['desktop_id'] = desktopId;
    }
    public get desktopId(): string | undefined {
        return this['desktop_id'];
    }
    public withDesktopName(desktopName: string): AgentsCondition {
        this['desktop_name'] = desktopName;
        return this;
    }
    public set desktopName(desktopName: string  | undefined) {
        this['desktop_name'] = desktopName;
    }
    public get desktopName(): string | undefined {
        return this['desktop_name'];
    }
    public withDesktopPoolId(desktopPoolId: string): AgentsCondition {
        this['desktop_pool_id'] = desktopPoolId;
        return this;
    }
    public set desktopPoolId(desktopPoolId: string  | undefined) {
        this['desktop_pool_id'] = desktopPoolId;
    }
    public get desktopPoolId(): string | undefined {
        return this['desktop_pool_id'];
    }
    public withStatus(status: string): AgentsCondition {
        this['status'] = status;
        return this;
    }
    public withTaskStatus(taskStatus: string): AgentsCondition {
        this['task_status'] = taskStatus;
        return this;
    }
    public set taskStatus(taskStatus: string  | undefined) {
        this['task_status'] = taskStatus;
    }
    public get taskStatus(): string | undefined {
        return this['task_status'];
    }
    public withIpAddress(ipAddress: string): AgentsCondition {
        this['ip_address'] = ipAddress;
        return this;
    }
    public set ipAddress(ipAddress: string  | undefined) {
        this['ip_address'] = ipAddress;
    }
    public get ipAddress(): string | undefined {
        return this['ip_address'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): AgentsCondition {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withProcess(process: number): AgentsCondition {
        this['process'] = process;
        return this;
    }
    public withAgentInfo(agentInfo: Array<AgentInfo>): AgentsCondition {
        this['agent_info'] = agentInfo;
        return this;
    }
    public set agentInfo(agentInfo: Array<AgentInfo>  | undefined) {
        this['agent_info'] = agentInfo;
    }
    public get agentInfo(): Array<AgentInfo> | undefined {
        return this['agent_info'];
    }
}