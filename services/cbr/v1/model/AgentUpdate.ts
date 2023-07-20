

export class AgentUpdate {
    public status?: AgentUpdateStatusEnum | string;
    public constructor(status?: string) { 
        this['status'] = status;
    }
    public withStatus(status: AgentUpdateStatusEnum | string): AgentUpdate {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AgentUpdateStatusEnum {
    UNINSTALL = 'uninstall'
}
