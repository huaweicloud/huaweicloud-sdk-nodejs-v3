
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowMasterAddressResponse extends SdkResponse {
    private 'region_name'?: string;
    private 'master_address'?: string;
    public constructor() { 
        super();
    }
    public withRegionName(regionName: string): ShowMasterAddressResponse {
        this['region_name'] = regionName;
        return this;
    }
    public set regionName(regionName: string  | undefined) {
        this['region_name'] = regionName;
    }
    public get regionName(): string | undefined {
        return this['region_name'];
    }
    public withMasterAddress(masterAddress: string): ShowMasterAddressResponse {
        this['master_address'] = masterAddress;
        return this;
    }
    public set masterAddress(masterAddress: string  | undefined) {
        this['master_address'] = masterAddress;
    }
    public get masterAddress(): string | undefined {
        return this['master_address'];
    }
}