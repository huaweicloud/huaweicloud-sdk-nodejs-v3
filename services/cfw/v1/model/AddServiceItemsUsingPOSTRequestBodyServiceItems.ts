

export class AddServiceItemsUsingPOSTRequestBodyServiceItems {
    public protocol?: number;
    private 'source_port'?: string;
    private 'dest_port'?: string;
    public description?: string;
    public constructor(protocol?: number, sourcePort?: string, destPort?: string) { 
        this['protocol'] = protocol;
        this['source_port'] = sourcePort;
        this['dest_port'] = destPort;
    }
    public withProtocol(protocol: number): AddServiceItemsUsingPOSTRequestBodyServiceItems {
        this['protocol'] = protocol;
        return this;
    }
    public withSourcePort(sourcePort: string): AddServiceItemsUsingPOSTRequestBodyServiceItems {
        this['source_port'] = sourcePort;
        return this;
    }
    public set sourcePort(sourcePort: string  | undefined) {
        this['source_port'] = sourcePort;
    }
    public get sourcePort(): string | undefined {
        return this['source_port'];
    }
    public withDestPort(destPort: string): AddServiceItemsUsingPOSTRequestBodyServiceItems {
        this['dest_port'] = destPort;
        return this;
    }
    public set destPort(destPort: string  | undefined) {
        this['dest_port'] = destPort;
    }
    public get destPort(): string | undefined {
        return this['dest_port'];
    }
    public withDescription(description: string): AddServiceItemsUsingPOSTRequestBodyServiceItems {
        this['description'] = description;
        return this;
    }
}