import { ResourceUsage } from './ResourceUsage';
import { SubscriptionTagInfo } from './SubscriptionTagInfo';


export class SubscriptionResource {
    private 'resource_id'?: string;
    private 'resource_type_name'?: string;
    private 'resource_size'?: number;
    private 'cloud_service'?: string;
    private 'resource_type'?: string;
    private 'resource_spec_code'?: string;
    private 'create_time'?: string;
    private 'expire_time'?: string;
    private 'resource_status'?: number;
    private 'order_id'?: string;
    private 'charging_mode'?: SubscriptionResourceChargingModeEnum | string;
    private 'tag_list'?: Array<SubscriptionTagInfo>;
    public usages?: Array<ResourceUsage>;
    public constructor() { 
    }
    public withResourceId(resourceId: string): SubscriptionResource {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withResourceTypeName(resourceTypeName: string): SubscriptionResource {
        this['resource_type_name'] = resourceTypeName;
        return this;
    }
    public set resourceTypeName(resourceTypeName: string  | undefined) {
        this['resource_type_name'] = resourceTypeName;
    }
    public get resourceTypeName(): string | undefined {
        return this['resource_type_name'];
    }
    public withResourceSize(resourceSize: number): SubscriptionResource {
        this['resource_size'] = resourceSize;
        return this;
    }
    public set resourceSize(resourceSize: number  | undefined) {
        this['resource_size'] = resourceSize;
    }
    public get resourceSize(): number | undefined {
        return this['resource_size'];
    }
    public withCloudService(cloudService: string): SubscriptionResource {
        this['cloud_service'] = cloudService;
        return this;
    }
    public set cloudService(cloudService: string  | undefined) {
        this['cloud_service'] = cloudService;
    }
    public get cloudService(): string | undefined {
        return this['cloud_service'];
    }
    public withResourceType(resourceType: string): SubscriptionResource {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withResourceSpecCode(resourceSpecCode: string): SubscriptionResource {
        this['resource_spec_code'] = resourceSpecCode;
        return this;
    }
    public set resourceSpecCode(resourceSpecCode: string  | undefined) {
        this['resource_spec_code'] = resourceSpecCode;
    }
    public get resourceSpecCode(): string | undefined {
        return this['resource_spec_code'];
    }
    public withCreateTime(createTime: string): SubscriptionResource {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withExpireTime(expireTime: string): SubscriptionResource {
        this['expire_time'] = expireTime;
        return this;
    }
    public set expireTime(expireTime: string  | undefined) {
        this['expire_time'] = expireTime;
    }
    public get expireTime(): string | undefined {
        return this['expire_time'];
    }
    public withResourceStatus(resourceStatus: number): SubscriptionResource {
        this['resource_status'] = resourceStatus;
        return this;
    }
    public set resourceStatus(resourceStatus: number  | undefined) {
        this['resource_status'] = resourceStatus;
    }
    public get resourceStatus(): number | undefined {
        return this['resource_status'];
    }
    public withOrderId(orderId: string): SubscriptionResource {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
    public withChargingMode(chargingMode: SubscriptionResourceChargingModeEnum | string): SubscriptionResource {
        this['charging_mode'] = chargingMode;
        return this;
    }
    public set chargingMode(chargingMode: SubscriptionResourceChargingModeEnum | string  | undefined) {
        this['charging_mode'] = chargingMode;
    }
    public get chargingMode(): SubscriptionResourceChargingModeEnum | string | undefined {
        return this['charging_mode'];
    }
    public withTagList(tagList: Array<SubscriptionTagInfo>): SubscriptionResource {
        this['tag_list'] = tagList;
        return this;
    }
    public set tagList(tagList: Array<SubscriptionTagInfo>  | undefined) {
        this['tag_list'] = tagList;
    }
    public get tagList(): Array<SubscriptionTagInfo> | undefined {
        return this['tag_list'];
    }
    public withUsages(usages: Array<ResourceUsage>): SubscriptionResource {
        this['usages'] = usages;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SubscriptionResourceChargingModeEnum {
    PREPAID = 'PREPAID',
    POSTPAID = 'POSTPAID'
}
