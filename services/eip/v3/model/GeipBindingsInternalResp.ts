import { BackboneBandwidthResp } from './BackboneBandwidthResp';
import { InstanceVnicResp } from './InstanceVnicResp';
import { InstancevirtualListResp } from './InstancevirtualListResp';


export class GeipBindingsInternalResp {
    private 'geip_id'?: string;
    private 'geip_ip_address'?: string;
    private 'public_border_group'?: string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    private 'instance_type'?: string;
    private 'instance_id'?: string;
    public gcbandwidth?: BackboneBandwidthResp;
    public vnic?: InstanceVnicResp;
    private 'vn_list'?: Array<InstancevirtualListResp>;
    public constructor() { 
    }
    public withGeipId(geipId: string): GeipBindingsInternalResp {
        this['geip_id'] = geipId;
        return this;
    }
    public set geipId(geipId: string  | undefined) {
        this['geip_id'] = geipId;
    }
    public get geipId(): string | undefined {
        return this['geip_id'];
    }
    public withGeipIpAddress(geipIpAddress: string): GeipBindingsInternalResp {
        this['geip_ip_address'] = geipIpAddress;
        return this;
    }
    public set geipIpAddress(geipIpAddress: string  | undefined) {
        this['geip_ip_address'] = geipIpAddress;
    }
    public get geipIpAddress(): string | undefined {
        return this['geip_ip_address'];
    }
    public withPublicBorderGroup(publicBorderGroup: string): GeipBindingsInternalResp {
        this['public_border_group'] = publicBorderGroup;
        return this;
    }
    public set publicBorderGroup(publicBorderGroup: string  | undefined) {
        this['public_border_group'] = publicBorderGroup;
    }
    public get publicBorderGroup(): string | undefined {
        return this['public_border_group'];
    }
    public withCreatedAt(createdAt: string): GeipBindingsInternalResp {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): GeipBindingsInternalResp {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withInstanceType(instanceType: string): GeipBindingsInternalResp {
        this['instance_type'] = instanceType;
        return this;
    }
    public set instanceType(instanceType: string  | undefined) {
        this['instance_type'] = instanceType;
    }
    public get instanceType(): string | undefined {
        return this['instance_type'];
    }
    public withInstanceId(instanceId: string): GeipBindingsInternalResp {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withGcbandwidth(gcbandwidth: BackboneBandwidthResp): GeipBindingsInternalResp {
        this['gcbandwidth'] = gcbandwidth;
        return this;
    }
    public withVnic(vnic: InstanceVnicResp): GeipBindingsInternalResp {
        this['vnic'] = vnic;
        return this;
    }
    public withVnList(vnList: Array<InstancevirtualListResp>): GeipBindingsInternalResp {
        this['vn_list'] = vnList;
        return this;
    }
    public set vnList(vnList: Array<InstancevirtualListResp>  | undefined) {
        this['vn_list'] = vnList;
    }
    public get vnList(): Array<InstancevirtualListResp> | undefined {
        return this['vn_list'];
    }
}