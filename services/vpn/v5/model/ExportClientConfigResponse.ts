
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ExportClientConfigResponse extends SdkResponse {
    private 'client_config'?: string;
    private 'header-response-token'?: string;
    public constructor() { 
        super();
    }
    public withClientConfig(clientConfig: string): ExportClientConfigResponse {
        this['client_config'] = clientConfig;
        return this;
    }
    public set clientConfig(clientConfig: string  | undefined) {
        this['client_config'] = clientConfig;
    }
    public get clientConfig(): string | undefined {
        return this['client_config'];
    }
    public withHeaderResponseToken(headerResponseToken: string): ExportClientConfigResponse {
        this['header-response-token'] = headerResponseToken;
        return this;
    }
    public set headerResponseToken(headerResponseToken: string  | undefined) {
        this['header-response-token'] = headerResponseToken;
    }
    public get headerResponseToken(): string | undefined {
        return this['header-response-token'];
    }
}