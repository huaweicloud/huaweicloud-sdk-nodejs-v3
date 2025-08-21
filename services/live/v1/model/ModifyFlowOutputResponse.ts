import { FlowSourceDecryption } from './FlowSourceDecryption';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ModifyFlowOutputResponse extends SdkResponse {
    private 'cidr_whitelist'?: Array<string>;
    public destination?: string;
    public name?: string;
    public encryption?: FlowSourceDecryption;
    private 'output_status'?: ModifyFlowOutputResponseOutputStatusEnum | string;
    private 'listener_address'?: string;
    public port?: number;
    public protocol?: ModifyFlowOutputResponseProtocolEnum | string;
    private 'stream_id'?: string;
    public description?: string;
    private 'min_latency'?: number;
    private 'health_status'?: ModifyFlowOutputResponseHealthStatusEnum | string;
    public type?: string;
    public constructor() { 
        super();
    }
    public withCidrWhitelist(cidrWhitelist: Array<string>): ModifyFlowOutputResponse {
        this['cidr_whitelist'] = cidrWhitelist;
        return this;
    }
    public set cidrWhitelist(cidrWhitelist: Array<string>  | undefined) {
        this['cidr_whitelist'] = cidrWhitelist;
    }
    public get cidrWhitelist(): Array<string> | undefined {
        return this['cidr_whitelist'];
    }
    public withDestination(destination: string): ModifyFlowOutputResponse {
        this['destination'] = destination;
        return this;
    }
    public withName(name: string): ModifyFlowOutputResponse {
        this['name'] = name;
        return this;
    }
    public withEncryption(encryption: FlowSourceDecryption): ModifyFlowOutputResponse {
        this['encryption'] = encryption;
        return this;
    }
    public withOutputStatus(outputStatus: ModifyFlowOutputResponseOutputStatusEnum | string): ModifyFlowOutputResponse {
        this['output_status'] = outputStatus;
        return this;
    }
    public set outputStatus(outputStatus: ModifyFlowOutputResponseOutputStatusEnum | string  | undefined) {
        this['output_status'] = outputStatus;
    }
    public get outputStatus(): ModifyFlowOutputResponseOutputStatusEnum | string | undefined {
        return this['output_status'];
    }
    public withListenerAddress(listenerAddress: string): ModifyFlowOutputResponse {
        this['listener_address'] = listenerAddress;
        return this;
    }
    public set listenerAddress(listenerAddress: string  | undefined) {
        this['listener_address'] = listenerAddress;
    }
    public get listenerAddress(): string | undefined {
        return this['listener_address'];
    }
    public withPort(port: number): ModifyFlowOutputResponse {
        this['port'] = port;
        return this;
    }
    public withProtocol(protocol: ModifyFlowOutputResponseProtocolEnum | string): ModifyFlowOutputResponse {
        this['protocol'] = protocol;
        return this;
    }
    public withStreamId(streamId: string): ModifyFlowOutputResponse {
        this['stream_id'] = streamId;
        return this;
    }
    public set streamId(streamId: string  | undefined) {
        this['stream_id'] = streamId;
    }
    public get streamId(): string | undefined {
        return this['stream_id'];
    }
    public withDescription(description: string): ModifyFlowOutputResponse {
        this['description'] = description;
        return this;
    }
    public withMinLatency(minLatency: number): ModifyFlowOutputResponse {
        this['min_latency'] = minLatency;
        return this;
    }
    public set minLatency(minLatency: number  | undefined) {
        this['min_latency'] = minLatency;
    }
    public get minLatency(): number | undefined {
        return this['min_latency'];
    }
    public withHealthStatus(healthStatus: ModifyFlowOutputResponseHealthStatusEnum | string): ModifyFlowOutputResponse {
        this['health_status'] = healthStatus;
        return this;
    }
    public set healthStatus(healthStatus: ModifyFlowOutputResponseHealthStatusEnum | string  | undefined) {
        this['health_status'] = healthStatus;
    }
    public get healthStatus(): ModifyFlowOutputResponseHealthStatusEnum | string | undefined {
        return this['health_status'];
    }
    public withType(type: string): ModifyFlowOutputResponse {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ModifyFlowOutputResponseOutputStatusEnum {
    ENABLED = 'ENABLED',
    DISABLED = 'DISABLED'
}
/**
    * @export
    * @enum {string}
    */
export enum ModifyFlowOutputResponseProtocolEnum {
    SRT_LISTENER = 'srt-listener',
    SRT_CALLER = 'srt-caller'
}
/**
    * @export
    * @enum {string}
    */
export enum ModifyFlowOutputResponseHealthStatusEnum {
    DISCONNECTED = 'DISCONNECTED',
    CONNECTED = 'CONNECTED'
}
