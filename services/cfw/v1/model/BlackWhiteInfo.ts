

export class BlackWhiteInfo {
    public address?: string;
    private 'address_type'?: number;
    public description?: string;
    public direction?: number;
    public port?: string;
    public protocol?: BlackWhiteInfoProtocolEnum | number;
    public constructor(address?: string, direction?: number, protocol?: number) { 
        this['address'] = address;
        this['direction'] = direction;
        this['protocol'] = protocol;
    }
    public withAddress(address: string): BlackWhiteInfo {
        this['address'] = address;
        return this;
    }
    public withAddressType(addressType: number): BlackWhiteInfo {
        this['address_type'] = addressType;
        return this;
    }
    public set addressType(addressType: number  | undefined) {
        this['address_type'] = addressType;
    }
    public get addressType(): number | undefined {
        return this['address_type'];
    }
    public withDescription(description: string): BlackWhiteInfo {
        this['description'] = description;
        return this;
    }
    public withDirection(direction: number): BlackWhiteInfo {
        this['direction'] = direction;
        return this;
    }
    public withPort(port: string): BlackWhiteInfo {
        this['port'] = port;
        return this;
    }
    public withProtocol(protocol: BlackWhiteInfoProtocolEnum | number): BlackWhiteInfo {
        this['protocol'] = protocol;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BlackWhiteInfoProtocolEnum {
    NUMBER_6 = 6,
    NUMBER_17 = 17,
    NUMBER_1 = 1,
    NUMBER_58 = 58,
    NUMBER_MINUS_1 = -1,
    NUMBER_132 = 132
}
