
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DownloadCertResponse extends SdkResponse {
    public file?: string;
    public constructor() { 
        super();
    }
    public withFile(file: string): DownloadCertResponse {
        this['file'] = file;
        return this;
    }
}