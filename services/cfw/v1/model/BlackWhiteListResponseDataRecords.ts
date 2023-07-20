

export class BlackWhiteListResponseDataRecords {
    private 'list_id'?: string;
    public direction?: number;
    private 'address_type'?: number;
    public address?: string;
    public protocol?: number;
    public port?: string;
    public constructor() { 
    }
    public withListId(listId: string): BlackWhiteListResponseDataRecords {
        this['list_id'] = listId;
        return this;
    }
    public set listId(listId: string  | undefined) {
        this['list_id'] = listId;
    }
    public get listId(): string | undefined {
        return this['list_id'];
    }
    public withDirection(direction: number): BlackWhiteListResponseDataRecords {
        this['direction'] = direction;
        return this;
    }
    public withAddressType(addressType: number): BlackWhiteListResponseDataRecords {
        this['address_type'] = addressType;
        return this;
    }
    public set addressType(addressType: number  | undefined) {
        this['address_type'] = addressType;
    }
    public get addressType(): number | undefined {
        return this['address_type'];
    }
    public withAddress(address: string): BlackWhiteListResponseDataRecords {
        this['address'] = address;
        return this;
    }
    public withProtocol(protocol: number): BlackWhiteListResponseDataRecords {
        this['protocol'] = protocol;
        return this;
    }
    public withPort(port: string): BlackWhiteListResponseDataRecords {
        this['port'] = port;
        return this;
    }
}