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
import { TaskLogInfo } from './TaskLogInfo';
import { TuningParamInfo } from './TuningParamInfo';
import { UserMigrationInfo } from './UserMigrationInfo';


export class JobDetailResp {
    public id?: string;
    public status?: string;
    private 'create_time'?: string | undefined;
    private 'total_count'?: number | undefined;
    private 'master_job_id'?: string | undefined;
    private 'base_info'?: JobBaseInfo | undefined;
    private 'source_endpoint'?: Array<JobEndpointInfo> | undefined;
    private 'target_endpoint'?: Array<JobEndpointInfo> | undefined;
    private 'alarm_notify'?: AlarmNotifyConfig | undefined;
    private 'speed_limit'?: Array<SpeedLimitInfo> | undefined;
    private 'user_migration'?: UserMigrationInfo | undefined;
    private 'policy_config'?: PolicyConfig | undefined;
    private 'db_param'?: DbParamInfo | undefined;
    private 'tuning_params'?: TuningParamInfo | undefined;
    private 'period_order'?: PeriodOrderInfo | undefined;
    private 'node_info'?: JobNodeInfo | undefined;
    public logs?: Array<TaskLogInfo>;
    private 'network_results'?: Array<QueryNetworkResult> | undefined;
    private 'precheck_result'?: QueryPreCheckResult | undefined;
    private 'progress_info'?: JobProgressInfo | undefined;
    private 'migration_object_progress_info'?: QueryMigrationObjectProgressInfo | undefined;
    public metrics?: QueryMetricResult;
    private 'compare_result'?: CompareResultInfo | undefined;
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
    public set createTime(createTime: string | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
    public withTotalCount(totalCount: number): JobDetailResp {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount() {
        return this['total_count'];
    }
    public withMasterJobId(masterJobId: string): JobDetailResp {
        this['master_job_id'] = masterJobId;
        return this;
    }
    public set masterJobId(masterJobId: string | undefined) {
        this['master_job_id'] = masterJobId;
    }
    public get masterJobId() {
        return this['master_job_id'];
    }
    public withBaseInfo(baseInfo: JobBaseInfo): JobDetailResp {
        this['base_info'] = baseInfo;
        return this;
    }
    public set baseInfo(baseInfo: JobBaseInfo | undefined) {
        this['base_info'] = baseInfo;
    }
    public get baseInfo() {
        return this['base_info'];
    }
    public withSourceEndpoint(sourceEndpoint: Array<JobEndpointInfo>): JobDetailResp {
        this['source_endpoint'] = sourceEndpoint;
        return this;
    }
    public set sourceEndpoint(sourceEndpoint: Array<JobEndpointInfo> | undefined) {
        this['source_endpoint'] = sourceEndpoint;
    }
    public get sourceEndpoint() {
        return this['source_endpoint'];
    }
    public withTargetEndpoint(targetEndpoint: Array<JobEndpointInfo>): JobDetailResp {
        this['target_endpoint'] = targetEndpoint;
        return this;
    }
    public set targetEndpoint(targetEndpoint: Array<JobEndpointInfo> | undefined) {
        this['target_endpoint'] = targetEndpoint;
    }
    public get targetEndpoint() {
        return this['target_endpoint'];
    }
    public withAlarmNotify(alarmNotify: AlarmNotifyConfig): JobDetailResp {
        this['alarm_notify'] = alarmNotify;
        return this;
    }
    public set alarmNotify(alarmNotify: AlarmNotifyConfig | undefined) {
        this['alarm_notify'] = alarmNotify;
    }
    public get alarmNotify() {
        return this['alarm_notify'];
    }
    public withSpeedLimit(speedLimit: Array<SpeedLimitInfo>): JobDetailResp {
        this['speed_limit'] = speedLimit;
        return this;
    }
    public set speedLimit(speedLimit: Array<SpeedLimitInfo> | undefined) {
        this['speed_limit'] = speedLimit;
    }
    public get speedLimit() {
        return this['speed_limit'];
    }
    public withUserMigration(userMigration: UserMigrationInfo): JobDetailResp {
        this['user_migration'] = userMigration;
        return this;
    }
    public set userMigration(userMigration: UserMigrationInfo | undefined) {
        this['user_migration'] = userMigration;
    }
    public get userMigration() {
        return this['user_migration'];
    }
    public withPolicyConfig(policyConfig: PolicyConfig): JobDetailResp {
        this['policy_config'] = policyConfig;
        return this;
    }
    public set policyConfig(policyConfig: PolicyConfig | undefined) {
        this['policy_config'] = policyConfig;
    }
    public get policyConfig() {
        return this['policy_config'];
    }
    public withDbParam(dbParam: DbParamInfo): JobDetailResp {
        this['db_param'] = dbParam;
        return this;
    }
    public set dbParam(dbParam: DbParamInfo | undefined) {
        this['db_param'] = dbParam;
    }
    public get dbParam() {
        return this['db_param'];
    }
    public withTuningParams(tuningParams: TuningParamInfo): JobDetailResp {
        this['tuning_params'] = tuningParams;
        return this;
    }
    public set tuningParams(tuningParams: TuningParamInfo | undefined) {
        this['tuning_params'] = tuningParams;
    }
    public get tuningParams() {
        return this['tuning_params'];
    }
    public withPeriodOrder(periodOrder: PeriodOrderInfo): JobDetailResp {
        this['period_order'] = periodOrder;
        return this;
    }
    public set periodOrder(periodOrder: PeriodOrderInfo | undefined) {
        this['period_order'] = periodOrder;
    }
    public get periodOrder() {
        return this['period_order'];
    }
    public withNodeInfo(nodeInfo: JobNodeInfo): JobDetailResp {
        this['node_info'] = nodeInfo;
        return this;
    }
    public set nodeInfo(nodeInfo: JobNodeInfo | undefined) {
        this['node_info'] = nodeInfo;
    }
    public get nodeInfo() {
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
    public set networkResults(networkResults: Array<QueryNetworkResult> | undefined) {
        this['network_results'] = networkResults;
    }
    public get networkResults() {
        return this['network_results'];
    }
    public withPrecheckResult(precheckResult: QueryPreCheckResult): JobDetailResp {
        this['precheck_result'] = precheckResult;
        return this;
    }
    public set precheckResult(precheckResult: QueryPreCheckResult | undefined) {
        this['precheck_result'] = precheckResult;
    }
    public get precheckResult() {
        return this['precheck_result'];
    }
    public withProgressInfo(progressInfo: JobProgressInfo): JobDetailResp {
        this['progress_info'] = progressInfo;
        return this;
    }
    public set progressInfo(progressInfo: JobProgressInfo | undefined) {
        this['progress_info'] = progressInfo;
    }
    public get progressInfo() {
        return this['progress_info'];
    }
    public withMigrationObjectProgressInfo(migrationObjectProgressInfo: QueryMigrationObjectProgressInfo): JobDetailResp {
        this['migration_object_progress_info'] = migrationObjectProgressInfo;
        return this;
    }
    public set migrationObjectProgressInfo(migrationObjectProgressInfo: QueryMigrationObjectProgressInfo | undefined) {
        this['migration_object_progress_info'] = migrationObjectProgressInfo;
    }
    public get migrationObjectProgressInfo() {
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
    public set compareResult(compareResult: CompareResultInfo | undefined) {
        this['compare_result'] = compareResult;
    }
    public get compareResult() {
        return this['compare_result'];
    }
}