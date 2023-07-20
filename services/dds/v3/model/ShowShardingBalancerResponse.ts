import { BalancerActiveWindow } from './BalancerActiveWindow';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowShardingBalancerResponse extends SdkResponse {
    private 'is_open'?: boolean;
    private 'active_window'?: BalancerActiveWindow;
    public constructor() { 
        super();
    }
    public withIsOpen(isOpen: boolean): ShowShardingBalancerResponse {
        this['is_open'] = isOpen;
        return this;
    }
    public set isOpen(isOpen: boolean  | undefined) {
        this['is_open'] = isOpen;
    }
    public get isOpen(): boolean | undefined {
        return this['is_open'];
    }
    public withActiveWindow(activeWindow: BalancerActiveWindow): ShowShardingBalancerResponse {
        this['active_window'] = activeWindow;
        return this;
    }
    public set activeWindow(activeWindow: BalancerActiveWindow  | undefined) {
        this['active_window'] = activeWindow;
    }
    public get activeWindow(): BalancerActiveWindow | undefined {
        return this['active_window'];
    }
}