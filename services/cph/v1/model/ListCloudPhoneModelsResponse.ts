import { PhoneModel } from './PhoneModel';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCloudPhoneModelsResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'phone_models'?: Array<PhoneModel>;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ListCloudPhoneModelsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withPhoneModels(phoneModels: Array<PhoneModel>): ListCloudPhoneModelsResponse {
        this['phone_models'] = phoneModels;
        return this;
    }
    public set phoneModels(phoneModels: Array<PhoneModel>  | undefined) {
        this['phone_models'] = phoneModels;
    }
    public get phoneModels(): Array<PhoneModel> | undefined {
        return this['phone_models'];
    }
}