

export class ResourceExtendParams {
    public dockerBaseSize?: string;
    public postInstall?: string;
    public runtime?: string;
    public labelPolicyOnExistingNodes?: string;
    public taintPolicyOnExistingNodes?: string;
    public tagPolicyOnExistingNodes?: string;
    private 'XParameterPlaneSubnet'?: string;
    public nodePoolName?: string;
    public constructor() { 
    }
    public withDockerBaseSize(dockerBaseSize: string): ResourceExtendParams {
        this['dockerBaseSize'] = dockerBaseSize;
        return this;
    }
    public withPostInstall(postInstall: string): ResourceExtendParams {
        this['postInstall'] = postInstall;
        return this;
    }
    public withRuntime(runtime: string): ResourceExtendParams {
        this['runtime'] = runtime;
        return this;
    }
    public withLabelPolicyOnExistingNodes(labelPolicyOnExistingNodes: string): ResourceExtendParams {
        this['labelPolicyOnExistingNodes'] = labelPolicyOnExistingNodes;
        return this;
    }
    public withTaintPolicyOnExistingNodes(taintPolicyOnExistingNodes: string): ResourceExtendParams {
        this['taintPolicyOnExistingNodes'] = taintPolicyOnExistingNodes;
        return this;
    }
    public withTagPolicyOnExistingNodes(tagPolicyOnExistingNodes: string): ResourceExtendParams {
        this['tagPolicyOnExistingNodes'] = tagPolicyOnExistingNodes;
        return this;
    }
    public withXParameterPlaneSubnet(xParameterPlaneSubnet: string): ResourceExtendParams {
        this['XParameterPlaneSubnet'] = xParameterPlaneSubnet;
        return this;
    }
    public set xParameterPlaneSubnet(xParameterPlaneSubnet: string  | undefined) {
        this['XParameterPlaneSubnet'] = xParameterPlaneSubnet;
    }
    public get xParameterPlaneSubnet(): string | undefined {
        return this['XParameterPlaneSubnet'];
    }
    public withNodePoolName(nodePoolName: string): ResourceExtendParams {
        this['nodePoolName'] = nodePoolName;
        return this;
    }
}