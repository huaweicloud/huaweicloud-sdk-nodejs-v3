

export class IpsRuleChangeDto {
    private 'ips_ids'?: Array<string>;
    private 'object_id'?: string;
    public status?: IpsRuleChangeDtoStatusEnum | string;
    public constructor() { 
    }
    public withIpsIds(ipsIds: Array<string>): IpsRuleChangeDto {
        this['ips_ids'] = ipsIds;
        return this;
    }
    public set ipsIds(ipsIds: Array<string>  | undefined) {
        this['ips_ids'] = ipsIds;
    }
    public get ipsIds(): Array<string> | undefined {
        return this['ips_ids'];
    }
    public withObjectId(objectId: string): IpsRuleChangeDto {
        this['object_id'] = objectId;
        return this;
    }
    public set objectId(objectId: string  | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId(): string | undefined {
        return this['object_id'];
    }
    public withStatus(status: IpsRuleChangeDtoStatusEnum | string): IpsRuleChangeDto {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum IpsRuleChangeDtoStatusEnum {
    OBSERVE = 'OBSERVE',
    ENABLE = 'ENABLE',
    CLOSE = 'CLOSE',
    DEFAULT = 'DEFAULT',
    ALL_DEFAULT = 'ALL_DEFAULT'
}
