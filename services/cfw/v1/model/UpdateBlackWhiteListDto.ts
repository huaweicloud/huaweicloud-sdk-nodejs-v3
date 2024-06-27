

export class UpdateBlackWhiteListDto {
    public direction?: number;
    private 'address_type'?: number;
    public address?: string;
    public protocol?: number;
    public port?: string;
    public description?: string;
    public constructor(address?: string) { 
        this['address'] = address;
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
    public withDescription(description: string): UpdateBlackWhiteListDto {
        this['description'] = description;
        return this;
    }
}