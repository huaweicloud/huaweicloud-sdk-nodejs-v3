import { ErrorInfo } from './ErrorInfo';
import { ExtensionModuleList } from './ExtensionModuleList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListModulesDetailResponse extends SdkResponse {
    public error?: ErrorInfo;
    public result?: { [key: string]: ExtensionModuleList; };
    public status?: string;
    public constructor() { 
        super();
    }
    public withError(error: ErrorInfo): ListModulesDetailResponse {
        this['error'] = error;
        return this;
    }
    public withResult(result: { [key: string]: ExtensionModuleList; }): ListModulesDetailResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): ListModulesDetailResponse {
        this['status'] = status;
        return this;
    }
}