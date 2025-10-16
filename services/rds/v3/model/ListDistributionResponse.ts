
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDistributionResponse extends SdkResponse {
    public status?: string;
    private 'distributor_instance_id'?: string;
    private 'distributor_instance_name'?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ListDistributionResponse {
        this['status'] = status;
        return this;
    }
    public withDistributorInstanceId(distributorInstanceId: string): ListDistributionResponse {
        this['distributor_instance_id'] = distributorInstanceId;
        return this;
    }
    public set distributorInstanceId(distributorInstanceId: string  | undefined) {
        this['distributor_instance_id'] = distributorInstanceId;
    }
    public get distributorInstanceId(): string | undefined {
        return this['distributor_instance_id'];
    }
    public withDistributorInstanceName(distributorInstanceName: string): ListDistributionResponse {
        this['distributor_instance_name'] = distributorInstanceName;
        return this;
    }
    public set distributorInstanceName(distributorInstanceName: string  | undefined) {
        this['distributor_instance_name'] = distributorInstanceName;
    }
    public get distributorInstanceName(): string | undefined {
        return this['distributor_instance_name'];
    }
}