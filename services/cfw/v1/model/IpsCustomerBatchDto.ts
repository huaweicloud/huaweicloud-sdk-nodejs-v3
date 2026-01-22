

export class IpsCustomerBatchDto {
    private 'action_type'?: IpsCustomerBatchDtoActionTypeEnum | number;
    private 'ips_ids'?: Array<string>;
    private 'fw_instance_id'?: string;
    public constructor(ipsIds?: Array<string>, fwInstanceId?: string) { 
        this['ips_ids'] = ipsIds;
        this['fw_instance_id'] = fwInstanceId;
    }
    public withActionType(actionType: IpsCustomerBatchDtoActionTypeEnum | number): IpsCustomerBatchDto {
        this['action_type'] = actionType;
        return this;
    }
    public set actionType(actionType: IpsCustomerBatchDtoActionTypeEnum | number  | undefined) {
        this['action_type'] = actionType;
    }
    public get actionType(): IpsCustomerBatchDtoActionTypeEnum | number | undefined {
        return this['action_type'];
    }
    public withIpsIds(ipsIds: Array<string>): IpsCustomerBatchDto {
        this['ips_ids'] = ipsIds;
        return this;
    }
    public set ipsIds(ipsIds: Array<string>  | undefined) {
        this['ips_ids'] = ipsIds;
    }
    public get ipsIds(): Array<string> | undefined {
        return this['ips_ids'];
    }
    public withFwInstanceId(fwInstanceId: string): IpsCustomerBatchDto {
        this['fw_instance_id'] = fwInstanceId;
        return this;
    }
    public set fwInstanceId(fwInstanceId: string  | undefined) {
        this['fw_instance_id'] = fwInstanceId;
    }
    public get fwInstanceId(): string | undefined {
        return this['fw_instance_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum IpsCustomerBatchDtoActionTypeEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
