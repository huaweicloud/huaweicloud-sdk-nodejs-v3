

export class RoleDeployMeta {
    public other?: { [key: string]: object; };
    public name?: string;
    private 'code_name'?: string;
    public component?: string;
    private 'node_preference'?: string;
    public count?: string;
    public affinity?: string;
    private 'affinity_target'?: string;
    private 'multi_instance'?: number;
    private 'role_kind'?: string;
    public constraints?: Array<string>;
    private 'multi_az_placement'?: string;
    private 'arbitration_deployment'?: boolean;
    private 'support_elb'?: boolean;
    private 'multi_affinity_group_enable'?: boolean;
    private 'local_disks_anti_affinity'?: boolean;
    private 'multi_instance_name_pattern'?: string;
    private 'private_ip'?: string;
    public weight?: string;
    public constructor() { 
    }
    public withOther(other: { [key: string]: object; }): RoleDeployMeta {
        this['other'] = other;
        return this;
    }
    public withName(name: string): RoleDeployMeta {
        this['name'] = name;
        return this;
    }
    public withCodeName(codeName: string): RoleDeployMeta {
        this['code_name'] = codeName;
        return this;
    }
    public set codeName(codeName: string  | undefined) {
        this['code_name'] = codeName;
    }
    public get codeName(): string | undefined {
        return this['code_name'];
    }
    public withComponent(component: string): RoleDeployMeta {
        this['component'] = component;
        return this;
    }
    public withNodePreference(nodePreference: string): RoleDeployMeta {
        this['node_preference'] = nodePreference;
        return this;
    }
    public set nodePreference(nodePreference: string  | undefined) {
        this['node_preference'] = nodePreference;
    }
    public get nodePreference(): string | undefined {
        return this['node_preference'];
    }
    public withCount(count: string): RoleDeployMeta {
        this['count'] = count;
        return this;
    }
    public withAffinity(affinity: string): RoleDeployMeta {
        this['affinity'] = affinity;
        return this;
    }
    public withAffinityTarget(affinityTarget: string): RoleDeployMeta {
        this['affinity_target'] = affinityTarget;
        return this;
    }
    public set affinityTarget(affinityTarget: string  | undefined) {
        this['affinity_target'] = affinityTarget;
    }
    public get affinityTarget(): string | undefined {
        return this['affinity_target'];
    }
    public withMultiInstance(multiInstance: number): RoleDeployMeta {
        this['multi_instance'] = multiInstance;
        return this;
    }
    public set multiInstance(multiInstance: number  | undefined) {
        this['multi_instance'] = multiInstance;
    }
    public get multiInstance(): number | undefined {
        return this['multi_instance'];
    }
    public withRoleKind(roleKind: string): RoleDeployMeta {
        this['role_kind'] = roleKind;
        return this;
    }
    public set roleKind(roleKind: string  | undefined) {
        this['role_kind'] = roleKind;
    }
    public get roleKind(): string | undefined {
        return this['role_kind'];
    }
    public withConstraints(constraints: Array<string>): RoleDeployMeta {
        this['constraints'] = constraints;
        return this;
    }
    public withMultiAzPlacement(multiAzPlacement: string): RoleDeployMeta {
        this['multi_az_placement'] = multiAzPlacement;
        return this;
    }
    public set multiAzPlacement(multiAzPlacement: string  | undefined) {
        this['multi_az_placement'] = multiAzPlacement;
    }
    public get multiAzPlacement(): string | undefined {
        return this['multi_az_placement'];
    }
    public withArbitrationDeployment(arbitrationDeployment: boolean): RoleDeployMeta {
        this['arbitration_deployment'] = arbitrationDeployment;
        return this;
    }
    public set arbitrationDeployment(arbitrationDeployment: boolean  | undefined) {
        this['arbitration_deployment'] = arbitrationDeployment;
    }
    public get arbitrationDeployment(): boolean | undefined {
        return this['arbitration_deployment'];
    }
    public withSupportElb(supportElb: boolean): RoleDeployMeta {
        this['support_elb'] = supportElb;
        return this;
    }
    public set supportElb(supportElb: boolean  | undefined) {
        this['support_elb'] = supportElb;
    }
    public get supportElb(): boolean | undefined {
        return this['support_elb'];
    }
    public withMultiAffinityGroupEnable(multiAffinityGroupEnable: boolean): RoleDeployMeta {
        this['multi_affinity_group_enable'] = multiAffinityGroupEnable;
        return this;
    }
    public set multiAffinityGroupEnable(multiAffinityGroupEnable: boolean  | undefined) {
        this['multi_affinity_group_enable'] = multiAffinityGroupEnable;
    }
    public get multiAffinityGroupEnable(): boolean | undefined {
        return this['multi_affinity_group_enable'];
    }
    public withLocalDisksAntiAffinity(localDisksAntiAffinity: boolean): RoleDeployMeta {
        this['local_disks_anti_affinity'] = localDisksAntiAffinity;
        return this;
    }
    public set localDisksAntiAffinity(localDisksAntiAffinity: boolean  | undefined) {
        this['local_disks_anti_affinity'] = localDisksAntiAffinity;
    }
    public get localDisksAntiAffinity(): boolean | undefined {
        return this['local_disks_anti_affinity'];
    }
    public withMultiInstanceNamePattern(multiInstanceNamePattern: string): RoleDeployMeta {
        this['multi_instance_name_pattern'] = multiInstanceNamePattern;
        return this;
    }
    public set multiInstanceNamePattern(multiInstanceNamePattern: string  | undefined) {
        this['multi_instance_name_pattern'] = multiInstanceNamePattern;
    }
    public get multiInstanceNamePattern(): string | undefined {
        return this['multi_instance_name_pattern'];
    }
    public withPrivateIp(privateIp: string): RoleDeployMeta {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
    public withWeight(weight: string): RoleDeployMeta {
        this['weight'] = weight;
        return this;
    }
}