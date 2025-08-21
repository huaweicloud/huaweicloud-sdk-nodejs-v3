import { FlowSourceDecryption } from './FlowSourceDecryption';


export class FlowsOutput {
    private 'cidr_whitelist'?: Array<string>;
    public destination?: string;
    public name?: string;
    public encryption?: FlowSourceDecryption;
    private 'output_status'?: FlowsOutputOutputStatusEnum | string;
    private 'listener_address'?: string;
    public port?: number;
    public protocol?: FlowsOutputProtocolEnum | string;
    private 'stream_id'?: string;
    public description?: string;
    private 'min_latency'?: number;
    private 'health_status'?: FlowsOutputHealthStatusEnum | string;
    public type?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withCidrWhitelist(cidrWhitelist: Array<string>): FlowsOutput {
        this['cidr_whitelist'] = cidrWhitelist;
        return this;
    }
    public set cidrWhitelist(cidrWhitelist: Array<string>  | undefined) {
        this['cidr_whitelist'] = cidrWhitelist;
    }
    public get cidrWhitelist(): Array<string> | undefined {
        return this['cidr_whitelist'];
    }
    public withDestination(destination: string): FlowsOutput {
        this['destination'] = destination;
        return this;
    }
    public withName(name: string): FlowsOutput {
        this['name'] = name;
        return this;
    }
    public withEncryption(encryption: FlowSourceDecryption): FlowsOutput {
        this['encryption'] = encryption;
        return this;
    }
    public withOutputStatus(outputStatus: FlowsOutputOutputStatusEnum | string): FlowsOutput {
        this['output_status'] = outputStatus;
        return this;
    }
    public set outputStatus(outputStatus: FlowsOutputOutputStatusEnum | string  | undefined) {
        this['output_status'] = outputStatus;
    }
    public get outputStatus(): FlowsOutputOutputStatusEnum | string | undefined {
        return this['output_status'];
    }
    public withListenerAddress(listenerAddress: string): FlowsOutput {
        this['listener_address'] = listenerAddress;
        return this;
    }
    public set listenerAddress(listenerAddress: string  | undefined) {
        this['listener_address'] = listenerAddress;
    }
    public get listenerAddress(): string | undefined {
        return this['listener_address'];
    }
    public withPort(port: number): FlowsOutput {
        this['port'] = port;
        return this;
    }
    public withProtocol(protocol: FlowsOutputProtocolEnum | string): FlowsOutput {
        this['protocol'] = protocol;
        return this;
    }
    public withStreamId(streamId: string): FlowsOutput {
        this['stream_id'] = streamId;
        return this;
    }
    public set streamId(streamId: string  | undefined) {
        this['stream_id'] = streamId;
    }
    public get streamId(): string | undefined {
        return this['stream_id'];
    }
    public withDescription(description: string): FlowsOutput {
        this['description'] = description;
        return this;
    }
    public withMinLatency(minLatency: number): FlowsOutput {
        this['min_latency'] = minLatency;
        return this;
    }
    public set minLatency(minLatency: number  | undefined) {
        this['min_latency'] = minLatency;
    }
    public get minLatency(): number | undefined {
        return this['min_latency'];
    }
    public withHealthStatus(healthStatus: FlowsOutputHealthStatusEnum | string): FlowsOutput {
        this['health_status'] = healthStatus;
        return this;
    }
    public set healthStatus(healthStatus: FlowsOutputHealthStatusEnum | string  | undefined) {
        this['health_status'] = healthStatus;
    }
    public get healthStatus(): FlowsOutputHealthStatusEnum | string | undefined {
        return this['health_status'];
    }
    public withType(type: string): FlowsOutput {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum FlowsOutputOutputStatusEnum {
    ENABLED = 'ENABLED',
    DISABLED = 'DISABLED'
}
/**
    * @export
    * @enum {string}
    */
export enum FlowsOutputProtocolEnum {
    SRT_LISTENER = 'srt-listener',
    SRT_CALLER = 'srt-caller'
}
/**
    * @export
    * @enum {string}
    */
export enum FlowsOutputHealthStatusEnum {
    DISCONNECTED = 'DISCONNECTED',
    CONNECTED = 'CONNECTED'
}
