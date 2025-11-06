import { NoteRequiredAttributeDto } from './NoteRequiredAttributeDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowNoteRequiredAttributesResponse extends SdkResponse {
    public body?: Array<NoteRequiredAttributeDto>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<NoteRequiredAttributeDto>): ShowNoteRequiredAttributesResponse {
        this['body'] = body;
        return this;
    }
}