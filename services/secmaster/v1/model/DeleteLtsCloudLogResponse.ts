
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteLtsCloudLogResponse extends SdkResponse {
    private 'source_name'?: string;
    private 'config_name'?: string;
    public success?: boolean;
    public constructor() { 
        super();
    }
    public withSourceName(sourceName: string): DeleteLtsCloudLogResponse {
        this['source_name'] = sourceName;
        return this;
    }
    public set sourceName(sourceName: string  | undefined) {
        this['source_name'] = sourceName;
    }
    public get sourceName(): string | undefined {
        return this['source_name'];
    }
    public withConfigName(configName: string): DeleteLtsCloudLogResponse {
        this['config_name'] = configName;
        return this;
    }
    public set configName(configName: string  | undefined) {
        this['config_name'] = configName;
    }
    public get configName(): string | undefined {
        return this['config_name'];
    }
    public withSuccess(success: boolean): DeleteLtsCloudLogResponse {
        this['success'] = success;
        return this;
    }
}