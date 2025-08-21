import { FlowSourceDecryption } from './FlowSourceDecryption';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowOutputInfoResponse extends SdkResponse {
    private 'cidr_whitelist'?: Array<string>;
    public destination?: string;
    public name?: string;
    public encryption?: FlowSourceDecryption;
    private 'output_status'?: ShowOutputInfoResponseOutputStatusEnum | string;
    private 'listener_address'?: string;
    public port?: number;
    public protocol?: ShowOutputInfoResponseProtocolEnum | string;
    private 'stream_id'?: string;
    public description?: string;
    private 'min_latency'?: number;
    private 'health_status'?: ShowOutputInfoResponseHealthStatusEnum | string;
    public type?: string;
    public constructor() { 
        super();
    }
    public withCidrWhitelist(cidrWhitelist: Array<string>): ShowOutputInfoResponse {
        this['cidr_whitelist'] = cidrWhitelist;
        return this;
    }
    public set cidrWhitelist(cidrWhitelist: Array<string>  | undefined) {
        this['cidr_whitelist'] = cidrWhitelist;
    }
    public get cidrWhitelist(): Array<string> | undefined {
        return this['cidr_whitelist'];
    }
    public withDestination(destination: string): ShowOutputInfoResponse {
        this['destination'] = destination;
        return this;
    }
    public withName(name: string): ShowOutputInfoResponse {
        this['name'] = name;
        return this;
    }
    public withEncryption(encryption: FlowSourceDecryption): ShowOutputInfoResponse {
        this['encryption'] = encryption;
        return this;
    }
    public withOutputStatus(outputStatus: ShowOutputInfoResponseOutputStatusEnum | string): ShowOutputInfoResponse {
        this['output_status'] = outputStatus;
        return this;
    }
    public set outputStatus(outputStatus: ShowOutputInfoResponseOutputStatusEnum | string  | undefined) {
        this['output_status'] = outputStatus;
    }
    public get outputStatus(): ShowOutputInfoResponseOutputStatusEnum | string | undefined {
        return this['output_status'];
    }
    public withListenerAddress(listenerAddress: string): ShowOutputInfoResponse {
        this['listener_address'] = listenerAddress;
        return this;
    }
    public set listenerAddress(listenerAddress: string  | undefined) {
        this['listener_address'] = listenerAddress;
    }
    public get listenerAddress(): string | undefined {
        return this['listener_address'];
    }
    public withPort(port: number): ShowOutputInfoResponse {
        this['port'] = port;
        return this;
    }
    public withProtocol(protocol: ShowOutputInfoResponseProtocolEnum | string): ShowOutputInfoResponse {
        this['protocol'] = protocol;
        return this;
    }
    public withStreamId(streamId: string): ShowOutputInfoResponse {
        this['stream_id'] = streamId;
        return this;
    }
    public set streamId(streamId: string  | undefined) {
        this['stream_id'] = streamId;
    }
    public get streamId(): string | undefined {
        return this['stream_id'];
    }
    public withDescription(description: string): ShowOutputInfoResponse {
        this['description'] = description;
        return this;
    }
    public withMinLatency(minLatency: number): ShowOutputInfoResponse {
        this['min_latency'] = minLatency;
        return this;
    }
    public set minLatency(minLatency: number  | undefined) {
        this['min_latency'] = minLatency;
    }
    public get minLatency(): number | undefined {
        return this['min_latency'];
    }
    public withHealthStatus(healthStatus: ShowOutputInfoResponseHealthStatusEnum | string): ShowOutputInfoResponse {
        this['health_status'] = healthStatus;
        return this;
    }
    public set healthStatus(healthStatus: ShowOutputInfoResponseHealthStatusEnum | string  | undefined) {
        this['health_status'] = healthStatus;
    }
    public get healthStatus(): ShowOutputInfoResponseHealthStatusEnum | string | undefined {
        return this['health_status'];
    }
    public withType(type: string): ShowOutputInfoResponse {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowOutputInfoResponseOutputStatusEnum {
    ENABLED = 'ENABLED',
    DISABLED = 'DISABLED'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowOutputInfoResponseProtocolEnum {
    SRT_LISTENER = 'srt-listener',
    SRT_CALLER = 'srt-caller'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowOutputInfoResponseHealthStatusEnum {
    DISCONNECTED = 'DISCONNECTED',
    CONNECTED = 'CONNECTED'
}
