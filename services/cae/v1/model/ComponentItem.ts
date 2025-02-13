import { ComponentSpec } from './ComponentSpec';


export class ComponentItem {
    public id?: string;
    public name?: string;
    public annotations?: { [key: string]: string; };
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    public spec?: ComponentSpec;
    public constructor() { 
    }
    public withId(id: string): ComponentItem {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ComponentItem {
        this['name'] = name;
        return this;
    }
    public withAnnotations(annotations: { [key: string]: string; }): ComponentItem {
        this['annotations'] = annotations;
        return this;
    }
    public withCreatedAt(createdAt: Date): ComponentItem {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): ComponentItem {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
    public withSpec(spec: ComponentSpec): ComponentItem {
        this['spec'] = spec;
        return this;
    }
}