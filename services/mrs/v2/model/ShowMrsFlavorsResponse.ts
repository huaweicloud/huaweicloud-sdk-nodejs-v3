import { AzFlavors } from './AzFlavors';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowMrsFlavorsResponse extends SdkResponse {
    private 'version_name'?: string;
    private 'available_flavors'?: Array<AzFlavors>;
    public constructor() { 
        super();
    }
    public withVersionName(versionName: string): ShowMrsFlavorsResponse {
        this['version_name'] = versionName;
        return this;
    }
    public set versionName(versionName: string  | undefined) {
        this['version_name'] = versionName;
    }
    public get versionName(): string | undefined {
        return this['version_name'];
    }
    public withAvailableFlavors(availableFlavors: Array<AzFlavors>): ShowMrsFlavorsResponse {
        this['available_flavors'] = availableFlavors;
        return this;
    }
    public set availableFlavors(availableFlavors: Array<AzFlavors>  | undefined) {
        this['available_flavors'] = availableFlavors;
    }
    public get availableFlavors(): Array<AzFlavors> | undefined {
        return this['available_flavors'];
    }
}