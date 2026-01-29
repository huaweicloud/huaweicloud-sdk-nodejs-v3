import { FlowSourceDecryption } from './FlowSourceDecryption';


export class FlowSource {
    private 'source_listener_address'?: string;
    private 'source_listener_port'?: number;
    private 'stream_id'?: string;
    private 'min_latency'?: number;
    private 'cidr_whitelist'?: Array<string>;
    public description?: string;
    public protocol?: FlowSourceProtocolEnum | string;
    public name?: string;
    public decryption?: FlowSourceDecryption;
    private 'health_status'?: FlowSourceHealthStatusEnum | string;
    public constructor(protocol?: string, name?: string) { 
        this['protocol'] = protocol;
        this['name'] = name;
    }
    public withSourceListenerAddress(sourceListenerAddress: string): FlowSource {
        this['source_listener_address'] = sourceListenerAddress;
        return this;
    }
    public set sourceListenerAddress(sourceListenerAddress: string  | undefined) {
        this['source_listener_address'] = sourceListenerAddress;
    }
    public get sourceListenerAddress(): string | undefined {
        return this['source_listener_address'];
    }
    public withSourceListenerPort(sourceListenerPort: number): FlowSource {
        this['source_listener_port'] = sourceListenerPort;
        return this;
    }
    public set sourceListenerPort(sourceListenerPort: number  | undefined) {
        this['source_listener_port'] = sourceListenerPort;
    }
    public get sourceListenerPort(): number | undefined {
        return this['source_listener_port'];
    }
    public withStreamId(streamId: string): FlowSource {
        this['stream_id'] = streamId;
        return this;
    }
    public set streamId(streamId: string  | undefined) {
        this['stream_id'] = streamId;
    }
    public get streamId(): string | undefined {
        return this['stream_id'];
    }
    public withMinLatency(minLatency: number): FlowSource {
        this['min_latency'] = minLatency;
        return this;
    }
    public set minLatency(minLatency: number  | undefined) {
        this['min_latency'] = minLatency;
    }
    public get minLatency(): number | undefined {
        return this['min_latency'];
    }
    public withCidrWhitelist(cidrWhitelist: Array<string>): FlowSource {
        this['cidr_whitelist'] = cidrWhitelist;
        return this;
    }
    public set cidrWhitelist(cidrWhitelist: Array<string>  | undefined) {
        this['cidr_whitelist'] = cidrWhitelist;
    }
    public get cidrWhitelist(): Array<string> | undefined {
        return this['cidr_whitelist'];
    }
    public withDescription(description: string): FlowSource {
        this['description'] = description;
        return this;
    }
    public withProtocol(protocol: FlowSourceProtocolEnum | string): FlowSource {
        this['protocol'] = protocol;
        return this;
    }
    public withName(name: string): FlowSource {
        this['name'] = name;
        return this;
    }
    public withDecryption(decryption: FlowSourceDecryption): FlowSource {
        this['decryption'] = decryption;
        return this;
    }
    public withHealthStatus(healthStatus: FlowSourceHealthStatusEnum | string): FlowSource {
        this['health_status'] = healthStatus;
        return this;
    }
    public set healthStatus(healthStatus: FlowSourceHealthStatusEnum | string  | undefined) {
        this['health_status'] = healthStatus;
    }
    public get healthStatus(): FlowSourceHealthStatusEnum | string | undefined {
        return this['health_status'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum FlowSourceProtocolEnum {
    SRT_CALLER = 'srt-caller',
    SRT_LISTENER = 'srt-listener'
}
/**
    * @export
    * @enum {string}
    */
export enum FlowSourceHealthStatusEnum {
    CONNECTED = 'CONNECTED',
    DISCONNECTED = 'DISCONNECTED'
}
