import { FlowSourceDecryption } from './FlowSourceDecryption';


export class AddFlowOutputsRequest {
    private 'cidr_whitelist'?: Array<string>;
    public destination?: string;
    public name?: string;
    public encryption?: FlowSourceDecryption;
    private 'output_status'?: AddFlowOutputsRequestOutputStatusEnum | string;
    public port?: number;
    public protocol?: AddFlowOutputsRequestProtocolEnum | string;
    private 'stream_id'?: string;
    public description?: string;
    private 'min_latency'?: number;
    public constructor(name?: string, protocol?: string) { 
        this['name'] = name;
        this['protocol'] = protocol;
    }
    public withCidrWhitelist(cidrWhitelist: Array<string>): AddFlowOutputsRequest {
        this['cidr_whitelist'] = cidrWhitelist;
        return this;
    }
    public set cidrWhitelist(cidrWhitelist: Array<string>  | undefined) {
        this['cidr_whitelist'] = cidrWhitelist;
    }
    public get cidrWhitelist(): Array<string> | undefined {
        return this['cidr_whitelist'];
    }
    public withDestination(destination: string): AddFlowOutputsRequest {
        this['destination'] = destination;
        return this;
    }
    public withName(name: string): AddFlowOutputsRequest {
        this['name'] = name;
        return this;
    }
    public withEncryption(encryption: FlowSourceDecryption): AddFlowOutputsRequest {
        this['encryption'] = encryption;
        return this;
    }
    public withOutputStatus(outputStatus: AddFlowOutputsRequestOutputStatusEnum | string): AddFlowOutputsRequest {
        this['output_status'] = outputStatus;
        return this;
    }
    public set outputStatus(outputStatus: AddFlowOutputsRequestOutputStatusEnum | string  | undefined) {
        this['output_status'] = outputStatus;
    }
    public get outputStatus(): AddFlowOutputsRequestOutputStatusEnum | string | undefined {
        return this['output_status'];
    }
    public withPort(port: number): AddFlowOutputsRequest {
        this['port'] = port;
        return this;
    }
    public withProtocol(protocol: AddFlowOutputsRequestProtocolEnum | string): AddFlowOutputsRequest {
        this['protocol'] = protocol;
        return this;
    }
    public withStreamId(streamId: string): AddFlowOutputsRequest {
        this['stream_id'] = streamId;
        return this;
    }
    public set streamId(streamId: string  | undefined) {
        this['stream_id'] = streamId;
    }
    public get streamId(): string | undefined {
        return this['stream_id'];
    }
    public withDescription(description: string): AddFlowOutputsRequest {
        this['description'] = description;
        return this;
    }
    public withMinLatency(minLatency: number): AddFlowOutputsRequest {
        this['min_latency'] = minLatency;
        return this;
    }
    public set minLatency(minLatency: number  | undefined) {
        this['min_latency'] = minLatency;
    }
    public get minLatency(): number | undefined {
        return this['min_latency'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AddFlowOutputsRequestOutputStatusEnum {
    ENABLED = 'ENABLED',
    DISABLED = 'DISABLED'
}
/**
    * @export
    * @enum {string}
    */
export enum AddFlowOutputsRequestProtocolEnum {
    SRT_LISTENER = 'srt-listener',
    SRT_CALLER = 'srt-caller'
}
