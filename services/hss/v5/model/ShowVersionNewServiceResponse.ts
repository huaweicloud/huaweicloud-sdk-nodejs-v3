
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowVersionNewServiceResponse extends SdkResponse {
    public version?: string;
    private 'container_version'?: string;
    public constructor() { 
        super();
    }
    public withVersion(version: string): ShowVersionNewServiceResponse {
        this['version'] = version;
        return this;
    }
    public withContainerVersion(containerVersion: string): ShowVersionNewServiceResponse {
        this['container_version'] = containerVersion;
        return this;
    }
    public set containerVersion(containerVersion: string  | undefined) {
        this['container_version'] = containerVersion;
    }
    public get containerVersion(): string | undefined {
        return this['container_version'];
    }
}