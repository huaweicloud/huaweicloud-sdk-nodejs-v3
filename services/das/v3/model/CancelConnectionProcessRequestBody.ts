

export class CancelConnectionProcessRequestBody {
    private 'process_ids'?: Array<string>;
    private 'kill_all'?: boolean;
    private 'node_id'?: string;
    private 'node_role'?: string;
    public constructor(processIds?: Array<string>) { 
        this['process_ids'] = processIds;
    }
    public withProcessIds(processIds: Array<string>): CancelConnectionProcessRequestBody {
        this['process_ids'] = processIds;
        return this;
    }
    public set processIds(processIds: Array<string>  | undefined) {
        this['process_ids'] = processIds;
    }
    public get processIds(): Array<string> | undefined {
        return this['process_ids'];
    }
    public withKillAll(killAll: boolean): CancelConnectionProcessRequestBody {
        this['kill_all'] = killAll;
        return this;
    }
    public set killAll(killAll: boolean  | undefined) {
        this['kill_all'] = killAll;
    }
    public get killAll(): boolean | undefined {
        return this['kill_all'];
    }
    public withNodeId(nodeId: string): CancelConnectionProcessRequestBody {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withNodeRole(nodeRole: string): CancelConnectionProcessRequestBody {
        this['node_role'] = nodeRole;
        return this;
    }
    public set nodeRole(nodeRole: string  | undefined) {
        this['node_role'] = nodeRole;
    }
    public get nodeRole(): string | undefined {
        return this['node_role'];
    }
}