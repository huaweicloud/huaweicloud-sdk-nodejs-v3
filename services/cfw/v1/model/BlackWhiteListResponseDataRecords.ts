

export class BlackWhiteListResponseDataRecords {
    private 'list_id'?: string;
    public direction?: number;
    private 'address_type'?: number;
    public address?: string;
    public protocol?: number;
    public port?: string;
    public description?: string;
    private 'created_date'?: string;
    private 'modified_date'?: string;
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
    public withDescription(description: string): BlackWhiteListResponseDataRecords {
        this['description'] = description;
        return this;
    }
    public withCreatedDate(createdDate: string): BlackWhiteListResponseDataRecords {
        this['created_date'] = createdDate;
        return this;
    }
    public set createdDate(createdDate: string  | undefined) {
        this['created_date'] = createdDate;
    }
    public get createdDate(): string | undefined {
        return this['created_date'];
    }
    public withModifiedDate(modifiedDate: string): BlackWhiteListResponseDataRecords {
        this['modified_date'] = modifiedDate;
        return this;
    }
    public set modifiedDate(modifiedDate: string  | undefined) {
        this['modified_date'] = modifiedDate;
    }
    public get modifiedDate(): string | undefined {
        return this['modified_date'];
    }
}