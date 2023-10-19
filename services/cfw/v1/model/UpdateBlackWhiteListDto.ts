

export class UpdateBlackWhiteListDto {
    public direction?: number;
    private 'address_type'?: number;
    public address?: string;
    public protocol?: number;
    public port?: string;
    private 'list_type'?: UpdateBlackWhiteListDtoListTypeEnum | number;
    private 'object_id'?: string;
    public description?: string;
    public constructor() { 
    }
    public withDirection(direction: number): UpdateBlackWhiteListDto {
        this['direction'] = direction;
        return this;
    }
    public withAddressType(addressType: number): UpdateBlackWhiteListDto {
        this['address_type'] = addressType;
        return this;
    }
    public set addressType(addressType: number  | undefined) {
        this['address_type'] = addressType;
    }
    public get addressType(): number | undefined {
        return this['address_type'];
    }
    public withAddress(address: string): UpdateBlackWhiteListDto {
        this['address'] = address;
        return this;
    }
    public withProtocol(protocol: number): UpdateBlackWhiteListDto {
        this['protocol'] = protocol;
        return this;
    }
    public withPort(port: string): UpdateBlackWhiteListDto {
        this['port'] = port;
        return this;
    }
    public withListType(listType: UpdateBlackWhiteListDtoListTypeEnum | number): UpdateBlackWhiteListDto {
        this['list_type'] = listType;
        return this;
    }
    public set listType(listType: UpdateBlackWhiteListDtoListTypeEnum | number  | undefined) {
        this['list_type'] = listType;
    }
    public get listType(): UpdateBlackWhiteListDtoListTypeEnum | number | undefined {
        return this['list_type'];
    }
    public withObjectId(objectId: string): UpdateBlackWhiteListDto {
        this['object_id'] = objectId;
        return this;
    }
    public set objectId(objectId: string  | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId(): string | undefined {
        return this['object_id'];
    }
    public withDescription(description: string): UpdateBlackWhiteListDto {
        this['description'] = description;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateBlackWhiteListDtoListTypeEnum {
    NUMBER_4 = 4,
    NUMBER_5 = 5
}
