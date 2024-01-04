import { AuditionFile } from './AuditionFile';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTtsAuditionFileResponse extends SdkResponse {
    private 'is_file_complete'?: boolean;
    public message?: string;
    public files?: Array<AuditionFile>;
    public constructor() { 
        super();
    }
    public withIsFileComplete(isFileComplete: boolean): ShowTtsAuditionFileResponse {
        this['is_file_complete'] = isFileComplete;
        return this;
    }
    public set isFileComplete(isFileComplete: boolean  | undefined) {
        this['is_file_complete'] = isFileComplete;
    }
    public get isFileComplete(): boolean | undefined {
        return this['is_file_complete'];
    }
    public withMessage(message: string): ShowTtsAuditionFileResponse {
        this['message'] = message;
        return this;
    }
    public withFiles(files: Array<AuditionFile>): ShowTtsAuditionFileResponse {
        this['files'] = files;
        return this;
    }
}