
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListClusterSshStateResponse extends SdkResponse {
    public sshOpsStat?: number;
    public constructor() { 
        super();
    }
    public withSshOpsStat(sshOpsStat: number): ListClusterSshStateResponse {
        this['sshOpsStat'] = sshOpsStat;
        return this;
    }
}