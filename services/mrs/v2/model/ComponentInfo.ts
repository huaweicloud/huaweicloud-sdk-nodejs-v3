

export class ComponentInfo {
    public id?: string;
    public name?: string;
    private 'instance_group_name'?: string;
    private 'running_status'?: string;
    private 'ha_status'?: string;
    private 'config_status'?: string;
    private 'role_name'?: string;
    private 'role_short_name'?: string;
    private 'role_type'?: string;
    private 'service_name'?: string;
    private 'pair_name'?: string;
    private 'relation_pairs'?: string;
    private 'support_decom'?: string;
    private 'support_reinstall'?: string;
    private 'support_collect_stack_info'?: string;
    public constructor() { 
    }
    public withId(id: string): ComponentInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ComponentInfo {
        this['name'] = name;
        return this;
    }
    public withInstanceGroupName(instanceGroupName: string): ComponentInfo {
        this['instance_group_name'] = instanceGroupName;
        return this;
    }
    public set instanceGroupName(instanceGroupName: string  | undefined) {
        this['instance_group_name'] = instanceGroupName;
    }
    public get instanceGroupName(): string | undefined {
        return this['instance_group_name'];
    }
    public withRunningStatus(runningStatus: string): ComponentInfo {
        this['running_status'] = runningStatus;
        return this;
    }
    public set runningStatus(runningStatus: string  | undefined) {
        this['running_status'] = runningStatus;
    }
    public get runningStatus(): string | undefined {
        return this['running_status'];
    }
    public withHaStatus(haStatus: string): ComponentInfo {
        this['ha_status'] = haStatus;
        return this;
    }
    public set haStatus(haStatus: string  | undefined) {
        this['ha_status'] = haStatus;
    }
    public get haStatus(): string | undefined {
        return this['ha_status'];
    }
    public withConfigStatus(configStatus: string): ComponentInfo {
        this['config_status'] = configStatus;
        return this;
    }
    public set configStatus(configStatus: string  | undefined) {
        this['config_status'] = configStatus;
    }
    public get configStatus(): string | undefined {
        return this['config_status'];
    }
    public withRoleName(roleName: string): ComponentInfo {
        this['role_name'] = roleName;
        return this;
    }
    public set roleName(roleName: string  | undefined) {
        this['role_name'] = roleName;
    }
    public get roleName(): string | undefined {
        return this['role_name'];
    }
    public withRoleShortName(roleShortName: string): ComponentInfo {
        this['role_short_name'] = roleShortName;
        return this;
    }
    public set roleShortName(roleShortName: string  | undefined) {
        this['role_short_name'] = roleShortName;
    }
    public get roleShortName(): string | undefined {
        return this['role_short_name'];
    }
    public withRoleType(roleType: string): ComponentInfo {
        this['role_type'] = roleType;
        return this;
    }
    public set roleType(roleType: string  | undefined) {
        this['role_type'] = roleType;
    }
    public get roleType(): string | undefined {
        return this['role_type'];
    }
    public withServiceName(serviceName: string): ComponentInfo {
        this['service_name'] = serviceName;
        return this;
    }
    public set serviceName(serviceName: string  | undefined) {
        this['service_name'] = serviceName;
    }
    public get serviceName(): string | undefined {
        return this['service_name'];
    }
    public withPairName(pairName: string): ComponentInfo {
        this['pair_name'] = pairName;
        return this;
    }
    public set pairName(pairName: string  | undefined) {
        this['pair_name'] = pairName;
    }
    public get pairName(): string | undefined {
        return this['pair_name'];
    }
    public withRelationPairs(relationPairs: string): ComponentInfo {
        this['relation_pairs'] = relationPairs;
        return this;
    }
    public set relationPairs(relationPairs: string  | undefined) {
        this['relation_pairs'] = relationPairs;
    }
    public get relationPairs(): string | undefined {
        return this['relation_pairs'];
    }
    public withSupportDecom(supportDecom: string): ComponentInfo {
        this['support_decom'] = supportDecom;
        return this;
    }
    public set supportDecom(supportDecom: string  | undefined) {
        this['support_decom'] = supportDecom;
    }
    public get supportDecom(): string | undefined {
        return this['support_decom'];
    }
    public withSupportReinstall(supportReinstall: string): ComponentInfo {
        this['support_reinstall'] = supportReinstall;
        return this;
    }
    public set supportReinstall(supportReinstall: string  | undefined) {
        this['support_reinstall'] = supportReinstall;
    }
    public get supportReinstall(): string | undefined {
        return this['support_reinstall'];
    }
    public withSupportCollectStackInfo(supportCollectStackInfo: string): ComponentInfo {
        this['support_collect_stack_info'] = supportCollectStackInfo;
        return this;
    }
    public set supportCollectStackInfo(supportCollectStackInfo: string  | undefined) {
        this['support_collect_stack_info'] = supportCollectStackInfo;
    }
    public get supportCollectStackInfo(): string | undefined {
        return this['support_collect_stack_info'];
    }
}