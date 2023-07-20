import { AlarmNotifyConfig } from './AlarmNotifyConfig';
import { DbObject } from './DbObject';
import { DbParamInfo } from './DbParamInfo';
import { JobBaseInfo } from './JobBaseInfo';
import { JobEndpointInfo } from './JobEndpointInfo';
import { JobNodeInfo } from './JobNodeInfo';
import { PeriodOrderInfo } from './PeriodOrderInfo';
import { PolicyConfig } from './PolicyConfig';
import { SpeedLimitInfo } from './SpeedLimitInfo';
import { TuningParamInfo } from './TuningParamInfo';
import { UserMigrationInfo } from './UserMigrationInfo';


export class AsyncCreateJobReq {
    private 'base_info'?: JobBaseInfo;
    private 'source_endpoint'?: Array<JobEndpointInfo>;
    private 'target_endpoint'?: Array<JobEndpointInfo>;
    private 'alarm_notify'?: AlarmNotifyConfig;
    private 'speed_limit'?: Array<SpeedLimitInfo>;
    private 'user_migration'?: UserMigrationInfo;
    private 'policy_config'?: PolicyConfig;
    private 'db_object'?: DbObject;
    private 'db_param'?: DbParamInfo;
    private 'tuning_params'?: TuningParamInfo;
    private 'period_order'?: PeriodOrderInfo;
    private 'node_info'?: JobNodeInfo;
    public constructor(baseInfo?: JobBaseInfo, sourceEndpoint?: Array<JobEndpointInfo>, targetEndpoint?: Array<JobEndpointInfo>, policyConfig?: PolicyConfig, dbObject?: DbObject, nodeInfo?: JobNodeInfo) { 
        this['base_info'] = baseInfo;
        this['source_endpoint'] = sourceEndpoint;
        this['target_endpoint'] = targetEndpoint;
        this['policy_config'] = policyConfig;
        this['db_object'] = dbObject;
        this['node_info'] = nodeInfo;
    }
    public withBaseInfo(baseInfo: JobBaseInfo): AsyncCreateJobReq {
        this['base_info'] = baseInfo;
        return this;
    }
    public set baseInfo(baseInfo: JobBaseInfo  | undefined) {
        this['base_info'] = baseInfo;
    }
    public get baseInfo(): JobBaseInfo | undefined {
        return this['base_info'];
    }
    public withSourceEndpoint(sourceEndpoint: Array<JobEndpointInfo>): AsyncCreateJobReq {
        this['source_endpoint'] = sourceEndpoint;
        return this;
    }
    public set sourceEndpoint(sourceEndpoint: Array<JobEndpointInfo>  | undefined) {
        this['source_endpoint'] = sourceEndpoint;
    }
    public get sourceEndpoint(): Array<JobEndpointInfo> | undefined {
        return this['source_endpoint'];
    }
    public withTargetEndpoint(targetEndpoint: Array<JobEndpointInfo>): AsyncCreateJobReq {
        this['target_endpoint'] = targetEndpoint;
        return this;
    }
    public set targetEndpoint(targetEndpoint: Array<JobEndpointInfo>  | undefined) {
        this['target_endpoint'] = targetEndpoint;
    }
    public get targetEndpoint(): Array<JobEndpointInfo> | undefined {
        return this['target_endpoint'];
    }
    public withAlarmNotify(alarmNotify: AlarmNotifyConfig): AsyncCreateJobReq {
        this['alarm_notify'] = alarmNotify;
        return this;
    }
    public set alarmNotify(alarmNotify: AlarmNotifyConfig  | undefined) {
        this['alarm_notify'] = alarmNotify;
    }
    public get alarmNotify(): AlarmNotifyConfig | undefined {
        return this['alarm_notify'];
    }
    public withSpeedLimit(speedLimit: Array<SpeedLimitInfo>): AsyncCreateJobReq {
        this['speed_limit'] = speedLimit;
        return this;
    }
    public set speedLimit(speedLimit: Array<SpeedLimitInfo>  | undefined) {
        this['speed_limit'] = speedLimit;
    }
    public get speedLimit(): Array<SpeedLimitInfo> | undefined {
        return this['speed_limit'];
    }
    public withUserMigration(userMigration: UserMigrationInfo): AsyncCreateJobReq {
        this['user_migration'] = userMigration;
        return this;
    }
    public set userMigration(userMigration: UserMigrationInfo  | undefined) {
        this['user_migration'] = userMigration;
    }
    public get userMigration(): UserMigrationInfo | undefined {
        return this['user_migration'];
    }
    public withPolicyConfig(policyConfig: PolicyConfig): AsyncCreateJobReq {
        this['policy_config'] = policyConfig;
        return this;
    }
    public set policyConfig(policyConfig: PolicyConfig  | undefined) {
        this['policy_config'] = policyConfig;
    }
    public get policyConfig(): PolicyConfig | undefined {
        return this['policy_config'];
    }
    public withDbObject(dbObject: DbObject): AsyncCreateJobReq {
        this['db_object'] = dbObject;
        return this;
    }
    public set dbObject(dbObject: DbObject  | undefined) {
        this['db_object'] = dbObject;
    }
    public get dbObject(): DbObject | undefined {
        return this['db_object'];
    }
    public withDbParam(dbParam: DbParamInfo): AsyncCreateJobReq {
        this['db_param'] = dbParam;
        return this;
    }
    public set dbParam(dbParam: DbParamInfo  | undefined) {
        this['db_param'] = dbParam;
    }
    public get dbParam(): DbParamInfo | undefined {
        return this['db_param'];
    }
    public withTuningParams(tuningParams: TuningParamInfo): AsyncCreateJobReq {
        this['tuning_params'] = tuningParams;
        return this;
    }
    public set tuningParams(tuningParams: TuningParamInfo  | undefined) {
        this['tuning_params'] = tuningParams;
    }
    public get tuningParams(): TuningParamInfo | undefined {
        return this['tuning_params'];
    }
    public withPeriodOrder(periodOrder: PeriodOrderInfo): AsyncCreateJobReq {
        this['period_order'] = periodOrder;
        return this;
    }
    public set periodOrder(periodOrder: PeriodOrderInfo  | undefined) {
        this['period_order'] = periodOrder;
    }
    public get periodOrder(): PeriodOrderInfo | undefined {
        return this['period_order'];
    }
    public withNodeInfo(nodeInfo: JobNodeInfo): AsyncCreateJobReq {
        this['node_info'] = nodeInfo;
        return this;
    }
    public set nodeInfo(nodeInfo: JobNodeInfo  | undefined) {
        this['node_info'] = nodeInfo;
    }
    public get nodeInfo(): JobNodeInfo | undefined {
        return this['node_info'];
    }
}