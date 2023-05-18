

export class AgentUpdate {
    public status: AgentUpdateStatusEnum;
    public constructor(status?: any) { 
        this['status'] = status;
    }
    public withStatus(status: AgentUpdateStatusEnum): AgentUpdate {
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
