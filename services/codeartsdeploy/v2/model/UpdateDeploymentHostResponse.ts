
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateDeploymentHostResponse extends SdkResponse {
    private 'host_id'?: string;
    public constructor() { 
        super();
    }
    public withHostId(hostId: string): UpdateDeploymentHostResponse {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
}