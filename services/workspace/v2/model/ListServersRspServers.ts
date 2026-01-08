

export class ListServersRspServers {
    public type?: string;
    public created?: string;
    private 'desktop_id'?: string;
    private 'desktop_product_id'?: string;
    private 'computer_name'?: string;
    public status?: string;
    private 'tenant_id'?: string;
    public updated?: string;
    private 'task_state'?: string;
    private 'image_id'?: string;
    private 'image_name'?: string;
    public vcpu?: number;
    public memory?: number;
    private 'ip_addresses'?: Array<string>;
    private 'availability_zone'?: string;
    public process?: number;
    public constructor() { 
    }
    public withType(type: string): ListServersRspServers {
        this['type'] = type;
        return this;
    }
    public withCreated(created: string): ListServersRspServers {
        this['created'] = created;
        return this;
    }
    public withDesktopId(desktopId: string): ListServersRspServers {
        this['desktop_id'] = desktopId;
        return this;
    }
    public set desktopId(desktopId: string  | undefined) {
        this['desktop_id'] = desktopId;
    }
    public get desktopId(): string | undefined {
        return this['desktop_id'];
    }
    public withDesktopProductId(desktopProductId: string): ListServersRspServers {
        this['desktop_product_id'] = desktopProductId;
        return this;
    }
    public set desktopProductId(desktopProductId: string  | undefined) {
        this['desktop_product_id'] = desktopProductId;
    }
    public get desktopProductId(): string | undefined {
        return this['desktop_product_id'];
    }
    public withComputerName(computerName: string): ListServersRspServers {
        this['computer_name'] = computerName;
        return this;
    }
    public set computerName(computerName: string  | undefined) {
        this['computer_name'] = computerName;
    }
    public get computerName(): string | undefined {
        return this['computer_name'];
    }
    public withStatus(status: string): ListServersRspServers {
        this['status'] = status;
        return this;
    }
    public withTenantId(tenantId: string): ListServersRspServers {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withUpdated(updated: string): ListServersRspServers {
        this['updated'] = updated;
        return this;
    }
    public withTaskState(taskState: string): ListServersRspServers {
        this['task_state'] = taskState;
        return this;
    }
    public set taskState(taskState: string  | undefined) {
        this['task_state'] = taskState;
    }
    public get taskState(): string | undefined {
        return this['task_state'];
    }
    public withImageId(imageId: string): ListServersRspServers {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withImageName(imageName: string): ListServersRspServers {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withVcpu(vcpu: number): ListServersRspServers {
        this['vcpu'] = vcpu;
        return this;
    }
    public withMemory(memory: number): ListServersRspServers {
        this['memory'] = memory;
        return this;
    }
    public withIpAddresses(ipAddresses: Array<string>): ListServersRspServers {
        this['ip_addresses'] = ipAddresses;
        return this;
    }
    public set ipAddresses(ipAddresses: Array<string>  | undefined) {
        this['ip_addresses'] = ipAddresses;
    }
    public get ipAddresses(): Array<string> | undefined {
        return this['ip_addresses'];
    }
    public withAvailabilityZone(availabilityZone: string): ListServersRspServers {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withProcess(process: number): ListServersRspServers {
        this['process'] = process;
        return this;
    }
}