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
    private 'base_info': JobBaseInfo | undefined;
    private 'source_endpoint': Array<JobEndpointInfo> | undefined;
    private 'target_endpoint': Array<JobEndpointInfo> | undefined;
    private 'alarm_notify'?: AlarmNotifyConfig | undefined;
    private 'speed_limit'?: Array<SpeedLimitInfo> | undefined;
    private 'user_migration'?: UserMigrationInfo | undefined;
    private 'policy_config': PolicyConfig | undefined;
    private 'db_object': DbObject | undefined;
    private 'db_param'?: DbParamInfo | undefined;
    private 'tuning_params'?: TuningParamInfo | undefined;
    private 'period_order'?: PeriodOrderInfo | undefined;
    private 'node_info': JobNodeInfo | undefined;
    public constructor(baseInfo?: any, sourceEndpoint?: any, targetEndpoint?: any, policyConfig?: any, dbObject?: any, nodeInfo?: any) { 
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
    public set baseInfo(baseInfo: JobBaseInfo | undefined) {
        this['base_info'] = baseInfo;
    }
    public get baseInfo() {
        return this['base_info'];
    }
    public withSourceEndpoint(sourceEndpoint: Array<JobEndpointInfo>): AsyncCreateJobReq {
        this['source_endpoint'] = sourceEndpoint;
        return this;
    }
    public set sourceEndpoint(sourceEndpoint: Array<JobEndpointInfo> | undefined) {
        this['source_endpoint'] = sourceEndpoint;
    }
    public get sourceEndpoint() {
        return this['source_endpoint'];
    }
    public withTargetEndpoint(targetEndpoint: Array<JobEndpointInfo>): AsyncCreateJobReq {
        this['target_endpoint'] = targetEndpoint;
        return this;
    }
    public set targetEndpoint(targetEndpoint: Array<JobEndpointInfo> | undefined) {
        this['target_endpoint'] = targetEndpoint;
    }
    public get targetEndpoint() {
        return this['target_endpoint'];
    }
    public withAlarmNotify(alarmNotify: AlarmNotifyConfig): AsyncCreateJobReq {
        this['alarm_notify'] = alarmNotify;
        return this;
    }
    public set alarmNotify(alarmNotify: AlarmNotifyConfig | undefined) {
        this['alarm_notify'] = alarmNotify;
    }
    public get alarmNotify() {
        return this['alarm_notify'];
    }
    public withSpeedLimit(speedLimit: Array<SpeedLimitInfo>): AsyncCreateJobReq {
        this['speed_limit'] = speedLimit;
        return this;
    }
    public set speedLimit(speedLimit: Array<SpeedLimitInfo> | undefined) {
        this['speed_limit'] = speedLimit;
    }
    public get speedLimit() {
        return this['speed_limit'];
    }
    public withUserMigration(userMigration: UserMigrationInfo): AsyncCreateJobReq {
        this['user_migration'] = userMigration;
        return this;
    }
    public set userMigration(userMigration: UserMigrationInfo | undefined) {
        this['user_migration'] = userMigration;
    }
    public get userMigration() {
        return this['user_migration'];
    }
    public withPolicyConfig(policyConfig: PolicyConfig): AsyncCreateJobReq {
        this['policy_config'] = policyConfig;
        return this;
    }
    public set policyConfig(policyConfig: PolicyConfig | undefined) {
        this['policy_config'] = policyConfig;
    }
    public get policyConfig() {
        return this['policy_config'];
    }
    public withDbObject(dbObject: DbObject): AsyncCreateJobReq {
        this['db_object'] = dbObject;
        return this;
    }
    public set dbObject(dbObject: DbObject | undefined) {
        this['db_object'] = dbObject;
    }
    public get dbObject() {
        return this['db_object'];
    }
    public withDbParam(dbParam: DbParamInfo): AsyncCreateJobReq {
        this['db_param'] = dbParam;
        return this;
    }
    public set dbParam(dbParam: DbParamInfo | undefined) {
        this['db_param'] = dbParam;
    }
    public get dbParam() {
        return this['db_param'];
    }
    public withTuningParams(tuningParams: TuningParamInfo): AsyncCreateJobReq {
        this['tuning_params'] = tuningParams;
        return this;
    }
    public set tuningParams(tuningParams: TuningParamInfo | undefined) {
        this['tuning_params'] = tuningParams;
    }
    public get tuningParams() {
        return this['tuning_params'];
    }
    public withPeriodOrder(periodOrder: PeriodOrderInfo): AsyncCreateJobReq {
        this['period_order'] = periodOrder;
        return this;
    }
    public set periodOrder(periodOrder: PeriodOrderInfo | undefined) {
        this['period_order'] = periodOrder;
    }
    public get periodOrder() {
        return this['period_order'];
    }
    public withNodeInfo(nodeInfo: JobNodeInfo): AsyncCreateJobReq {
        this['node_info'] = nodeInfo;
        return this;
    }
    public set nodeInfo(nodeInfo: JobNodeInfo | undefined) {
        this['node_info'] = nodeInfo;
    }
    public get nodeInfo() {
        return this['node_info'];
    }
}