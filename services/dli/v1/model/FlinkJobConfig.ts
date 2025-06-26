

export class FlinkJobConfig {
    private 'checkpoint_enabled'?: boolean;
    private 'checkpoint_mode'?: FlinkJobConfigCheckpointModeEnum | string;
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
    private 'execution_agency_urn'?: string;
    private 'resume_checkpoint'?: boolean;
    private 'runtime_config'?: string;
    private 'graph_editor_enabled'?: boolean;
    private 'graph_editor_data'?: string;
    private 'resume_max_num'?: number;
    private 'checkpoint_path'?: string;
    private 'config_url'?: string;
    private 'tm_cus'?: number;
    private 'tm_slot_num'?: number;
    public image?: string;
    public feature?: string;
    private 'flink_version'?: string;
    private 'operator_config'?: string;
    private 'static_estimator_config'?: string;
    private 'real_cu_number'?: number;
    public constructor() { 
    }
    public withCheckpointEnabled(checkpointEnabled: boolean): FlinkJobConfig {
        this['checkpoint_enabled'] = checkpointEnabled;
        return this;
    }
    public set checkpointEnabled(checkpointEnabled: boolean  | undefined) {
        this['checkpoint_enabled'] = checkpointEnabled;
    }
    public get checkpointEnabled(): boolean | undefined {
        return this['checkpoint_enabled'];
    }
    public withCheckpointMode(checkpointMode: FlinkJobConfigCheckpointModeEnum | string): FlinkJobConfig {
        this['checkpoint_mode'] = checkpointMode;
        return this;
    }
    public set checkpointMode(checkpointMode: FlinkJobConfigCheckpointModeEnum | string  | undefined) {
        this['checkpoint_mode'] = checkpointMode;
    }
    public get checkpointMode(): FlinkJobConfigCheckpointModeEnum | string | undefined {
        return this['checkpoint_mode'];
    }
    public withCheckpointInterval(checkpointInterval: number): FlinkJobConfig {
        this['checkpoint_interval'] = checkpointInterval;
        return this;
    }
    public set checkpointInterval(checkpointInterval: number  | undefined) {
        this['checkpoint_interval'] = checkpointInterval;
    }
    public get checkpointInterval(): number | undefined {
        return this['checkpoint_interval'];
    }
    public withLogEnabled(logEnabled: boolean): FlinkJobConfig {
        this['log_enabled'] = logEnabled;
        return this;
    }
    public set logEnabled(logEnabled: boolean  | undefined) {
        this['log_enabled'] = logEnabled;
    }
    public get logEnabled(): boolean | undefined {
        return this['log_enabled'];
    }
    public withObsBucket(obsBucket: string): FlinkJobConfig {
        this['obs_bucket'] = obsBucket;
        return this;
    }
    public set obsBucket(obsBucket: string  | undefined) {
        this['obs_bucket'] = obsBucket;
    }
    public get obsBucket(): string | undefined {
        return this['obs_bucket'];
    }
    public withSmnTopic(smnTopic: string): FlinkJobConfig {
        this['smn_topic'] = smnTopic;
        return this;
    }
    public set smnTopic(smnTopic: string  | undefined) {
        this['smn_topic'] = smnTopic;
    }
    public get smnTopic(): string | undefined {
        return this['smn_topic'];
    }
    public withEdgeGroupIds(edgeGroupIds: Array<string>): FlinkJobConfig {
        this['edge_group_ids'] = edgeGroupIds;
        return this;
    }
    public set edgeGroupIds(edgeGroupIds: Array<string>  | undefined) {
        this['edge_group_ids'] = edgeGroupIds;
    }
    public get edgeGroupIds(): Array<string> | undefined {
        return this['edge_group_ids'];
    }
    public withRootId(rootId: number): FlinkJobConfig {
        this['root_id'] = rootId;
        return this;
    }
    public set rootId(rootId: number  | undefined) {
        this['root_id'] = rootId;
    }
    public get rootId(): number | undefined {
        return this['root_id'];
    }
    public withManagerCuNumber(managerCuNumber: number): FlinkJobConfig {
        this['manager_cu_number'] = managerCuNumber;
        return this;
    }
    public set managerCuNumber(managerCuNumber: number  | undefined) {
        this['manager_cu_number'] = managerCuNumber;
    }
    public get managerCuNumber(): number | undefined {
        return this['manager_cu_number'];
    }
    public withCuNumber(cuNumber: number): FlinkJobConfig {
        this['cu_number'] = cuNumber;
        return this;
    }
    public set cuNumber(cuNumber: number  | undefined) {
        this['cu_number'] = cuNumber;
    }
    public get cuNumber(): number | undefined {
        return this['cu_number'];
    }
    public withParallelNumber(parallelNumber: number): FlinkJobConfig {
        this['parallel_number'] = parallelNumber;
        return this;
    }
    public set parallelNumber(parallelNumber: number  | undefined) {
        this['parallel_number'] = parallelNumber;
    }
    public get parallelNumber(): number | undefined {
        return this['parallel_number'];
    }
    public withRestartWhenException(restartWhenException: boolean): FlinkJobConfig {
        this['restart_when_exception'] = restartWhenException;
        return this;
    }
    public set restartWhenException(restartWhenException: boolean  | undefined) {
        this['restart_when_exception'] = restartWhenException;
    }
    public get restartWhenException(): boolean | undefined {
        return this['restart_when_exception'];
    }
    public withIdleStateRetention(idleStateRetention: number): FlinkJobConfig {
        this['idle_state_retention'] = idleStateRetention;
        return this;
    }
    public set idleStateRetention(idleStateRetention: number  | undefined) {
        this['idle_state_retention'] = idleStateRetention;
    }
    public get idleStateRetention(): number | undefined {
        return this['idle_state_retention'];
    }
    public withUdfJarUrl(udfJarUrl: string): FlinkJobConfig {
        this['udf_jar_url'] = udfJarUrl;
        return this;
    }
    public set udfJarUrl(udfJarUrl: string  | undefined) {
        this['udf_jar_url'] = udfJarUrl;
    }
    public get udfJarUrl(): string | undefined {
        return this['udf_jar_url'];
    }
    public withDirtyDataStrategy(dirtyDataStrategy: string): FlinkJobConfig {
        this['dirty_data_strategy'] = dirtyDataStrategy;
        return this;
    }
    public set dirtyDataStrategy(dirtyDataStrategy: string  | undefined) {
        this['dirty_data_strategy'] = dirtyDataStrategy;
    }
    public get dirtyDataStrategy(): string | undefined {
        return this['dirty_data_strategy'];
    }
    public withEntrypoint(entrypoint: string): FlinkJobConfig {
        this['entrypoint'] = entrypoint;
        return this;
    }
    public withDependencyJars(dependencyJars: Array<string>): FlinkJobConfig {
        this['dependency_jars'] = dependencyJars;
        return this;
    }
    public set dependencyJars(dependencyJars: Array<string>  | undefined) {
        this['dependency_jars'] = dependencyJars;
    }
    public get dependencyJars(): Array<string> | undefined {
        return this['dependency_jars'];
    }
    public withDependencyFiles(dependencyFiles: Array<string>): FlinkJobConfig {
        this['dependency_files'] = dependencyFiles;
        return this;
    }
    public set dependencyFiles(dependencyFiles: Array<string>  | undefined) {
        this['dependency_files'] = dependencyFiles;
    }
    public get dependencyFiles(): Array<string> | undefined {
        return this['dependency_files'];
    }
    public withExecutorNumber(executorNumber: number): FlinkJobConfig {
        this['executor_number'] = executorNumber;
        return this;
    }
    public set executorNumber(executorNumber: number  | undefined) {
        this['executor_number'] = executorNumber;
    }
    public get executorNumber(): number | undefined {
        return this['executor_number'];
    }
    public withExecutorCuNumber(executorCuNumber: number): FlinkJobConfig {
        this['executor_cu_number'] = executorCuNumber;
        return this;
    }
    public set executorCuNumber(executorCuNumber: number  | undefined) {
        this['executor_cu_number'] = executorCuNumber;
    }
    public get executorCuNumber(): number | undefined {
        return this['executor_cu_number'];
    }
    public withExecutionAgencyUrn(executionAgencyUrn: string): FlinkJobConfig {
        this['execution_agency_urn'] = executionAgencyUrn;
        return this;
    }
    public set executionAgencyUrn(executionAgencyUrn: string  | undefined) {
        this['execution_agency_urn'] = executionAgencyUrn;
    }
    public get executionAgencyUrn(): string | undefined {
        return this['execution_agency_urn'];
    }
    public withResumeCheckpoint(resumeCheckpoint: boolean): FlinkJobConfig {
        this['resume_checkpoint'] = resumeCheckpoint;
        return this;
    }
    public set resumeCheckpoint(resumeCheckpoint: boolean  | undefined) {
        this['resume_checkpoint'] = resumeCheckpoint;
    }
    public get resumeCheckpoint(): boolean | undefined {
        return this['resume_checkpoint'];
    }
    public withRuntimeConfig(runtimeConfig: string): FlinkJobConfig {
        this['runtime_config'] = runtimeConfig;
        return this;
    }
    public set runtimeConfig(runtimeConfig: string  | undefined) {
        this['runtime_config'] = runtimeConfig;
    }
    public get runtimeConfig(): string | undefined {
        return this['runtime_config'];
    }
    public withGraphEditorEnabled(graphEditorEnabled: boolean): FlinkJobConfig {
        this['graph_editor_enabled'] = graphEditorEnabled;
        return this;
    }
    public set graphEditorEnabled(graphEditorEnabled: boolean  | undefined) {
        this['graph_editor_enabled'] = graphEditorEnabled;
    }
    public get graphEditorEnabled(): boolean | undefined {
        return this['graph_editor_enabled'];
    }
    public withGraphEditorData(graphEditorData: string): FlinkJobConfig {
        this['graph_editor_data'] = graphEditorData;
        return this;
    }
    public set graphEditorData(graphEditorData: string  | undefined) {
        this['graph_editor_data'] = graphEditorData;
    }
    public get graphEditorData(): string | undefined {
        return this['graph_editor_data'];
    }
    public withResumeMaxNum(resumeMaxNum: number): FlinkJobConfig {
        this['resume_max_num'] = resumeMaxNum;
        return this;
    }
    public set resumeMaxNum(resumeMaxNum: number  | undefined) {
        this['resume_max_num'] = resumeMaxNum;
    }
    public get resumeMaxNum(): number | undefined {
        return this['resume_max_num'];
    }
    public withCheckpointPath(checkpointPath: string): FlinkJobConfig {
        this['checkpoint_path'] = checkpointPath;
        return this;
    }
    public set checkpointPath(checkpointPath: string  | undefined) {
        this['checkpoint_path'] = checkpointPath;
    }
    public get checkpointPath(): string | undefined {
        return this['checkpoint_path'];
    }
    public withConfigUrl(configUrl: string): FlinkJobConfig {
        this['config_url'] = configUrl;
        return this;
    }
    public set configUrl(configUrl: string  | undefined) {
        this['config_url'] = configUrl;
    }
    public get configUrl(): string | undefined {
        return this['config_url'];
    }
    public withTmCus(tmCus: number): FlinkJobConfig {
        this['tm_cus'] = tmCus;
        return this;
    }
    public set tmCus(tmCus: number  | undefined) {
        this['tm_cus'] = tmCus;
    }
    public get tmCus(): number | undefined {
        return this['tm_cus'];
    }
    public withTmSlotNum(tmSlotNum: number): FlinkJobConfig {
        this['tm_slot_num'] = tmSlotNum;
        return this;
    }
    public set tmSlotNum(tmSlotNum: number  | undefined) {
        this['tm_slot_num'] = tmSlotNum;
    }
    public get tmSlotNum(): number | undefined {
        return this['tm_slot_num'];
    }
    public withImage(image: string): FlinkJobConfig {
        this['image'] = image;
        return this;
    }
    public withFeature(feature: string): FlinkJobConfig {
        this['feature'] = feature;
        return this;
    }
    public withFlinkVersion(flinkVersion: string): FlinkJobConfig {
        this['flink_version'] = flinkVersion;
        return this;
    }
    public set flinkVersion(flinkVersion: string  | undefined) {
        this['flink_version'] = flinkVersion;
    }
    public get flinkVersion(): string | undefined {
        return this['flink_version'];
    }
    public withOperatorConfig(operatorConfig: string): FlinkJobConfig {
        this['operator_config'] = operatorConfig;
        return this;
    }
    public set operatorConfig(operatorConfig: string  | undefined) {
        this['operator_config'] = operatorConfig;
    }
    public get operatorConfig(): string | undefined {
        return this['operator_config'];
    }
    public withStaticEstimatorConfig(staticEstimatorConfig: string): FlinkJobConfig {
        this['static_estimator_config'] = staticEstimatorConfig;
        return this;
    }
    public set staticEstimatorConfig(staticEstimatorConfig: string  | undefined) {
        this['static_estimator_config'] = staticEstimatorConfig;
    }
    public get staticEstimatorConfig(): string | undefined {
        return this['static_estimator_config'];
    }
    public withRealCuNumber(realCuNumber: number): FlinkJobConfig {
        this['real_cu_number'] = realCuNumber;
        return this;
    }
    public set realCuNumber(realCuNumber: number  | undefined) {
        this['real_cu_number'] = realCuNumber;
    }
    public get realCuNumber(): number | undefined {
        return this['real_cu_number'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum FlinkJobConfigCheckpointModeEnum {
    EXACTLY_ONCE = 'exactly_once',
    AT_LEAST_ONCE = 'at_least_once'
}
