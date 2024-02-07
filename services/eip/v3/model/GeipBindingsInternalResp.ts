import { InstancevirtualListResp } from './InstancevirtualListResp';


export class GeipBindingsInternalResp {
    private 'geip_id'?: string;
    private 'geip_ip_address'?: string;
    private 'public_border_group'?: string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    private 'binding_instance_type'?: string;
    private 'binding_instance_id'?: string;
    public gcbandwidth?: object;
    public vnic?: object;
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
    public withBindingInstanceType(bindingInstanceType: string): GeipBindingsInternalResp {
        this['binding_instance_type'] = bindingInstanceType;
        return this;
    }
    public set bindingInstanceType(bindingInstanceType: string  | undefined) {
        this['binding_instance_type'] = bindingInstanceType;
    }
    public get bindingInstanceType(): string | undefined {
        return this['binding_instance_type'];
    }
    public withBindingInstanceId(bindingInstanceId: string): GeipBindingsInternalResp {
        this['binding_instance_id'] = bindingInstanceId;
        return this;
    }
    public set bindingInstanceId(bindingInstanceId: string  | undefined) {
        this['binding_instance_id'] = bindingInstanceId;
    }
    public get bindingInstanceId(): string | undefined {
        return this['binding_instance_id'];
    }
    public withGcbandwidth(gcbandwidth: object): GeipBindingsInternalResp {
        this['gcbandwidth'] = gcbandwidth;
        return this;
    }
    public withVnic(vnic: object): GeipBindingsInternalResp {
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