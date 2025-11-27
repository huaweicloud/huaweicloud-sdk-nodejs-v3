import { Area } from './Area';


export class ByoipPool {
    public id?: string;
    public cidr?: string;
    private 'ip_type'?: ByoipPoolIpTypeEnum | string;
    private 'created_at'?: Date;
    private 'updated_at'?: string;
    public area?: Area;
    private 'domain_id'?: string;
    public constructor() { 
    }
    public withId(id: string): ByoipPool {
        this['id'] = id;
        return this;
    }
    public withCidr(cidr: string): ByoipPool {
        this['cidr'] = cidr;
        return this;
    }
    public withIpType(ipType: ByoipPoolIpTypeEnum | string): ByoipPool {
        this['ip_type'] = ipType;
        return this;
    }
    public set ipType(ipType: ByoipPoolIpTypeEnum | string  | undefined) {
        this['ip_type'] = ipType;
    }
    public get ipType(): ByoipPoolIpTypeEnum | string | undefined {
        return this['ip_type'];
    }
    public withCreatedAt(createdAt: Date): ByoipPool {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): ByoipPool {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withArea(area: Area): ByoipPool {
        this['area'] = area;
        return this;
    }
    public withDomainId(domainId: string): ByoipPool {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ByoipPoolIpTypeEnum {
    IPV4 = 'IPV4',
    IPV6 = 'IPV6'
}
