import { FlinkJobConfig } from './FlinkJobConfig';


export class FlinkJob {
    private 'job_id'?: number;
    public name?: string;
    public desc?: string;
    private 'user_name'?: string;
    private 'job_type'?: string;
    public status?: string;
    private 'status_desc'?: string;
    private 'create_time'?: number;
    private 'start_time'?: number;
    public duration?: number;
    private 'root_id'?: number;
    private 'user_id'?: string;
    private 'project_id'?: string;
    private 'sql_body'?: string;
    private 'run_mode'?: string;
    private 'main_class'?: string;
    private 'entrypoint_args'?: string;
    private 'execution_graph'?: string;
    private 'update_time'?: number;
    private 'graph_editor_enabled'?: boolean;
    private 'has_savepoint'?: boolean;
    private 'queue_name'?: string;
    private 'edge_group_ids'?: Array<string>;
    private 'restart_times'?: number;
    private 'savepoint_path'?: string;
    private 'job_config'?: FlinkJobConfig;
    public constructor(jobId?: number, createTime?: number) { 
        this['job_id'] = jobId;
        this['create_time'] = createTime;
    }
    public withJobId(jobId: number): FlinkJob {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: number  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): number | undefined {
        return this['job_id'];
    }
    public withName(name: string): FlinkJob {
        this['name'] = name;
        return this;
    }
    public withDesc(desc: string): FlinkJob {
        this['desc'] = desc;
        return this;
    }
    public withUserName(userName: string): FlinkJob {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withJobType(jobType: string): FlinkJob {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: string  | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType(): string | undefined {
        return this['job_type'];
    }
    public withStatus(status: string): FlinkJob {
        this['status'] = status;
        return this;
    }
    public withStatusDesc(statusDesc: string): FlinkJob {
        this['status_desc'] = statusDesc;
        return this;
    }
    public set statusDesc(statusDesc: string  | undefined) {
        this['status_desc'] = statusDesc;
    }
    public get statusDesc(): string | undefined {
        return this['status_desc'];
    }
    public withCreateTime(createTime: number): FlinkJob {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withStartTime(startTime: number): FlinkJob {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withDuration(duration: number): FlinkJob {
        this['duration'] = duration;
        return this;
    }
    public withRootId(rootId: number): FlinkJob {
        this['root_id'] = rootId;
        return this;
    }
    public set rootId(rootId: number  | undefined) {
        this['root_id'] = rootId;
    }
    public get rootId(): number | undefined {
        return this['root_id'];
    }
    public withUserId(userId: string): FlinkJob {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withProjectId(projectId: string): FlinkJob {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withSqlBody(sqlBody: string): FlinkJob {
        this['sql_body'] = sqlBody;
        return this;
    }
    public set sqlBody(sqlBody: string  | undefined) {
        this['sql_body'] = sqlBody;
    }
    public get sqlBody(): string | undefined {
        return this['sql_body'];
    }
    public withRunMode(runMode: string): FlinkJob {
        this['run_mode'] = runMode;
        return this;
    }
    public set runMode(runMode: string  | undefined) {
        this['run_mode'] = runMode;
    }
    public get runMode(): string | undefined {
        return this['run_mode'];
    }
    public withMainClass(mainClass: string): FlinkJob {
        this['main_class'] = mainClass;
        return this;
    }
    public set mainClass(mainClass: string  | undefined) {
        this['main_class'] = mainClass;
    }
    public get mainClass(): string | undefined {
        return this['main_class'];
    }
    public withEntrypointArgs(entrypointArgs: string): FlinkJob {
        this['entrypoint_args'] = entrypointArgs;
        return this;
    }
    public set entrypointArgs(entrypointArgs: string  | undefined) {
        this['entrypoint_args'] = entrypointArgs;
    }
    public get entrypointArgs(): string | undefined {
        return this['entrypoint_args'];
    }
    public withExecutionGraph(executionGraph: string): FlinkJob {
        this['execution_graph'] = executionGraph;
        return this;
    }
    public set executionGraph(executionGraph: string  | undefined) {
        this['execution_graph'] = executionGraph;
    }
    public get executionGraph(): string | undefined {
        return this['execution_graph'];
    }
    public withUpdateTime(updateTime: number): FlinkJob {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withGraphEditorEnabled(graphEditorEnabled: boolean): FlinkJob {
        this['graph_editor_enabled'] = graphEditorEnabled;
        return this;
    }
    public set graphEditorEnabled(graphEditorEnabled: boolean  | undefined) {
        this['graph_editor_enabled'] = graphEditorEnabled;
    }
    public get graphEditorEnabled(): boolean | undefined {
        return this['graph_editor_enabled'];
    }
    public withHasSavepoint(hasSavepoint: boolean): FlinkJob {
        this['has_savepoint'] = hasSavepoint;
        return this;
    }
    public set hasSavepoint(hasSavepoint: boolean  | undefined) {
        this['has_savepoint'] = hasSavepoint;
    }
    public get hasSavepoint(): boolean | undefined {
        return this['has_savepoint'];
    }
    public withQueueName(queueName: string): FlinkJob {
        this['queue_name'] = queueName;
        return this;
    }
    public set queueName(queueName: string  | undefined) {
        this['queue_name'] = queueName;
    }
    public get queueName(): string | undefined {
        return this['queue_name'];
    }
    public withEdgeGroupIds(edgeGroupIds: Array<string>): FlinkJob {
        this['edge_group_ids'] = edgeGroupIds;
        return this;
    }
    public set edgeGroupIds(edgeGroupIds: Array<string>  | undefined) {
        this['edge_group_ids'] = edgeGroupIds;
    }
    public get edgeGroupIds(): Array<string> | undefined {
        return this['edge_group_ids'];
    }
    public withRestartTimes(restartTimes: number): FlinkJob {
        this['restart_times'] = restartTimes;
        return this;
    }
    public set restartTimes(restartTimes: number  | undefined) {
        this['restart_times'] = restartTimes;
    }
    public get restartTimes(): number | undefined {
        return this['restart_times'];
    }
    public withSavepointPath(savepointPath: string): FlinkJob {
        this['savepoint_path'] = savepointPath;
        return this;
    }
    public set savepointPath(savepointPath: string  | undefined) {
        this['savepoint_path'] = savepointPath;
    }
    public get savepointPath(): string | undefined {
        return this['savepoint_path'];
    }
    public withJobConfig(jobConfig: FlinkJobConfig): FlinkJob {
        this['job_config'] = jobConfig;
        return this;
    }
    public set jobConfig(jobConfig: FlinkJobConfig  | undefined) {
        this['job_config'] = jobConfig;
    }
    public get jobConfig(): FlinkJobConfig | undefined {
        return this['job_config'];
    }
}