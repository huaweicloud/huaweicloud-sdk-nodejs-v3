import { ApplicationConfigConfiguration } from './ApplicationConfigConfiguration';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ModifyApplicationConfigurationResponse extends SdkResponse {
    private 'application_id'?: string;
    private 'environment_id'?: string;
    public configuration?: ApplicationConfigConfiguration;
    public constructor() { 
        super();
    }
    public withApplicationId(applicationId: string): ModifyApplicationConfigurationResponse {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string  | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId(): string | undefined {
        return this['application_id'];
    }
    public withEnvironmentId(environmentId: string): ModifyApplicationConfigurationResponse {
        this['environment_id'] = environmentId;
        return this;
    }
    public set environmentId(environmentId: string  | undefined) {
        this['environment_id'] = environmentId;
    }
    public get environmentId(): string | undefined {
        return this['environment_id'];
    }
    public withConfiguration(configuration: ApplicationConfigConfiguration): ModifyApplicationConfigurationResponse {
        this['configuration'] = configuration;
        return this;
    }
}