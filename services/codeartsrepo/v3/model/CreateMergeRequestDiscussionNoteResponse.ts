import { NoteDto } from './NoteDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateMergeRequestDiscussionNoteResponse extends SdkResponse {
    public error?: Error;
    public result?: NoteDto;
    public status?: string;
    public constructor() { 
        super();
    }
    public withError(error: Error): CreateMergeRequestDiscussionNoteResponse {
        this['error'] = error;
        return this;
    }
    public withResult(result: NoteDto): CreateMergeRequestDiscussionNoteResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): CreateMergeRequestDiscussionNoteResponse {
        this['status'] = status;
        return this;
    }
}