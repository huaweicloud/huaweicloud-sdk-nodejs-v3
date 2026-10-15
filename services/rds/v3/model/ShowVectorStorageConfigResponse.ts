
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowVectorStorageConfigResponse extends SdkResponse {
    private 'vector_storage_switch'?: boolean;
    public constructor() { 
        super();
    }
    public withVectorStorageSwitch(vectorStorageSwitch: boolean): ShowVectorStorageConfigResponse {
        this['vector_storage_switch'] = vectorStorageSwitch;
        return this;
    }
    public set vectorStorageSwitch(vectorStorageSwitch: boolean  | undefined) {
        this['vector_storage_switch'] = vectorStorageSwitch;
    }
    public get vectorStorageSwitch(): boolean | undefined {
        return this['vector_storage_switch'];
    }
}