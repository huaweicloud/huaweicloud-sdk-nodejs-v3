import { Endpoint } from './Endpoint';
import { PeriodOrderInfo } from './PeriodOrderInfo';
import { ResourceTag } from './ResourceTag';


export class CreateJobReq {
    private 'bind_eip'?: boolean;
    private 'db_use_type'?: CreateJobReqDbUseTypeEnum | string;
    public name?: string;
    public description?: string;
    private 'engine_type'?: CreateJobReqEngineTypeEnum | string;
    private 'is_target_readonly'?: boolean;
    private 'job_direction'?: CreateJobReqJobDirectionEnum | string;
    private 'multi_write'?: boolean;
    private 'net_type'?: CreateJobReqNetTypeEnum | string;
    private 'node_num'?: number;
    private 'node_type'?: CreateJobReqNodeTypeEnum | string;
    private 'source_endpoint'?: Endpoint;
    private 'target_endpoint'?: Endpoint;
    public tags?: Array<ResourceTag>;
    private 'task_type'?: CreateJobReqTaskTypeEnum | string;
    private 'customize_sutnet_id'?: string;
    private 'product_id'?: string;
    private 'sys_tags'?: Array<ResourceTag>;
    private 'expired_days'?: string;
    private 'master_az'?: string;
    private 'slave_az'?: string;
    private 'charging_mode'?: CreateJobReqChargingModeEnum | string;
    private 'period_order'?: PeriodOrderInfo;
    public constructor(dbUseType?: string, name?: string, engineType?: string, jobDirection?: string, netType?: string, nodeType?: string, sourceEndpoint?: Endpoint, targetEndpoint?: Endpoint, taskType?: string, customizeSutnetId?: string) { 
        this['db_use_type'] = dbUseType;
        this['name'] = name;
        this['engine_type'] = engineType;
        this['job_direction'] = jobDirection;
        this['net_type'] = netType;
        this['node_type'] = nodeType;
        this['source_endpoint'] = sourceEndpoint;
        this['target_endpoint'] = targetEndpoint;
        this['task_type'] = taskType;
        this['customize_sutnet_id'] = customizeSutnetId;
    }
    public withBindEip(bindEip: boolean): CreateJobReq {
        this['bind_eip'] = bindEip;
        return this;
    }
    public set bindEip(bindEip: boolean  | undefined) {
        this['bind_eip'] = bindEip;
    }
    public get bindEip(): boolean | undefined {
        return this['bind_eip'];
    }
    public withDbUseType(dbUseType: CreateJobReqDbUseTypeEnum | string): CreateJobReq {
        this['db_use_type'] = dbUseType;
        return this;
    }
    public set dbUseType(dbUseType: CreateJobReqDbUseTypeEnum | string  | undefined) {
        this['db_use_type'] = dbUseType;
    }
    public get dbUseType(): CreateJobReqDbUseTypeEnum | string | undefined {
        return this['db_use_type'];
    }
    public withName(name: string): CreateJobReq {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateJobReq {
        this['description'] = description;
        return this;
    }
    public withEngineType(engineType: CreateJobReqEngineTypeEnum | string): CreateJobReq {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: CreateJobReqEngineTypeEnum | string  | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType(): CreateJobReqEngineTypeEnum | string | undefined {
        return this['engine_type'];
    }
    public withIsTargetReadonly(isTargetReadonly: boolean): CreateJobReq {
        this['is_target_readonly'] = isTargetReadonly;
        return this;
    }
    public set isTargetReadonly(isTargetReadonly: boolean  | undefined) {
        this['is_target_readonly'] = isTargetReadonly;
    }
    public get isTargetReadonly(): boolean | undefined {
        return this['is_target_readonly'];
    }
    public withJobDirection(jobDirection: CreateJobReqJobDirectionEnum | string): CreateJobReq {
        this['job_direction'] = jobDirection;
        return this;
    }
    public set jobDirection(jobDirection: CreateJobReqJobDirectionEnum | string  | undefined) {
        this['job_direction'] = jobDirection;
    }
    public get jobDirection(): CreateJobReqJobDirectionEnum | string | undefined {
        return this['job_direction'];
    }
    public withMultiWrite(multiWrite: boolean): CreateJobReq {
        this['multi_write'] = multiWrite;
        return this;
    }
    public set multiWrite(multiWrite: boolean  | undefined) {
        this['multi_write'] = multiWrite;
    }
    public get multiWrite(): boolean | undefined {
        return this['multi_write'];
    }
    public withNetType(netType: CreateJobReqNetTypeEnum | string): CreateJobReq {
        this['net_type'] = netType;
        return this;
    }
    public set netType(netType: CreateJobReqNetTypeEnum | string  | undefined) {
        this['net_type'] = netType;
    }
    public get netType(): CreateJobReqNetTypeEnum | string | undefined {
        return this['net_type'];
    }
    public withNodeNum(nodeNum: number): CreateJobReq {
        this['node_num'] = nodeNum;
        return this;
    }
    public set nodeNum(nodeNum: number  | undefined) {
        this['node_num'] = nodeNum;
    }
    public get nodeNum(): number | undefined {
        return this['node_num'];
    }
    public withNodeType(nodeType: CreateJobReqNodeTypeEnum | string): CreateJobReq {
        this['node_type'] = nodeType;
        return this;
    }
    public set nodeType(nodeType: CreateJobReqNodeTypeEnum | string  | undefined) {
        this['node_type'] = nodeType;
    }
    public get nodeType(): CreateJobReqNodeTypeEnum | string | undefined {
        return this['node_type'];
    }
    public withSourceEndpoint(sourceEndpoint: Endpoint): CreateJobReq {
        this['source_endpoint'] = sourceEndpoint;
        return this;
    }
    public set sourceEndpoint(sourceEndpoint: Endpoint  | undefined) {
        this['source_endpoint'] = sourceEndpoint;
    }
    public get sourceEndpoint(): Endpoint | undefined {
        return this['source_endpoint'];
    }
    public withTargetEndpoint(targetEndpoint: Endpoint): CreateJobReq {
        this['target_endpoint'] = targetEndpoint;
        return this;
    }
    public set targetEndpoint(targetEndpoint: Endpoint  | undefined) {
        this['target_endpoint'] = targetEndpoint;
    }
    public get targetEndpoint(): Endpoint | undefined {
        return this['target_endpoint'];
    }
    public withTags(tags: Array<ResourceTag>): CreateJobReq {
        this['tags'] = tags;
        return this;
    }
    public withTaskType(taskType: CreateJobReqTaskTypeEnum | string): CreateJobReq {
        this['task_type'] = taskType;
        return this;
    }
    public set taskType(taskType: CreateJobReqTaskTypeEnum | string  | undefined) {
        this['task_type'] = taskType;
    }
    public get taskType(): CreateJobReqTaskTypeEnum | string | undefined {
        return this['task_type'];
    }
    public withCustomizeSutnetId(customizeSutnetId: string): CreateJobReq {
        this['customize_sutnet_id'] = customizeSutnetId;
        return this;
    }
    public set customizeSutnetId(customizeSutnetId: string  | undefined) {
        this['customize_sutnet_id'] = customizeSutnetId;
    }
    public get customizeSutnetId(): string | undefined {
        return this['customize_sutnet_id'];
    }
    public withProductId(productId: string): CreateJobReq {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): string | undefined {
        return this['product_id'];
    }
    public withSysTags(sysTags: Array<ResourceTag>): CreateJobReq {
        this['sys_tags'] = sysTags;
        return this;
    }
    public set sysTags(sysTags: Array<ResourceTag>  | undefined) {
        this['sys_tags'] = sysTags;
    }
    public get sysTags(): Array<ResourceTag> | undefined {
        return this['sys_tags'];
    }
    public withExpiredDays(expiredDays: string): CreateJobReq {
        this['expired_days'] = expiredDays;
        return this;
    }
    public set expiredDays(expiredDays: string  | undefined) {
        this['expired_days'] = expiredDays;
    }
    public get expiredDays(): string | undefined {
        return this['expired_days'];
    }
    public withMasterAz(masterAz: string): CreateJobReq {
        this['master_az'] = masterAz;
        return this;
    }
    public set masterAz(masterAz: string  | undefined) {
        this['master_az'] = masterAz;
    }
    public get masterAz(): string | undefined {
        return this['master_az'];
    }
    public withSlaveAz(slaveAz: string): CreateJobReq {
        this['slave_az'] = slaveAz;
        return this;
    }
    public set slaveAz(slaveAz: string  | undefined) {
        this['slave_az'] = slaveAz;
    }
    public get slaveAz(): string | undefined {
        return this['slave_az'];
    }
    public withChargingMode(chargingMode: CreateJobReqChargingModeEnum | string): CreateJobReq {
        this['charging_mode'] = chargingMode;
        return this;
    }
    public set chargingMode(chargingMode: CreateJobReqChargingModeEnum | string  | undefined) {
        this['charging_mode'] = chargingMode;
    }
    public get chargingMode(): CreateJobReqChargingModeEnum | string | undefined {
        return this['charging_mode'];
    }
    public withPeriodOrder(periodOrder: PeriodOrderInfo): CreateJobReq {
        this['period_order'] = periodOrder;
        return this;
    }
    public set periodOrder(periodOrder: PeriodOrderInfo  | undefined) {
        this['period_order'] = periodOrder;
    }
    public get periodOrder(): PeriodOrderInfo | undefined {
        return this['period_order'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateJobReqDbUseTypeEnum {
    MIGRATION = 'migration',
    SYNC = 'sync',
    CLOUDDATAGUARD = 'cloudDataGuard'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateJobReqEngineTypeEnum {
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
export enum CreateJobReqJobDirectionEnum {
    UP = 'up',
    DOWN = 'down',
    NON_DBS = 'non-dbs'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateJobReqNetTypeEnum {
    VPN = 'vpn',
    VPC = 'vpc',
    EIP = 'eip'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateJobReqNodeTypeEnum {
    HIGH = 'high'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateJobReqTaskTypeEnum {
    FULL_TRANS = 'FULL_TRANS',
    FULL_INCR_TRANS = 'FULL_INCR_TRANS',
    INCR_TRANS = 'INCR_TRANS'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateJobReqChargingModeEnum {
    PERIOD = 'period',
    ON_DEMAND = 'on_demand'
}
