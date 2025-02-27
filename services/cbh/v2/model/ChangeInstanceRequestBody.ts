

export class ChangeInstanceRequestBody {
    private 'server_id'?: string;
    private 'new_resource_spec_code'?: string;
    private 'attach_disk_size'?: number;
    private 'is_auto_pay'?: number;
    public constructor(serverId?: string) { 
        this['server_id'] = serverId;
    }
    public withServerId(serverId: string): ChangeInstanceRequestBody {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
    public withNewResourceSpecCode(newResourceSpecCode: string): ChangeInstanceRequestBody {
        this['new_resource_spec_code'] = newResourceSpecCode;
        return this;
    }
    public set newResourceSpecCode(newResourceSpecCode: string  | undefined) {
        this['new_resource_spec_code'] = newResourceSpecCode;
    }
    public get newResourceSpecCode(): string | undefined {
        return this['new_resource_spec_code'];
    }
    public withAttachDiskSize(attachDiskSize: number): ChangeInstanceRequestBody {
        this['attach_disk_size'] = attachDiskSize;
        return this;
    }
    public set attachDiskSize(attachDiskSize: number  | undefined) {
        this['attach_disk_size'] = attachDiskSize;
    }
    public get attachDiskSize(): number | undefined {
        return this['attach_disk_size'];
    }
    public withIsAutoPay(isAutoPay: number): ChangeInstanceRequestBody {
        this['is_auto_pay'] = isAutoPay;
        return this;
    }
    public set isAutoPay(isAutoPay: number  | undefined) {
        this['is_auto_pay'] = isAutoPay;
    }
    public get isAutoPay(): number | undefined {
        return this['is_auto_pay'];
    }
}