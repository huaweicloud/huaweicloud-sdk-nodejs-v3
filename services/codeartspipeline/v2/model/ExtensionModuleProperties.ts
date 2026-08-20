import { ExtensionExecution } from './ExtensionExecution';
import { ExtensionParameter } from './ExtensionParameter';


export class ExtensionModuleProperties {
    private 'build_manifestVersion'?: string;
    public name?: string;
    public description?: string;
    public uuid?: string;
    public operationSystem?: string;
    public imageSource?: string;
    public image?: string;
    public icon?: string;
    public environmentVariables?: { [key: string]: { [key: string]: string; }; };
    public execution?: ExtensionExecution;
    public parameters?: Array<ExtensionParameter>;
    public tags?: Array<string>;
    public constructor() { 
    }
    public withBuildManifestVersion(buildManifestVersion: string): ExtensionModuleProperties {
        this['build_manifestVersion'] = buildManifestVersion;
        return this;
    }
    public set buildManifestVersion(buildManifestVersion: string  | undefined) {
        this['build_manifestVersion'] = buildManifestVersion;
    }
    public get buildManifestVersion(): string | undefined {
        return this['build_manifestVersion'];
    }
    public withName(name: string): ExtensionModuleProperties {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ExtensionModuleProperties {
        this['description'] = description;
        return this;
    }
    public withUuid(uuid: string): ExtensionModuleProperties {
        this['uuid'] = uuid;
        return this;
    }
    public withOperationSystem(operationSystem: string): ExtensionModuleProperties {
        this['operationSystem'] = operationSystem;
        return this;
    }
    public withImageSource(imageSource: string): ExtensionModuleProperties {
        this['imageSource'] = imageSource;
        return this;
    }
    public withImage(image: string): ExtensionModuleProperties {
        this['image'] = image;
        return this;
    }
    public withIcon(icon: string): ExtensionModuleProperties {
        this['icon'] = icon;
        return this;
    }
    public withEnvironmentVariables(environmentVariables: { [key: string]: { [key: string]: string; }; }): ExtensionModuleProperties {
        this['environmentVariables'] = environmentVariables;
        return this;
    }
    public withExecution(execution: ExtensionExecution): ExtensionModuleProperties {
        this['execution'] = execution;
        return this;
    }
    public withParameters(parameters: Array<ExtensionParameter>): ExtensionModuleProperties {
        this['parameters'] = parameters;
        return this;
    }
    public withTags(tags: Array<string>): ExtensionModuleProperties {
        this['tags'] = tags;
        return this;
    }
}