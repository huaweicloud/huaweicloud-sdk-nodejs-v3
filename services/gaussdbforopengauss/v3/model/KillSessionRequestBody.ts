

export class KillSessionRequestBody {
    private 'instance_id'?: string;
    private 'node_id'?: string;
    private 'component_id'?: string;
    private 'session_ids'?: Array<string>;
    public constructor(nodeId?: string, componentId?: string, sessionIds?: Array<string>) { 
        this['node_id'] = nodeId;
        this['component_id'] = componentId;
        this['session_ids'] = sessionIds;
    }
    public withInstanceId(instanceId: string): KillSessionRequestBody {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withNodeId(nodeId: string): KillSessionRequestBody {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withComponentId(componentId: string): KillSessionRequestBody {
        this['component_id'] = componentId;
        return this;
    }
    public set componentId(componentId: string  | undefined) {
        this['component_id'] = componentId;
    }
    public get componentId(): string | undefined {
        return this['component_id'];
    }
    public withSessionIds(sessionIds: Array<string>): KillSessionRequestBody {
        this['session_ids'] = sessionIds;
        return this;
    }
    public set sessionIds(sessionIds: Array<string>  | undefined) {
        this['session_ids'] = sessionIds;
    }
    public get sessionIds(): Array<string> | undefined {
        return this['session_ids'];
    }
}