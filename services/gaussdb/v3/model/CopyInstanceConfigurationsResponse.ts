
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CopyInstanceConfigurationsResponse extends SdkResponse {
    private 'configuration_id'?: string;
    public constructor() { 
        super();
    }
    public withConfigurationId(configurationId: string): CopyInstanceConfigurationsResponse {
        this['configuration_id'] = configurationId;
        return this;
    }
    public set configurationId(configurationId: string  | undefined) {
        this['configuration_id'] = configurationId;
    }
    public get configurationId(): string | undefined {
        return this['configuration_id'];
    }
}