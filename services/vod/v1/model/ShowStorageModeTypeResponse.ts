
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowStorageModeTypeResponse extends SdkResponse {
    private 'storage_mode_type'?: string;
    public constructor() { 
        super();
    }
    public withStorageModeType(storageModeType: string): ShowStorageModeTypeResponse {
        this['storage_mode_type'] = storageModeType;
        return this;
    }
    public set storageModeType(storageModeType: string  | undefined) {
        this['storage_mode_type'] = storageModeType;
    }
    public get storageModeType(): string | undefined {
        return this['storage_mode_type'];
    }
}