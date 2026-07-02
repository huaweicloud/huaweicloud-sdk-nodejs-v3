
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchChangeInstanceSpecificationResponse extends SdkResponse {
    private 'job_ids'?: Array<string>;
    private 'order_ids'?: Array<string>;
    public constructor() { 
        super();
    }
    public withJobIds(jobIds: Array<string>): BatchChangeInstanceSpecificationResponse {
        this['job_ids'] = jobIds;
        return this;
    }
    public set jobIds(jobIds: Array<string>  | undefined) {
        this['job_ids'] = jobIds;
    }
    public get jobIds(): Array<string> | undefined {
        return this['job_ids'];
    }
    public withOrderIds(orderIds: Array<string>): BatchChangeInstanceSpecificationResponse {
        this['order_ids'] = orderIds;
        return this;
    }
    public set orderIds(orderIds: Array<string>  | undefined) {
        this['order_ids'] = orderIds;
    }
    public get orderIds(): Array<string> | undefined {
        return this['order_ids'];
    }
}