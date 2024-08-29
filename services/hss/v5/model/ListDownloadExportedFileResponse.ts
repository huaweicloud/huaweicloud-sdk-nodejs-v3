
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDownloadExportedFileResponse extends SdkResponse {
    public body?: string;
    public constructor() { 
        super();
    }
    public withBody(body: string): ListDownloadExportedFileResponse {
        this['body'] = body;
        return this;
    }
}