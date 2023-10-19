

export class ServiceItem {
    public protocol?: number;
    private 'source_port'?: string;
    private 'dest_port'?: string;
    public description?: string;
    public name?: string;
    public constructor() { 
    }
    public withProtocol(protocol: number): ServiceItem {
        this['protocol'] = protocol;
        return this;
    }
    public withSourcePort(sourcePort: string): ServiceItem {
        this['source_port'] = sourcePort;
        return this;
    }
    public set sourcePort(sourcePort: string  | undefined) {
        this['source_port'] = sourcePort;
    }
    public get sourcePort(): string | undefined {
        return this['source_port'];
    }
    public withDestPort(destPort: string): ServiceItem {
        this['dest_port'] = destPort;
        return this;
    }
    public set destPort(destPort: string  | undefined) {
        this['dest_port'] = destPort;
    }
    public get destPort(): string | undefined {
        return this['dest_port'];
    }
    public withDescription(description: string): ServiceItem {
        this['description'] = description;
        return this;
    }
    public withName(name: string): ServiceItem {
        this['name'] = name;
        return this;
    }
}