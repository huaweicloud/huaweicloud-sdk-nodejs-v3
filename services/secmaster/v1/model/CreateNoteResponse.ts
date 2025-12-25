import { NotesDetail } from './NotesDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateNoteResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public success?: boolean;
    public data?: NotesDetail;
    public constructor() { 
        super();
    }
    public withCode(code: string): CreateNoteResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): CreateNoteResponse {
        this['message'] = message;
        return this;
    }
    public withSuccess(success: boolean): CreateNoteResponse {
        this['success'] = success;
        return this;
    }
    public withData(data: NotesDetail): CreateNoteResponse {
        this['data'] = data;
        return this;
    }
}