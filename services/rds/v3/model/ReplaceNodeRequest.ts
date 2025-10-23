

export class ReplaceNodeRequest {
    private 'instance_id'?: string;
    private 'node_id'?: string;
    private 'replace_action'?: ReplaceNodeRequestReplaceActionEnum | string;
    public constructor(instanceId?: string, nodeId?: string, replaceAction?: string) { 
        this['instance_id'] = instanceId;
        this['node_id'] = nodeId;
        this['replace_action'] = replaceAction;
    }
    public withInstanceId(instanceId: string): ReplaceNodeRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withNodeId(nodeId: string): ReplaceNodeRequest {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withReplaceAction(replaceAction: ReplaceNodeRequestReplaceActionEnum | string): ReplaceNodeRequest {
        this['replace_action'] = replaceAction;
        return this;
    }
    public set replaceAction(replaceAction: ReplaceNodeRequestReplaceActionEnum | string  | undefined) {
        this['replace_action'] = replaceAction;
    }
    public get replaceAction(): ReplaceNodeRequestReplaceActionEnum | string | undefined {
        return this['replace_action'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ReplaceNodeRequestReplaceActionEnum {
    REPLACE = 'REPLACE',
    REPLACE_ROLLBACK = 'REPLACE_ROLLBACK'
}
