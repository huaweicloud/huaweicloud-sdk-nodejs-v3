import { NodeConstraints } from './NodeConstraints';


export class VersionConstraint {
    public other?: { [key: string]: object; };
    private 'node_constraint'?: NodeConstraints;
    private 'safe_mode_kerberos_exclude_components'?: Array<string>;
    public constructor() { 
    }
    public withOther(other: { [key: string]: object; }): VersionConstraint {
        this['other'] = other;
        return this;
    }
    public withNodeConstraint(nodeConstraint: NodeConstraints): VersionConstraint {
        this['node_constraint'] = nodeConstraint;
        return this;
    }
    public set nodeConstraint(nodeConstraint: NodeConstraints  | undefined) {
        this['node_constraint'] = nodeConstraint;
    }
    public get nodeConstraint(): NodeConstraints | undefined {
        return this['node_constraint'];
    }
    public withSafeModeKerberosExcludeComponents(safeModeKerberosExcludeComponents: Array<string>): VersionConstraint {
        this['safe_mode_kerberos_exclude_components'] = safeModeKerberosExcludeComponents;
        return this;
    }
    public set safeModeKerberosExcludeComponents(safeModeKerberosExcludeComponents: Array<string>  | undefined) {
        this['safe_mode_kerberos_exclude_components'] = safeModeKerberosExcludeComponents;
    }
    public get safeModeKerberosExcludeComponents(): Array<string> | undefined {
        return this['safe_mode_kerberos_exclude_components'];
    }
}