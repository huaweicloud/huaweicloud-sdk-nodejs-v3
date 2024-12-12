import { ModuleURIPrimitiveTypeHolder } from './ModuleURIPrimitiveTypeHolder';
import { PrivateModuleIdPrimitiveTypeHolder } from './PrivateModuleIdPrimitiveTypeHolder';
import { PrivateModuleVersionDescriptionPrimitiveTypeHolder } from './PrivateModuleVersionDescriptionPrimitiveTypeHolder';
import { PrivateModuleVersionPrimitiveTypeHolder } from './PrivateModuleVersionPrimitiveTypeHolder';


export class CreatePrivateModuleVersionRequestBody {
    private 'module_id'?: string;
    private 'module_version'?: string;
    private 'version_description'?: string;
    private 'module_uri'?: string;
    public constructor() { 
    }
    public withModuleId(moduleId: string): CreatePrivateModuleVersionRequestBody {
        this['module_id'] = moduleId;
        return this;
    }
    public set moduleId(moduleId: string  | undefined) {
        this['module_id'] = moduleId;
    }
    public get moduleId(): string | undefined {
        return this['module_id'];
    }
    public withModuleVersion(moduleVersion: string): CreatePrivateModuleVersionRequestBody {
        this['module_version'] = moduleVersion;
        return this;
    }
    public set moduleVersion(moduleVersion: string  | undefined) {
        this['module_version'] = moduleVersion;
    }
    public get moduleVersion(): string | undefined {
        return this['module_version'];
    }
    public withVersionDescription(versionDescription: string): CreatePrivateModuleVersionRequestBody {
        this['version_description'] = versionDescription;
        return this;
    }
    public set versionDescription(versionDescription: string  | undefined) {
        this['version_description'] = versionDescription;
    }
    public get versionDescription(): string | undefined {
        return this['version_description'];
    }
    public withModuleUri(moduleUri: string): CreatePrivateModuleVersionRequestBody {
        this['module_uri'] = moduleUri;
        return this;
    }
    public set moduleUri(moduleUri: string  | undefined) {
        this['module_uri'] = moduleUri;
    }
    public get moduleUri(): string | undefined {
        return this['module_uri'];
    }
}