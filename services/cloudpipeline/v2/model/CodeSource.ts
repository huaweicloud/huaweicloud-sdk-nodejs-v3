import { CodeSourceParams } from './CodeSourceParams';


export class CodeSource {
    public type?: string;
    public params?: CodeSourceParams;
    public constructor() { 
    }
    public withType(type: string): CodeSource {
        this['type'] = type;
        return this;
    }
    public withParams(params: CodeSourceParams): CodeSource {
        this['params'] = params;
        return this;
    }
}