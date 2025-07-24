import { ElementResourceChangeExternalVo } from './ElementResourceChangeExternalVo';


export class ResourceChangeExternalVo {
    private 'field_name'?: string;
    private 'custom_field_type'?: string;
    private 'old_change_info'?: ElementResourceChangeExternalVo;
    private 'new_change_info'?: ElementResourceChangeExternalVo;
    public constructor() { 
    }
    public withFieldName(fieldName: string): ResourceChangeExternalVo {
        this['field_name'] = fieldName;
        return this;
    }
    public set fieldName(fieldName: string  | undefined) {
        this['field_name'] = fieldName;
    }
    public get fieldName(): string | undefined {
        return this['field_name'];
    }
    public withCustomFieldType(customFieldType: string): ResourceChangeExternalVo {
        this['custom_field_type'] = customFieldType;
        return this;
    }
    public set customFieldType(customFieldType: string  | undefined) {
        this['custom_field_type'] = customFieldType;
    }
    public get customFieldType(): string | undefined {
        return this['custom_field_type'];
    }
    public withOldChangeInfo(oldChangeInfo: ElementResourceChangeExternalVo): ResourceChangeExternalVo {
        this['old_change_info'] = oldChangeInfo;
        return this;
    }
    public set oldChangeInfo(oldChangeInfo: ElementResourceChangeExternalVo  | undefined) {
        this['old_change_info'] = oldChangeInfo;
    }
    public get oldChangeInfo(): ElementResourceChangeExternalVo | undefined {
        return this['old_change_info'];
    }
    public withNewChangeInfo(newChangeInfo: ElementResourceChangeExternalVo): ResourceChangeExternalVo {
        this['new_change_info'] = newChangeInfo;
        return this;
    }
    public set newChangeInfo(newChangeInfo: ElementResourceChangeExternalVo  | undefined) {
        this['new_change_info'] = newChangeInfo;
    }
    public get newChangeInfo(): ElementResourceChangeExternalVo | undefined {
        return this['new_change_info'];
    }
}