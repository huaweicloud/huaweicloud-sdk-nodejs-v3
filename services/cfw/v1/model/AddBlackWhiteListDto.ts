

export class AddBlackWhiteListDto {
    private 'object_id'?: string;
    private 'list_type'?: number;
    public direction?: number;
    private 'address_type'?: number;
    public address?: string;
    public protocol?: number;
    public port?: string;
    public description?: string;
    public constructor(objectId?: string, listType?: number, direction?: number, addressType?: number, address?: string, protocol?: number, port?: string) { 
        this['object_id'] = objectId;
        this['list_type'] = listType;
        this['direction'] = direction;
        this['address_type'] = addressType;
        this['address'] = address;
        this['protocol'] = protocol;
        this['port'] = port;
    }
    public withObjectId(objectId: string): AddBlackWhiteListDto {
        this['object_id'] = objectId;
        return this;
    }
    public set objectId(objectId: string  | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId(): string | undefined {
        return this['object_id'];
    }
    public withListType(listType: number): AddBlackWhiteListDto {
        this['list_type'] = listType;
        return this;
    }
    public set listType(listType: number  | undefined) {
        this['list_type'] = listType;
    }
    public get listType(): number | undefined {
        return this['list_type'];
    }
    public withDirection(direction: number): AddBlackWhiteListDto {
        this['direction'] = direction;
        return this;
    }
    public withAddressType(addressType: number): AddBlackWhiteListDto {
        this['address_type'] = addressType;
        return this;
    }
    public set addressType(addressType: number  | undefined) {
        this['address_type'] = addressType;
    }
    public get addressType(): number | undefined {
        return this['address_type'];
    }
    public withAddress(address: string): AddBlackWhiteListDto {
        this['address'] = address;
        return this;
    }
    public withProtocol(protocol: number): AddBlackWhiteListDto {
        this['protocol'] = protocol;
        return this;
    }
    public withPort(port: string): AddBlackWhiteListDto {
        this['port'] = port;
        return this;
    }
    public withDescription(description: string): AddBlackWhiteListDto {
        this['description'] = description;
        return this;
    }
}