

export class RuleServiceDto {
    public type?: number;
    public protocol?: number;
    private 'source_port'?: string;
    private 'dest_port'?: string;
    private 'service_set_id'?: string;
    private 'service_set_name'?: string;
    public constructor(type?: number) { 
        this['type'] = type;
    }
    public withType(type: number): RuleServiceDto {
        this['type'] = type;
        return this;
    }
    public withProtocol(protocol: number): RuleServiceDto {
        this['protocol'] = protocol;
        return this;
    }
    public withSourcePort(sourcePort: string): RuleServiceDto {
        this['source_port'] = sourcePort;
        return this;
    }
    public set sourcePort(sourcePort: string  | undefined) {
        this['source_port'] = sourcePort;
    }
    public get sourcePort(): string | undefined {
        return this['source_port'];
    }
    public withDestPort(destPort: string): RuleServiceDto {
        this['dest_port'] = destPort;
        return this;
    }
    public set destPort(destPort: string  | undefined) {
        this['dest_port'] = destPort;
    }
    public get destPort(): string | undefined {
        return this['dest_port'];
    }
    public withServiceSetId(serviceSetId: string): RuleServiceDto {
        this['service_set_id'] = serviceSetId;
        return this;
    }
    public set serviceSetId(serviceSetId: string  | undefined) {
        this['service_set_id'] = serviceSetId;
    }
    public get serviceSetId(): string | undefined {
        return this['service_set_id'];
    }
    public withServiceSetName(serviceSetName: string): RuleServiceDto {
        this['service_set_name'] = serviceSetName;
        return this;
    }
    public set serviceSetName(serviceSetName: string  | undefined) {
        this['service_set_name'] = serviceSetName;
    }
    public get serviceSetName(): string | undefined {
        return this['service_set_name'];
    }
}