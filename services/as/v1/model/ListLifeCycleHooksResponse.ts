import { LifecycleHookList } from './LifecycleHookList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListLifeCycleHooksResponse extends SdkResponse {
    private 'lifecycle_hooks'?: Array<LifecycleHookList>;
    public constructor() { 
        super();
    }
    public withLifecycleHooks(lifecycleHooks: Array<LifecycleHookList>): ListLifeCycleHooksResponse {
        this['lifecycle_hooks'] = lifecycleHooks;
        return this;
    }
    public set lifecycleHooks(lifecycleHooks: Array<LifecycleHookList>  | undefined) {
        this['lifecycle_hooks'] = lifecycleHooks;
    }
    public get lifecycleHooks(): Array<LifecycleHookList> | undefined {
        return this['lifecycle_hooks'];
    }
}