
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowEdgeNodeSoftwareVersionResponse extends SdkResponse {
    private 'software_version'?: string;
    public constructor() { 
        super();
    }
    public withSoftwareVersion(softwareVersion: string): ShowEdgeNodeSoftwareVersionResponse {
        this['software_version'] = softwareVersion;
        return this;
    }
    public set softwareVersion(softwareVersion: string  | undefined) {
        this['software_version'] = softwareVersion;
    }
    public get softwareVersion(): string | undefined {
        return this['software_version'];
    }
}