import { NoteDto } from './NoteDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListMergeRequestSystemNotesResponse extends SdkResponse {
    public body?: Array<NoteDto>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<NoteDto>): ListMergeRequestSystemNotesResponse {
        this['body'] = body;
        return this;
    }
}