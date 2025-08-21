import { NoteRequiredAttributeDto } from './NoteRequiredAttributeDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowGroupNoteRequiredAttributesResponse extends SdkResponse {
    public body?: Array<NoteRequiredAttributeDto>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<NoteRequiredAttributeDto>): ShowGroupNoteRequiredAttributesResponse {
        this['body'] = body;
        return this;
    }
}