import { EnvRequestBodyParams } from './EnvRequestBodyParams';


export class EnvRequestBody {
    public params?: Array<EnvRequestBodyParams>;
    public constructor() { 
    }
    public withParams(params: Array<EnvRequestBodyParams>): EnvRequestBody {
        this['params'] = params;
        return this;
    }
}