

export class ColumnDisplaySetting {
    private 'mapping_required'?: boolean;
    private 'group_sequence_number'?: number;
    private 'intra_group_sequence_number'?: number;
    private 'value_type'?: string;
    private 'value_qualified'?: string;
    private 'display_name'?: string;
    private 'display_description'?: string;
    private 'group_name'?: string;
    public constructor() { 
    }
    public withMappingRequired(mappingRequired: boolean): ColumnDisplaySetting {
        this['mapping_required'] = mappingRequired;
        return this;
    }
    public set mappingRequired(mappingRequired: boolean  | undefined) {
        this['mapping_required'] = mappingRequired;
    }
    public get mappingRequired(): boolean | undefined {
        return this['mapping_required'];
    }
    public withGroupSequenceNumber(groupSequenceNumber: number): ColumnDisplaySetting {
        this['group_sequence_number'] = groupSequenceNumber;
        return this;
    }
    public set groupSequenceNumber(groupSequenceNumber: number  | undefined) {
        this['group_sequence_number'] = groupSequenceNumber;
    }
    public get groupSequenceNumber(): number | undefined {
        return this['group_sequence_number'];
    }
    public withIntraGroupSequenceNumber(intraGroupSequenceNumber: number): ColumnDisplaySetting {
        this['intra_group_sequence_number'] = intraGroupSequenceNumber;
        return this;
    }
    public set intraGroupSequenceNumber(intraGroupSequenceNumber: number  | undefined) {
        this['intra_group_sequence_number'] = intraGroupSequenceNumber;
    }
    public get intraGroupSequenceNumber(): number | undefined {
        return this['intra_group_sequence_number'];
    }
    public withValueType(valueType: string): ColumnDisplaySetting {
        this['value_type'] = valueType;
        return this;
    }
    public set valueType(valueType: string  | undefined) {
        this['value_type'] = valueType;
    }
    public get valueType(): string | undefined {
        return this['value_type'];
    }
    public withValueQualified(valueQualified: string): ColumnDisplaySetting {
        this['value_qualified'] = valueQualified;
        return this;
    }
    public set valueQualified(valueQualified: string  | undefined) {
        this['value_qualified'] = valueQualified;
    }
    public get valueQualified(): string | undefined {
        return this['value_qualified'];
    }
    public withDisplayName(displayName: string): ColumnDisplaySetting {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withDisplayDescription(displayDescription: string): ColumnDisplaySetting {
        this['display_description'] = displayDescription;
        return this;
    }
    public set displayDescription(displayDescription: string  | undefined) {
        this['display_description'] = displayDescription;
    }
    public get displayDescription(): string | undefined {
        return this['display_description'];
    }
    public withGroupName(groupName: string): ColumnDisplaySetting {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
}