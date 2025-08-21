

export class ShowCustomerIpsInfoRequest {
    private 'ips_cfw_id'?: string;
    private 'object_id'?: string;
    private 'fw_instance_id'?: string;
    private 'project_id'?: string;
    public constructor(ipsCfwId?: string, objectId?: string, fwInstanceId?: string, projectId?: string) { 
        this['ips_cfw_id'] = ipsCfwId;
        this['object_id'] = objectId;
        this['fw_instance_id'] = fwInstanceId;
        this['project_id'] = projectId;
    }
    public withIpsCfwId(ipsCfwId: string): ShowCustomerIpsInfoRequest {
        this['ips_cfw_id'] = ipsCfwId;
        return this;
    }
    public set ipsCfwId(ipsCfwId: string  | undefined) {
        this['ips_cfw_id'] = ipsCfwId;
    }
    public get ipsCfwId(): string | undefined {
        return this['ips_cfw_id'];
    }
    public withObjectId(objectId: string): ShowCustomerIpsInfoRequest {
        this['object_id'] = objectId;
        return this;
    }
    public set objectId(objectId: string  | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId(): string | undefined {
        return this['object_id'];
    }
    public withFwInstanceId(fwInstanceId: string): ShowCustomerIpsInfoRequest {
        this['fw_instance_id'] = fwInstanceId;
        return this;
    }
    public set fwInstanceId(fwInstanceId: string  | undefined) {
        this['fw_instance_id'] = fwInstanceId;
    }
    public get fwInstanceId(): string | undefined {
        return this['fw_instance_id'];
    }
    public withProjectId(projectId: string): ShowCustomerIpsInfoRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
}