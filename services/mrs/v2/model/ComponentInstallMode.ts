import { AssignedNodeGroup } from './AssignedNodeGroup';


export class ComponentInstallMode {
    public component?: string;
    private 'node_groups'?: Array<AssignedNodeGroup>;
    private 'component_user_password'?: string;
    private 'component_default_password'?: string;
    public constructor(component?: string, nodeGroups?: Array<AssignedNodeGroup>) { 
        this['component'] = component;
        this['node_groups'] = nodeGroups;
    }
    public withComponent(component: string): ComponentInstallMode {
        this['component'] = component;
        return this;
    }
    public withNodeGroups(nodeGroups: Array<AssignedNodeGroup>): ComponentInstallMode {
        this['node_groups'] = nodeGroups;
        return this;
    }
    public set nodeGroups(nodeGroups: Array<AssignedNodeGroup>  | undefined) {
        this['node_groups'] = nodeGroups;
    }
    public get nodeGroups(): Array<AssignedNodeGroup> | undefined {
        return this['node_groups'];
    }
    public withComponentUserPassword(componentUserPassword: string): ComponentInstallMode {
        this['component_user_password'] = componentUserPassword;
        return this;
    }
    public set componentUserPassword(componentUserPassword: string  | undefined) {
        this['component_user_password'] = componentUserPassword;
    }
    public get componentUserPassword(): string | undefined {
        return this['component_user_password'];
    }
    public withComponentDefaultPassword(componentDefaultPassword: string): ComponentInstallMode {
        this['component_default_password'] = componentDefaultPassword;
        return this;
    }
    public set componentDefaultPassword(componentDefaultPassword: string  | undefined) {
        this['component_default_password'] = componentDefaultPassword;
    }
    public get componentDefaultPassword(): string | undefined {
        return this['component_default_password'];
    }
}