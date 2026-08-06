

export class TaskTableReferenceDetailResponse {
    private 'job_id'?: number;
    private 'job_name'?: string;
    private 'db_type'?: string;
    private 'data_base'?: string;
    private 'table_name'?: string;
    private 'cluster_name'?: string;
    private 'workspace_name'?: string;
    private 'workspace_id'?: string;
    public owner?: string;
    private 'last_submit_time'?: number;
    private 'io_type'?: number;
    private 'is_dynamic'?: boolean;
    private 'execute_user'?: string;
    public constructor() { 
    }
    public withJobId(jobId: number): TaskTableReferenceDetailResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: number  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): number | undefined {
        return this['job_id'];
    }
    public withJobName(jobName: string): TaskTableReferenceDetailResponse {
        this['job_name'] = jobName;
        return this;
    }
    public set jobName(jobName: string  | undefined) {
        this['job_name'] = jobName;
    }
    public get jobName(): string | undefined {
        return this['job_name'];
    }
    public withDbType(dbType: string): TaskTableReferenceDetailResponse {
        this['db_type'] = dbType;
        return this;
    }
    public set dbType(dbType: string  | undefined) {
        this['db_type'] = dbType;
    }
    public get dbType(): string | undefined {
        return this['db_type'];
    }
    public withDataBase(dataBase: string): TaskTableReferenceDetailResponse {
        this['data_base'] = dataBase;
        return this;
    }
    public set dataBase(dataBase: string  | undefined) {
        this['data_base'] = dataBase;
    }
    public get dataBase(): string | undefined {
        return this['data_base'];
    }
    public withTableName(tableName: string): TaskTableReferenceDetailResponse {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withClusterName(clusterName: string): TaskTableReferenceDetailResponse {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withWorkspaceName(workspaceName: string): TaskTableReferenceDetailResponse {
        this['workspace_name'] = workspaceName;
        return this;
    }
    public set workspaceName(workspaceName: string  | undefined) {
        this['workspace_name'] = workspaceName;
    }
    public get workspaceName(): string | undefined {
        return this['workspace_name'];
    }
    public withWorkspaceId(workspaceId: string): TaskTableReferenceDetailResponse {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withOwner(owner: string): TaskTableReferenceDetailResponse {
        this['owner'] = owner;
        return this;
    }
    public withLastSubmitTime(lastSubmitTime: number): TaskTableReferenceDetailResponse {
        this['last_submit_time'] = lastSubmitTime;
        return this;
    }
    public set lastSubmitTime(lastSubmitTime: number  | undefined) {
        this['last_submit_time'] = lastSubmitTime;
    }
    public get lastSubmitTime(): number | undefined {
        return this['last_submit_time'];
    }
    public withIoType(ioType: number): TaskTableReferenceDetailResponse {
        this['io_type'] = ioType;
        return this;
    }
    public set ioType(ioType: number  | undefined) {
        this['io_type'] = ioType;
    }
    public get ioType(): number | undefined {
        return this['io_type'];
    }
    public withIsDynamic(isDynamic: boolean): TaskTableReferenceDetailResponse {
        this['is_dynamic'] = isDynamic;
        return this;
    }
    public set isDynamic(isDynamic: boolean  | undefined) {
        this['is_dynamic'] = isDynamic;
    }
    public get isDynamic(): boolean | undefined {
        return this['is_dynamic'];
    }
    public withExecuteUser(executeUser: string): TaskTableReferenceDetailResponse {
        this['execute_user'] = executeUser;
        return this;
    }
    public set executeUser(executeUser: string  | undefined) {
        this['execute_user'] = executeUser;
    }
    public get executeUser(): string | undefined {
        return this['execute_user'];
    }
}