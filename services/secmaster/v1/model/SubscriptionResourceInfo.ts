import { TagInfo } from './TagInfo';


export class SubscriptionResourceInfo {
    private 'resource_id'?: string;
    private 'resource_size'?: number;
    private 'resource_type'?: string;
    private 'resource_spec_code'?: string;
    private 'create_time'?: number;
    private 'expire_time'?: number;
    private 'resource_status'?: number;
    private 'order_id'?: string;
    private 'charging_mode'?: SubscriptionResourceInfoChargingModeEnum | string;
    private 'to_period'?: boolean;
    private 'tag_list'?: Array<TagInfo>;
    public constructor() { 
    }
    public withResourceId(resourceId: string): SubscriptionResourceInfo {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withResourceSize(resourceSize: number): SubscriptionResourceInfo {
        this['resource_size'] = resourceSize;
        return this;
    }
    public set resourceSize(resourceSize: number  | undefined) {
        this['resource_size'] = resourceSize;
    }
    public get resourceSize(): number | undefined {
        return this['resource_size'];
    }
    public withResourceType(resourceType: string): SubscriptionResourceInfo {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withResourceSpecCode(resourceSpecCode: string): SubscriptionResourceInfo {
        this['resource_spec_code'] = resourceSpecCode;
        return this;
    }
    public set resourceSpecCode(resourceSpecCode: string  | undefined) {
        this['resource_spec_code'] = resourceSpecCode;
    }
    public get resourceSpecCode(): string | undefined {
        return this['resource_spec_code'];
    }
    public withCreateTime(createTime: number): SubscriptionResourceInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withExpireTime(expireTime: number): SubscriptionResourceInfo {
        this['expire_time'] = expireTime;
        return this;
    }
    public set expireTime(expireTime: number  | undefined) {
        this['expire_time'] = expireTime;
    }
    public get expireTime(): number | undefined {
        return this['expire_time'];
    }
    public withResourceStatus(resourceStatus: number): SubscriptionResourceInfo {
        this['resource_status'] = resourceStatus;
        return this;
    }
    public set resourceStatus(resourceStatus: number  | undefined) {
        this['resource_status'] = resourceStatus;
    }
    public get resourceStatus(): number | undefined {
        return this['resource_status'];
    }
    public withOrderId(orderId: string): SubscriptionResourceInfo {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
    public withChargingMode(chargingMode: SubscriptionResourceInfoChargingModeEnum | string): SubscriptionResourceInfo {
        this['charging_mode'] = chargingMode;
        return this;
    }
    public set chargingMode(chargingMode: SubscriptionResourceInfoChargingModeEnum | string  | undefined) {
        this['charging_mode'] = chargingMode;
    }
    public get chargingMode(): SubscriptionResourceInfoChargingModeEnum | string | undefined {
        return this['charging_mode'];
    }
    public withToPeriod(toPeriod: boolean): SubscriptionResourceInfo {
        this['to_period'] = toPeriod;
        return this;
    }
    public set toPeriod(toPeriod: boolean  | undefined) {
        this['to_period'] = toPeriod;
    }
    public get toPeriod(): boolean | undefined {
        return this['to_period'];
    }
    public withTagList(tagList: Array<TagInfo>): SubscriptionResourceInfo {
        this['tag_list'] = tagList;
        return this;
    }
    public set tagList(tagList: Array<TagInfo>  | undefined) {
        this['tag_list'] = tagList;
    }
    public get tagList(): Array<TagInfo> | undefined {
        return this['tag_list'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SubscriptionResourceInfoChargingModeEnum {
    PREPAID = 'PREPAID',
    POSTPAID = 'POSTPAID'
}
