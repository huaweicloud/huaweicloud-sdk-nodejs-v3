
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAvailableVersionResponse extends SdkResponse {
    private 'available_versions'?: Array<string>;
    public constructor() { 
        super();
    }
    public withAvailableVersions(availableVersions: Array<string>): ShowAvailableVersionResponse {
        this['available_versions'] = availableVersions;
        return this;
    }
    public set availableVersions(availableVersions: Array<string>  | undefined) {
        this['available_versions'] = availableVersions;
    }
    public get availableVersions(): Array<string> | undefined {
        return this['available_versions'];
    }
}