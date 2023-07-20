

export class IpsSwitchDTO {
    private 'object_id'?: string;
    private 'ips_type'?: IpsSwitchDTOIpsTypeEnum | number;
    public status?: number;
    public constructor(objectId?: string, ipsType?: number, status?: number) { 
        this['object_id'] = objectId;
        this['ips_type'] = ipsType;
        this['status'] = status;
    }
    public withObjectId(objectId: string): IpsSwitchDTO {
        this['object_id'] = objectId;
        return this;
    }
    public set objectId(objectId: string  | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId(): string | undefined {
        return this['object_id'];
    }
    public withIpsType(ipsType: IpsSwitchDTOIpsTypeEnum | number): IpsSwitchDTO {
        this['ips_type'] = ipsType;
        return this;
    }
    public set ipsType(ipsType: IpsSwitchDTOIpsTypeEnum | number  | undefined) {
        this['ips_type'] = ipsType;
    }
    public get ipsType(): IpsSwitchDTOIpsTypeEnum | number | undefined {
        return this['ips_type'];
    }
    public withStatus(status: number): IpsSwitchDTO {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum IpsSwitchDTOIpsTypeEnum {
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
