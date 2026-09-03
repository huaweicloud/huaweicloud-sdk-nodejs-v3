import { DeadLockSubDetail } from './DeadLockSubDetail';


export class DeadLockDetail {
    private 'dead_lock_id'?: string;
    private 'last_tran_started'?: string;
    public spid?: string;
    private 'is_victim'?: boolean;
    private 'log_used'?: number;
    private 'lock_mode'?: string;
    private 'wait_resource_desc'?: string;
    private 'object_owned'?: string;
    private 'object_requested'?: string;
    private 'wait_resource'?: string;
    private 'host_name'?: string;
    private 'login_name'?: string;
    public status?: string;
    private 'client_app'?: string;
    public sql?: string;
    private 'db_id'?: string;
    private 'db_name'?: string;
    private 'sub_detail_list'?: Array<DeadLockSubDetail>;
    public constructor() { 
    }
    public withDeadLockId(deadLockId: string): DeadLockDetail {
        this['dead_lock_id'] = deadLockId;
        return this;
    }
    public set deadLockId(deadLockId: string  | undefined) {
        this['dead_lock_id'] = deadLockId;
    }
    public get deadLockId(): string | undefined {
        return this['dead_lock_id'];
    }
    public withLastTranStarted(lastTranStarted: string): DeadLockDetail {
        this['last_tran_started'] = lastTranStarted;
        return this;
    }
    public set lastTranStarted(lastTranStarted: string  | undefined) {
        this['last_tran_started'] = lastTranStarted;
    }
    public get lastTranStarted(): string | undefined {
        return this['last_tran_started'];
    }
    public withSpid(spid: string): DeadLockDetail {
        this['spid'] = spid;
        return this;
    }
    public withIsVictim(isVictim: boolean): DeadLockDetail {
        this['is_victim'] = isVictim;
        return this;
    }
    public set isVictim(isVictim: boolean  | undefined) {
        this['is_victim'] = isVictim;
    }
    public get isVictim(): boolean | undefined {
        return this['is_victim'];
    }
    public withLogUsed(logUsed: number): DeadLockDetail {
        this['log_used'] = logUsed;
        return this;
    }
    public set logUsed(logUsed: number  | undefined) {
        this['log_used'] = logUsed;
    }
    public get logUsed(): number | undefined {
        return this['log_used'];
    }
    public withLockMode(lockMode: string): DeadLockDetail {
        this['lock_mode'] = lockMode;
        return this;
    }
    public set lockMode(lockMode: string  | undefined) {
        this['lock_mode'] = lockMode;
    }
    public get lockMode(): string | undefined {
        return this['lock_mode'];
    }
    public withWaitResourceDesc(waitResourceDesc: string): DeadLockDetail {
        this['wait_resource_desc'] = waitResourceDesc;
        return this;
    }
    public set waitResourceDesc(waitResourceDesc: string  | undefined) {
        this['wait_resource_desc'] = waitResourceDesc;
    }
    public get waitResourceDesc(): string | undefined {
        return this['wait_resource_desc'];
    }
    public withObjectOwned(objectOwned: string): DeadLockDetail {
        this['object_owned'] = objectOwned;
        return this;
    }
    public set objectOwned(objectOwned: string  | undefined) {
        this['object_owned'] = objectOwned;
    }
    public get objectOwned(): string | undefined {
        return this['object_owned'];
    }
    public withObjectRequested(objectRequested: string): DeadLockDetail {
        this['object_requested'] = objectRequested;
        return this;
    }
    public set objectRequested(objectRequested: string  | undefined) {
        this['object_requested'] = objectRequested;
    }
    public get objectRequested(): string | undefined {
        return this['object_requested'];
    }
    public withWaitResource(waitResource: string): DeadLockDetail {
        this['wait_resource'] = waitResource;
        return this;
    }
    public set waitResource(waitResource: string  | undefined) {
        this['wait_resource'] = waitResource;
    }
    public get waitResource(): string | undefined {
        return this['wait_resource'];
    }
    public withHostName(hostName: string): DeadLockDetail {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withLoginName(loginName: string): DeadLockDetail {
        this['login_name'] = loginName;
        return this;
    }
    public set loginName(loginName: string  | undefined) {
        this['login_name'] = loginName;
    }
    public get loginName(): string | undefined {
        return this['login_name'];
    }
    public withStatus(status: string): DeadLockDetail {
        this['status'] = status;
        return this;
    }
    public withClientApp(clientApp: string): DeadLockDetail {
        this['client_app'] = clientApp;
        return this;
    }
    public set clientApp(clientApp: string  | undefined) {
        this['client_app'] = clientApp;
    }
    public get clientApp(): string | undefined {
        return this['client_app'];
    }
    public withSql(sql: string): DeadLockDetail {
        this['sql'] = sql;
        return this;
    }
    public withDbId(dbId: string): DeadLockDetail {
        this['db_id'] = dbId;
        return this;
    }
    public set dbId(dbId: string  | undefined) {
        this['db_id'] = dbId;
    }
    public get dbId(): string | undefined {
        return this['db_id'];
    }
    public withDbName(dbName: string): DeadLockDetail {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withSubDetailList(subDetailList: Array<DeadLockSubDetail>): DeadLockDetail {
        this['sub_detail_list'] = subDetailList;
        return this;
    }
    public set subDetailList(subDetailList: Array<DeadLockSubDetail>  | undefined) {
        this['sub_detail_list'] = subDetailList;
    }
    public get subDetailList(): Array<DeadLockSubDetail> | undefined {
        return this['sub_detail_list'];
    }
}