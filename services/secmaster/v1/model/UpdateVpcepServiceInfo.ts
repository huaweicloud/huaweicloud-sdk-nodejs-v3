import { VpcServiceType } from './VpcServiceType';


export class UpdateVpcepServiceInfo {
    private 'subnet_id'?: string;
    public type?: VpcServiceType;
    private 'vpc_endpoint_address'?: string;
    private 'vpc_endpoint_id'?: string;
    private 'vpc_endpoint_service_id'?: string;
    private 'vpc_id'?: string;
    public constructor() { 
    }
    public withSubnetId(subnetId: string): UpdateVpcepServiceInfo {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withType(type: VpcServiceType): UpdateVpcepServiceInfo {
        this['type'] = type;
        return this;
    }
    public withVpcEndpointAddress(vpcEndpointAddress: string): UpdateVpcepServiceInfo {
        this['vpc_endpoint_address'] = vpcEndpointAddress;
        return this;
    }
    public set vpcEndpointAddress(vpcEndpointAddress: string  | undefined) {
        this['vpc_endpoint_address'] = vpcEndpointAddress;
    }
    public get vpcEndpointAddress(): string | undefined {
        return this['vpc_endpoint_address'];
    }
    public withVpcEndpointId(vpcEndpointId: string): UpdateVpcepServiceInfo {
        this['vpc_endpoint_id'] = vpcEndpointId;
        return this;
    }
    public set vpcEndpointId(vpcEndpointId: string  | undefined) {
        this['vpc_endpoint_id'] = vpcEndpointId;
    }
    public get vpcEndpointId(): string | undefined {
        return this['vpc_endpoint_id'];
    }
    public withVpcEndpointServiceId(vpcEndpointServiceId: string): UpdateVpcepServiceInfo {
        this['vpc_endpoint_service_id'] = vpcEndpointServiceId;
        return this;
    }
    public set vpcEndpointServiceId(vpcEndpointServiceId: string  | undefined) {
        this['vpc_endpoint_service_id'] = vpcEndpointServiceId;
    }
    public get vpcEndpointServiceId(): string | undefined {
        return this['vpc_endpoint_service_id'];
    }
    public withVpcId(vpcId: string): UpdateVpcepServiceInfo {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
}