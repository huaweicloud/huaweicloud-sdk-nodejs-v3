import { ExtensionModuleProperties } from './ExtensionModuleProperties';


export class ExtensionModule {
    private 'base_url'?: string;
    public description?: string;
    public id?: number;
    public location?: string;
    private 'module_id'?: string;
    public name?: string;
    public properties?: ExtensionModuleProperties;
    public publisher?: string;
    public type?: string;
    public version?: string;
    public tags?: Array<string>;
    private 'url_relative'?: string;
    private 'properties_list'?: Array<object>;
    private 'manifest_version'?: string;
    public categories?: Array<string>;
    public target?: string;
    private 'product_line'?: string;
    public constructor() { 
    }
    public withBaseUrl(baseUrl: string): ExtensionModule {
        this['base_url'] = baseUrl;
        return this;
    }
    public set baseUrl(baseUrl: string  | undefined) {
        this['base_url'] = baseUrl;
    }
    public get baseUrl(): string | undefined {
        return this['base_url'];
    }
    public withDescription(description: string): ExtensionModule {
        this['description'] = description;
        return this;
    }
    public withId(id: number): ExtensionModule {
        this['id'] = id;
        return this;
    }
    public withLocation(location: string): ExtensionModule {
        this['location'] = location;
        return this;
    }
    public withModuleId(moduleId: string): ExtensionModule {
        this['module_id'] = moduleId;
        return this;
    }
    public set moduleId(moduleId: string  | undefined) {
        this['module_id'] = moduleId;
    }
    public get moduleId(): string | undefined {
        return this['module_id'];
    }
    public withName(name: string): ExtensionModule {
        this['name'] = name;
        return this;
    }
    public withProperties(properties: ExtensionModuleProperties): ExtensionModule {
        this['properties'] = properties;
        return this;
    }
    public withPublisher(publisher: string): ExtensionModule {
        this['publisher'] = publisher;
        return this;
    }
    public withType(type: string): ExtensionModule {
        this['type'] = type;
        return this;
    }
    public withVersion(version: string): ExtensionModule {
        this['version'] = version;
        return this;
    }
    public withTags(tags: Array<string>): ExtensionModule {
        this['tags'] = tags;
        return this;
    }
    public withUrlRelative(urlRelative: string): ExtensionModule {
        this['url_relative'] = urlRelative;
        return this;
    }
    public set urlRelative(urlRelative: string  | undefined) {
        this['url_relative'] = urlRelative;
    }
    public get urlRelative(): string | undefined {
        return this['url_relative'];
    }
    public withPropertiesList(propertiesList: Array<object>): ExtensionModule {
        this['properties_list'] = propertiesList;
        return this;
    }
    public set propertiesList(propertiesList: Array<object>  | undefined) {
        this['properties_list'] = propertiesList;
    }
    public get propertiesList(): Array<object> | undefined {
        return this['properties_list'];
    }
    public withManifestVersion(manifestVersion: string): ExtensionModule {
        this['manifest_version'] = manifestVersion;
        return this;
    }
    public set manifestVersion(manifestVersion: string  | undefined) {
        this['manifest_version'] = manifestVersion;
    }
    public get manifestVersion(): string | undefined {
        return this['manifest_version'];
    }
    public withCategories(categories: Array<string>): ExtensionModule {
        this['categories'] = categories;
        return this;
    }
    public withTarget(target: string): ExtensionModule {
        this['target'] = target;
        return this;
    }
    public withProductLine(productLine: string): ExtensionModule {
        this['product_line'] = productLine;
        return this;
    }
    public set productLine(productLine: string  | undefined) {
        this['product_line'] = productLine;
    }
    public get productLine(): string | undefined {
        return this['product_line'];
    }
}