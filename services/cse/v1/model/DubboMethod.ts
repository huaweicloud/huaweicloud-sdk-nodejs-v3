import { DubboMethodParam } from './DubboMethodParam';


export class DubboMethod {
    public serviceMethod?: string;
    public headersAttach?: string;
    public httpMethods?: Array<string>;
    public httpPath?: string;
    public params?: Array<DubboMethodParam>;
    public constructor() { 
    }
    public withServiceMethod(serviceMethod: string): DubboMethod {
        this['serviceMethod'] = serviceMethod;
        return this;
    }
    public withHeadersAttach(headersAttach: string): DubboMethod {
        this['headersAttach'] = headersAttach;
        return this;
    }
    public withHttpMethods(httpMethods: Array<string>): DubboMethod {
        this['httpMethods'] = httpMethods;
        return this;
    }
    public withHttpPath(httpPath: string): DubboMethod {
        this['httpPath'] = httpPath;
        return this;
    }
    public withParams(params: Array<DubboMethodParam>): DubboMethod {
        this['params'] = params;
        return this;
    }
}