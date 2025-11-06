import { RequiredAttributeDto } from './RequiredAttributeDto';


export class NoteRequiredAttributeDto {
    private 'note_required_attributes'?: Array<RequiredAttributeDto>;
    public constructor() { 
    }
    public withNoteRequiredAttributes(noteRequiredAttributes: Array<RequiredAttributeDto>): NoteRequiredAttributeDto {
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