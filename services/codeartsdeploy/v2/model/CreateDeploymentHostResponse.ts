
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateDeploymentHostResponse extends SdkResponse {
    private 'host_id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withHostId(hostId: string): CreateDeploymentHostResponse {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId() {
        return this['host_id'];
    }
}