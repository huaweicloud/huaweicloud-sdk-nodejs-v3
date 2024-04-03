import { Flavor } from './Flavor';


export class FirewallInstanceVO {
    private 'fw_instance_id'?: string;
    private 'resource_id'?: string;
    public name?: string;
    private 'fw_instance_name'?: string;
    private 'enterprise_project_id'?: string;
    private 'ha_type'?: number;
    private 'charge_mode'?: number;
    private 'service_type'?: number;
    private 'engine_type'?: number;
    public flavor?: Flavor;
    public status?: number;
    public tags?: string;
    public constructor() { 
    }
    public withFwInstanceId(fwInstanceId: string): FirewallInstanceVO {
        this['fw_instance_id'] = fwInstanceId;
        return this;
    }
    public set fwInstanceId(fwInstanceId: string  | undefined) {
        this['fw_instance_id'] = fwInstanceId;
    }
    public get fwInstanceId(): string | undefined {
        return this['fw_instance_id'];
    }
    public withResourceId(resourceId: string): FirewallInstanceVO {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withName(name: string): FirewallInstanceVO {
        this['name'] = name;
        return this;
    }
    public withFwInstanceName(fwInstanceName: string): FirewallInstanceVO {
        this['fw_instance_name'] = fwInstanceName;
        return this;
    }
    public set fwInstanceName(fwInstanceName: string  | undefined) {
        this['fw_instance_name'] = fwInstanceName;
    }
    public get fwInstanceName(): string | undefined {
        return this['fw_instance_name'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): FirewallInstanceVO {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withHaType(haType: number): FirewallInstanceVO {
        this['ha_type'] = haType;
        return this;
    }
    public set haType(haType: number  | undefined) {
        this['ha_type'] = haType;
    }
    public get haType(): number | undefined {
        return this['ha_type'];
    }
    public withChargeMode(chargeMode: number): FirewallInstanceVO {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: number  | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode(): number | undefined {
        return this['charge_mode'];
    }
    public withServiceType(serviceType: number): FirewallInstanceVO {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: number  | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType(): number | undefined {
        return this['service_type'];
    }
    public withEngineType(engineType: number): FirewallInstanceVO {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: number  | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType(): number | undefined {
        return this['engine_type'];
    }
    public withFlavor(flavor: Flavor): FirewallInstanceVO {
        this['flavor'] = flavor;
        return this;
    }
    public withStatus(status: number): FirewallInstanceVO {
        this['status'] = status;
        return this;
    }
    public withTags(tags: string): FirewallInstanceVO {
        this['tags'] = tags;
        return this;
    }
}