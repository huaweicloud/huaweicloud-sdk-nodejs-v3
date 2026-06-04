
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BindPublicGatewayResponse extends SdkResponse {
    private 'instance_id'?: string;
    private 'instance_name'?: string;
    private 'node_id'?: string;
    private 'node_name'?: string;
    private 'nat_gateway_id'?: string;
    private 'public_ip_id'?: string;
    private 'external_service_port'?: number;
    public constructor() { 
        super();
    }
    public withInstanceId(instanceId: string): BindPublicGatewayResponse {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceName(instanceName: string): BindPublicGatewayResponse {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withNodeId(nodeId: string): BindPublicGatewayResponse {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withNodeName(nodeName: string): BindPublicGatewayResponse {
        this['node_name'] = nodeName;
        return this;
    }
    public set nodeName(nodeName: string  | undefined) {
        this['node_name'] = nodeName;
    }
    public get nodeName(): string | undefined {
        return this['node_name'];
    }
    public withNatGatewayId(natGatewayId: string): BindPublicGatewayResponse {
        this['nat_gateway_id'] = natGatewayId;
        return this;
    }
    public set natGatewayId(natGatewayId: string  | undefined) {
        this['nat_gateway_id'] = natGatewayId;
    }
    public get natGatewayId(): string | undefined {
        return this['nat_gateway_id'];
    }
    public withPublicIpId(publicIpId: string): BindPublicGatewayResponse {
        this['public_ip_id'] = publicIpId;
        return this;
    }
    public set publicIpId(publicIpId: string  | undefined) {
        this['public_ip_id'] = publicIpId;
    }
    public get publicIpId(): string | undefined {
        return this['public_ip_id'];
    }
    public withExternalServicePort(externalServicePort: number): BindPublicGatewayResponse {
        this['external_service_port'] = externalServicePort;
        return this;
    }
    public set externalServicePort(externalServicePort: number  | undefined) {
        this['external_service_port'] = externalServicePort;
    }
    public get externalServicePort(): number | undefined {
        return this['external_service_port'];
    }
}