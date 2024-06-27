

export class CaptureServiceDto {
    private 'dest_port'?: string;
    public protocol?: number;
    private 'source_port'?: string;
    public constructor(protocol?: number) { 
        this['protocol'] = protocol;
    }
    public withDestPort(destPort: string): CaptureServiceDto {
        this['dest_port'] = destPort;
        return this;
    }
    public set destPort(destPort: string  | undefined) {
        this['dest_port'] = destPort;
    }
    public get destPort(): string | undefined {
        return this['dest_port'];
    }
    public withProtocol(protocol: number): CaptureServiceDto {
        this['protocol'] = protocol;
        return this;
    }
    public withSourcePort(sourcePort: string): CaptureServiceDto {
        this['source_port'] = sourcePort;
        return this;
    }
    public set sourcePort(sourcePort: string  | undefined) {
        this['source_port'] = sourcePort;
    }
    public get sourcePort(): string | undefined {
        return this['source_port'];
    }
}