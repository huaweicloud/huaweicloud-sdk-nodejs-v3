import { MicroserviceImportApiResp } from './MicroserviceImportApiResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ImportMicroserviceResponse extends SdkResponse {
    private 'vpc_channel_id'?: string;
    private 'api_group_id'?: string;
    public apis?: Array<MicroserviceImportApiResp>;
    public constructor() { 
        super();
    }
    public withVpcChannelId(vpcChannelId: string): ImportMicroserviceResponse {
        this['vpc_channel_id'] = vpcChannelId;
        return this;
    }
    public set vpcChannelId(vpcChannelId: string  | undefined) {
        this['vpc_channel_id'] = vpcChannelId;
    }
    public get vpcChannelId(): string | undefined {
        return this['vpc_channel_id'];
    }
    public withApiGroupId(apiGroupId: string): ImportMicroserviceResponse {
        this['api_group_id'] = apiGroupId;
        return this;
    }
    public set apiGroupId(apiGroupId: string  | undefined) {
        this['api_group_id'] = apiGroupId;
    }
    public get apiGroupId(): string | undefined {
        return this['api_group_id'];
    }
    public withApis(apis: Array<MicroserviceImportApiResp>): ImportMicroserviceResponse {
        this['apis'] = apis;
        return this;
    }
}