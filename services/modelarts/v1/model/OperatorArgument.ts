import { DependArg } from './DependArg';
import { OperatorArgItem } from './OperatorArgItem';
import { OperatorArgTypeEnum } from './OperatorArgTypeEnum';


export class OperatorArgument {
    public key?: string;
    public name?: string;
    public type?: OperatorArgTypeEnum;
    public tips?: string;
    public min?: number;
    public max?: number;
    public between?: boolean;
    public items?: Array<OperatorArgItem>;
    private 'default_value'?: string;
    public required?: boolean;
    public visible?: boolean;
    private 'arg_display_type'?: string;
    private 'task_category'?: Array<string>;
    private 'dataset_catalog'?: Array<string>;
    private 'asset_types'?: string;
    private 'asset_codes'?: string;
    private 'sub_asset_type'?: string;
    private 'depend_args'?: Array<DependArg>;
    public constructor(key?: string, name?: string, type?: OperatorArgTypeEnum) { 
        this['key'] = key;
        this['name'] = name;
        this['type'] = type;
    }
    public withKey(key: string): OperatorArgument {
        this['key'] = key;
        return this;
    }
    public withName(name: string): OperatorArgument {
        this['name'] = name;
        return this;
    }
    public withType(type: OperatorArgTypeEnum): OperatorArgument {
        this['type'] = type;
        return this;
    }
    public withTips(tips: string): OperatorArgument {
        this['tips'] = tips;
        return this;
    }
    public withMin(min: number): OperatorArgument {
        this['min'] = min;
        return this;
    }
    public withMax(max: number): OperatorArgument {
        this['max'] = max;
        return this;
    }
    public withBetween(between: boolean): OperatorArgument {
        this['between'] = between;
        return this;
    }
    public withItems(items: Array<OperatorArgItem>): OperatorArgument {
        this['items'] = items;
        return this;
    }
    public withDefaultValue(defaultValue: string): OperatorArgument {
        this['default_value'] = defaultValue;
        return this;
    }
    public set defaultValue(defaultValue: string  | undefined) {
        this['default_value'] = defaultValue;
    }
    public get defaultValue(): string | undefined {
        return this['default_value'];
    }
    public withRequired(required: boolean): OperatorArgument {
        this['required'] = required;
        return this;
    }
    public withVisible(visible: boolean): OperatorArgument {
        this['visible'] = visible;
        return this;
    }
    public withArgDisplayType(argDisplayType: string): OperatorArgument {
        this['arg_display_type'] = argDisplayType;
        return this;
    }
    public set argDisplayType(argDisplayType: string  | undefined) {
        this['arg_display_type'] = argDisplayType;
    }
    public get argDisplayType(): string | undefined {
        return this['arg_display_type'];
    }
    public withTaskCategory(taskCategory: Array<string>): OperatorArgument {
        this['task_category'] = taskCategory;
        return this;
    }
    public set taskCategory(taskCategory: Array<string>  | undefined) {
        this['task_category'] = taskCategory;
    }
    public get taskCategory(): Array<string> | undefined {
        return this['task_category'];
    }
    public withDatasetCatalog(datasetCatalog: Array<string>): OperatorArgument {
        this['dataset_catalog'] = datasetCatalog;
        return this;
    }
    public set datasetCatalog(datasetCatalog: Array<string>  | undefined) {
        this['dataset_catalog'] = datasetCatalog;
    }
    public get datasetCatalog(): Array<string> | undefined {
        return this['dataset_catalog'];
    }
    public withAssetTypes(assetTypes: string): OperatorArgument {
        this['asset_types'] = assetTypes;
        return this;
    }
    public set assetTypes(assetTypes: string  | undefined) {
        this['asset_types'] = assetTypes;
    }
    public get assetTypes(): string | undefined {
        return this['asset_types'];
    }
    public withAssetCodes(assetCodes: string): OperatorArgument {
        this['asset_codes'] = assetCodes;
        return this;
    }
    public set assetCodes(assetCodes: string  | undefined) {
        this['asset_codes'] = assetCodes;
    }
    public get assetCodes(): string | undefined {
        return this['asset_codes'];
    }
    public withSubAssetType(subAssetType: string): OperatorArgument {
        this['sub_asset_type'] = subAssetType;
        return this;
    }
    public set subAssetType(subAssetType: string  | undefined) {
        this['sub_asset_type'] = subAssetType;
    }
    public get subAssetType(): string | undefined {
        return this['sub_asset_type'];
    }
    public withDependArgs(dependArgs: Array<DependArg>): OperatorArgument {
        this['depend_args'] = dependArgs;
        return this;
    }
    public set dependArgs(dependArgs: Array<DependArg>  | undefined) {
        this['depend_args'] = dependArgs;
    }
    public get dependArgs(): Array<DependArg> | undefined {
        return this['depend_args'];
    }
}