import { ServerModel } from './ServerModel';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCloudPhoneServerModelsResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'server_models'?: Array<ServerModel>;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ListCloudPhoneServerModelsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withServerModels(serverModels: Array<ServerModel>): ListCloudPhoneServerModelsResponse {
        this['server_models'] = serverModels;
        return this;
    }
    public set serverModels(serverModels: Array<ServerModel>  | undefined) {
        this['server_models'] = serverModels;
    }
    public get serverModels(): Array<ServerModel> | undefined {
        return this['server_models'];
    }
}