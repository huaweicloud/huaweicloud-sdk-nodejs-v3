import { OpenAPIResponseSpecSpec } from './OpenAPIResponseSpecSpec';


export class OpenAPIResponseSpec {
    public spec?: OpenAPIResponseSpecSpec;
    public constructor() { 
    }
    public withSpec(spec: OpenAPIResponseSpecSpec): OpenAPIResponseSpec {
        this['spec'] = spec;
        return this;
    }
}