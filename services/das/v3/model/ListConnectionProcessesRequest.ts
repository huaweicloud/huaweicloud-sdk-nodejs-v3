

export class ListConnectionProcessesRequest {
    private 'connection_id'?: string;
    public user?: string;
    public host?: string;
    public db?: string;
    public state?: string;
    public command?: string;
    public keywords?: string;
    private 'show_all'?: boolean;
    private 'show_no_pid'?: boolean;
    public time?: string;
    private 'per_page'?: string;
    private 'cur_page'?: string;
    private 'order_by'?: string;
    public order?: string;
    private 'node_id'?: string;
    private 'node_role'?: string;
    private 'hide_sys'?: boolean;
    public constructor(connectionId?: string) { 
        this['connection_id'] = connectionId;
    }
    public withConnectionId(connectionId: string): ListConnectionProcessesRequest {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withUser(user: string): ListConnectionProcessesRequest {
        this['user'] = user;
        return this;
    }
    public withHost(host: string): ListConnectionProcessesRequest {
        this['host'] = host;
        return this;
    }
    public withDb(db: string): ListConnectionProcessesRequest {
        this['db'] = db;
        return this;
    }
    public withState(state: string): ListConnectionProcessesRequest {
        this['state'] = state;
        return this;
    }
    public withCommand(command: string): ListConnectionProcessesRequest {
        this['command'] = command;
        return this;
    }
    public withKeywords(keywords: string): ListConnectionProcessesRequest {
        this['keywords'] = keywords;
        return this;
    }
    public withShowAll(showAll: boolean): ListConnectionProcessesRequest {
        this['show_all'] = showAll;
        return this;
    }
    public set showAll(showAll: boolean  | undefined) {
        this['show_all'] = showAll;
    }
    public get showAll(): boolean | undefined {
        return this['show_all'];
    }
    public withShowNoPid(showNoPid: boolean): ListConnectionProcessesRequest {
        this['show_no_pid'] = showNoPid;
        return this;
    }
    public set showNoPid(showNoPid: boolean  | undefined) {
        this['show_no_pid'] = showNoPid;
    }
    public get showNoPid(): boolean | undefined {
        return this['show_no_pid'];
    }
    public withTime(time: string): ListConnectionProcessesRequest {
        this['time'] = time;
        return this;
    }
    public withPerPage(perPage: string): ListConnectionProcessesRequest {
        this['per_page'] = perPage;
        return this;
    }
    public set perPage(perPage: string  | undefined) {
        this['per_page'] = perPage;
    }
    public get perPage(): string | undefined {
        return this['per_page'];
    }
    public withCurPage(curPage: string): ListConnectionProcessesRequest {
        this['cur_page'] = curPage;
        return this;
    }
    public set curPage(curPage: string  | undefined) {
        this['cur_page'] = curPage;
    }
    public get curPage(): string | undefined {
        return this['cur_page'];
    }
    public withOrderBy(orderBy: string): ListConnectionProcessesRequest {
        this['order_by'] = orderBy;
        return this;
    }
    public set orderBy(orderBy: string  | undefined) {
        this['order_by'] = orderBy;
    }
    public get orderBy(): string | undefined {
        return this['order_by'];
    }
    public withOrder(order: string): ListConnectionProcessesRequest {
        this['order'] = order;
        return this;
    }
    public withNodeId(nodeId: string): ListConnectionProcessesRequest {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withNodeRole(nodeRole: string): ListConnectionProcessesRequest {
        this['node_role'] = nodeRole;
        return this;
    }
    public set nodeRole(nodeRole: string  | undefined) {
        this['node_role'] = nodeRole;
    }
    public get nodeRole(): string | undefined {
        return this['node_role'];
    }
    public withHideSys(hideSys: boolean): ListConnectionProcessesRequest {
        this['hide_sys'] = hideSys;
        return this;
    }
    public set hideSys(hideSys: boolean  | undefined) {
        this['hide_sys'] = hideSys;
    }
    public get hideSys(): boolean | undefined {
        return this['hide_sys'];
    }
}