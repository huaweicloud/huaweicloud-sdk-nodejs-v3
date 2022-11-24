

export class AddServiceItemsUsingPOSTRequestBodyServiceItems {
    private 'item_id'?: string | undefined;
    public protocol: number;
    private 'source_port': string | undefined;
    private 'dest_port': string | undefined;
    public name?: string;
    public description?: string;
    public constructor(protocol?: any, sourcePort?: any, destPort?: any) { 
        this['protocol'] = protocol;
        this['source_port'] = sourcePort;
        this['dest_port'] = destPort;
    }
    public withItemId(itemId: string): AddServiceItemsUsingPOSTRequestBodyServiceItems {
        this['item_id'] = itemId;
        return this;
    }
    public set itemId(itemId: string | undefined) {
        this['item_id'] = itemId;
    }
    public get itemId() {
        return this['item_id'];
    }
    public withProtocol(protocol: number): AddServiceItemsUsingPOSTRequestBodyServiceItems {
        this['protocol'] = protocol;
        return this;
    }
    public withSourcePort(sourcePort: string): AddServiceItemsUsingPOSTRequestBodyServiceItems {
        this['source_port'] = sourcePort;
        return this;
    }
    public set sourcePort(sourcePort: string | undefined) {
        this['source_port'] = sourcePort;
    }
    public get sourcePort() {
        return this['source_port'];
    }
    public withDestPort(destPort: string): AddServiceItemsUsingPOSTRequestBodyServiceItems {
        this['dest_port'] = destPort;
        return this;
    }
    public set destPort(destPort: string | undefined) {
        this['dest_port'] = destPort;
    }
    public get destPort() {
        return this['dest_port'];
    }
    public withName(name: string): AddServiceItemsUsingPOSTRequestBodyServiceItems {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): AddServiceItemsUsingPOSTRequestBodyServiceItems {
        this['description'] = description;
        return this;
    }
}