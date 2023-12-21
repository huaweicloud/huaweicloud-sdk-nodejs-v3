

export class InstanceDetailResourceInfo {
    public specification?: string;
    private 'order_id'?: string;
    private 'resource_id'?: string;
    private 'data_disk_size'?: number;
    private 'disk_resource_id'?: Array<string>;
    public constructor(specification?: string, orderId?: string, resourceId?: string, dataDiskSize?: number, diskResourceId?: Array<string>) { 
        this['specification'] = specification;
        this['order_id'] = orderId;
        this['resource_id'] = resourceId;
        this['data_disk_size'] = dataDiskSize;
        this['disk_resource_id'] = diskResourceId;
    }
    public withSpecification(specification: string): InstanceDetailResourceInfo {
        this['specification'] = specification;
        return this;
    }
    public withOrderId(orderId: string): InstanceDetailResourceInfo {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
    public withResourceId(resourceId: string): InstanceDetailResourceInfo {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withDataDiskSize(dataDiskSize: number): InstanceDetailResourceInfo {
        this['data_disk_size'] = dataDiskSize;
        return this;
    }
    public set dataDiskSize(dataDiskSize: number  | undefined) {
        this['data_disk_size'] = dataDiskSize;
    }
    public get dataDiskSize(): number | undefined {
        return this['data_disk_size'];
    }
    public withDiskResourceId(diskResourceId: Array<string>): InstanceDetailResourceInfo {
        this['disk_resource_id'] = diskResourceId;
        return this;
    }
    public set diskResourceId(diskResourceId: Array<string>  | undefined) {
        this['disk_resource_id'] = diskResourceId;
    }
    public get diskResourceId(): Array<string> | undefined {
        return this['disk_resource_id'];
    }
}