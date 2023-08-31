
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ResizeClusterResponse extends SdkResponse {
    public jobID?: string;
    public orderID?: string;
    public constructor() { 
        super();
    }
    public withJobID(jobID: string): ResizeClusterResponse {
        this['jobID'] = jobID;
        return this;
    }
    public withOrderID(orderID: string): ResizeClusterResponse {
        this['orderID'] = orderID;
        return this;
    }
}