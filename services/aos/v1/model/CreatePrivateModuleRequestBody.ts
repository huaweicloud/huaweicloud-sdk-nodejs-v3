import { ModuleURIPrimitiveTypeHolder } from './ModuleURIPrimitiveTypeHolder';
import { PrivateModuleDescriptionPrimitiveTypeHolder } from './PrivateModuleDescriptionPrimitiveTypeHolder';
import { PrivateModuleNamePrimitiveTypeHolder } from './PrivateModuleNamePrimitiveTypeHolder';
import { PrivateModuleVersionDescriptionPrimitiveTypeHolder } from './PrivateModuleVersionDescriptionPrimitiveTypeHolder';
import { PrivateModuleVersionPrimitiveTypeHolder } from './PrivateModuleVersionPrimitiveTypeHolder';


export class CreatePrivateModuleRequestBody {
    private 'module_name'?: string;
    private 'module_version'?: string;
    private 'module_description'?: string;
    private 'module_uri'?: string;
    private 'version_description'?: string;
    public constructor(moduleName?: string) { 
        this['module_name'] = moduleName;
    }
    public withModuleName(moduleName: string): CreatePrivateModuleRequestBody {
        this['module_name'] = moduleName;
        return this;
    }
    public set moduleName(moduleName: string  | undefined) {
        this['module_name'] = moduleName;
    }
    public get moduleName(): string | undefined {
        return this['module_name'];
    }
    public withModuleVersion(moduleVersion: string): CreatePrivateModuleRequestBody {
        this['module_version'] = moduleVersion;
        return this;
    }
    public set moduleVersion(moduleVersion: string  | undefined) {
        this['module_version'] = moduleVersion;
    }
    public get moduleVersion(): string | undefined {
        return this['module_version'];
    }
    public withModuleDescription(moduleDescription: string): CreatePrivateModuleRequestBody {
        this['module_description'] = moduleDescription;
        return this;
    }
    public set moduleDescription(moduleDescription: string  | undefined) {
        this['module_description'] = moduleDescription;
    }
    public get moduleDescription(): string | undefined {
        return this['module_description'];
    }
    public withModuleUri(moduleUri: string): CreatePrivateModuleRequestBody {
        this['module_uri'] = moduleUri;
        return this;
    }
    public set moduleUri(moduleUri: string  | undefined) {
        this['module_uri'] = moduleUri;
    }
    public get moduleUri(): string | undefined {
        return this['module_uri'];
    }
    public withVersionDescription(versionDescription: string): CreatePrivateModuleRequestBody {
        this['version_description'] = versionDescription;
        return this;
    }
    public set versionDescription(versionDescription: string  | undefined) {
        this['version_description'] = versionDescription;
    }
    public get versionDescription(): string | undefined {
        return this['version_description'];
    }
}