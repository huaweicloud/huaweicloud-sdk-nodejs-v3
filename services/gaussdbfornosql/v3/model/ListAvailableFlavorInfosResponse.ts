import { ComputeFlavor } from './ComputeFlavor';
import { OptionalFlavorsInfo } from './OptionalFlavorsInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAvailableFlavorInfosResponse extends SdkResponse {
    private 'instance_id'?: string;
    private 'instance_name'?: string;
    private 'current_flavor'?: ComputeFlavor;
    private 'optional_flavors'?: OptionalFlavorsInfo;
    public constructor() { 
        super();
    }
    public withInstanceId(instanceId: string): ListAvailableFlavorInfosResponse {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceName(instanceName: string): ListAvailableFlavorInfosResponse {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withCurrentFlavor(currentFlavor: ComputeFlavor): ListAvailableFlavorInfosResponse {
        this['current_flavor'] = currentFlavor;
        return this;
    }
    public set currentFlavor(currentFlavor: ComputeFlavor  | undefined) {
        this['current_flavor'] = currentFlavor;
    }
    public get currentFlavor(): ComputeFlavor | undefined {
        return this['current_flavor'];
    }
    public withOptionalFlavors(optionalFlavors: OptionalFlavorsInfo): ListAvailableFlavorInfosResponse {
        this['optional_flavors'] = optionalFlavors;
        return this;
    }
    public set optionalFlavors(optionalFlavors: OptionalFlavorsInfo  | undefined) {
        this['optional_flavors'] = optionalFlavors;
    }
    public get optionalFlavors(): OptionalFlavorsInfo | undefined {
        return this['optional_flavors'];
    }
}