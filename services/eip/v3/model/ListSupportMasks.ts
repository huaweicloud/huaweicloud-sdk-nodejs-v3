

export class ListSupportMasks {
    public id?: string;
    private 'ip_version'?: ListSupportMasksIpVersionEnum | number;
    public mask?: number;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    public constructor() { 
    }
    public withId(id: string): ListSupportMasks {
        this['id'] = id;
        return this;
    }
    public withIpVersion(ipVersion: ListSupportMasksIpVersionEnum | number): ListSupportMasks {
        this['ip_version'] = ipVersion;
        return this;
    }
    public set ipVersion(ipVersion: ListSupportMasksIpVersionEnum | number  | undefined) {
        this['ip_version'] = ipVersion;
    }
    public get ipVersion(): ListSupportMasksIpVersionEnum | number | undefined {
        return this['ip_version'];
    }
    public withMask(mask: number): ListSupportMasks {
        this['mask'] = mask;
        return this;
    }
    public withCreatedAt(createdAt: Date): ListSupportMasks {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): ListSupportMasks {
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

/**
    * @export
    * @enum {string}
    */
export enum ListSupportMasksIpVersionEnum {
    NUMBER_4 = 4,
    NUMBER_6 = 6
}
