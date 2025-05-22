

export class ChatResourceConfigInfo {
    private 'resource_id'?: string;
    private 'count_resource'?: number;
    private 'resource_source'?: ChatResourceConfigInfoResourceSourceEnum | string;
    private 'charge_mode'?: ChatResourceConfigInfoChargeModeEnum | string;
    private 'resource_nums'?: number;
    private 'resource_available_nums'?: number;
    public status?: ChatResourceConfigInfoStatusEnum | string;
    private 'expire_time'?: string;
    public constructor() { 
    }
    public withResourceId(resourceId: string): ChatResourceConfigInfo {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withCountResource(countResource: number): ChatResourceConfigInfo {
        this['count_resource'] = countResource;
        return this;
    }
    public set countResource(countResource: number  | undefined) {
        this['count_resource'] = countResource;
    }
    public get countResource(): number | undefined {
        return this['count_resource'];
    }
    public withResourceSource(resourceSource: ChatResourceConfigInfoResourceSourceEnum | string): ChatResourceConfigInfo {
        this['resource_source'] = resourceSource;
        return this;
    }
    public set resourceSource(resourceSource: ChatResourceConfigInfoResourceSourceEnum | string  | undefined) {
        this['resource_source'] = resourceSource;
    }
    public get resourceSource(): ChatResourceConfigInfoResourceSourceEnum | string | undefined {
        return this['resource_source'];
    }
    public withChargeMode(chargeMode: ChatResourceConfigInfoChargeModeEnum | string): ChatResourceConfigInfo {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: ChatResourceConfigInfoChargeModeEnum | string  | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode(): ChatResourceConfigInfoChargeModeEnum | string | undefined {
        return this['charge_mode'];
    }
    public withResourceNums(resourceNums: number): ChatResourceConfigInfo {
        this['resource_nums'] = resourceNums;
        return this;
    }
    public set resourceNums(resourceNums: number  | undefined) {
        this['resource_nums'] = resourceNums;
    }
    public get resourceNums(): number | undefined {
        return this['resource_nums'];
    }
    public withResourceAvailableNums(resourceAvailableNums: number): ChatResourceConfigInfo {
        this['resource_available_nums'] = resourceAvailableNums;
        return this;
    }
    public set resourceAvailableNums(resourceAvailableNums: number  | undefined) {
        this['resource_available_nums'] = resourceAvailableNums;
    }
    public get resourceAvailableNums(): number | undefined {
        return this['resource_available_nums'];
    }
    public withStatus(status: ChatResourceConfigInfoStatusEnum | string): ChatResourceConfigInfo {
        this['status'] = status;
        return this;
    }
    public withExpireTime(expireTime: string): ChatResourceConfigInfo {
        this['expire_time'] = expireTime;
        return this;
    }
    public set expireTime(expireTime: string  | undefined) {
        this['expire_time'] = expireTime;
    }
    public get expireTime(): string | undefined {
        return this['expire_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ChatResourceConfigInfoResourceSourceEnum {
    PURCHASED = 'PURCHASED',
    SP_ALLOCATED = 'SP_ALLOCATED',
    ADMIN_ALLOCATED = 'ADMIN_ALLOCATED'
}
/**
    * @export
    * @enum {string}
    */
export enum ChatResourceConfigInfoChargeModeEnum {
    PERIODIC = 'PERIODIC',
    ONE_TIME = 'ONE_TIME',
    ON_DEMAND = 'ON_DEMAND'
}
/**
    * @export
    * @enum {string}
    */
export enum ChatResourceConfigInfoStatusEnum {
    ACTIVE = 'ACTIVE',
    FREEZE = 'FREEZE',
    DELETED = 'DELETED'
}
