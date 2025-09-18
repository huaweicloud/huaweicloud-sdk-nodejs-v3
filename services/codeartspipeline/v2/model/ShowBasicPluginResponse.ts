import { NewExtensionDataSourceBindings } from './NewExtensionDataSourceBindings';
import { NewExtensionExecution } from './NewExtensionExecution';
import { NewExtensionInputs } from './NewExtensionInputs';
import { NewExtensionOutputs } from './NewExtensionOutputs';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowBasicPluginResponse extends SdkResponse {
    public type?: string;
    public name?: string;
    private 'friendly_name'?: string;
    public category?: string;
    public description?: string;
    public version?: string;
    private 'version_description'?: string;
    public inputs?: Array<NewExtensionInputs>;
    private 'data_source_bindings'?: Array<NewExtensionDataSourceBindings>;
    public outputs?: Array<NewExtensionOutputs>;
    public execution?: NewExtensionExecution;
    public constructor() { 
        super();
    }
    public withType(type: string): ShowBasicPluginResponse {
        this['type'] = type;
        return this;
    }
    public withName(name: string): ShowBasicPluginResponse {
        this['name'] = name;
        return this;
    }
    public withFriendlyName(friendlyName: string): ShowBasicPluginResponse {
        this['friendly_name'] = friendlyName;
        return this;
    }
    public set friendlyName(friendlyName: string  | undefined) {
        this['friendly_name'] = friendlyName;
    }
    public get friendlyName(): string | undefined {
        return this['friendly_name'];
    }
    public withCategory(category: string): ShowBasicPluginResponse {
        this['category'] = category;
        return this;
    }
    public withDescription(description: string): ShowBasicPluginResponse {
        this['description'] = description;
        return this;
    }
    public withVersion(version: string): ShowBasicPluginResponse {
        this['version'] = version;
        return this;
    }
    public withVersionDescription(versionDescription: string): ShowBasicPluginResponse {
        this['version_description'] = versionDescription;
        return this;
    }
    public set versionDescription(versionDescription: string  | undefined) {
        this['version_description'] = versionDescription;
    }
    public get versionDescription(): string | undefined {
        return this['version_description'];
    }
    public withInputs(inputs: Array<NewExtensionInputs>): ShowBasicPluginResponse {
        this['inputs'] = inputs;
        return this;
    }
    public withDataSourceBindings(dataSourceBindings: Array<NewExtensionDataSourceBindings>): ShowBasicPluginResponse {
        this['data_source_bindings'] = dataSourceBindings;
        return this;
    }
    public set dataSourceBindings(dataSourceBindings: Array<NewExtensionDataSourceBindings>  | undefined) {
        this['data_source_bindings'] = dataSourceBindings;
    }
    public get dataSourceBindings(): Array<NewExtensionDataSourceBindings> | undefined {
        return this['data_source_bindings'];
    }
    public withOutputs(outputs: Array<NewExtensionOutputs>): ShowBasicPluginResponse {
        this['outputs'] = outputs;
        return this;
    }
    public withExecution(execution: NewExtensionExecution): ShowBasicPluginResponse {
        this['execution'] = execution;
        return this;
    }
}