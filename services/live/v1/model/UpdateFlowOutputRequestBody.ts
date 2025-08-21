import { FlowSourceDecryption } from './FlowSourceDecryption';


export class UpdateFlowOutputRequestBody {
    private 'cidr_whitelist'?: Array<string>;
    public destination?: string;
    public encryption?: FlowSourceDecryption;
    private 'output_status'?: UpdateFlowOutputRequestBodyOutputStatusEnum | string;
    public port?: number;
    private 'stream_id'?: string;
    public description?: string;
    private 'min_latency'?: number;
    public constructor() { 
    }
    public withCidrWhitelist(cidrWhitelist: Array<string>): UpdateFlowOutputRequestBody {
        this['cidr_whitelist'] = cidrWhitelist;
        return this;
    }
    public set cidrWhitelist(cidrWhitelist: Array<string>  | undefined) {
        this['cidr_whitelist'] = cidrWhitelist;
    }
    public get cidrWhitelist(): Array<string> | undefined {
        return this['cidr_whitelist'];
    }
    public withDestination(destination: string): UpdateFlowOutputRequestBody {
        this['destination'] = destination;
        return this;
    }
    public withEncryption(encryption: FlowSourceDecryption): UpdateFlowOutputRequestBody {
        this['encryption'] = encryption;
        return this;
    }
    public withOutputStatus(outputStatus: UpdateFlowOutputRequestBodyOutputStatusEnum | string): UpdateFlowOutputRequestBody {
        this['output_status'] = outputStatus;
        return this;
    }
    public set outputStatus(outputStatus: UpdateFlowOutputRequestBodyOutputStatusEnum | string  | undefined) {
        this['output_status'] = outputStatus;
    }
    public get outputStatus(): UpdateFlowOutputRequestBodyOutputStatusEnum | string | undefined {
        return this['output_status'];
    }
    public withPort(port: number): UpdateFlowOutputRequestBody {
        this['port'] = port;
        return this;
    }
    public withStreamId(streamId: string): UpdateFlowOutputRequestBody {
        this['stream_id'] = streamId;
        return this;
    }
    public set streamId(streamId: string  | undefined) {
        this['stream_id'] = streamId;
    }
    public get streamId(): string | undefined {
        return this['stream_id'];
    }
    public withDescription(description: string): UpdateFlowOutputRequestBody {
        this['description'] = description;
        return this;
    }
    public withMinLatency(minLatency: number): UpdateFlowOutputRequestBody {
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
export enum UpdateFlowOutputRequestBodyOutputStatusEnum {
    ENABLED = 'ENABLED',
    DISABLED = 'DISABLED'
}
