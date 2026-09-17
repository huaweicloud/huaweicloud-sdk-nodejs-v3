

export class ListPostgresProcessesRequest {
    private 'instance_id'?: string;
    public user?: string;
    public host?: string;
    public db?: string;
    public state?: string;
    public command?: string;
    public keywords?: string;
    private 'show_all'?: boolean;
    private 'show_no_pid'?: boolean;
    public time?: string;
    private 'cur_page'?: string;
    private 'per_page'?: string;
    private 'order_by'?: string;
    public order?: string;
    private 'node_id'?: string;
    private 'node_role'?: string;
    private 'hide_sys'?: boolean;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListPostgresProcessesRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withUser(user: string): ListPostgresProcessesRequest {
        this['user'] = user;
        return this;
    }
    public withHost(host: string): ListPostgresProcessesRequest {
        this['host'] = host;
        return this;
    }
    public withDb(db: string): ListPostgresProcessesRequest {
        this['db'] = db;
        return this;
    }
    public withState(state: string): ListPostgresProcessesRequest {
        this['state'] = state;
        return this;
    }
    public withCommand(command: string): ListPostgresProcessesRequest {
        this['command'] = command;
        return this;
    }
    public withKeywords(keywords: string): ListPostgresProcessesRequest {
        this['keywords'] = keywords;
        return this;
    }
    public withShowAll(showAll: boolean): ListPostgresProcessesRequest {
        this['show_all'] = showAll;
        return this;
    }
    public set showAll(showAll: boolean  | undefined) {
        this['show_all'] = showAll;
    }
    public get showAll(): boolean | undefined {
        return this['show_all'];
    }
    public withShowNoPid(showNoPid: boolean): ListPostgresProcessesRequest {
        this['show_no_pid'] = showNoPid;
        return this;
    }
    public set showNoPid(showNoPid: boolean  | undefined) {
        this['show_no_pid'] = showNoPid;
    }
    public get showNoPid(): boolean | undefined {
        return this['show_no_pid'];
    }
    public withTime(time: string): ListPostgresProcessesRequest {
        this['time'] = time;
        return this;
    }
    public withCurPage(curPage: string): ListPostgresProcessesRequest {
        this['cur_page'] = curPage;
        return this;
    }
    public set curPage(curPage: string  | undefined) {
        this['cur_page'] = curPage;
    }
    public get curPage(): string | undefined {
        return this['cur_page'];
    }
    public withPerPage(perPage: string): ListPostgresProcessesRequest {
        this['per_page'] = perPage;
        return this;
    }
    public set perPage(perPage: string  | undefined) {
        this['per_page'] = perPage;
    }
    public get perPage(): string | undefined {
        return this['per_page'];
    }
    public withOrderBy(orderBy: string): ListPostgresProcessesRequest {
        this['order_by'] = orderBy;
        return this;
    }
    public set orderBy(orderBy: string  | undefined) {
        this['order_by'] = orderBy;
    }
    public get orderBy(): string | undefined {
        return this['order_by'];
    }
    public withOrder(order: string): ListPostgresProcessesRequest {
        this['order'] = order;
        return this;
    }
    public withNodeId(nodeId: string): ListPostgresProcessesRequest {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withNodeRole(nodeRole: string): ListPostgresProcessesRequest {
        this['node_role'] = nodeRole;
        return this;
    }
    public set nodeRole(nodeRole: string  | undefined) {
        this['node_role'] = nodeRole;
    }
    public get nodeRole(): string | undefined {
        return this['node_role'];
    }
    public withHideSys(hideSys: boolean): ListPostgresProcessesRequest {
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