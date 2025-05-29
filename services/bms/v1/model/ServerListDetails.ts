import { Fault } from './Fault';
import { FlavorDetailInfos } from './FlavorDetailInfos';


export class ServerListDetails {
    public id?: string;
    private 'user_id'?: string;
    public name?: string;
    public created?: string;
    public updated?: string;
    private 'tenant_id'?: string;
    public flavor?: FlavorDetailInfos;
    public status?: ServerListDetailsStatusEnum | string;
    private 'task_state'?: ServerListDetailsTaskStateEnum | string;
    private 'vm_state'?: ServerListDetailsVmStateEnum | string;
    private 'availability_zone'?: string;
    public fault?: Fault;
    private 'in_recycle_bin'?: boolean;
    public constructor(id?: string, name?: string, tenantId?: string, status?: string) { 
        this['id'] = id;
        this['name'] = name;
        this['tenant_id'] = tenantId;
        this['status'] = status;
    }
    public withId(id: string): ServerListDetails {
        this['id'] = id;
        return this;
    }
    public withUserId(userId: string): ServerListDetails {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withName(name: string): ServerListDetails {
        this['name'] = name;
        return this;
    }
    public withCreated(created: string): ServerListDetails {
        this['created'] = created;
        return this;
    }
    public withUpdated(updated: string): ServerListDetails {
        this['updated'] = updated;
        return this;
    }
    public withTenantId(tenantId: string): ServerListDetails {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withFlavor(flavor: FlavorDetailInfos): ServerListDetails {
        this['flavor'] = flavor;
        return this;
    }
    public withStatus(status: ServerListDetailsStatusEnum | string): ServerListDetails {
        this['status'] = status;
        return this;
    }
    public withTaskState(taskState: ServerListDetailsTaskStateEnum | string): ServerListDetails {
        this['task_state'] = taskState;
        return this;
    }
    public set taskState(taskState: ServerListDetailsTaskStateEnum | string  | undefined) {
        this['task_state'] = taskState;
    }
    public get taskState(): ServerListDetailsTaskStateEnum | string | undefined {
        return this['task_state'];
    }
    public withVmState(vmState: ServerListDetailsVmStateEnum | string): ServerListDetails {
        this['vm_state'] = vmState;
        return this;
    }
    public set vmState(vmState: ServerListDetailsVmStateEnum | string  | undefined) {
        this['vm_state'] = vmState;
    }
    public get vmState(): ServerListDetailsVmStateEnum | string | undefined {
        return this['vm_state'];
    }
    public withAvailabilityZone(availabilityZone: string): ServerListDetails {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withFault(fault: Fault): ServerListDetails {
        this['fault'] = fault;
        return this;
    }
    public withInRecycleBin(inRecycleBin: boolean): ServerListDetails {
        this['in_recycle_bin'] = inRecycleBin;
        return this;
    }
    public set inRecycleBin(inRecycleBin: boolean  | undefined) {
        this['in_recycle_bin'] = inRecycleBin;
    }
    public get inRecycleBin(): boolean | undefined {
        return this['in_recycle_bin'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ServerListDetailsStatusEnum {
    ACTIVE = 'ACTIVE',
    BUILD = 'BUILD',
    ERROR = 'ERROR',
    HARD_REBOOT = 'HARD_REBOOT',
    REBOOT = 'REBOOT',
    DELETED = 'DELETED',
    SHUTOFF = 'SHUTOFF'
}
/**
    * @export
    * @enum {string}
    */
export enum ServerListDetailsTaskStateEnum {
    REBOOTING = 'rebooting',
    REBOOT_STARTED = 'reboot_started',
    REBOOT_STARTED_HARD = 'reboot_started_hard',
    POWERING_OFF = 'powering-off',
    POWERING_ON = 'powering-on',
    REBUILDING = 'rebuilding',
    SCHEDULING = 'scheduling',
    DELETING = 'deleting'
}
/**
    * @export
    * @enum {string}
    */
export enum ServerListDetailsVmStateEnum {
    ACTIVE = 'active',
    SHUTOFF = 'shutoff',
    REBOOT = 'reboot'
}
