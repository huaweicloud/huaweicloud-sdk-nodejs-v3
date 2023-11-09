import { ComponentEnvironmentValueFrom } from './ComponentEnvironmentValueFrom';


export class ComponentEnvironment {
    public name?: string;
    public value?: string;
    private 'value_from'?: ComponentEnvironmentValueFrom;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): ComponentEnvironment {
        this['name'] = name;
        return this;
    }
    public withValue(value: string): ComponentEnvironment {
        this['value'] = value;
        return this;
    }
    public withValueFrom(valueFrom: ComponentEnvironmentValueFrom): ComponentEnvironment {
        this['value_from'] = valueFrom;
        return this;
    }
    public set valueFrom(valueFrom: ComponentEnvironmentValueFrom  | undefined) {
        this['value_from'] = valueFrom;
    }
    public get valueFrom(): ComponentEnvironmentValueFrom | undefined {
        return this['value_from'];
    }
}