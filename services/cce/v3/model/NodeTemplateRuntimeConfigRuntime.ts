

export class NodeTemplateRuntimeConfigRuntime {
    public name?: string;
    public constructor() { 
    }
    public withName(name: string): NodeTemplateRuntimeConfigRuntime {
        this['name'] = name;
        return this;
    }
}