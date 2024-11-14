import { DiskAutoExpansionPolicy } from './DiskAutoExpansionPolicy';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAutoEnlargePolicyResponse extends SdkResponse {
    private 'switch_option'?: string;
    public policy?: DiskAutoExpansionPolicy;
    public constructor() { 
        super();
    }
    public withSwitchOption(switchOption: string): ShowAutoEnlargePolicyResponse {
        this['switch_option'] = switchOption;
        return this;
    }
    public set switchOption(switchOption: string  | undefined) {
        this['switch_option'] = switchOption;
    }
    public get switchOption(): string | undefined {
        return this['switch_option'];
    }
    public withPolicy(policy: DiskAutoExpansionPolicy): ShowAutoEnlargePolicyResponse {
        this['policy'] = policy;
        return this;
    }
}