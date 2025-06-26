import { ResourceConfig } from './ResourceConfig';


export class UpdateFlinkJarJobRequestBody {
    public name?: string;
    public desc?: string;
    private 'queue_name'?: string;
    private 'cu_number'?: number;
    private 'manager_cu_number'?: number;
    private 'parallel_number'?: number;
    private 'log_enabled'?: boolean;
    private 'obs_bucket'?: string;
    private 'smn_topic'?: string;
    private 'main_class'?: string;
    private 'entrypoint_args'?: string;
    private 'restart_when_exception'?: boolean;
    public entrypoint?: string;
    private 'dependency_jars'?: Array<string>;
    private 'dependency_files'?: Array<string>;
    private 'tm_cus'?: number;
    private 'tm_slot_num'?: number;
    public feature?: string;
    private 'flink_version'?: string;
    private 'execution_agency_urn'?: string;
    public image?: string;
    private 'resume_checkpoint'?: boolean;
    private 'resume_max_num'?: number;
    private 'checkpoint_path'?: string;
    private 'runtime_config'?: string;
    private 'job_type'?: string;
    private 'resource_config'?: ResourceConfig;
    private 'resource_config_version'?: string;
    public constructor() { 
    }
    public withName(name: string): UpdateFlinkJarJobRequestBody {
        this['name'] = name;
        return this;
    }
    public withDesc(desc: string): UpdateFlinkJarJobRequestBody {
        this['desc'] = desc;
        return this;
    }
    public withQueueName(queueName: string): UpdateFlinkJarJobRequestBody {
        this['queue_name'] = queueName;
        return this;
    }
    public set queueName(queueName: string  | undefined) {
        this['queue_name'] = queueName;
    }
    public get queueName(): string | undefined {
        return this['queue_name'];
    }
    public withCuNumber(cuNumber: number): UpdateFlinkJarJobRequestBody {
        this['cu_number'] = cuNumber;
        return this;
    }
    public set cuNumber(cuNumber: number  | undefined) {
        this['cu_number'] = cuNumber;
    }
    public get cuNumber(): number | undefined {
        return this['cu_number'];
    }
    public withManagerCuNumber(managerCuNumber: number): UpdateFlinkJarJobRequestBody {
        this['manager_cu_number'] = managerCuNumber;
        return this;
    }
    public set managerCuNumber(managerCuNumber: number  | undefined) {
        this['manager_cu_number'] = managerCuNumber;
    }
    public get managerCuNumber(): number | undefined {
        return this['manager_cu_number'];
    }
    public withParallelNumber(parallelNumber: number): UpdateFlinkJarJobRequestBody {
        this['parallel_number'] = parallelNumber;
        return this;
    }
    public set parallelNumber(parallelNumber: number  | undefined) {
        this['parallel_number'] = parallelNumber;
    }
    public get parallelNumber(): number | undefined {
        return this['parallel_number'];
    }
    public withLogEnabled(logEnabled: boolean): UpdateFlinkJarJobRequestBody {
        this['log_enabled'] = logEnabled;
        return this;
    }
    public set logEnabled(logEnabled: boolean  | undefined) {
        this['log_enabled'] = logEnabled;
    }
    public get logEnabled(): boolean | undefined {
        return this['log_enabled'];
    }
    public withObsBucket(obsBucket: string): UpdateFlinkJarJobRequestBody {
        this['obs_bucket'] = obsBucket;
        return this;
    }
    public set obsBucket(obsBucket: string  | undefined) {
        this['obs_bucket'] = obsBucket;
    }
    public get obsBucket(): string | undefined {
        return this['obs_bucket'];
    }
    public withSmnTopic(smnTopic: string): UpdateFlinkJarJobRequestBody {
        this['smn_topic'] = smnTopic;
        return this;
    }
    public set smnTopic(smnTopic: string  | undefined) {
        this['smn_topic'] = smnTopic;
    }
    public get smnTopic(): string | undefined {
        return this['smn_topic'];
    }
    public withMainClass(mainClass: string): UpdateFlinkJarJobRequestBody {
        this['main_class'] = mainClass;
        return this;
    }
    public set mainClass(mainClass: string  | undefined) {
        this['main_class'] = mainClass;
    }
    public get mainClass(): string | undefined {
        return this['main_class'];
    }
    public withEntrypointArgs(entrypointArgs: string): UpdateFlinkJarJobRequestBody {
        this['entrypoint_args'] = entrypointArgs;
        return this;
    }
    public set entrypointArgs(entrypointArgs: string  | undefined) {
        this['entrypoint_args'] = entrypointArgs;
    }
    public get entrypointArgs(): string | undefined {
        return this['entrypoint_args'];
    }
    public withRestartWhenException(restartWhenException: boolean): UpdateFlinkJarJobRequestBody {
        this['restart_when_exception'] = restartWhenException;
        return this;
    }
    public set restartWhenException(restartWhenException: boolean  | undefined) {
        this['restart_when_exception'] = restartWhenException;
    }
    public get restartWhenException(): boolean | undefined {
        return this['restart_when_exception'];
    }
    public withEntrypoint(entrypoint: string): UpdateFlinkJarJobRequestBody {
        this['entrypoint'] = entrypoint;
        return this;
    }
    public withDependencyJars(dependencyJars: Array<string>): UpdateFlinkJarJobRequestBody {
        this['dependency_jars'] = dependencyJars;
        return this;
    }
    public set dependencyJars(dependencyJars: Array<string>  | undefined) {
        this['dependency_jars'] = dependencyJars;
    }
    public get dependencyJars(): Array<string> | undefined {
        return this['dependency_jars'];
    }
    public withDependencyFiles(dependencyFiles: Array<string>): UpdateFlinkJarJobRequestBody {
        this['dependency_files'] = dependencyFiles;
        return this;
    }
    public set dependencyFiles(dependencyFiles: Array<string>  | undefined) {
        this['dependency_files'] = dependencyFiles;
    }
    public get dependencyFiles(): Array<string> | undefined {
        return this['dependency_files'];
    }
    public withTmCus(tmCus: number): UpdateFlinkJarJobRequestBody {
        this['tm_cus'] = tmCus;
        return this;
    }
    public set tmCus(tmCus: number  | undefined) {
        this['tm_cus'] = tmCus;
    }
    public get tmCus(): number | undefined {
        return this['tm_cus'];
    }
    public withTmSlotNum(tmSlotNum: number): UpdateFlinkJarJobRequestBody {
        this['tm_slot_num'] = tmSlotNum;
        return this;
    }
    public set tmSlotNum(tmSlotNum: number  | undefined) {
        this['tm_slot_num'] = tmSlotNum;
    }
    public get tmSlotNum(): number | undefined {
        return this['tm_slot_num'];
    }
    public withFeature(feature: string): UpdateFlinkJarJobRequestBody {
        this['feature'] = feature;
        return this;
    }
    public withFlinkVersion(flinkVersion: string): UpdateFlinkJarJobRequestBody {
        this['flink_version'] = flinkVersion;
        return this;
    }
    public set flinkVersion(flinkVersion: string  | undefined) {
        this['flink_version'] = flinkVersion;
    }
    public get flinkVersion(): string | undefined {
        return this['flink_version'];
    }
    public withExecutionAgencyUrn(executionAgencyUrn: string): UpdateFlinkJarJobRequestBody {
        this['execution_agency_urn'] = executionAgencyUrn;
        return this;
    }
    public set executionAgencyUrn(executionAgencyUrn: string  | undefined) {
        this['execution_agency_urn'] = executionAgencyUrn;
    }
    public get executionAgencyUrn(): string | undefined {
        return this['execution_agency_urn'];
    }
    public withImage(image: string): UpdateFlinkJarJobRequestBody {
        this['image'] = image;
        return this;
    }
    public withResumeCheckpoint(resumeCheckpoint: boolean): UpdateFlinkJarJobRequestBody {
        this['resume_checkpoint'] = resumeCheckpoint;
        return this;
    }
    public set resumeCheckpoint(resumeCheckpoint: boolean  | undefined) {
        this['resume_checkpoint'] = resumeCheckpoint;
    }
    public get resumeCheckpoint(): boolean | undefined {
        return this['resume_checkpoint'];
    }
    public withResumeMaxNum(resumeMaxNum: number): UpdateFlinkJarJobRequestBody {
        this['resume_max_num'] = resumeMaxNum;
        return this;
    }
    public set resumeMaxNum(resumeMaxNum: number  | undefined) {
        this['resume_max_num'] = resumeMaxNum;
    }
    public get resumeMaxNum(): number | undefined {
        return this['resume_max_num'];
    }
    public withCheckpointPath(checkpointPath: string): UpdateFlinkJarJobRequestBody {
        this['checkpoint_path'] = checkpointPath;
        return this;
    }
    public set checkpointPath(checkpointPath: string  | undefined) {
        this['checkpoint_path'] = checkpointPath;
    }
    public get checkpointPath(): string | undefined {
        return this['checkpoint_path'];
    }
    public withRuntimeConfig(runtimeConfig: string): UpdateFlinkJarJobRequestBody {
        this['runtime_config'] = runtimeConfig;
        return this;
    }
    public set runtimeConfig(runtimeConfig: string  | undefined) {
        this['runtime_config'] = runtimeConfig;
    }
    public get runtimeConfig(): string | undefined {
        return this['runtime_config'];
    }
    public withJobType(jobType: string): UpdateFlinkJarJobRequestBody {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: string  | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType(): string | undefined {
        return this['job_type'];
    }
    public withResourceConfig(resourceConfig: ResourceConfig): UpdateFlinkJarJobRequestBody {
        this['resource_config'] = resourceConfig;
        return this;
    }
    public set resourceConfig(resourceConfig: ResourceConfig  | undefined) {
        this['resource_config'] = resourceConfig;
    }
    public get resourceConfig(): ResourceConfig | undefined {
        return this['resource_config'];
    }
    public withResourceConfigVersion(resourceConfigVersion: string): UpdateFlinkJarJobRequestBody {
        this['resource_config_version'] = resourceConfigVersion;
        return this;
    }
    public set resourceConfigVersion(resourceConfigVersion: string  | undefined) {
        this['resource_config_version'] = resourceConfigVersion;
    }
    public get resourceConfigVersion(): string | undefined {
        return this['resource_config_version'];
    }
}