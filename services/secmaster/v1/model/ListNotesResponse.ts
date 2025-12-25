import { NotesDetail } from './NotesDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListNotesResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public total?: number;
    public size?: number;
    public page?: number;
    public success?: boolean;
    public data?: Array<NotesDetail>;
    public constructor() { 
        super();
    }
    public withCode(code: string): ListNotesResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): ListNotesResponse {
        this['message'] = message;
        return this;
    }
    public withTotal(total: number): ListNotesResponse {
        this['total'] = total;
        return this;
    }
    public withSize(size: number): ListNotesResponse {
        this['size'] = size;
        return this;
    }
    public withPage(page: number): ListNotesResponse {
        this['page'] = page;
        return this;
    }
    public withSuccess(success: boolean): ListNotesResponse {
        this['success'] = success;
        return this;
    }
    public withData(data: Array<NotesDetail>): ListNotesResponse {
        this['data'] = data;
        return this;
    }
}