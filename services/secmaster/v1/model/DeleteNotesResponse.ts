import { DeleteNoteResult } from './DeleteNoteResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteNotesResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public data?: DeleteNoteResult;
    public constructor() { 
        super();
    }
    public withCode(code: string): DeleteNotesResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): DeleteNotesResponse {
        this['message'] = message;
        return this;
    }
    public withData(data: DeleteNoteResult): DeleteNotesResponse {
        this['data'] = data;
        return this;
    }
}