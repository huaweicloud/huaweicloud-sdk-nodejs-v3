import { OpenAPISpecSpec } from './OpenAPISpecSpec';


export class OpenAPISpec {
    public spec?: OpenAPISpecSpec;
    public constructor() { 
    }
    public withSpec(spec: OpenAPISpecSpec): OpenAPISpec {
        this['spec'] = spec;
        return this;
    }
}