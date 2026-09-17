

export class ListInstanceProcessesRequest {
    private 'instance_id'?: string;
    private 'engine_type'?: string;
    public user?: string;
    public host?: string;
    public db?: string;
    public state?: string;
    public command?: string;
    public keywords?: string;
    private 'cur_page'?: number;
    private 'per_page'?: number;
    private 'order_by'?: string;
    public order?: string;
    private 'node_id'?: string;
    private 'network_type'?: string;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListInstanceProcessesRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withEngineType(engineType: string): ListInstanceProcessesRequest {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: string  | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType(): string | undefined {
        return this['engine_type'];
    }
    public withUser(user: string): ListInstanceProcessesRequest {
        this['user'] = user;
        return this;
    }
    public withHost(host: string): ListInstanceProcessesRequest {
        this['host'] = host;
        return this;
    }
    public withDb(db: string): ListInstanceProcessesRequest {
        this['db'] = db;
        return this;
    }
    public withState(state: string): ListInstanceProcessesRequest {
        this['state'] = state;
        return this;
    }
    public withCommand(command: string): ListInstanceProcessesRequest {
        this['command'] = command;
        return this;
    }
    public withKeywords(keywords: string): ListInstanceProcessesRequest {
        this['keywords'] = keywords;
        return this;
    }
    public withCurPage(curPage: number): ListInstanceProcessesRequest {
        this['cur_page'] = curPage;
        return this;
    }
    public set curPage(curPage: number  | undefined) {
        this['cur_page'] = curPage;
    }
    public get curPage(): number | undefined {
        return this['cur_page'];
    }
    public withPerPage(perPage: number): ListInstanceProcessesRequest {
        this['per_page'] = perPage;
        return this;
    }
    public set perPage(perPage: number  | undefined) {
        this['per_page'] = perPage;
    }
    public get perPage(): number | undefined {
        return this['per_page'];
    }
    public withOrderBy(orderBy: string): ListInstanceProcessesRequest {
        this['order_by'] = orderBy;
        return this;
    }
    public set orderBy(orderBy: string  | undefined) {
        this['order_by'] = orderBy;
    }
    public get orderBy(): string | undefined {
        return this['order_by'];
    }
    public withOrder(order: string): ListInstanceProcessesRequest {
        this['order'] = order;
        return this;
    }
    public withNodeId(nodeId: string): ListInstanceProcessesRequest {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withNetworkType(networkType: string): ListInstanceProcessesRequest {
        this['network_type'] = networkType;
        return this;
    }
    public set networkType(networkType: string  | undefined) {
        this['network_type'] = networkType;
    }
    public get networkType(): string | undefined {
        return this['network_type'];
    }
}