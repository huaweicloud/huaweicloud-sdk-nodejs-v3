import { ComponentExternalDatasource } from './ComponentExternalDatasource';


export class VersionComponent {
    public other?: { [key: string]: object; };
    public name?: string;
    public version?: string;
    private 'depend_on'?: Array<string>;
    public description?: string;
    private 'available_cluster_types'?: Array<string>;
    private 'external_datasources'?: Array<ComponentExternalDatasource>;
    private 'resource_requirement'?: Array<string>;
    private 'valid_roles'?: Array<string>;
    public visible?: boolean;
    private 'children_components'?: Array<string>;
    private 'multi_az_support_status'?: string;
    public constructor() { 
    }
    public withOther(other: { [key: string]: object; }): VersionComponent {
        this['other'] = other;
        return this;
    }
    public withName(name: string): VersionComponent {
        this['name'] = name;
        return this;
    }
    public withVersion(version: string): VersionComponent {
        this['version'] = version;
        return this;
    }
    public withDependOn(dependOn: Array<string>): VersionComponent {
        this['depend_on'] = dependOn;
        return this;
    }
    public set dependOn(dependOn: Array<string>  | undefined) {
        this['depend_on'] = dependOn;
    }
    public get dependOn(): Array<string> | undefined {
        return this['depend_on'];
    }
    public withDescription(description: string): VersionComponent {
        this['description'] = description;
        return this;
    }
    public withAvailableClusterTypes(availableClusterTypes: Array<string>): VersionComponent {
        this['available_cluster_types'] = availableClusterTypes;
        return this;
    }
    public set availableClusterTypes(availableClusterTypes: Array<string>  | undefined) {
        this['available_cluster_types'] = availableClusterTypes;
    }
    public get availableClusterTypes(): Array<string> | undefined {
        return this['available_cluster_types'];
    }
    public withExternalDatasources(externalDatasources: Array<ComponentExternalDatasource>): VersionComponent {
        this['external_datasources'] = externalDatasources;
        return this;
    }
    public set externalDatasources(externalDatasources: Array<ComponentExternalDatasource>  | undefined) {
        this['external_datasources'] = externalDatasources;
    }
    public get externalDatasources(): Array<ComponentExternalDatasource> | undefined {
        return this['external_datasources'];
    }
    public withResourceRequirement(resourceRequirement: Array<string>): VersionComponent {
        this['resource_requirement'] = resourceRequirement;
        return this;
    }
    public set resourceRequirement(resourceRequirement: Array<string>  | undefined) {
        this['resource_requirement'] = resourceRequirement;
    }
    public get resourceRequirement(): Array<string> | undefined {
        return this['resource_requirement'];
    }
    public withValidRoles(validRoles: Array<string>): VersionComponent {
        this['valid_roles'] = validRoles;
        return this;
    }
    public set validRoles(validRoles: Array<string>  | undefined) {
        this['valid_roles'] = validRoles;
    }
    public get validRoles(): Array<string> | undefined {
        return this['valid_roles'];
    }
    public withVisible(visible: boolean): VersionComponent {
        this['visible'] = visible;
        return this;
    }
    public withChildrenComponents(childrenComponents: Array<string>): VersionComponent {
        this['children_components'] = childrenComponents;
        return this;
    }
    public set childrenComponents(childrenComponents: Array<string>  | undefined) {
        this['children_components'] = childrenComponents;
    }
    public get childrenComponents(): Array<string> | undefined {
        return this['children_components'];
    }
    public withMultiAzSupportStatus(multiAzSupportStatus: string): VersionComponent {
        this['multi_az_support_status'] = multiAzSupportStatus;
        return this;
    }
    public set multiAzSupportStatus(multiAzSupportStatus: string  | undefined) {
        this['multi_az_support_status'] = multiAzSupportStatus;
    }
    public get multiAzSupportStatus(): string | undefined {
        return this['multi_az_support_status'];
    }
}