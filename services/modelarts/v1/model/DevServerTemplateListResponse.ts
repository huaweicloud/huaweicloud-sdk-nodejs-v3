import { TemplateParam } from './TemplateParam';


export class DevServerTemplateListResponse {
    public id?: string;
    public name?: string;
    public description?: string;
    public type?: string;
    private 'flavor_type'?: string;
    public params?: Array<TemplateParam>;
    public constructor() { 
    }
    public withId(id: string): DevServerTemplateListResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): DevServerTemplateListResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): DevServerTemplateListResponse {
        this['description'] = description;
        return this;
    }
    public withType(type: string): DevServerTemplateListResponse {
        this['type'] = type;
        return this;
    }
    public withFlavorType(flavorType: string): DevServerTemplateListResponse {
        this['flavor_type'] = flavorType;
        return this;
    }
    public set flavorType(flavorType: string  | undefined) {
        this['flavor_type'] = flavorType;
    }
    public get flavorType(): string | undefined {
        return this['flavor_type'];
    }
    public withParams(params: Array<TemplateParam>): DevServerTemplateListResponse {
        this['params'] = params;
        return this;
    }
}