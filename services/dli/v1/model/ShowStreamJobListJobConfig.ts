

export class ShowStreamJobListJobConfig {
    private 'checkpoint_enabled'?: boolean;
    private 'checkpoint_mode'?: string;
    private 'checkpoint_interval'?: number;
    private 'log_enabled'?: boolean;
    private 'obs_bucket'?: string;
    private 'smn_topic'?: string;
    private 'edge_group_ids'?: Array<string>;
    private 'root_id'?: number;
    private 'manager_cu_number'?: number;
    private 'cu_number'?: number;
    private 'parallel_number'?: number;
    private 'restart_when_exception'?: boolean;
    private 'idle_state_retention'?: number;
    private 'udf_jar_url'?: string;
    private 'dirty_data_strategy'?: string;
    public entrypoint?: string;
    private 'dependency_jars'?: Array<string>;
    private 'dependency_files'?: Array<string>;
    private 'executor_number'?: number;
    private 'executor_cu_number'?: number;
    private 'resume_checkpoint'?: boolean;
    public constructor() { 
    }
    public withCheckpointEnabled(checkpointEnabled: boolean): ShowStreamJobListJobConfig {
        this['checkpoint_enabled'] = checkpointEnabled;
        return this;
    }
    public set checkpointEnabled(checkpointEnabled: boolean  | undefined) {
        this['checkpoint_enabled'] = checkpointEnabled;
    }
    public get checkpointEnabled(): boolean | undefined {
        return this['checkpoint_enabled'];
    }
    public withCheckpointMode(checkpointMode: string): ShowStreamJobListJobConfig {
        this['checkpoint_mode'] = checkpointMode;
        return this;
    }
    public set checkpointMode(checkpointMode: string  | undefined) {
        this['checkpoint_mode'] = checkpointMode;
    }
    public get checkpointMode(): string | undefined {
        return this['checkpoint_mode'];
    }
    public withCheckpointInterval(checkpointInterval: number): ShowStreamJobListJobConfig {
        this['checkpoint_interval'] = checkpointInterval;
        return this;
    }
    public set checkpointInterval(checkpointInterval: number  | undefined) {
        this['checkpoint_interval'] = checkpointInterval;
    }
    public get checkpointInterval(): number | undefined {
        return this['checkpoint_interval'];
    }
    public withLogEnabled(logEnabled: boolean): ShowStreamJobListJobConfig {
        this['log_enabled'] = logEnabled;
        return this;
    }
    public set logEnabled(logEnabled: boolean  | undefined) {
        this['log_enabled'] = logEnabled;
    }
    public get logEnabled(): boolean | undefined {
        return this['log_enabled'];
    }
    public withObsBucket(obsBucket: string): ShowStreamJobListJobConfig {
        this['obs_bucket'] = obsBucket;
        return this;
    }
    public set obsBucket(obsBucket: string  | undefined) {
        this['obs_bucket'] = obsBucket;
    }
    public get obsBucket(): string | undefined {
        return this['obs_bucket'];
    }
    public withSmnTopic(smnTopic: string): ShowStreamJobListJobConfig {
        this['smn_topic'] = smnTopic;
        return this;
    }
    public set smnTopic(smnTopic: string  | undefined) {
        this['smn_topic'] = smnTopic;
    }
    public get smnTopic(): string | undefined {
        return this['smn_topic'];
    }
    public withEdgeGroupIds(edgeGroupIds: Array<string>): ShowStreamJobListJobConfig {
        this['edge_group_ids'] = edgeGroupIds;
        return this;
    }
    public set edgeGroupIds(edgeGroupIds: Array<string>  | undefined) {
        this['edge_group_ids'] = edgeGroupIds;
    }
    public get edgeGroupIds(): Array<string> | undefined {
        return this['edge_group_ids'];
    }
    public withRootId(rootId: number): ShowStreamJobListJobConfig {
        this['root_id'] = rootId;
        return this;
    }
    public set rootId(rootId: number  | undefined) {
        this['root_id'] = rootId;
    }
    public get rootId(): number | undefined {
        return this['root_id'];
    }
    public withManagerCuNumber(managerCuNumber: number): ShowStreamJobListJobConfig {
        this['manager_cu_number'] = managerCuNumber;
        return this;
    }
    public set managerCuNumber(managerCuNumber: number  | undefined) {
        this['manager_cu_number'] = managerCuNumber;
    }
    public get managerCuNumber(): number | undefined {
        return this['manager_cu_number'];
    }
    public withCuNumber(cuNumber: number): ShowStreamJobListJobConfig {
        this['cu_number'] = cuNumber;
        return this;
    }
    public set cuNumber(cuNumber: number  | undefined) {
        this['cu_number'] = cuNumber;
    }
    public get cuNumber(): number | undefined {
        return this['cu_number'];
    }
    public withParallelNumber(parallelNumber: number): ShowStreamJobListJobConfig {
        this['parallel_number'] = parallelNumber;
        return this;
    }
    public set parallelNumber(parallelNumber: number  | undefined) {
        this['parallel_number'] = parallelNumber;
    }
    public get parallelNumber(): number | undefined {
        return this['parallel_number'];
    }
    public withRestartWhenException(restartWhenException: boolean): ShowStreamJobListJobConfig {
        this['restart_when_exception'] = restartWhenException;
        return this;
    }
    public set restartWhenException(restartWhenException: boolean  | undefined) {
        this['restart_when_exception'] = restartWhenException;
    }
    public get restartWhenException(): boolean | undefined {
        return this['restart_when_exception'];
    }
    public withIdleStateRetention(idleStateRetention: number): ShowStreamJobListJobConfig {
        this['idle_state_retention'] = idleStateRetention;
        return this;
    }
    public set idleStateRetention(idleStateRetention: number  | undefined) {
        this['idle_state_retention'] = idleStateRetention;
    }
    public get idleStateRetention(): number | undefined {
        return this['idle_state_retention'];
    }
    public withUdfJarUrl(udfJarUrl: string): ShowStreamJobListJobConfig {
        this['udf_jar_url'] = udfJarUrl;
        return this;
    }
    public set udfJarUrl(udfJarUrl: string  | undefined) {
        this['udf_jar_url'] = udfJarUrl;
    }
    public get udfJarUrl(): string | undefined {
        return this['udf_jar_url'];
    }
    public withDirtyDataStrategy(dirtyDataStrategy: string): ShowStreamJobListJobConfig {
        this['dirty_data_strategy'] = dirtyDataStrategy;
        return this;
    }
    public set dirtyDataStrategy(dirtyDataStrategy: string  | undefined) {
        this['dirty_data_strategy'] = dirtyDataStrategy;
    }
    public get dirtyDataStrategy(): string | undefined {
        return this['dirty_data_strategy'];
    }
    public withEntrypoint(entrypoint: string): ShowStreamJobListJobConfig {
        this['entrypoint'] = entrypoint;
        return this;
    }
    public withDependencyJars(dependencyJars: Array<string>): ShowStreamJobListJobConfig {
        this['dependency_jars'] = dependencyJars;
        return this;
    }
    public set dependencyJars(dependencyJars: Array<string>  | undefined) {
        this['dependency_jars'] = dependencyJars;
    }
    public get dependencyJars(): Array<string> | undefined {
        return this['dependency_jars'];
    }
    public withDependencyFiles(dependencyFiles: Array<string>): ShowStreamJobListJobConfig {
        this['dependency_files'] = dependencyFiles;
        return this;
    }
    public set dependencyFiles(dependencyFiles: Array<string>  | undefined) {
        this['dependency_files'] = dependencyFiles;
    }
    public get dependencyFiles(): Array<string> | undefined {
        return this['dependency_files'];
    }
    public withExecutorNumber(executorNumber: number): ShowStreamJobListJobConfig {
        this['executor_number'] = executorNumber;
        return this;
    }
    public set executorNumber(executorNumber: number  | undefined) {
        this['executor_number'] = executorNumber;
    }
    public get executorNumber(): number | undefined {
        return this['executor_number'];
    }
    public withExecutorCuNumber(executorCuNumber: number): ShowStreamJobListJobConfig {
        this['executor_cu_number'] = executorCuNumber;
        return this;
    }
    public set executorCuNumber(executorCuNumber: number  | undefined) {
        this['executor_cu_number'] = executorCuNumber;
    }
    public get executorCuNumber(): number | undefined {
        return this['executor_cu_number'];
    }
    public withResumeCheckpoint(resumeCheckpoint: boolean): ShowStreamJobListJobConfig {
        this['resume_checkpoint'] = resumeCheckpoint;
        return this;
    }
    public set resumeCheckpoint(resumeCheckpoint: boolean  | undefined) {
        this['resume_checkpoint'] = resumeCheckpoint;
    }
    public get resumeCheckpoint(): boolean | undefined {
        return this['resume_checkpoint'];
    }
}