import { ImageModerationResult } from './ImageModerationResult';


export class OpenUploadFileInfo {
    public fileId?: string;
    public imageModeration?: ImageModerationResult;
    public constructor() { 
    }
    public withFileId(fileId: string): OpenUploadFileInfo {
        this['fileId'] = fileId;
        return this;
    }
    public withImageModeration(imageModeration: ImageModerationResult): OpenUploadFileInfo {
        this['imageModeration'] = imageModeration;
        return this;
    }
}