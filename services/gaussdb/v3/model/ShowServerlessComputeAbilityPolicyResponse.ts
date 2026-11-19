
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowServerlessComputeAbilityPolicyResponse extends SdkResponse {
    private 'current_vcpus'?: string;
    private 'min_vcpus'?: string;
    private 'max_vcpus'?: string;
    private 'scale_out_switch'?: boolean;
    private 'max_readonly_node_count'?: number;
    private 'min_readonly_node_count'?: number;
    private 'scale_to_zero'?: boolean;
    private 'idle_duration_seconds'?: number;
    private 'scale_to_zero_status'?: string;
    public constructor() { 
        super();
    }
    public withCurrentVcpus(currentVcpus: string): ShowServerlessComputeAbilityPolicyResponse {
        this['current_vcpus'] = currentVcpus;
        return this;
    }
    public set currentVcpus(currentVcpus: string  | undefined) {
        this['current_vcpus'] = currentVcpus;
    }
    public get currentVcpus(): string | undefined {
        return this['current_vcpus'];
    }
    public withMinVcpus(minVcpus: string): ShowServerlessComputeAbilityPolicyResponse {
        this['min_vcpus'] = minVcpus;
        return this;
    }
    public set minVcpus(minVcpus: string  | undefined) {
        this['min_vcpus'] = minVcpus;
    }
    public get minVcpus(): string | undefined {
        return this['min_vcpus'];
    }
    public withMaxVcpus(maxVcpus: string): ShowServerlessComputeAbilityPolicyResponse {
        this['max_vcpus'] = maxVcpus;
        return this;
    }
    public set maxVcpus(maxVcpus: string  | undefined) {
        this['max_vcpus'] = maxVcpus;
    }
    public get maxVcpus(): string | undefined {
        return this['max_vcpus'];
    }
    public withScaleOutSwitch(scaleOutSwitch: boolean): ShowServerlessComputeAbilityPolicyResponse {
        this['scale_out_switch'] = scaleOutSwitch;
        return this;
    }
    public set scaleOutSwitch(scaleOutSwitch: boolean  | undefined) {
        this['scale_out_switch'] = scaleOutSwitch;
    }
    public get scaleOutSwitch(): boolean | undefined {
        return this['scale_out_switch'];
    }
    public withMaxReadonlyNodeCount(maxReadonlyNodeCount: number): ShowServerlessComputeAbilityPolicyResponse {
        this['max_readonly_node_count'] = maxReadonlyNodeCount;
        return this;
    }
    public set maxReadonlyNodeCount(maxReadonlyNodeCount: number  | undefined) {
        this['max_readonly_node_count'] = maxReadonlyNodeCount;
    }
    public get maxReadonlyNodeCount(): number | undefined {
        return this['max_readonly_node_count'];
    }
    public withMinReadonlyNodeCount(minReadonlyNodeCount: number): ShowServerlessComputeAbilityPolicyResponse {
        this['min_readonly_node_count'] = minReadonlyNodeCount;
        return this;
    }
    public set minReadonlyNodeCount(minReadonlyNodeCount: number  | undefined) {
        this['min_readonly_node_count'] = minReadonlyNodeCount;
    }
    public get minReadonlyNodeCount(): number | undefined {
        return this['min_readonly_node_count'];
    }
    public withScaleToZero(scaleToZero: boolean): ShowServerlessComputeAbilityPolicyResponse {
        this['scale_to_zero'] = scaleToZero;
        return this;
    }
    public set scaleToZero(scaleToZero: boolean  | undefined) {
        this['scale_to_zero'] = scaleToZero;
    }
    public get scaleToZero(): boolean | undefined {
        return this['scale_to_zero'];
    }
    public withIdleDurationSeconds(idleDurationSeconds: number): ShowServerlessComputeAbilityPolicyResponse {
        this['idle_duration_seconds'] = idleDurationSeconds;
        return this;
    }
    public set idleDurationSeconds(idleDurationSeconds: number  | undefined) {
        this['idle_duration_seconds'] = idleDurationSeconds;
    }
    public get idleDurationSeconds(): number | undefined {
        return this['idle_duration_seconds'];
    }
    public withScaleToZeroStatus(scaleToZeroStatus: string): ShowServerlessComputeAbilityPolicyResponse {
        this['scale_to_zero_status'] = scaleToZeroStatus;
        return this;
    }
    public set scaleToZeroStatus(scaleToZeroStatus: string  | undefined) {
        this['scale_to_zero_status'] = scaleToZeroStatus;
    }
    public get scaleToZeroStatus(): string | undefined {
        return this['scale_to_zero_status'];
    }
}