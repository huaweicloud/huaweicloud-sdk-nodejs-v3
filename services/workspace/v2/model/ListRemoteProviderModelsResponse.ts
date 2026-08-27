import { BaseModeInfo } from './BaseModeInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRemoteProviderModelsResponse extends SdkResponse {
    public total?: number;
    private 'remote_models'?: Array<BaseModeInfo>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListRemoteProviderModelsResponse {
        this['total'] = total;
        return this;
    }
    public withRemoteModels(remoteModels: Array<BaseModeInfo>): ListRemoteProviderModelsResponse {
        this['remote_models'] = remoteModels;
        return this;
    }
    public set remoteModels(remoteModels: Array<BaseModeInfo>  | undefined) {
        this['remote_models'] = remoteModels;
    }
    public get remoteModels(): Array<BaseModeInfo> | undefined {
        return this['remote_models'];
    }
}