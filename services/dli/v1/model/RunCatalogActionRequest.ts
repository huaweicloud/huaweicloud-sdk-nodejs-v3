import { RunCatalogActionRequestBody } from './RunCatalogActionRequestBody';


export class RunCatalogActionRequest {
    public body?: RunCatalogActionRequestBody;
    public constructor() { 
    }
    public withBody(body: RunCatalogActionRequestBody): RunCatalogActionRequest {
        this['body'] = body;
        return this;
    }
}