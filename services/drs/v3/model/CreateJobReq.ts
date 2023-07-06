import { Endpoint } from './Endpoint';
import { PeriodOrderInfo } from './PeriodOrderInfo';
import { ResourceTag } from './ResourceTag';


export class CreateJobReq {
    private 'bind_eip'?: boolean | undefined;
    private 'db_use_type': CreateJobReqDbUseTypeEnum | undefined;
    public name: string;
    public description?: string;
    private 'engine_type': CreateJobReqEngineTypeEnum | undefined;
    private 'is_target_readonly'?: boolean | undefined;
    private 'job_direction': CreateJobReqJobDirectionEnum | undefined;
    private 'multi_write'?: boolean | undefined;
    private 'net_type': CreateJobReqNetTypeEnum | undefined;
    private 'node_num'?: number | undefined;
    private 'node_type': CreateJobReqNodeTypeEnum | undefined;
    private 'source_endpoint': Endpoint | undefined;
    private 'target_endpoint': Endpoint | undefined;
    public tags?: Array<ResourceTag>;
    private 'task_type': CreateJobReqTaskTypeEnum | undefined;
    private 'customize_sutnet_id': string | undefined;
    private 'product_id'?: string | undefined;
    private 'sys_tags'?: Array<ResourceTag> | undefined;
    private 'expired_days'?: string | undefined;
    private 'master_az'?: string | undefined;
    private 'slave_az'?: string | undefined;
    private 'charging_mode'?: CreateJobReqChargingModeEnum | undefined;
    private 'period_order'?: PeriodOrderInfo | undefined;
    public constructor(dbUseType?: any, name?: any, engineType?: any, jobDirection?: any, netType?: any, nodeType?: any, sourceEndpoint?: any, targetEndpoint?: any, taskType?: any, customizeSutnetId?: any) { 
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
    public set bindEip(bindEip: boolean | undefined) {
        this['bind_eip'] = bindEip;
    }
    public get bindEip() {
        return this['bind_eip'];
    }
    public withDbUseType(dbUseType: CreateJobReqDbUseTypeEnum): CreateJobReq {
        this['db_use_type'] = dbUseType;
        return this;
    }
    public set dbUseType(dbUseType: CreateJobReqDbUseTypeEnum | undefined) {
        this['db_use_type'] = dbUseType;
    }
    public get dbUseType() {
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
    public withEngineType(engineType: CreateJobReqEngineTypeEnum): CreateJobReq {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: CreateJobReqEngineTypeEnum | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType() {
        return this['engine_type'];
    }
    public withIsTargetReadonly(isTargetReadonly: boolean): CreateJobReq {
        this['is_target_readonly'] = isTargetReadonly;
        return this;
    }
    public set isTargetReadonly(isTargetReadonly: boolean | undefined) {
        this['is_target_readonly'] = isTargetReadonly;
    }
    public get isTargetReadonly() {
        return this['is_target_readonly'];
    }
    public withJobDirection(jobDirection: CreateJobReqJobDirectionEnum): CreateJobReq {
        this['job_direction'] = jobDirection;
        return this;
    }
    public set jobDirection(jobDirection: CreateJobReqJobDirectionEnum | undefined) {
        this['job_direction'] = jobDirection;
    }
    public get jobDirection() {
        return this['job_direction'];
    }
    public withMultiWrite(multiWrite: boolean): CreateJobReq {
        this['multi_write'] = multiWrite;
        return this;
    }
    public set multiWrite(multiWrite: boolean | undefined) {
        this['multi_write'] = multiWrite;
    }
    public get multiWrite() {
        return this['multi_write'];
    }
    public withNetType(netType: CreateJobReqNetTypeEnum): CreateJobReq {
        this['net_type'] = netType;
        return this;
    }
    public set netType(netType: CreateJobReqNetTypeEnum | undefined) {
        this['net_type'] = netType;
    }
    public get netType() {
        return this['net_type'];
    }
    public withNodeNum(nodeNum: number): CreateJobReq {
        this['node_num'] = nodeNum;
        return this;
    }
    public set nodeNum(nodeNum: number | undefined) {
        this['node_num'] = nodeNum;
    }
    public get nodeNum() {
        return this['node_num'];
    }
    public withNodeType(nodeType: CreateJobReqNodeTypeEnum): CreateJobReq {
        this['node_type'] = nodeType;
        return this;
    }
    public set nodeType(nodeType: CreateJobReqNodeTypeEnum | undefined) {
        this['node_type'] = nodeType;
    }
    public get nodeType() {
        return this['node_type'];
    }
    public withSourceEndpoint(sourceEndpoint: Endpoint): CreateJobReq {
        this['source_endpoint'] = sourceEndpoint;
        return this;
    }
    public set sourceEndpoint(sourceEndpoint: Endpoint | undefined) {
        this['source_endpoint'] = sourceEndpoint;
    }
    public get sourceEndpoint() {
        return this['source_endpoint'];
    }
    public withTargetEndpoint(targetEndpoint: Endpoint): CreateJobReq {
        this['target_endpoint'] = targetEndpoint;
        return this;
    }
    public set targetEndpoint(targetEndpoint: Endpoint | undefined) {
        this['target_endpoint'] = targetEndpoint;
    }
    public get targetEndpoint() {
        return this['target_endpoint'];
    }
    public withTags(tags: Array<ResourceTag>): CreateJobReq {
        this['tags'] = tags;
        return this;
    }
    public withTaskType(taskType: CreateJobReqTaskTypeEnum): CreateJobReq {
        this['task_type'] = taskType;
        return this;
    }
    public set taskType(taskType: CreateJobReqTaskTypeEnum | undefined) {
        this['task_type'] = taskType;
    }
    public get taskType() {
        return this['task_type'];
    }
    public withCustomizeSutnetId(customizeSutnetId: string): CreateJobReq {
        this['customize_sutnet_id'] = customizeSutnetId;
        return this;
    }
    public set customizeSutnetId(customizeSutnetId: string | undefined) {
        this['customize_sutnet_id'] = customizeSutnetId;
    }
    public get customizeSutnetId() {
        return this['customize_sutnet_id'];
    }
    public withProductId(productId: string): CreateJobReq {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string | undefined) {
        this['product_id'] = productId;
    }
    public get productId() {
        return this['product_id'];
    }
    public withSysTags(sysTags: Array<ResourceTag>): CreateJobReq {
        this['sys_tags'] = sysTags;
        return this;
    }
    public set sysTags(sysTags: Array<ResourceTag> | undefined) {
        this['sys_tags'] = sysTags;
    }
    public get sysTags() {
        return this['sys_tags'];
    }
    public withExpiredDays(expiredDays: string): CreateJobReq {
        this['expired_days'] = expiredDays;
        return this;
    }
    public set expiredDays(expiredDays: string | undefined) {
        this['expired_days'] = expiredDays;
    }
    public get expiredDays() {
        return this['expired_days'];
    }
    public withMasterAz(masterAz: string): CreateJobReq {
        this['master_az'] = masterAz;
        return this;
    }
    public set masterAz(masterAz: string | undefined) {
        this['master_az'] = masterAz;
    }
    public get masterAz() {
        return this['master_az'];
    }
    public withSlaveAz(slaveAz: string): CreateJobReq {
        this['slave_az'] = slaveAz;
        return this;
    }
    public set slaveAz(slaveAz: string | undefined) {
        this['slave_az'] = slaveAz;
    }
    public get slaveAz() {
        return this['slave_az'];
    }
    public withChargingMode(chargingMode: CreateJobReqChargingModeEnum): CreateJobReq {
        this['charging_mode'] = chargingMode;
        return this;
    }
    public set chargingMode(chargingMode: CreateJobReqChargingModeEnum | undefined) {
        this['charging_mode'] = chargingMode;
    }
    public get chargingMode() {
        return this['charging_mode'];
    }
    public withPeriodOrder(periodOrder: PeriodOrderInfo): CreateJobReq {
        this['period_order'] = periodOrder;
        return this;
    }
    public set periodOrder(periodOrder: PeriodOrderInfo | undefined) {
        this['period_order'] = periodOrder;
    }
    public get periodOrder() {
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
    POSTGRESQL = 'postgresql'
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
