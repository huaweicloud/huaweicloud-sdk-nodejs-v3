import { UpdateRequestPolicyTemplate } from './UpdateRequestPolicyTemplate';


export class UpdateVgwRequestBodyContent {
    public name?: string;
    private 'local_subnets'?: Array<string>;
    private 'local_subnets_v6'?: Array<string>;
    private 'eip_id_1'?: string;
    private 'eip_id_2'?: string;
    private 'policy_template'?: UpdateRequestPolicyTemplate;
    public constructor() { 
    }
    public withName(name: string): UpdateVgwRequestBodyContent {
        this['name'] = name;
        return this;
    }
    public withLocalSubnets(localSubnets: Array<string>): UpdateVgwRequestBodyContent {
        this['local_subnets'] = localSubnets;
        return this;
    }
    public set localSubnets(localSubnets: Array<string>  | undefined) {
        this['local_subnets'] = localSubnets;
    }
    public get localSubnets(): Array<string> | undefined {
        return this['local_subnets'];
    }
    public withLocalSubnetsV6(localSubnetsV6: Array<string>): UpdateVgwRequestBodyContent {
        this['local_subnets_v6'] = localSubnetsV6;
        return this;
    }
    public set localSubnetsV6(localSubnetsV6: Array<string>  | undefined) {
        this['local_subnets_v6'] = localSubnetsV6;
    }
    public get localSubnetsV6(): Array<string> | undefined {
        return this['local_subnets_v6'];
    }
    public withEipId1(eipId1: string): UpdateVgwRequestBodyContent {
        this['eip_id_1'] = eipId1;
        return this;
    }
    public set eipId1(eipId1: string  | undefined) {
        this['eip_id_1'] = eipId1;
    }
    public get eipId1(): string | undefined {
        return this['eip_id_1'];
    }
    public withEipId2(eipId2: string): UpdateVgwRequestBodyContent {
        this['eip_id_2'] = eipId2;
        return this;
    }
    public set eipId2(eipId2: string  | undefined) {
        this['eip_id_2'] = eipId2;
    }
    public get eipId2(): string | undefined {
        return this['eip_id_2'];
    }
    public withPolicyTemplate(policyTemplate: UpdateRequestPolicyTemplate): UpdateVgwRequestBodyContent {
        this['policy_template'] = policyTemplate;
        return this;
    }
    public set policyTemplate(policyTemplate: UpdateRequestPolicyTemplate  | undefined) {
        this['policy_template'] = policyTemplate;
    }
    public get policyTemplate(): UpdateRequestPolicyTemplate | undefined {
        return this['policy_template'];
    }
}