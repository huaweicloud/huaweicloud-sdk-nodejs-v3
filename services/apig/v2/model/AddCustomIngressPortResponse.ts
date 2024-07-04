
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddCustomIngressPortResponse extends SdkResponse {
    public protocol?: AddCustomIngressPortResponseProtocolEnum | string;
    private 'ingress_port'?: number;
    private 'ingress_port_id'?: string;
    public status?: AddCustomIngressPortResponseStatusEnum | string;
    public constructor() { 
        super();
    }
    public withProtocol(protocol: AddCustomIngressPortResponseProtocolEnum | string): AddCustomIngressPortResponse {
        this['protocol'] = protocol;
        return this;
    }
    public withIngressPort(ingressPort: number): AddCustomIngressPortResponse {
        this['ingress_port'] = ingressPort;
        return this;
    }
    public set ingressPort(ingressPort: number  | undefined) {
        this['ingress_port'] = ingressPort;
    }
    public get ingressPort(): number | undefined {
        return this['ingress_port'];
    }
    public withIngressPortId(ingressPortId: string): AddCustomIngressPortResponse {
        this['ingress_port_id'] = ingressPortId;
        return this;
    }
    public set ingressPortId(ingressPortId: string  | undefined) {
        this['ingress_port_id'] = ingressPortId;
    }
    public get ingressPortId(): string | undefined {
        return this['ingress_port_id'];
    }
    public withStatus(status: AddCustomIngressPortResponseStatusEnum | string): AddCustomIngressPortResponse {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AddCustomIngressPortResponseProtocolEnum {
    HTTP = 'HTTP',
    HTTPS = 'HTTPS'
}
/**
    * @export
    * @enum {string}
    */
export enum AddCustomIngressPortResponseStatusEnum {
    NORMAL = 'normal',
    ABNORMAL = 'abnormal'
}
