

export class ListBindingGeip {
    private 'global_eip_id'?: string;
    private 'global_eip_segment_id'?: string;
    public status?: string;
    public type?: string;
    private 'error_message'?: string;
    public cidr?: string;
    private 'address_family'?: string;
    private 'ie_vtep_ip'?: string;
    private 'created_time'?: string;
    private 'gcb_id'?: string;
    public constructor() { 
    }
    public withGlobalEipId(globalEipId: string): ListBindingGeip {
        this['global_eip_id'] = globalEipId;
        return this;
    }
    public set globalEipId(globalEipId: string  | undefined) {
        this['global_eip_id'] = globalEipId;
    }
    public get globalEipId(): string | undefined {
        return this['global_eip_id'];
    }
    public withGlobalEipSegmentId(globalEipSegmentId: string): ListBindingGeip {
        this['global_eip_segment_id'] = globalEipSegmentId;
        return this;
    }
    public set globalEipSegmentId(globalEipSegmentId: string  | undefined) {
        this['global_eip_segment_id'] = globalEipSegmentId;
    }
    public get globalEipSegmentId(): string | undefined {
        return this['global_eip_segment_id'];
    }
    public withStatus(status: string): ListBindingGeip {
        this['status'] = status;
        return this;
    }
    public withType(type: string): ListBindingGeip {
        this['type'] = type;
        return this;
    }
    public withErrorMessage(errorMessage: string): ListBindingGeip {
        this['error_message'] = errorMessage;
        return this;
    }
    public set errorMessage(errorMessage: string  | undefined) {
        this['error_message'] = errorMessage;
    }
    public get errorMessage(): string | undefined {
        return this['error_message'];
    }
    public withCidr(cidr: string): ListBindingGeip {
        this['cidr'] = cidr;
        return this;
    }
    public withAddressFamily(addressFamily: string): ListBindingGeip {
        this['address_family'] = addressFamily;
        return this;
    }
    public set addressFamily(addressFamily: string  | undefined) {
        this['address_family'] = addressFamily;
    }
    public get addressFamily(): string | undefined {
        return this['address_family'];
    }
    public withIeVtepIp(ieVtepIp: string): ListBindingGeip {
        this['ie_vtep_ip'] = ieVtepIp;
        return this;
    }
    public set ieVtepIp(ieVtepIp: string  | undefined) {
        this['ie_vtep_ip'] = ieVtepIp;
    }
    public get ieVtepIp(): string | undefined {
        return this['ie_vtep_ip'];
    }
    public withCreatedTime(createdTime: string): ListBindingGeip {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: string  | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime(): string | undefined {
        return this['created_time'];
    }
    public withGcbId(gcbId: string): ListBindingGeip {
        this['gcb_id'] = gcbId;
        return this;
    }
    public set gcbId(gcbId: string  | undefined) {
        this['gcb_id'] = gcbId;
    }
    public get gcbId(): string | undefined {
        return this['gcb_id'];
    }
}