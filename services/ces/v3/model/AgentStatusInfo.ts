import { ExtensionInfo } from './ExtensionInfo';


export class AgentStatusInfo {
    private 'instance_id'?: string;
    private 'uniagent_status'?: AgentStatusInfoUniagentStatusEnum | string;
    public extensions?: Array<ExtensionInfo>;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): AgentStatusInfo {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withUniagentStatus(uniagentStatus: AgentStatusInfoUniagentStatusEnum | string): AgentStatusInfo {
        this['uniagent_status'] = uniagentStatus;
        return this;
    }
    public set uniagentStatus(uniagentStatus: AgentStatusInfoUniagentStatusEnum | string  | undefined) {
        this['uniagent_status'] = uniagentStatus;
    }
    public get uniagentStatus(): AgentStatusInfoUniagentStatusEnum | string | undefined {
        return this['uniagent_status'];
    }
    public withExtensions(extensions: Array<ExtensionInfo>): AgentStatusInfo {
        this['extensions'] = extensions;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AgentStatusInfoUniagentStatusEnum {
    NONE = 'none',
    RUNNING = 'running',
    SILENT = 'silent',
    UNKNOWN = 'unknown'
}
