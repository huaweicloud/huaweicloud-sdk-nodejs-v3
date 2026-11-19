
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowColdTableSwitchResponse extends SdkResponse {
    private 'switch_status'?: string;
    private 'kernel_version'?: string;
    public constructor() { 
        super();
    }
    public withSwitchStatus(switchStatus: string): ShowColdTableSwitchResponse {
        this['switch_status'] = switchStatus;
        return this;
    }
    public set switchStatus(switchStatus: string  | undefined) {
        this['switch_status'] = switchStatus;
    }
    public get switchStatus(): string | undefined {
        return this['switch_status'];
    }
    public withKernelVersion(kernelVersion: string): ShowColdTableSwitchResponse {
        this['kernel_version'] = kernelVersion;
        return this;
    }
    public set kernelVersion(kernelVersion: string  | undefined) {
        this['kernel_version'] = kernelVersion;
    }
    public get kernelVersion(): string | undefined {
        return this['kernel_version'];
    }
}