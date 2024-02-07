

export class ListAccessSites {
    public id?: string;
    public name?: string;
    private 'proxy_region'?: string;
    private 'iec_az_code'?: string;
    private 'en_name'?: string;
    private 'cn_name'?: string;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    public constructor() { 
    }
    public withId(id: string): ListAccessSites {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ListAccessSites {
        this['name'] = name;
        return this;
    }
    public withProxyRegion(proxyRegion: string): ListAccessSites {
        this['proxy_region'] = proxyRegion;
        return this;
    }
    public set proxyRegion(proxyRegion: string  | undefined) {
        this['proxy_region'] = proxyRegion;
    }
    public get proxyRegion(): string | undefined {
        return this['proxy_region'];
    }
    public withIecAzCode(iecAzCode: string): ListAccessSites {
        this['iec_az_code'] = iecAzCode;
        return this;
    }
    public set iecAzCode(iecAzCode: string  | undefined) {
        this['iec_az_code'] = iecAzCode;
    }
    public get iecAzCode(): string | undefined {
        return this['iec_az_code'];
    }
    public withEnName(enName: string): ListAccessSites {
        this['en_name'] = enName;
        return this;
    }
    public set enName(enName: string  | undefined) {
        this['en_name'] = enName;
    }
    public get enName(): string | undefined {
        return this['en_name'];
    }
    public withCnName(cnName: string): ListAccessSites {
        this['cn_name'] = cnName;
        return this;
    }
    public set cnName(cnName: string  | undefined) {
        this['cn_name'] = cnName;
    }
    public get cnName(): string | undefined {
        return this['cn_name'];
    }
    public withCreatedAt(createdAt: Date): ListAccessSites {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): ListAccessSites {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
}