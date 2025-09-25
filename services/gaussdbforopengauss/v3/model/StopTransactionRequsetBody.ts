

export class StopTransactionRequsetBody {
    private 'node_id'?: string;
    private 'component_id'?: string;
    private 'session_ids'?: Array<number>;
    public constructor(nodeId?: string, componentId?: string, sessionIds?: Array<number>) { 
        this['node_id'] = nodeId;
        this['component_id'] = componentId;
        this['session_ids'] = sessionIds;
    }
    public withNodeId(nodeId: string): StopTransactionRequsetBody {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withComponentId(componentId: string): StopTransactionRequsetBody {
        this['component_id'] = componentId;
        return this;
    }
    public set componentId(componentId: string  | undefined) {
        this['component_id'] = componentId;
    }
    public get componentId(): string | undefined {
        return this['component_id'];
    }
    public withSessionIds(sessionIds: Array<number>): StopTransactionRequsetBody {
        this['session_ids'] = sessionIds;
        return this;
    }
    public set sessionIds(sessionIds: Array<number>  | undefined) {
        this['session_ids'] = sessionIds;
    }
    public get sessionIds(): Array<number> | undefined {
        return this['session_ids'];
    }
}