import { PrivateModuleDescriptionPrimitiveTypeHolder } from './PrivateModuleDescriptionPrimitiveTypeHolder';
import { PrivateModuleIdPrimitiveTypeHolder } from './PrivateModuleIdPrimitiveTypeHolder';


export class UpdatePrivateModuleMetadataRequestBody {
    private 'module_description'?: string;
    private 'module_id'?: string;
    public constructor() { 
    }
    public withModuleDescription(moduleDescription: string): UpdatePrivateModuleMetadataRequestBody {
        this['module_description'] = moduleDescription;
        return this;
    }
    public set moduleDescription(moduleDescription: string  | undefined) {
        this['module_description'] = moduleDescription;
    }
    public get moduleDescription(): string | undefined {
        return this['module_description'];
    }
    public withModuleId(moduleId: string): UpdatePrivateModuleMetadataRequestBody {
        this['module_id'] = moduleId;
        return this;
    }
    public set moduleId(moduleId: string  | undefined) {
        this['module_id'] = moduleId;
    }
    public get moduleId(): string | undefined {
        return this['module_id'];
    }
}