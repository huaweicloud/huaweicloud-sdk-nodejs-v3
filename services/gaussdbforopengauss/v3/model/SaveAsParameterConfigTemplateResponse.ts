
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SaveAsParameterConfigTemplateResponse extends SdkResponse {
    private 'config_id'?: string;
    public constructor() { 
        super();
    }
    public withConfigId(configId: string): SaveAsParameterConfigTemplateResponse {
        this['config_id'] = configId;
        return this;
    }
    public set configId(configId: string  | undefined) {
        this['config_id'] = configId;
    }
    public get configId(): string | undefined {
        return this['config_id'];
    }
}