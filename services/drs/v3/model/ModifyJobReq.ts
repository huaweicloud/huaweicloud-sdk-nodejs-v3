import { AlarmNotifyInfo } from './AlarmNotifyInfo';
import { Endpoint } from './Endpoint';
import { ResourceTag } from './ResourceTag';


export class ModifyJobReq {
    private 'job_id': string | undefined;
    public description?: string;
    public name?: string;
    private 'alarm_notify'?: AlarmNotifyInfo | undefined;
    private 'task_type'?: ModifyJobReqTaskTypeEnum | undefined;
    private 'source_endpoint'?: Endpoint | undefined;
    private 'target_endpoint'?: Endpoint | undefined;
    private 'node_type'?: ModifyJobReqNodeTypeEnum | undefined;
    private 'engine_type'?: ModifyJobReqEngineTypeEnum | undefined;
    private 'net_type'?: ModifyJobReqNetTypeEnum | undefined;
    private 'store_db_info'?: boolean | undefined;
    private 'is_recreate'?: boolean | undefined;
    private 'job_direction'?: ModifyJobReqJobDirectionEnum | undefined;
    private 'is_target_readonly'?: boolean | undefined;
    private 'replace_definer'?: boolean | undefined;
    public tags?: Array<ResourceTag>;
    private 'db_use_type'?: ModifyJobReqDbUseTypeEnum | undefined;
    private 'product_id'?: string | undefined;
    public constructor(jobId?: any) { 
        this['job_id'] = jobId;
    }
    public withJobId(jobId: string): ModifyJobReq {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId() {
        return this['job_id'];
    }
    public withDescription(description: string): ModifyJobReq {
        this['description'] = description;
        return this;
    }
    public withName(name: string): ModifyJobReq {
        this['name'] = name;
        return this;
    }
    public withAlarmNotify(alarmNotify: AlarmNotifyInfo): ModifyJobReq {
        this['alarm_notify'] = alarmNotify;
        return this;
    }
    public set alarmNotify(alarmNotify: AlarmNotifyInfo | undefined) {
        this['alarm_notify'] = alarmNotify;
    }
    public get alarmNotify() {
        return this['alarm_notify'];
    }
    public withTaskType(taskType: ModifyJobReqTaskTypeEnum): ModifyJobReq {
        this['task_type'] = taskType;
        return this;
    }
    public set taskType(taskType: ModifyJobReqTaskTypeEnum | undefined) {
        this['task_type'] = taskType;
    }
    public get taskType() {
        return this['task_type'];
    }
    public withSourceEndpoint(sourceEndpoint: Endpoint): ModifyJobReq {
        this['source_endpoint'] = sourceEndpoint;
        return this;
    }
    public set sourceEndpoint(sourceEndpoint: Endpoint | undefined) {
        this['source_endpoint'] = sourceEndpoint;
    }
    public get sourceEndpoint() {
        return this['source_endpoint'];
    }
    public withTargetEndpoint(targetEndpoint: Endpoint): ModifyJobReq {
        this['target_endpoint'] = targetEndpoint;
        return this;
    }
    public set targetEndpoint(targetEndpoint: Endpoint | undefined) {
        this['target_endpoint'] = targetEndpoint;
    }
    public get targetEndpoint() {
        return this['target_endpoint'];
    }
    public withNodeType(nodeType: ModifyJobReqNodeTypeEnum): ModifyJobReq {
        this['node_type'] = nodeType;
        return this;
    }
    public set nodeType(nodeType: ModifyJobReqNodeTypeEnum | undefined) {
        this['node_type'] = nodeType;
    }
    public get nodeType() {
        return this['node_type'];
    }
    public withEngineType(engineType: ModifyJobReqEngineTypeEnum): ModifyJobReq {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: ModifyJobReqEngineTypeEnum | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType() {
        return this['engine_type'];
    }
    public withNetType(netType: ModifyJobReqNetTypeEnum): ModifyJobReq {
        this['net_type'] = netType;
        return this;
    }
    public set netType(netType: ModifyJobReqNetTypeEnum | undefined) {
        this['net_type'] = netType;
    }
    public get netType() {
        return this['net_type'];
    }
    public withStoreDbInfo(storeDbInfo: boolean): ModifyJobReq {
        this['store_db_info'] = storeDbInfo;
        return this;
    }
    public set storeDbInfo(storeDbInfo: boolean | undefined) {
        this['store_db_info'] = storeDbInfo;
    }
    public get storeDbInfo() {
        return this['store_db_info'];
    }
    public withIsRecreate(isRecreate: boolean): ModifyJobReq {
        this['is_recreate'] = isRecreate;
        return this;
    }
    public set isRecreate(isRecreate: boolean | undefined) {
        this['is_recreate'] = isRecreate;
    }
    public get isRecreate() {
        return this['is_recreate'];
    }
    public withJobDirection(jobDirection: ModifyJobReqJobDirectionEnum): ModifyJobReq {
        this['job_direction'] = jobDirection;
        return this;
    }
    public set jobDirection(jobDirection: ModifyJobReqJobDirectionEnum | undefined) {
        this['job_direction'] = jobDirection;
    }
    public get jobDirection() {
        return this['job_direction'];
    }
    public withIsTargetReadonly(isTargetReadonly: boolean): ModifyJobReq {
        this['is_target_readonly'] = isTargetReadonly;
        return this;
    }
    public set isTargetReadonly(isTargetReadonly: boolean | undefined) {
        this['is_target_readonly'] = isTargetReadonly;
    }
    public get isTargetReadonly() {
        return this['is_target_readonly'];
    }
    public withReplaceDefiner(replaceDefiner: boolean): ModifyJobReq {
        this['replace_definer'] = replaceDefiner;
        return this;
    }
    public set replaceDefiner(replaceDefiner: boolean | undefined) {
        this['replace_definer'] = replaceDefiner;
    }
    public get replaceDefiner() {
        return this['replace_definer'];
    }
    public withTags(tags: Array<ResourceTag>): ModifyJobReq {
        this['tags'] = tags;
        return this;
    }
    public withDbUseType(dbUseType: ModifyJobReqDbUseTypeEnum): ModifyJobReq {
        this['db_use_type'] = dbUseType;
        return this;
    }
    public set dbUseType(dbUseType: ModifyJobReqDbUseTypeEnum | undefined) {
        this['db_use_type'] = dbUseType;
    }
    public get dbUseType() {
        return this['db_use_type'];
    }
    public withProductId(productId: string): ModifyJobReq {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string | undefined) {
        this['product_id'] = productId;
    }
    public get productId() {
        return this['product_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ModifyJobReqTaskTypeEnum {
    FULL_TRANS = 'FULL_TRANS',
    INCR_TRANS = 'INCR_TRANS',
    FULL_INCR_TRANS = 'FULL_INCR_TRANS'
}
/**
    * @export
    * @enum {string}
    */
export enum ModifyJobReqNodeTypeEnum {
    HIGH = 'high'
}
/**
    * @export
    * @enum {string}
    */
export enum ModifyJobReqEngineTypeEnum {
    MYSQL = 'mysql',
    MONGODB = 'mongodb',
    CLOUDDATAGUARD_MYSQL = 'cloudDataGuard-mysql'
}
/**
    * @export
    * @enum {string}
    */
export enum ModifyJobReqNetTypeEnum {
    VPC = 'vpc',
    VPN = 'vpn',
    EIP = 'eip'
}
/**
    * @export
    * @enum {string}
    */
export enum ModifyJobReqJobDirectionEnum {
    UP = 'up',
    DOWN = 'down',
    NON_DBS = 'non-dbs'
}
/**
    * @export
    * @enum {string}
    */
export enum ModifyJobReqDbUseTypeEnum {
    MIGRATION = 'migration',
    SYNC = 'sync',
    CLOUDDATAGUARD = 'cloudDataGuard'
}
