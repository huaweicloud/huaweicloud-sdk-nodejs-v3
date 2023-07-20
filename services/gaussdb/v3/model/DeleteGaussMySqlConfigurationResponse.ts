
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteGaussMySqlConfigurationResponse extends SdkResponse {
    private 'configuration_id'?: string;
    private 'configuration_name'?: string;
    public constructor() { 
        super();
    }
    public withConfigurationId(configurationId: string): DeleteGaussMySqlConfigurationResponse {
        this['configuration_id'] = configurationId;
        return this;
    }
    public set configurationId(configurationId: string  | undefined) {
        this['configuration_id'] = configurationId;
    }
    public get configurationId(): string | undefined {
        return this['configuration_id'];
    }
    public withConfigurationName(configurationName: string): DeleteGaussMySqlConfigurationResponse {
        this['configuration_name'] = configurationName;
        return this;
    }
    public set configurationName(configurationName: string  | undefined) {
        this['configuration_name'] = configurationName;
    }
    public get configurationName(): string | undefined {
        return this['configuration_name'];
    }
}