import { HwcEcsAddress } from './HwcEcsAddress';
import { HwcEcsFlavor } from './HwcEcsFlavor';
import { HwcEcsHypervisor } from './HwcEcsHypervisor';
import { HwcEcsMetadata } from './HwcEcsMetadata';
import { HwcEcsSchedulerHint } from './HwcEcsSchedulerHint';
import { HwcEcsSecurityGroup } from './HwcEcsSecurityGroup';
import { HwcEcsVolume } from './HwcEcsVolume';


export class HwcEcs {
    public id?: string;
    public name?: string;
    private 'protected_status'?: string;
    public description?: string;
    public status?: string;
    public locked?: boolean;
    private 'enterprise_project_id'?: string;
    private 'user_id'?: string;
    private 'project_id'?: string;
    private 'host_id'?: string;
    private 'host_name'?: string;
    private 'host_status'?: string;
    public addresses?: Array<HwcEcsAddress>;
    private 'security_groups'?: Array<HwcEcsSecurityGroup>;
    private 'availability_zone'?: string;
    public flavor?: HwcEcsFlavor;
    private 'volumes_attached'?: Array<HwcEcsVolume>;
    public metadata?: HwcEcsMetadata;
    public updated?: string;
    public created?: string;
    private 'key_name'?: string;
    private 'scheduler_hints'?: HwcEcsSchedulerHint;
    public hypervisor?: HwcEcsHypervisor;
    public constructor(id?: string, name?: string, protectedStatus?: string, description?: string, status?: string, locked?: boolean, userId?: string, projectId?: string, hostId?: string, hostName?: string, hostStatus?: string, addresses?: Array<HwcEcsAddress>, securityGroups?: Array<HwcEcsSecurityGroup>, availabilityZone?: string, volumesAttached?: Array<HwcEcsVolume>, metadata?: HwcEcsMetadata, updated?: string, created?: string) { 
        this['id'] = id;
        this['name'] = name;
        this['protected_status'] = protectedStatus;
        this['description'] = description;
        this['status'] = status;
        this['locked'] = locked;
        this['user_id'] = userId;
        this['project_id'] = projectId;
        this['host_id'] = hostId;
        this['host_name'] = hostName;
        this['host_status'] = hostStatus;
        this['addresses'] = addresses;
        this['security_groups'] = securityGroups;
        this['availability_zone'] = availabilityZone;
        this['volumes_attached'] = volumesAttached;
        this['metadata'] = metadata;
        this['updated'] = updated;
        this['created'] = created;
    }
    public withId(id: string): HwcEcs {
        this['id'] = id;
        return this;
    }
    public withName(name: string): HwcEcs {
        this['name'] = name;
        return this;
    }
    public withProtectedStatus(protectedStatus: string): HwcEcs {
        this['protected_status'] = protectedStatus;
        return this;
    }
    public set protectedStatus(protectedStatus: string  | undefined) {
        this['protected_status'] = protectedStatus;
    }
    public get protectedStatus(): string | undefined {
        return this['protected_status'];
    }
    public withDescription(description: string): HwcEcs {
        this['description'] = description;
        return this;
    }
    public withStatus(status: string): HwcEcs {
        this['status'] = status;
        return this;
    }
    public withLocked(locked: boolean): HwcEcs {
        this['locked'] = locked;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): HwcEcs {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withUserId(userId: string): HwcEcs {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withProjectId(projectId: string): HwcEcs {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withHostId(hostId: string): HwcEcs {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withHostName(hostName: string): HwcEcs {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withHostStatus(hostStatus: string): HwcEcs {
        this['host_status'] = hostStatus;
        return this;
    }
    public set hostStatus(hostStatus: string  | undefined) {
        this['host_status'] = hostStatus;
    }
    public get hostStatus(): string | undefined {
        return this['host_status'];
    }
    public withAddresses(addresses: Array<HwcEcsAddress>): HwcEcs {
        this['addresses'] = addresses;
        return this;
    }
    public withSecurityGroups(securityGroups: Array<HwcEcsSecurityGroup>): HwcEcs {
        this['security_groups'] = securityGroups;
        return this;
    }
    public set securityGroups(securityGroups: Array<HwcEcsSecurityGroup>  | undefined) {
        this['security_groups'] = securityGroups;
    }
    public get securityGroups(): Array<HwcEcsSecurityGroup> | undefined {
        return this['security_groups'];
    }
    public withAvailabilityZone(availabilityZone: string): HwcEcs {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withFlavor(flavor: HwcEcsFlavor): HwcEcs {
        this['flavor'] = flavor;
        return this;
    }
    public withVolumesAttached(volumesAttached: Array<HwcEcsVolume>): HwcEcs {
        this['volumes_attached'] = volumesAttached;
        return this;
    }
    public set volumesAttached(volumesAttached: Array<HwcEcsVolume>  | undefined) {
        this['volumes_attached'] = volumesAttached;
    }
    public get volumesAttached(): Array<HwcEcsVolume> | undefined {
        return this['volumes_attached'];
    }
    public withMetadata(metadata: HwcEcsMetadata): HwcEcs {
        this['metadata'] = metadata;
        return this;
    }
    public withUpdated(updated: string): HwcEcs {
        this['updated'] = updated;
        return this;
    }
    public withCreated(created: string): HwcEcs {
        this['created'] = created;
        return this;
    }
    public withKeyName(keyName: string): HwcEcs {
        this['key_name'] = keyName;
        return this;
    }
    public set keyName(keyName: string  | undefined) {
        this['key_name'] = keyName;
    }
    public get keyName(): string | undefined {
        return this['key_name'];
    }
    public withSchedulerHints(schedulerHints: HwcEcsSchedulerHint): HwcEcs {
        this['scheduler_hints'] = schedulerHints;
        return this;
    }
    public set schedulerHints(schedulerHints: HwcEcsSchedulerHint  | undefined) {
        this['scheduler_hints'] = schedulerHints;
    }
    public get schedulerHints(): HwcEcsSchedulerHint | undefined {
        return this['scheduler_hints'];
    }
    public withHypervisor(hypervisor: HwcEcsHypervisor): HwcEcs {
        this['hypervisor'] = hypervisor;
        return this;
    }
}