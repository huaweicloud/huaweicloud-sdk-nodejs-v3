
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UploadSignatureFileResponse extends SdkResponse {
    private 'file_id'?: string;
    public constructor() { 
        super();
    }
    public withFileId(fileId: string): UploadSignatureFileResponse {
        this['file_id'] = fileId;
        return this;
    }
    public set fileId(fileId: string  | undefined) {
        this['file_id'] = fileId;
    }
    public get fileId(): string | undefined {
        return this['file_id'];
    }
}