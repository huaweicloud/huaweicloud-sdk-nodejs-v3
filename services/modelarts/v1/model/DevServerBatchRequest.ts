import { BatchActionDevServerIds } from './BatchActionDevServerIds';
import { ServerOsRequest } from './ServerOsRequest';


export class DevServerBatchRequest {
    public type?: DevServerBatchRequestTypeEnum | string;
    public servers?: Array<BatchActionDevServerIds>;
    private 'extend_param'?: ServerOsRequest;
    public constructor(type?: string, servers?: Array<BatchActionDevServerIds>) { 
        this['type'] = type;
        this['servers'] = servers;
    }
    public withType(type: DevServerBatchRequestTypeEnum | string): DevServerBatchRequest {
        this['type'] = type;
        return this;
    }
    public withServers(servers: Array<BatchActionDevServerIds>): DevServerBatchRequest {
        this['servers'] = servers;
        return this;
    }
    public withExtendParam(extendParam: ServerOsRequest): DevServerBatchRequest {
        this['extend_param'] = extendParam;
        return this;
    }
    public set extendParam(extendParam: ServerOsRequest  | undefined) {
        this['extend_param'] = extendParam;
    }
    public get extendParam(): ServerOsRequest | undefined {
        return this['extend_param'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DevServerBatchRequestTypeEnum {
    START = 'START',
    STOP = 'STOP',
    REBOOT = 'REBOOT',
    CHANGEOS = 'CHANGEOS',
    REINSTALLOS = 'REINSTALLOS',
    DELETE = 'DELETE'
}
