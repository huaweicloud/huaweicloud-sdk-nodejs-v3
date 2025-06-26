
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UploadWarehouseAppIconResponse extends SdkResponse {
    private 'appicon_store_path'?: string;
    public constructor() { 
        super();
    }
    public withAppiconStorePath(appiconStorePath: string): UploadWarehouseAppIconResponse {
        this['appicon_store_path'] = appiconStorePath;
        return this;
    }
    public set appiconStorePath(appiconStorePath: string  | undefined) {
        this['appicon_store_path'] = appiconStorePath;
    }
    public get appiconStorePath(): string | undefined {
        return this['appicon_store_path'];
    }
}