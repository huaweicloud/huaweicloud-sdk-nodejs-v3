

export class IpsSwitchDTO {
    private 'object_id': string | undefined;
    private 'ips_type': IpsSwitchDTOIpsTypeEnum | undefined;
    public status: number;
    public constructor(objectId?: any, ipsType?: any, status?: any) { 
        this['object_id'] = objectId;
        this['ips_type'] = ipsType;
        this['status'] = status;
    }
    public withObjectId(objectId: string): IpsSwitchDTO {
        this['object_id'] = objectId;
        return this;
    }
    public set objectId(objectId: string | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId() {
        return this['object_id'];
    }
    public withIpsType(ipsType: IpsSwitchDTOIpsTypeEnum): IpsSwitchDTO {
        this['ips_type'] = ipsType;
        return this;
    }
    public set ipsType(ipsType: IpsSwitchDTOIpsTypeEnum | undefined) {
        this['ips_type'] = ipsType;
    }
    public get ipsType() {
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
