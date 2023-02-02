
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DownloadSecretBlobResponse extends SdkResponse {
    private 'secret_blob'?: string | undefined;
    public constructor() { 
        super();
    }
    public withSecretBlob(secretBlob: string): DownloadSecretBlobResponse {
        this['secret_blob'] = secretBlob;
        return this;
    }
    public set secretBlob(secretBlob: string | undefined) {
        this['secret_blob'] = secretBlob;
    }
    public get secretBlob() {
        return this['secret_blob'];
    }
}