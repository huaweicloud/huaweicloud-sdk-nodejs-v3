import { NodeTemplateRuntimeConfigRuntime } from './NodeTemplateRuntimeConfigRuntime';


export class NodeTemplateRuntimeConfig {
    public runtime?: NodeTemplateRuntimeConfigRuntime;
    public constructor() { 
    }
    public withRuntime(runtime: NodeTemplateRuntimeConfigRuntime): NodeTemplateRuntimeConfig {
        this['runtime'] = runtime;
        return this;
    }
}