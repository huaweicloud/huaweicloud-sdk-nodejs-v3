
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAutoNodeExpansionPolicyResponse extends SdkResponse {
    private 'switch_option'?: boolean;
    private 'overload_node_threshold'?: number;
    private 'cpu_threshold'?: number;
    private 'mem_threshold'?: number;
    public step?: number;
    private 'node_limit'?: number;
    public constructor() { 
        super();
    }
    public withSwitchOption(switchOption: boolean): ShowAutoNodeExpansionPolicyResponse {
        this['switch_option'] = switchOption;
        return this;
    }
    public set switchOption(switchOption: boolean  | undefined) {
        this['switch_option'] = switchOption;
    }
    public get switchOption(): boolean | undefined {
        return this['switch_option'];
    }
    public withOverloadNodeThreshold(overloadNodeThreshold: number): ShowAutoNodeExpansionPolicyResponse {
        this['overload_node_threshold'] = overloadNodeThreshold;
        return this;
    }
    public set overloadNodeThreshold(overloadNodeThreshold: number  | undefined) {
        this['overload_node_threshold'] = overloadNodeThreshold;
    }
    public get overloadNodeThreshold(): number | undefined {
        return this['overload_node_threshold'];
    }
    public withCpuThreshold(cpuThreshold: number): ShowAutoNodeExpansionPolicyResponse {
        this['cpu_threshold'] = cpuThreshold;
        return this;
    }
    public set cpuThreshold(cpuThreshold: number  | undefined) {
        this['cpu_threshold'] = cpuThreshold;
    }
    public get cpuThreshold(): number | undefined {
        return this['cpu_threshold'];
    }
    public withMemThreshold(memThreshold: number): ShowAutoNodeExpansionPolicyResponse {
        this['mem_threshold'] = memThreshold;
        return this;
    }
    public set memThreshold(memThreshold: number  | undefined) {
        this['mem_threshold'] = memThreshold;
    }
    public get memThreshold(): number | undefined {
        return this['mem_threshold'];
    }
    public withStep(step: number): ShowAutoNodeExpansionPolicyResponse {
        this['step'] = step;
        return this;
    }
    public withNodeLimit(nodeLimit: number): ShowAutoNodeExpansionPolicyResponse {
        this['node_limit'] = nodeLimit;
        return this;
    }
    public set nodeLimit(nodeLimit: number  | undefined) {
        this['node_limit'] = nodeLimit;
    }
    public get nodeLimit(): number | undefined {
        return this['node_limit'];
    }
}