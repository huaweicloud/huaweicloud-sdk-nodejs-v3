

export class ListLockBlockingDetailRespDetailList {
    public id?: string;
    private 'unique_id'?: string;
    public spid?: number;
    private 'blocked_by_spid'?: number;
    private 'collect_time'?: number;
    private 'start_time'?: number;
    private 'elapsed_time'?: number;
    public cpu?: number;
    private 'wait_time'?: number;
    private 'wait_type'?: string;
    public sql?: string;
    private 'query_hash'?: string;
    private 'db_name'?: string;
    private 'host_name'?: string;
    private 'client_app_name'?: string;
    private 'login_id'?: string;
    public cmd?: string;
    private 'physical_io'?: number;
    public constructor() { 
    }
    public withId(id: string): ListLockBlockingDetailRespDetailList {
        this['id'] = id;
        return this;
    }
    public withUniqueId(uniqueId: string): ListLockBlockingDetailRespDetailList {
        this['unique_id'] = uniqueId;
        return this;
    }
    public set uniqueId(uniqueId: string  | undefined) {
        this['unique_id'] = uniqueId;
    }
    public get uniqueId(): string | undefined {
        return this['unique_id'];
    }
    public withSpid(spid: number): ListLockBlockingDetailRespDetailList {
        this['spid'] = spid;
        return this;
    }
    public withBlockedBySpid(blockedBySpid: number): ListLockBlockingDetailRespDetailList {
        this['blocked_by_spid'] = blockedBySpid;
        return this;
    }
    public set blockedBySpid(blockedBySpid: number  | undefined) {
        this['blocked_by_spid'] = blockedBySpid;
    }
    public get blockedBySpid(): number | undefined {
        return this['blocked_by_spid'];
    }
    public withCollectTime(collectTime: number): ListLockBlockingDetailRespDetailList {
        this['collect_time'] = collectTime;
        return this;
    }
    public set collectTime(collectTime: number  | undefined) {
        this['collect_time'] = collectTime;
    }
    public get collectTime(): number | undefined {
        return this['collect_time'];
    }
    public withStartTime(startTime: number): ListLockBlockingDetailRespDetailList {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withElapsedTime(elapsedTime: number): ListLockBlockingDetailRespDetailList {
        this['elapsed_time'] = elapsedTime;
        return this;
    }
    public set elapsedTime(elapsedTime: number  | undefined) {
        this['elapsed_time'] = elapsedTime;
    }
    public get elapsedTime(): number | undefined {
        return this['elapsed_time'];
    }
    public withCpu(cpu: number): ListLockBlockingDetailRespDetailList {
        this['cpu'] = cpu;
        return this;
    }
    public withWaitTime(waitTime: number): ListLockBlockingDetailRespDetailList {
        this['wait_time'] = waitTime;
        return this;
    }
    public set waitTime(waitTime: number  | undefined) {
        this['wait_time'] = waitTime;
    }
    public get waitTime(): number | undefined {
        return this['wait_time'];
    }
    public withWaitType(waitType: string): ListLockBlockingDetailRespDetailList {
        this['wait_type'] = waitType;
        return this;
    }
    public set waitType(waitType: string  | undefined) {
        this['wait_type'] = waitType;
    }
    public get waitType(): string | undefined {
        return this['wait_type'];
    }
    public withSql(sql: string): ListLockBlockingDetailRespDetailList {
        this['sql'] = sql;
        return this;
    }
    public withQueryHash(queryHash: string): ListLockBlockingDetailRespDetailList {
        this['query_hash'] = queryHash;
        return this;
    }
    public set queryHash(queryHash: string  | undefined) {
        this['query_hash'] = queryHash;
    }
    public get queryHash(): string | undefined {
        return this['query_hash'];
    }
    public withDbName(dbName: string): ListLockBlockingDetailRespDetailList {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withHostName(hostName: string): ListLockBlockingDetailRespDetailList {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withClientAppName(clientAppName: string): ListLockBlockingDetailRespDetailList {
        this['client_app_name'] = clientAppName;
        return this;
    }
    public set clientAppName(clientAppName: string  | undefined) {
        this['client_app_name'] = clientAppName;
    }
    public get clientAppName(): string | undefined {
        return this['client_app_name'];
    }
    public withLoginId(loginId: string): ListLockBlockingDetailRespDetailList {
        this['login_id'] = loginId;
        return this;
    }
    public set loginId(loginId: string  | undefined) {
        this['login_id'] = loginId;
    }
    public get loginId(): string | undefined {
        return this['login_id'];
    }
    public withCmd(cmd: string): ListLockBlockingDetailRespDetailList {
        this['cmd'] = cmd;
        return this;
    }
    public withPhysicalIo(physicalIo: number): ListLockBlockingDetailRespDetailList {
        this['physical_io'] = physicalIo;
        return this;
    }
    public set physicalIo(physicalIo: number  | undefined) {
        this['physical_io'] = physicalIo;
    }
    public get physicalIo(): number | undefined {
        return this['physical_io'];
    }
}