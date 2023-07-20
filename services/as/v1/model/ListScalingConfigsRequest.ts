

export class ListScalingConfigsRequest {
    private 'scaling_configuration_name'?: string;
    private 'image_id'?: string;
    private 'start_number'?: number;
    public limit?: number;
    public constructor() { 
    }
    public withScalingConfigurationName(scalingConfigurationName: string): ListScalingConfigsRequest {
        this['scaling_configuration_name'] = scalingConfigurationName;
        return this;
    }
    public set scalingConfigurationName(scalingConfigurationName: string  | undefined) {
        this['scaling_configuration_name'] = scalingConfigurationName;
    }
    public get scalingConfigurationName(): string | undefined {
        return this['scaling_configuration_name'];
    }
    public withImageId(imageId: string): ListScalingConfigsRequest {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withStartNumber(startNumber: number): ListScalingConfigsRequest {
        this['start_number'] = startNumber;
        return this;
    }
    public set startNumber(startNumber: number  | undefined) {
        this['start_number'] = startNumber;
    }
    public get startNumber(): number | undefined {
        return this['start_number'];
    }
    public withLimit(limit: number): ListScalingConfigsRequest {
        this['limit'] = limit;
        return this;
    }
}