import { FlavorInfo } from './FlavorInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowLinkFlavorsResponse extends SdkResponse {
    private 'vm_flavor'?: FlavorInfo;
    private 'volume_flavor'?: FlavorInfo;
    private 'flow_flavor'?: FlavorInfo;
    public constructor() { 
        super();
    }
    public withVmFlavor(vmFlavor: FlavorInfo): ShowLinkFlavorsResponse {
        this['vm_flavor'] = vmFlavor;
        return this;
    }
    public set vmFlavor(vmFlavor: FlavorInfo  | undefined) {
        this['vm_flavor'] = vmFlavor;
    }
    public get vmFlavor(): FlavorInfo | undefined {
        return this['vm_flavor'];
    }
    public withVolumeFlavor(volumeFlavor: FlavorInfo): ShowLinkFlavorsResponse {
        this['volume_flavor'] = volumeFlavor;
        return this;
    }
    public set volumeFlavor(volumeFlavor: FlavorInfo  | undefined) {
        this['volume_flavor'] = volumeFlavor;
    }
    public get volumeFlavor(): FlavorInfo | undefined {
        return this['volume_flavor'];
    }
    public withFlowFlavor(flowFlavor: FlavorInfo): ShowLinkFlavorsResponse {
        this['flow_flavor'] = flowFlavor;
        return this;
    }
    public set flowFlavor(flowFlavor: FlavorInfo  | undefined) {
        this['flow_flavor'] = flowFlavor;
    }
    public get flowFlavor(): FlavorInfo | undefined {
        return this['flow_flavor'];
    }
}