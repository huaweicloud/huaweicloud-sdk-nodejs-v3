import { Resource } from './Resource';


export class EnvironmentResourceModify {
    private 'add_base_resources'?: Array<Resource>;
    private 'add_optional_resources'?: Array<Resource>;
    private 'remove_resources'?: Array<Resource>;
    public constructor() { 
    }
    public withAddBaseResources(addBaseResources: Array<Resource>): EnvironmentResourceModify {
        this['add_base_resources'] = addBaseResources;
        return this;
    }
    public set addBaseResources(addBaseResources: Array<Resource>  | undefined) {
        this['add_base_resources'] = addBaseResources;
    }
    public get addBaseResources(): Array<Resource> | undefined {
        return this['add_base_resources'];
    }
    public withAddOptionalResources(addOptionalResources: Array<Resource>): EnvironmentResourceModify {
        this['add_optional_resources'] = addOptionalResources;
        return this;
    }
    public set addOptionalResources(addOptionalResources: Array<Resource>  | undefined) {
        this['add_optional_resources'] = addOptionalResources;
    }
    public get addOptionalResources(): Array<Resource> | undefined {
        return this['add_optional_resources'];
    }
    public withRemoveResources(removeResources: Array<Resource>): EnvironmentResourceModify {
        this['remove_resources'] = removeResources;
        return this;
    }
    public set removeResources(removeResources: Array<Resource>  | undefined) {
        this['remove_resources'] = removeResources;
    }
    public get removeResources(): Array<Resource> | undefined {
        return this['remove_resources'];
    }
}