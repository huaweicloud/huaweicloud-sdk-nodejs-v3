

export class CreateDistributionRequestBody {
    private 'distributor_instance_id'?: string;
    public constructor(distributorInstanceId?: string) { 
        this['distributor_instance_id'] = distributorInstanceId;
    }
    public withDistributorInstanceId(distributorInstanceId: string): CreateDistributionRequestBody {
        this['distributor_instance_id'] = distributorInstanceId;
        return this;
    }
    public set distributorInstanceId(distributorInstanceId: string  | undefined) {
        this['distributor_instance_id'] = distributorInstanceId;
    }
    public get distributorInstanceId(): string | undefined {
        return this['distributor_instance_id'];
    }
}