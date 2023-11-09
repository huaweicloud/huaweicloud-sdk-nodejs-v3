import { ApplicationListConfigConfiguration } from './ApplicationListConfigConfiguration';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ChangeApplicationConfigurationResponse extends SdkResponse {
    private 'application_id'?: string;
    private 'environment_id'?: string;
    public configuration?: ApplicationListConfigConfiguration;
    public constructor() { 
        super();
    }
    public withApplicationId(applicationId: string): ChangeApplicationConfigurationResponse {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string  | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId(): string | undefined {
        return this['application_id'];
    }
    public withEnvironmentId(environmentId: string): ChangeApplicationConfigurationResponse {
        this['environment_id'] = environmentId;
        return this;
    }
    public set environmentId(environmentId: string  | undefined) {
        this['environment_id'] = environmentId;
    }
    public get environmentId(): string | undefined {
        return this['environment_id'];
    }
    public withConfiguration(configuration: ApplicationListConfigConfiguration): ChangeApplicationConfigurationResponse {
        this['configuration'] = configuration;
        return this;
    }
}