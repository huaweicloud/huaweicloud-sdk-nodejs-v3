

export class ListAgentStatusRequestBody {
    private 'instance_ids'?: Array<string>;
    private 'uniagent_status'?: ListAgentStatusRequestBodyUniagentStatusEnum | string;
    private 'extension_name'?: ListAgentStatusRequestBodyExtensionNameEnum | string;
    private 'extension_status'?: ListAgentStatusRequestBodyExtensionStatusEnum | string;
    public constructor(instanceIds?: Array<string>) { 
        this['instance_ids'] = instanceIds;
    }
    public withInstanceIds(instanceIds: Array<string>): ListAgentStatusRequestBody {
        this['instance_ids'] = instanceIds;
        return this;
    }
    public set instanceIds(instanceIds: Array<string>  | undefined) {
        this['instance_ids'] = instanceIds;
    }
    public get instanceIds(): Array<string> | undefined {
        return this['instance_ids'];
    }
    public withUniagentStatus(uniagentStatus: ListAgentStatusRequestBodyUniagentStatusEnum | string): ListAgentStatusRequestBody {
        this['uniagent_status'] = uniagentStatus;
        return this;
    }
    public set uniagentStatus(uniagentStatus: ListAgentStatusRequestBodyUniagentStatusEnum | string  | undefined) {
        this['uniagent_status'] = uniagentStatus;
    }
    public get uniagentStatus(): ListAgentStatusRequestBodyUniagentStatusEnum | string | undefined {
        return this['uniagent_status'];
    }
    public withExtensionName(extensionName: ListAgentStatusRequestBodyExtensionNameEnum | string): ListAgentStatusRequestBody {
        this['extension_name'] = extensionName;
        return this;
    }
    public set extensionName(extensionName: ListAgentStatusRequestBodyExtensionNameEnum | string  | undefined) {
        this['extension_name'] = extensionName;
    }
    public get extensionName(): ListAgentStatusRequestBodyExtensionNameEnum | string | undefined {
        return this['extension_name'];
    }
    public withExtensionStatus(extensionStatus: ListAgentStatusRequestBodyExtensionStatusEnum | string): ListAgentStatusRequestBody {
        this['extension_status'] = extensionStatus;
        return this;
    }
    public set extensionStatus(extensionStatus: ListAgentStatusRequestBodyExtensionStatusEnum | string  | undefined) {
        this['extension_status'] = extensionStatus;
    }
    public get extensionStatus(): ListAgentStatusRequestBodyExtensionStatusEnum | string | undefined {
        return this['extension_status'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListAgentStatusRequestBodyUniagentStatusEnum {
    NONE = 'none',
    RUNNING = 'running',
    SILENT = 'silent',
    UNKNOWN = 'unknown'
}
/**
    * @export
    * @enum {string}
    */
export enum ListAgentStatusRequestBodyExtensionNameEnum {
    TELESCOPE = 'telescope'
}
/**
    * @export
    * @enum {string}
    */
export enum ListAgentStatusRequestBodyExtensionStatusEnum {
    NONE = 'none',
    RUNNING = 'running',
    STOPPED = 'stopped',
    FAULT = 'fault',
    UNKNOWN = 'unknown'
}
