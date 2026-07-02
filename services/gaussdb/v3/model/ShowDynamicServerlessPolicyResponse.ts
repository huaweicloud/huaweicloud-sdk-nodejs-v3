
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDynamicServerlessPolicyResponse extends SdkResponse {
    private 'current_vcpus'?: string;
    private 'min_vcpus'?: string;
    private 'max_vcpus'?: string;
    private 'available_vcpus'?: Array<string>;
    public constructor() { 
        super();
    }
    public withCurrentVcpus(currentVcpus: string): ShowDynamicServerlessPolicyResponse {
        this['current_vcpus'] = currentVcpus;
        return this;
    }
    public set currentVcpus(currentVcpus: string  | undefined) {
        this['current_vcpus'] = currentVcpus;
    }
    public get currentVcpus(): string | undefined {
        return this['current_vcpus'];
    }
    public withMinVcpus(minVcpus: string): ShowDynamicServerlessPolicyResponse {
        this['min_vcpus'] = minVcpus;
        return this;
    }
    public set minVcpus(minVcpus: string  | undefined) {
        this['min_vcpus'] = minVcpus;
    }
    public get minVcpus(): string | undefined {
        return this['min_vcpus'];
    }
    public withMaxVcpus(maxVcpus: string): ShowDynamicServerlessPolicyResponse {
        this['max_vcpus'] = maxVcpus;
        return this;
    }
    public set maxVcpus(maxVcpus: string  | undefined) {
        this['max_vcpus'] = maxVcpus;
    }
    public get maxVcpus(): string | undefined {
        return this['max_vcpus'];
    }
    public withAvailableVcpus(availableVcpus: Array<string>): ShowDynamicServerlessPolicyResponse {
        this['available_vcpus'] = availableVcpus;
        return this;
    }
    public set availableVcpus(availableVcpus: Array<string>  | undefined) {
        this['available_vcpus'] = availableVcpus;
    }
    public get availableVcpus(): Array<string> | undefined {
        return this['available_vcpus'];
    }
}