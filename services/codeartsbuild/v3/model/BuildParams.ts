import { Params } from './Params';


export class BuildParams {
    public name?: string;
    public title?: string;
    public params?: Array<Params>;
    public constructor() { 
    }
    public withName(name: string): BuildParams {
        this['name'] = name;
        return this;
    }
    public withTitle(title: string): BuildParams {
        this['title'] = title;
        return this;
    }
    public withParams(params: Array<Params>): BuildParams {
        this['params'] = params;
        return this;
    }
}