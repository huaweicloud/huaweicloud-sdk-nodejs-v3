

export class AttachSubNetworkInterfaceOption {
    private 'parent_id'?: string;
    private 'security_groups'?: Array<string>;
    private 'security_enabled'?: boolean;
    public constructor(parentId?: string) { 
        this['parent_id'] = parentId;
    }
    public withParentId(parentId: string): AttachSubNetworkInterfaceOption {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: string  | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId(): string | undefined {
        return this['parent_id'];
    }
    public withSecurityGroups(securityGroups: Array<string>): AttachSubNetworkInterfaceOption {
        this['security_groups'] = securityGroups;
        return this;
    }
    public set securityGroups(securityGroups: Array<string>  | undefined) {
        this['security_groups'] = securityGroups;
    }
    public get securityGroups(): Array<string> | undefined {
        return this['security_groups'];
    }
    public withSecurityEnabled(securityEnabled: boolean): AttachSubNetworkInterfaceOption {
        this['security_enabled'] = securityEnabled;
        return this;
    }
    public set securityEnabled(securityEnabled: boolean  | undefined) {
        this['security_enabled'] = securityEnabled;
    }
    public get securityEnabled(): boolean | undefined {
        return this['security_enabled'];
    }
}