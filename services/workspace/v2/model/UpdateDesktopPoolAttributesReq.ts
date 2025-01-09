import { AutoscalePolicy } from './AutoscalePolicy';
import { Tag } from './Tag';


export class UpdateDesktopPoolAttributesReq {
    public name?: string;
    public description?: string;
    private 'ou_name'?: string;
    public tags?: Array<Tag>;
    private 'disconnected_retention_period'?: number;
    private 'enable_autoscale'?: boolean;
    private 'autoscale_policy'?: AutoscalePolicy;
    private 'in_maintenance_mode'?: boolean;
    private 'desktop_name_policy_id'?: string;
    private 'availability_zone'?: string;
    public constructor() { 
    }
    public withName(name: string): UpdateDesktopPoolAttributesReq {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateDesktopPoolAttributesReq {
        this['description'] = description;
        return this;
    }
    public withOuName(ouName: string): UpdateDesktopPoolAttributesReq {
        this['ou_name'] = ouName;
        return this;
    }
    public set ouName(ouName: string  | undefined) {
        this['ou_name'] = ouName;
    }
    public get ouName(): string | undefined {
        return this['ou_name'];
    }
    public withTags(tags: Array<Tag>): UpdateDesktopPoolAttributesReq {
        this['tags'] = tags;
        return this;
    }
    public withDisconnectedRetentionPeriod(disconnectedRetentionPeriod: number): UpdateDesktopPoolAttributesReq {
        this['disconnected_retention_period'] = disconnectedRetentionPeriod;
        return this;
    }
    public set disconnectedRetentionPeriod(disconnectedRetentionPeriod: number  | undefined) {
        this['disconnected_retention_period'] = disconnectedRetentionPeriod;
    }
    public get disconnectedRetentionPeriod(): number | undefined {
        return this['disconnected_retention_period'];
    }
    public withEnableAutoscale(enableAutoscale: boolean): UpdateDesktopPoolAttributesReq {
        this['enable_autoscale'] = enableAutoscale;
        return this;
    }
    public set enableAutoscale(enableAutoscale: boolean  | undefined) {
        this['enable_autoscale'] = enableAutoscale;
    }
    public get enableAutoscale(): boolean | undefined {
        return this['enable_autoscale'];
    }
    public withAutoscalePolicy(autoscalePolicy: AutoscalePolicy): UpdateDesktopPoolAttributesReq {
        this['autoscale_policy'] = autoscalePolicy;
        return this;
    }
    public set autoscalePolicy(autoscalePolicy: AutoscalePolicy  | undefined) {
        this['autoscale_policy'] = autoscalePolicy;
    }
    public get autoscalePolicy(): AutoscalePolicy | undefined {
        return this['autoscale_policy'];
    }
    public withInMaintenanceMode(inMaintenanceMode: boolean): UpdateDesktopPoolAttributesReq {
        this['in_maintenance_mode'] = inMaintenanceMode;
        return this;
    }
    public set inMaintenanceMode(inMaintenanceMode: boolean  | undefined) {
        this['in_maintenance_mode'] = inMaintenanceMode;
    }
    public get inMaintenanceMode(): boolean | undefined {
        return this['in_maintenance_mode'];
    }
    public withDesktopNamePolicyId(desktopNamePolicyId: string): UpdateDesktopPoolAttributesReq {
        this['desktop_name_policy_id'] = desktopNamePolicyId;
        return this;
    }
    public set desktopNamePolicyId(desktopNamePolicyId: string  | undefined) {
        this['desktop_name_policy_id'] = desktopNamePolicyId;
    }
    public get desktopNamePolicyId(): string | undefined {
        return this['desktop_name_policy_id'];
    }
    public withAvailabilityZone(availabilityZone: string): UpdateDesktopPoolAttributesReq {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
}