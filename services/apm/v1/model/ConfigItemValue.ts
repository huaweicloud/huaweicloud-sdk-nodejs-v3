import { ConfigItemOverride } from './ConfigItemOverride';
import { ObjectArrayPatterns } from './ObjectArrayPatterns';
import { OptionValue } from './OptionValue';


export class ConfigItemValue {
    private 'config_name'?: string;
    private 'display_name'?: string;
    private 'config_data_type'?: string;
    private 'max_length'?: number;
    private 'min_value'?: number;
    private 'max_value'?: number;
    private 'option_values'?: Array<OptionValue>;
    private 'default_value'?: string;
    private 'since_version'?: string;
    private 'dead_version'?: string;
    public value?: string;
    private 'object_array_patterns'?: Array<ObjectArrayPatterns>;
    private 'override_list'?: Array<ConfigItemOverride>;
    public constructor() { 
    }
    public withConfigName(configName: string): ConfigItemValue {
        this['config_name'] = configName;
        return this;
    }
    public set configName(configName: string  | undefined) {
        this['config_name'] = configName;
    }
    public get configName(): string | undefined {
        return this['config_name'];
    }
    public withDisplayName(displayName: string): ConfigItemValue {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withConfigDataType(configDataType: string): ConfigItemValue {
        this['config_data_type'] = configDataType;
        return this;
    }
    public set configDataType(configDataType: string  | undefined) {
        this['config_data_type'] = configDataType;
    }
    public get configDataType(): string | undefined {
        return this['config_data_type'];
    }
    public withMaxLength(maxLength: number): ConfigItemValue {
        this['max_length'] = maxLength;
        return this;
    }
    public set maxLength(maxLength: number  | undefined) {
        this['max_length'] = maxLength;
    }
    public get maxLength(): number | undefined {
        return this['max_length'];
    }
    public withMinValue(minValue: number): ConfigItemValue {
        this['min_value'] = minValue;
        return this;
    }
    public set minValue(minValue: number  | undefined) {
        this['min_value'] = minValue;
    }
    public get minValue(): number | undefined {
        return this['min_value'];
    }
    public withMaxValue(maxValue: number): ConfigItemValue {
        this['max_value'] = maxValue;
        return this;
    }
    public set maxValue(maxValue: number  | undefined) {
        this['max_value'] = maxValue;
    }
    public get maxValue(): number | undefined {
        return this['max_value'];
    }
    public withOptionValues(optionValues: Array<OptionValue>): ConfigItemValue {
        this['option_values'] = optionValues;
        return this;
    }
    public set optionValues(optionValues: Array<OptionValue>  | undefined) {
        this['option_values'] = optionValues;
    }
    public get optionValues(): Array<OptionValue> | undefined {
        return this['option_values'];
    }
    public withDefaultValue(defaultValue: string): ConfigItemValue {
        this['default_value'] = defaultValue;
        return this;
    }
    public set defaultValue(defaultValue: string  | undefined) {
        this['default_value'] = defaultValue;
    }
    public get defaultValue(): string | undefined {
        return this['default_value'];
    }
    public withSinceVersion(sinceVersion: string): ConfigItemValue {
        this['since_version'] = sinceVersion;
        return this;
    }
    public set sinceVersion(sinceVersion: string  | undefined) {
        this['since_version'] = sinceVersion;
    }
    public get sinceVersion(): string | undefined {
        return this['since_version'];
    }
    public withDeadVersion(deadVersion: string): ConfigItemValue {
        this['dead_version'] = deadVersion;
        return this;
    }
    public set deadVersion(deadVersion: string  | undefined) {
        this['dead_version'] = deadVersion;
    }
    public get deadVersion(): string | undefined {
        return this['dead_version'];
    }
    public withValue(value: string): ConfigItemValue {
        this['value'] = value;
        return this;
    }
    public withObjectArrayPatterns(objectArrayPatterns: Array<ObjectArrayPatterns>): ConfigItemValue {
        this['object_array_patterns'] = objectArrayPatterns;
        return this;
    }
    public set objectArrayPatterns(objectArrayPatterns: Array<ObjectArrayPatterns>  | undefined) {
        this['object_array_patterns'] = objectArrayPatterns;
    }
    public get objectArrayPatterns(): Array<ObjectArrayPatterns> | undefined {
        return this['object_array_patterns'];
    }
    public withOverrideList(overrideList: Array<ConfigItemOverride>): ConfigItemValue {
        this['override_list'] = overrideList;
        return this;
    }
    public set overrideList(overrideList: Array<ConfigItemOverride>  | undefined) {
        this['override_list'] = overrideList;
    }
    public get overrideList(): Array<ConfigItemOverride> | undefined {
        return this['override_list'];
    }
}