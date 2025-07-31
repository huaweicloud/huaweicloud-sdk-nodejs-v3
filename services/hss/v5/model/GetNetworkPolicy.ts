import { NetworkPolicyBody } from './NetworkPolicyBody';


export class GetNetworkPolicy {
    private 'policy_id'?: string;
    public name?: string;
    public namespace?: string;
    private 'policy_content'?: NetworkPolicyBody;
    private 'create_time'?: Date;
    private 'deploy_status'?: boolean;
    public constructor() { 
    }
    public withPolicyId(policyId: string): GetNetworkPolicy {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withName(name: string): GetNetworkPolicy {
        this['name'] = name;
        return this;
    }
    public withNamespace(namespace: string): GetNetworkPolicy {
        this['namespace'] = namespace;
        return this;
    }
    public withPolicyContent(policyContent: NetworkPolicyBody): GetNetworkPolicy {
        this['policy_content'] = policyContent;
        return this;
    }
    public set policyContent(policyContent: NetworkPolicyBody  | undefined) {
        this['policy_content'] = policyContent;
    }
    public get policyContent(): NetworkPolicyBody | undefined {
        return this['policy_content'];
    }
    public withCreateTime(createTime: Date): GetNetworkPolicy {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withDeployStatus(deployStatus: boolean): GetNetworkPolicy {
        this['deploy_status'] = deployStatus;
        return this;
    }
    public set deployStatus(deployStatus: boolean  | undefined) {
        this['deploy_status'] = deployStatus;
    }
    public get deployStatus(): boolean | undefined {
        return this['deploy_status'];
    }
}