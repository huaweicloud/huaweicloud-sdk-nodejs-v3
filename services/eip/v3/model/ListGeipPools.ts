import { AllowedBandwidthTypes } from './AllowedBandwidthTypes';


export class ListGeipPools {
    public id?: string;
    public name?: string;
    private 'en_name'?: string;
    private 'cn_name'?: string;
    public status?: ListGeipPoolsStatusEnum | string;
    public isp?: string;
    private 'ip_version'?: ListGeipPoolsIpVersionEnum | number;
    private 'access_site'?: string;
    public type?: string;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    private 'allowed_bandwidth_types'?: Array<AllowedBandwidthTypes>;
    public constructor() { 
    }
    public withId(id: string): ListGeipPools {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ListGeipPools {
        this['name'] = name;
        return this;
    }
    public withEnName(enName: string): ListGeipPools {
        this['en_name'] = enName;
        return this;
    }
    public set enName(enName: string  | undefined) {
        this['en_name'] = enName;
    }
    public get enName(): string | undefined {
        return this['en_name'];
    }
    public withCnName(cnName: string): ListGeipPools {
        this['cn_name'] = cnName;
        return this;
    }
    public set cnName(cnName: string  | undefined) {
        this['cn_name'] = cnName;
    }
    public get cnName(): string | undefined {
        return this['cn_name'];
    }
    public withStatus(status: ListGeipPoolsStatusEnum | string): ListGeipPools {
        this['status'] = status;
        return this;
    }
    public withIsp(isp: string): ListGeipPools {
        this['isp'] = isp;
        return this;
    }
    public withIpVersion(ipVersion: ListGeipPoolsIpVersionEnum | number): ListGeipPools {
        this['ip_version'] = ipVersion;
        return this;
    }
    public set ipVersion(ipVersion: ListGeipPoolsIpVersionEnum | number  | undefined) {
        this['ip_version'] = ipVersion;
    }
    public get ipVersion(): ListGeipPoolsIpVersionEnum | number | undefined {
        return this['ip_version'];
    }
    public withAccessSite(accessSite: string): ListGeipPools {
        this['access_site'] = accessSite;
        return this;
    }
    public set accessSite(accessSite: string  | undefined) {
        this['access_site'] = accessSite;
    }
    public get accessSite(): string | undefined {
        return this['access_site'];
    }
    public withType(type: string): ListGeipPools {
        this['type'] = type;
        return this;
    }
    public withCreatedAt(createdAt: Date): ListGeipPools {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): ListGeipPools {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
    public withAllowedBandwidthTypes(allowedBandwidthTypes: Array<AllowedBandwidthTypes>): ListGeipPools {
        this['allowed_bandwidth_types'] = allowedBandwidthTypes;
        return this;
    }
    public set allowedBandwidthTypes(allowedBandwidthTypes: Array<AllowedBandwidthTypes>  | undefined) {
        this['allowed_bandwidth_types'] = allowedBandwidthTypes;
    }
    public get allowedBandwidthTypes(): Array<AllowedBandwidthTypes> | undefined {
        return this['allowed_bandwidth_types'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListGeipPoolsStatusEnum {
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE',
    SOLDOUT = 'SOLDOUT'
}
/**
    * @export
    * @enum {string}
    */
export enum ListGeipPoolsIpVersionEnum {
    NUMBER_4 = 4,
    NUMBER_6 = 6
}
