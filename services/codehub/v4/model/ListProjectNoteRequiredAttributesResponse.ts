import { RequiredAttributeDto } from './RequiredAttributeDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListProjectNoteRequiredAttributesResponse extends SdkResponse {
    private 'note_required_attributes'?: Array<RequiredAttributeDto>;
    public constructor() { 
        super();
    }
    public withNoteRequiredAttributes(noteRequiredAttributes: Array<RequiredAttributeDto>): ListProjectNoteRequiredAttributesResponse {
        this['note_required_attributes'] = noteRequiredAttributes;
        return this;
    }
    public set noteRequiredAttributes(noteRequiredAttributes: Array<RequiredAttributeDto>  | undefined) {
        this['note_required_attributes'] = noteRequiredAttributes;
    }
    public get noteRequiredAttributes(): Array<RequiredAttributeDto> | undefined {
        return this['note_required_attributes'];
    }
}