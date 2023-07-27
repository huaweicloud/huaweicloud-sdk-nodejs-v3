import { Failure } from './Failure';
import { Success } from './Success';
import { Swagger } from './Swagger';


export class ImportBaseResult {
    public success?: Array<Success>;
    public failure?: Array<Failure>;
    public swagger?: Swagger;
    public constructor() { 
    }
    public withSuccess(success: Array<Success>): ImportBaseResult {
        this['success'] = success;
        return this;
    }
    public withFailure(failure: Array<Failure>): ImportBaseResult {
        this['failure'] = failure;
        return this;
    }
    public withSwagger(swagger: Swagger): ImportBaseResult {
        this['swagger'] = swagger;
        return this;
    }
}