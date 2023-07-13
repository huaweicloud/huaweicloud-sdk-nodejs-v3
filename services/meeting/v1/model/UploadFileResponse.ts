import { ImageModerationResult } from './ImageModerationResult';
import { OpenUploadFileInfo } from './OpenUploadFileInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UploadFileResponse extends SdkResponse {
    public fileId?: string;
    public imageModeration?: ImageModerationResult;
    public constructor() { 
        super();
    }
    public withFileId(fileId: string): UploadFileResponse {
        this['fileId'] = fileId;
        return this;
    }
    public withImageModeration(imageModeration: ImageModerationResult): UploadFileResponse {
        this['imageModeration'] = imageModeration;
        return this;
    }
}