

export class AlmStatus {
    public id?: string;
    public belonging?: string;
    private 'space_id'?: string;
    public name?: string;
    public code?: string;
    private 'definition_type'?: string;
    private 'belong_definition_type'?: number;
    private 'display_value'?: string;
    public position?: number;
    public displayable?: number;
    public editable?: number;
    public deletable?: number;
    public mutable?: number;
    private 'title_py'?: string;
    private 'created_by'?: string;
    private 'created_date'?: number;
    private 'modified_date'?: number;
    private 'modified_by'?: string;
    public constructor() { 
    }
    public withId(id: string): AlmStatus {
        this['id'] = id;
        return this;
    }
    public withBelonging(belonging: string): AlmStatus {
        this['belonging'] = belonging;
        return this;
    }
    public withSpaceId(spaceId: string): AlmStatus {
        this['space_id'] = spaceId;
        return this;
    }
    public set spaceId(spaceId: string  | undefined) {
        this['space_id'] = spaceId;
    }
    public get spaceId(): string | undefined {
        return this['space_id'];
    }
    public withName(name: string): AlmStatus {
        this['name'] = name;
        return this;
    }
    public withCode(code: string): AlmStatus {
        this['code'] = code;
        return this;
    }
    public withDefinitionType(definitionType: string): AlmStatus {
        this['definition_type'] = definitionType;
        return this;
    }
    public set definitionType(definitionType: string  | undefined) {
        this['definition_type'] = definitionType;
    }
    public get definitionType(): string | undefined {
        return this['definition_type'];
    }
    public withBelongDefinitionType(belongDefinitionType: number): AlmStatus {
        this['belong_definition_type'] = belongDefinitionType;
        return this;
    }
    public set belongDefinitionType(belongDefinitionType: number  | undefined) {
        this['belong_definition_type'] = belongDefinitionType;
    }
    public get belongDefinitionType(): number | undefined {
        return this['belong_definition_type'];
    }
    public withDisplayValue(displayValue: string): AlmStatus {
        this['display_value'] = displayValue;
        return this;
    }
    public set displayValue(displayValue: string  | undefined) {
        this['display_value'] = displayValue;
    }
    public get displayValue(): string | undefined {
        return this['display_value'];
    }
    public withPosition(position: number): AlmStatus {
        this['position'] = position;
        return this;
    }
    public withDisplayable(displayable: number): AlmStatus {
        this['displayable'] = displayable;
        return this;
    }
    public withEditable(editable: number): AlmStatus {
        this['editable'] = editable;
        return this;
    }
    public withDeletable(deletable: number): AlmStatus {
        this['deletable'] = deletable;
        return this;
    }
    public withMutable(mutable: number): AlmStatus {
        this['mutable'] = mutable;
        return this;
    }
    public withTitlePy(titlePy: string): AlmStatus {
        this['title_py'] = titlePy;
        return this;
    }
    public set titlePy(titlePy: string  | undefined) {
        this['title_py'] = titlePy;
    }
    public get titlePy(): string | undefined {
        return this['title_py'];
    }
    public withCreatedBy(createdBy: string): AlmStatus {
        this['created_by'] = createdBy;
        return this;
    }
    public set createdBy(createdBy: string  | undefined) {
        this['created_by'] = createdBy;
    }
    public get createdBy(): string | undefined {
        return this['created_by'];
    }
    public withCreatedDate(createdDate: number): AlmStatus {
        this['created_date'] = createdDate;
        return this;
    }
    public set createdDate(createdDate: number  | undefined) {
        this['created_date'] = createdDate;
    }
    public get createdDate(): number | undefined {
        return this['created_date'];
    }
    public withModifiedDate(modifiedDate: number): AlmStatus {
        this['modified_date'] = modifiedDate;
        return this;
    }
    public set modifiedDate(modifiedDate: number  | undefined) {
        this['modified_date'] = modifiedDate;
    }
    public get modifiedDate(): number | undefined {
        return this['modified_date'];
    }
    public withModifiedBy(modifiedBy: string): AlmStatus {
        this['modified_by'] = modifiedBy;
        return this;
    }
    public set modifiedBy(modifiedBy: string  | undefined) {
        this['modified_by'] = modifiedBy;
    }
    public get modifiedBy(): string | undefined {
        return this['modified_by'];
    }
}