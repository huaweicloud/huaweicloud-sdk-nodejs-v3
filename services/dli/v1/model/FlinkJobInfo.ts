import { FlinkJobConfig } from './FlinkJobConfig';


export class FlinkJobInfo {
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
    private 'job_config'?: FlinkJobConfig;
    private 'main_class'?: string;
    private 'entrypoint_args'?: string;
    private 'execution_graph'?: string;
    private 'update_time'?: number;
    private 'graph_editor_enabled'?: boolean;
    private 'has_savepoint'?: boolean;
    public constructor(jobId?: number, createTime?: number) { 
        this['job_id'] = jobId;
        this['create_time'] = createTime;
    }
    public withJobId(jobId: number): FlinkJobInfo {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: number  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): number | undefined {
        return this['job_id'];
    }
    public withName(name: string): FlinkJobInfo {
        this['name'] = name;
        return this;
    }
    public withDesc(desc: string): FlinkJobInfo {
        this['desc'] = desc;
        return this;
    }
    public withUserName(userName: string): FlinkJobInfo {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withJobType(jobType: string): FlinkJobInfo {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: string  | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType(): string | undefined {
        return this['job_type'];
    }
    public withStatus(status: string): FlinkJobInfo {
        this['status'] = status;
        return this;
    }
    public withStatusDesc(statusDesc: string): FlinkJobInfo {
        this['status_desc'] = statusDesc;
        return this;
    }
    public set statusDesc(statusDesc: string  | undefined) {
        this['status_desc'] = statusDesc;
    }
    public get statusDesc(): string | undefined {
        return this['status_desc'];
    }
    public withCreateTime(createTime: number): FlinkJobInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withStartTime(startTime: number): FlinkJobInfo {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withDuration(duration: number): FlinkJobInfo {
        this['duration'] = duration;
        return this;
    }
    public withRootId(rootId: number): FlinkJobInfo {
        this['root_id'] = rootId;
        return this;
    }
    public set rootId(rootId: number  | undefined) {
        this['root_id'] = rootId;
    }
    public get rootId(): number | undefined {
        return this['root_id'];
    }
    public withUserId(userId: string): FlinkJobInfo {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withProjectId(projectId: string): FlinkJobInfo {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withSqlBody(sqlBody: string): FlinkJobInfo {
        this['sql_body'] = sqlBody;
        return this;
    }
    public set sqlBody(sqlBody: string  | undefined) {
        this['sql_body'] = sqlBody;
    }
    public get sqlBody(): string | undefined {
        return this['sql_body'];
    }
    public withRunMode(runMode: string): FlinkJobInfo {
        this['run_mode'] = runMode;
        return this;
    }
    public set runMode(runMode: string  | undefined) {
        this['run_mode'] = runMode;
    }
    public get runMode(): string | undefined {
        return this['run_mode'];
    }
    public withJobConfig(jobConfig: FlinkJobConfig): FlinkJobInfo {
        this['job_config'] = jobConfig;
        return this;
    }
    public set jobConfig(jobConfig: FlinkJobConfig  | undefined) {
        this['job_config'] = jobConfig;
    }
    public get jobConfig(): FlinkJobConfig | undefined {
        return this['job_config'];
    }
    public withMainClass(mainClass: string): FlinkJobInfo {
        this['main_class'] = mainClass;
        return this;
    }
    public set mainClass(mainClass: string  | undefined) {
        this['main_class'] = mainClass;
    }
    public get mainClass(): string | undefined {
        return this['main_class'];
    }
    public withEntrypointArgs(entrypointArgs: string): FlinkJobInfo {
        this['entrypoint_args'] = entrypointArgs;
        return this;
    }
    public set entrypointArgs(entrypointArgs: string  | undefined) {
        this['entrypoint_args'] = entrypointArgs;
    }
    public get entrypointArgs(): string | undefined {
        return this['entrypoint_args'];
    }
    public withExecutionGraph(executionGraph: string): FlinkJobInfo {
        this['execution_graph'] = executionGraph;
        return this;
    }
    public set executionGraph(executionGraph: string  | undefined) {
        this['execution_graph'] = executionGraph;
    }
    public get executionGraph(): string | undefined {
        return this['execution_graph'];
    }
    public withUpdateTime(updateTime: number): FlinkJobInfo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withGraphEditorEnabled(graphEditorEnabled: boolean): FlinkJobInfo {
        this['graph_editor_enabled'] = graphEditorEnabled;
        return this;
    }
    public set graphEditorEnabled(graphEditorEnabled: boolean  | undefined) {
        this['graph_editor_enabled'] = graphEditorEnabled;
    }
    public get graphEditorEnabled(): boolean | undefined {
        return this['graph_editor_enabled'];
    }
    public withHasSavepoint(hasSavepoint: boolean): FlinkJobInfo {
        this['has_savepoint'] = hasSavepoint;
        return this;
    }
    public set hasSavepoint(hasSavepoint: boolean  | undefined) {
        this['has_savepoint'] = hasSavepoint;
    }
    public get hasSavepoint(): boolean | undefined {
        return this['has_savepoint'];
    }
}