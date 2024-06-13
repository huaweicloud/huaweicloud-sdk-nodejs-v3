

export class StreamEnvironmentConfig {
    private 'execution_agency_urn'?: string;
    private 'image_feature'?: string;
    private 'image_uri'?: string;
    private 'queue_name'?: string;
    public constructor() { 
    }
    public withExecutionAgencyUrn(executionAgencyUrn: string): StreamEnvironmentConfig {
        this['execution_agency_urn'] = executionAgencyUrn;
        return this;
    }
    public set executionAgencyUrn(executionAgencyUrn: string  | undefined) {
        this['execution_agency_urn'] = executionAgencyUrn;
    }
    public get executionAgencyUrn(): string | undefined {
        return this['execution_agency_urn'];
    }
    public withImageFeature(imageFeature: string): StreamEnvironmentConfig {
        this['image_feature'] = imageFeature;
        return this;
    }
    public set imageFeature(imageFeature: string  | undefined) {
        this['image_feature'] = imageFeature;
    }
    public get imageFeature(): string | undefined {
        return this['image_feature'];
    }
    public withImageUri(imageUri: string): StreamEnvironmentConfig {
        this['image_uri'] = imageUri;
        return this;
    }
    public set imageUri(imageUri: string  | undefined) {
        this['image_uri'] = imageUri;
    }
    public get imageUri(): string | undefined {
        return this['image_uri'];
    }
    public withQueueName(queueName: string): StreamEnvironmentConfig {
        this['queue_name'] = queueName;
        return this;
    }
    public set queueName(queueName: string  | undefined) {
        this['queue_name'] = queueName;
    }
    public get queueName(): string | undefined {
        return this['queue_name'];
    }
}