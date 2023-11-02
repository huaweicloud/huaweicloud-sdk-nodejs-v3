import { BackendConstant } from './BackendConstant';
import { BackendRequestPara } from './BackendRequestPara';


export class BackendConfig {
    public type?: BackendConfigTypeEnum | string;
    public protocol?: BackendConfigProtocolEnum | string;
    public host?: string;
    public timeout?: number;
    public path?: string;
    private 'backend_paras'?: Array<BackendRequestPara>;
    private 'constant_paras'?: Array<BackendConstant>;
    public constructor() { 
    }
    public withType(type: BackendConfigTypeEnum | string): BackendConfig {
        this['type'] = type;
        return this;
    }
    public withProtocol(protocol: BackendConfigProtocolEnum | string): BackendConfig {
        this['protocol'] = protocol;
        return this;
    }
    public withHost(host: string): BackendConfig {
        this['host'] = host;
        return this;
    }
    public withTimeout(timeout: number): BackendConfig {
        this['timeout'] = timeout;
        return this;
    }
    public withPath(path: string): BackendConfig {
        this['path'] = path;
        return this;
    }
    public withBackendParas(backendParas: Array<BackendRequestPara>): BackendConfig {
        this['backend_paras'] = backendParas;
        return this;
    }
    public set backendParas(backendParas: Array<BackendRequestPara>  | undefined) {
        this['backend_paras'] = backendParas;
    }
    public get backendParas(): Array<BackendRequestPara> | undefined {
        return this['backend_paras'];
    }
    public withConstantParas(constantParas: Array<BackendConstant>): BackendConfig {
        this['constant_paras'] = constantParas;
        return this;
    }
    public set constantParas(constantParas: Array<BackendConstant>  | undefined) {
        this['constant_paras'] = constantParas;
    }
    public get constantParas(): Array<BackendConstant> | undefined {
        return this['constant_paras'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BackendConfigTypeEnum {
    REQUEST_TYPE_POST = 'REQUEST_TYPE_POST',
    REQUEST_TYPE_GET = 'REQUEST_TYPE_GET'
}
/**
    * @export
    * @enum {string}
    */
export enum BackendConfigProtocolEnum {
    PROTOCOL_TYPE_HTTP = 'PROTOCOL_TYPE_HTTP',
    PROTOCOL_TYPE_HTTPS = 'PROTOCOL_TYPE_HTTPS'
}
