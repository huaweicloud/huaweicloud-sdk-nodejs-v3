import { Build } from './Build';
import { ComponentCategory } from './ComponentCategory';
import { ComponentSubCategory } from './ComponentSubCategory';
import { RuntimeType } from './RuntimeType';
import { SourceObject } from './SourceObject';


export class ComponentCreate {
    public name?: string;
    public runtime?: RuntimeType;
    public category?: ComponentCategory;
    private 'sub_category'?: ComponentSubCategory;
    public description?: string;
    public source?: SourceObject;
    public build?: Build;
    public constructor(name?: string, runtime?: RuntimeType, category?: ComponentCategory) { 
        this['name'] = name;
        this['runtime'] = runtime;
        this['category'] = category;
    }
    public withName(name: string): ComponentCreate {
        this['name'] = name;
        return this;
    }
    public withRuntime(runtime: RuntimeType): ComponentCreate {
        this['runtime'] = runtime;
        return this;
    }
    public withCategory(category: ComponentCategory): ComponentCreate {
        this['category'] = category;
        return this;
    }
    public withSubCategory(subCategory: ComponentSubCategory): ComponentCreate {
        this['sub_category'] = subCategory;
        return this;
    }
    public set subCategory(subCategory: ComponentSubCategory  | undefined) {
        this['sub_category'] = subCategory;
    }
    public get subCategory(): ComponentSubCategory | undefined {
        return this['sub_category'];
    }
    public withDescription(description: string): ComponentCreate {
        this['description'] = description;
        return this;
    }
    public withSource(source: SourceObject): ComponentCreate {
        this['source'] = source;
        return this;
    }
    public withBuild(build: Build): ComponentCreate {
        this['build'] = build;
        return this;
    }
}