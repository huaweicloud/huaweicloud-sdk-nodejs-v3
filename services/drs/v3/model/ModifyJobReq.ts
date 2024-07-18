import { AlarmNotifyInfo } from './AlarmNotifyInfo';
import { Endpoint } from './Endpoint';
import { ResourceTag } from './ResourceTag';


export class ModifyJobReq {
    private 'job_id'?: string;
    public description?: string;
    public name?: string;
    private 'alarm_notify'?: AlarmNotifyInfo;
    private 'task_type'?: ModifyJobReqTaskTypeEnum | string;
    private 'source_endpoint'?: Endpoint;
    private 'target_endpoint'?: Endpoint;
    private 'node_type'?: ModifyJobReqNodeTypeEnum | string;
    private 'engine_type'?: ModifyJobReqEngineTypeEnum | string;
    private 'net_type'?: ModifyJobReqNetTypeEnum | string;
    private 'store_db_info'?: boolean;
    private 'is_recreate'?: boolean;
    private 'job_direction'?: ModifyJobReqJobDirectionEnum | string;
    private 'is_target_readonly'?: boolean;
    private 'replace_definer'?: boolean;
    public tags?: Array<ResourceTag>;
    private 'db_use_type'?: ModifyJobReqDbUseTypeEnum | string;
    private 'product_id'?: string;
    public constructor(jobId?: string) { 
        this['job_id'] = jobId;
    }
    public withJobId(jobId: string): ModifyJobReq {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
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
    public set alarmNotify(alarmNotify: AlarmNotifyInfo  | undefined) {
        this['alarm_notify'] = alarmNotify;
    }
    public get alarmNotify(): AlarmNotifyInfo | undefined {
        return this['alarm_notify'];
    }
    public withTaskType(taskType: ModifyJobReqTaskTypeEnum | string): ModifyJobReq {
        this['task_type'] = taskType;
        return this;
    }
    public set taskType(taskType: ModifyJobReqTaskTypeEnum | string  | undefined) {
        this['task_type'] = taskType;
    }
    public get taskType(): ModifyJobReqTaskTypeEnum | string | undefined {
        return this['task_type'];
    }
    public withSourceEndpoint(sourceEndpoint: Endpoint): ModifyJobReq {
        this['source_endpoint'] = sourceEndpoint;
        return this;
    }
    public set sourceEndpoint(sourceEndpoint: Endpoint  | undefined) {
        this['source_endpoint'] = sourceEndpoint;
    }
    public get sourceEndpoint(): Endpoint | undefined {
        return this['source_endpoint'];
    }
    public withTargetEndpoint(targetEndpoint: Endpoint): ModifyJobReq {
        this['target_endpoint'] = targetEndpoint;
        return this;
    }
    public set targetEndpoint(targetEndpoint: Endpoint  | undefined) {
        this['target_endpoint'] = targetEndpoint;
    }
    public get targetEndpoint(): Endpoint | undefined {
        return this['target_endpoint'];
    }
    public withNodeType(nodeType: ModifyJobReqNodeTypeEnum | string): ModifyJobReq {
        this['node_type'] = nodeType;
        return this;
    }
    public set nodeType(nodeType: ModifyJobReqNodeTypeEnum | string  | undefined) {
        this['node_type'] = nodeType;
    }
    public get nodeType(): ModifyJobReqNodeTypeEnum | string | undefined {
        return this['node_type'];
    }
    public withEngineType(engineType: ModifyJobReqEngineTypeEnum | string): ModifyJobReq {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: ModifyJobReqEngineTypeEnum | string  | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType(): ModifyJobReqEngineTypeEnum | string | undefined {
        return this['engine_type'];
    }
    public withNetType(netType: ModifyJobReqNetTypeEnum | string): ModifyJobReq {
        this['net_type'] = netType;
        return this;
    }
    public set netType(netType: ModifyJobReqNetTypeEnum | string  | undefined) {
        this['net_type'] = netType;
    }
    public get netType(): ModifyJobReqNetTypeEnum | string | undefined {
        return this['net_type'];
    }
    public withStoreDbInfo(storeDbInfo: boolean): ModifyJobReq {
        this['store_db_info'] = storeDbInfo;
        return this;
    }
    public set storeDbInfo(storeDbInfo: boolean  | undefined) {
        this['store_db_info'] = storeDbInfo;
    }
    public get storeDbInfo(): boolean | undefined {
        return this['store_db_info'];
    }
    public withIsRecreate(isRecreate: boolean): ModifyJobReq {
        this['is_recreate'] = isRecreate;
        return this;
    }
    public set isRecreate(isRecreate: boolean  | undefined) {
        this['is_recreate'] = isRecreate;
    }
    public get isRecreate(): boolean | undefined {
        return this['is_recreate'];
    }
    public withJobDirection(jobDirection: ModifyJobReqJobDirectionEnum | string): ModifyJobReq {
        this['job_direction'] = jobDirection;
        return this;
    }
    public set jobDirection(jobDirection: ModifyJobReqJobDirectionEnum | string  | undefined) {
        this['job_direction'] = jobDirection;
    }
    public get jobDirection(): ModifyJobReqJobDirectionEnum | string | undefined {
        return this['job_direction'];
    }
    public withIsTargetReadonly(isTargetReadonly: boolean): ModifyJobReq {
        this['is_target_readonly'] = isTargetReadonly;
        return this;
    }
    public set isTargetReadonly(isTargetReadonly: boolean  | undefined) {
        this['is_target_readonly'] = isTargetReadonly;
    }
    public get isTargetReadonly(): boolean | undefined {
        return this['is_target_readonly'];
    }
    public withReplaceDefiner(replaceDefiner: boolean): ModifyJobReq {
        this['replace_definer'] = replaceDefiner;
        return this;
    }
    public set replaceDefiner(replaceDefiner: boolean  | undefined) {
        this['replace_definer'] = replaceDefiner;
    }
    public get replaceDefiner(): boolean | undefined {
        return this['replace_definer'];
    }
    public withTags(tags: Array<ResourceTag>): ModifyJobReq {
        this['tags'] = tags;
        return this;
    }
    public withDbUseType(dbUseType: ModifyJobReqDbUseTypeEnum | string): ModifyJobReq {
        this['db_use_type'] = dbUseType;
        return this;
    }
    public set dbUseType(dbUseType: ModifyJobReqDbUseTypeEnum | string  | undefined) {
        this['db_use_type'] = dbUseType;
    }
    public get dbUseType(): ModifyJobReqDbUseTypeEnum | string | undefined {
        return this['db_use_type'];
    }
    public withProductId(productId: string): ModifyJobReq {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): string | undefined {
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
    MICRO = 'micro',
    SMALL = 'small',
    MEDIUM = 'medium',
    HIGH = 'high',
    XLARGE = 'xlarge',
    E_2XLARGE = '2xlarge'
}
/**
    * @export
    * @enum {string}
    */
export enum ModifyJobReqEngineTypeEnum {
    MYSQL = 'mysql',
    MONGODB = 'mongodb',
    CLOUDDATAGUARD_MYSQL = 'cloudDataGuard-mysql',
    GAUSSDBV5 = 'gaussdbv5',
    POSTGRESQL = 'postgresql',
    MYSQL_TO_KAFKA = 'mysql-to-kafka',
    TAURUS_TO_KAFKA = 'taurus-to-kafka',
    GAUSSDBV5HA_TO_KAFKA = 'gaussdbv5ha-to-kafka'
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
