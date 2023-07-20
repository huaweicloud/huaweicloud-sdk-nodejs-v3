

export class ServiceItemListResponseDtoDataRecords {
    private 'item_id'?: string;
    public protocol?: number;
    private 'source_port'?: string;
    private 'dest_port'?: string;
    public name?: string;
    public description?: string;
    public constructor() { 
    }
    public withItemId(itemId: string): ServiceItemListResponseDtoDataRecords {
        this['item_id'] = itemId;
        return this;
    }
    public set itemId(itemId: string  | undefined) {
        this['item_id'] = itemId;
    }
    public get itemId(): string | undefined {
        return this['item_id'];
    }
    public withProtocol(protocol: number): ServiceItemListResponseDtoDataRecords {
        this['protocol'] = protocol;
        return this;
    }
    public withSourcePort(sourcePort: string): ServiceItemListResponseDtoDataRecords {
        this['source_port'] = sourcePort;
        return this;
    }
    public set sourcePort(sourcePort: string  | undefined) {
        this['source_port'] = sourcePort;
    }
    public get sourcePort(): string | undefined {
        return this['source_port'];
    }
    public withDestPort(destPort: string): ServiceItemListResponseDtoDataRecords {
        this['dest_port'] = destPort;
        return this;
    }
    public set destPort(destPort: string  | undefined) {
        this['dest_port'] = destPort;
    }
    public get destPort(): string | undefined {
        return this['dest_port'];
    }
    public withName(name: string): ServiceItemListResponseDtoDataRecords {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ServiceItemListResponseDtoDataRecords {
        this['description'] = description;
        return this;
    }
}