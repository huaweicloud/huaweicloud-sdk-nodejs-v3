import { AlarmNotifyConfig } from './AlarmNotifyConfig';
import { CompareResultInfo } from './CompareResultInfo';
import { DbParamInfo } from './DbParamInfo';
import { JobBaseInfo } from './JobBaseInfo';
import { JobEndpointInfo } from './JobEndpointInfo';
import { JobNodeInfo } from './JobNodeInfo';
import { JobProgressInfo } from './JobProgressInfo';
import { PeriodOrderInfo } from './PeriodOrderInfo';
import { PolicyConfig } from './PolicyConfig';
import { QueryMetricResult } from './QueryMetricResult';
import { QueryMigrationObjectProgressInfo } from './QueryMigrationObjectProgressInfo';
import { QueryNetworkResult } from './QueryNetworkResult';
import { QueryPreCheckResult } from './QueryPreCheckResult';
import { SpeedLimitInfo } from './SpeedLimitInfo';
import { SupportImportFileResult } from './SupportImportFileResult';
import { TaskLogInfo } from './TaskLogInfo';
import { TuningParamInfo } from './TuningParamInfo';
import { UserMigrationInfo } from './UserMigrationInfo';


export class JobDetailResp {
    public id?: string;
    public status?: string;
    private 'create_time'?: string;
    private 'total_count'?: number;
    private 'master_job_id'?: string;
    private 'base_info'?: JobBaseInfo;
    private 'source_endpoint'?: Array<JobEndpointInfo>;
    private 'target_endpoint'?: Array<JobEndpointInfo>;
    private 'alarm_notify'?: AlarmNotifyConfig;
    private 'speed_limit'?: Array<SpeedLimitInfo>;
    private 'user_migration'?: UserMigrationInfo;
    private 'policy_config'?: PolicyConfig;
    private 'db_param'?: DbParamInfo;
    private 'tuning_params'?: TuningParamInfo;
    private 'period_order'?: PeriodOrderInfo;
    private 'node_info'?: JobNodeInfo;
    public logs?: Array<TaskLogInfo>;
    private 'network_results'?: Array<QueryNetworkResult>;
    private 'precheck_result'?: QueryPreCheckResult;
    private 'progress_info'?: JobProgressInfo;
    private 'migration_object_progress_info'?: QueryMigrationObjectProgressInfo;
    public metrics?: QueryMetricResult;
    private 'compare_result'?: CompareResultInfo;
    private 'support_import_file_resp'?: SupportImportFileResult;
    private 'instance_features'?: { [key: string]: string; };
    private 'task_version'?: string;
    public constructor() { 
    }
    public withId(id: string): JobDetailResp {
        this['id'] = id;
        return this;
    }
    public withStatus(status: string): JobDetailResp {
        this['status'] = status;
        return this;
    }
    public withCreateTime(createTime: string): JobDetailResp {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withTotalCount(totalCount: number): JobDetailResp {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withMasterJobId(masterJobId: string): JobDetailResp {
        this['master_job_id'] = masterJobId;
        return this;
    }
    public set masterJobId(masterJobId: string  | undefined) {
        this['master_job_id'] = masterJobId;
    }
    public get masterJobId(): string | undefined {
        return this['master_job_id'];
    }
    public withBaseInfo(baseInfo: JobBaseInfo): JobDetailResp {
        this['base_info'] = baseInfo;
        return this;
    }
    public set baseInfo(baseInfo: JobBaseInfo  | undefined) {
        this['base_info'] = baseInfo;
    }
    public get baseInfo(): JobBaseInfo | undefined {
        return this['base_info'];
    }
    public withSourceEndpoint(sourceEndpoint: Array<JobEndpointInfo>): JobDetailResp {
        this['source_endpoint'] = sourceEndpoint;
        return this;
    }
    public set sourceEndpoint(sourceEndpoint: Array<JobEndpointInfo>  | undefined) {
        this['source_endpoint'] = sourceEndpoint;
    }
    public get sourceEndpoint(): Array<JobEndpointInfo> | undefined {
        return this['source_endpoint'];
    }
    public withTargetEndpoint(targetEndpoint: Array<JobEndpointInfo>): JobDetailResp {
        this['target_endpoint'] = targetEndpoint;
        return this;
    }
    public set targetEndpoint(targetEndpoint: Array<JobEndpointInfo>  | undefined) {
        this['target_endpoint'] = targetEndpoint;
    }
    public get targetEndpoint(): Array<JobEndpointInfo> | undefined {
        return this['target_endpoint'];
    }
    public withAlarmNotify(alarmNotify: AlarmNotifyConfig): JobDetailResp {
        this['alarm_notify'] = alarmNotify;
        return this;
    }
    public set alarmNotify(alarmNotify: AlarmNotifyConfig  | undefined) {
        this['alarm_notify'] = alarmNotify;
    }
    public get alarmNotify(): AlarmNotifyConfig | undefined {
        return this['alarm_notify'];
    }
    public withSpeedLimit(speedLimit: Array<SpeedLimitInfo>): JobDetailResp {
        this['speed_limit'] = speedLimit;
        return this;
    }
    public set speedLimit(speedLimit: Array<SpeedLimitInfo>  | undefined) {
        this['speed_limit'] = speedLimit;
    }
    public get speedLimit(): Array<SpeedLimitInfo> | undefined {
        return this['speed_limit'];
    }
    public withUserMigration(userMigration: UserMigrationInfo): JobDetailResp {
        this['user_migration'] = userMigration;
        return this;
    }
    public set userMigration(userMigration: UserMigrationInfo  | undefined) {
        this['user_migration'] = userMigration;
    }
    public get userMigration(): UserMigrationInfo | undefined {
        return this['user_migration'];
    }
    public withPolicyConfig(policyConfig: PolicyConfig): JobDetailResp {
        this['policy_config'] = policyConfig;
        return this;
    }
    public set policyConfig(policyConfig: PolicyConfig  | undefined) {
        this['policy_config'] = policyConfig;
    }
    public get policyConfig(): PolicyConfig | undefined {
        return this['policy_config'];
    }
    public withDbParam(dbParam: DbParamInfo): JobDetailResp {
        this['db_param'] = dbParam;
        return this;
    }
    public set dbParam(dbParam: DbParamInfo  | undefined) {
        this['db_param'] = dbParam;
    }
    public get dbParam(): DbParamInfo | undefined {
        return this['db_param'];
    }
    public withTuningParams(tuningParams: TuningParamInfo): JobDetailResp {
        this['tuning_params'] = tuningParams;
        return this;
    }
    public set tuningParams(tuningParams: TuningParamInfo  | undefined) {
        this['tuning_params'] = tuningParams;
    }
    public get tuningParams(): TuningParamInfo | undefined {
        return this['tuning_params'];
    }
    public withPeriodOrder(periodOrder: PeriodOrderInfo): JobDetailResp {
        this['period_order'] = periodOrder;
        return this;
    }
    public set periodOrder(periodOrder: PeriodOrderInfo  | undefined) {
        this['period_order'] = periodOrder;
    }
    public get periodOrder(): PeriodOrderInfo | undefined {
        return this['period_order'];
    }
    public withNodeInfo(nodeInfo: JobNodeInfo): JobDetailResp {
        this['node_info'] = nodeInfo;
        return this;
    }
    public set nodeInfo(nodeInfo: JobNodeInfo  | undefined) {
        this['node_info'] = nodeInfo;
    }
    public get nodeInfo(): JobNodeInfo | undefined {
        return this['node_info'];
    }
    public withLogs(logs: Array<TaskLogInfo>): JobDetailResp {
        this['logs'] = logs;
        return this;
    }
    public withNetworkResults(networkResults: Array<QueryNetworkResult>): JobDetailResp {
        this['network_results'] = networkResults;
        return this;
    }
    public set networkResults(networkResults: Array<QueryNetworkResult>  | undefined) {
        this['network_results'] = networkResults;
    }
    public get networkResults(): Array<QueryNetworkResult> | undefined {
        return this['network_results'];
    }
    public withPrecheckResult(precheckResult: QueryPreCheckResult): JobDetailResp {
        this['precheck_result'] = precheckResult;
        return this;
    }
    public set precheckResult(precheckResult: QueryPreCheckResult  | undefined) {
        this['precheck_result'] = precheckResult;
    }
    public get precheckResult(): QueryPreCheckResult | undefined {
        return this['precheck_result'];
    }
    public withProgressInfo(progressInfo: JobProgressInfo): JobDetailResp {
        this['progress_info'] = progressInfo;
        return this;
    }
    public set progressInfo(progressInfo: JobProgressInfo  | undefined) {
        this['progress_info'] = progressInfo;
    }
    public get progressInfo(): JobProgressInfo | undefined {
        return this['progress_info'];
    }
    public withMigrationObjectProgressInfo(migrationObjectProgressInfo: QueryMigrationObjectProgressInfo): JobDetailResp {
        this['migration_object_progress_info'] = migrationObjectProgressInfo;
        return this;
    }
    public set migrationObjectProgressInfo(migrationObjectProgressInfo: QueryMigrationObjectProgressInfo  | undefined) {
        this['migration_object_progress_info'] = migrationObjectProgressInfo;
    }
    public get migrationObjectProgressInfo(): QueryMigrationObjectProgressInfo | undefined {
        return this['migration_object_progress_info'];
    }
    public withMetrics(metrics: QueryMetricResult): JobDetailResp {
        this['metrics'] = metrics;
        return this;
    }
    public withCompareResult(compareResult: CompareResultInfo): JobDetailResp {
        this['compare_result'] = compareResult;
        return this;
    }
    public set compareResult(compareResult: CompareResultInfo  | undefined) {
        this['compare_result'] = compareResult;
    }
    public get compareResult(): CompareResultInfo | undefined {
        return this['compare_result'];
    }
    public withSupportImportFileResp(supportImportFileResp: SupportImportFileResult): JobDetailResp {
        this['support_import_file_resp'] = supportImportFileResp;
        return this;
    }
    public set supportImportFileResp(supportImportFileResp: SupportImportFileResult  | undefined) {
        this['support_import_file_resp'] = supportImportFileResp;
    }
    public get supportImportFileResp(): SupportImportFileResult | undefined {
        return this['support_import_file_resp'];
    }
    public withInstanceFeatures(instanceFeatures: { [key: string]: string; }): JobDetailResp {
        this['instance_features'] = instanceFeatures;
        return this;
    }
    public set instanceFeatures(instanceFeatures: { [key: string]: string; }  | undefined) {
        this['instance_features'] = instanceFeatures;
    }
    public get instanceFeatures(): { [key: string]: string; } | undefined {
        return this['instance_features'];
    }
    public withTaskVersion(taskVersion: string): JobDetailResp {
        this['task_version'] = taskVersion;
        return this;
    }
    public set taskVersion(taskVersion: string  | undefined) {
        this['task_version'] = taskVersion;
    }
    public get taskVersion(): string | undefined {
        return this['task_version'];
    }
}