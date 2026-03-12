import { UpdateCSRRequestBody } from './UpdateCSRRequestBody';


export class UpdateCsrRequest {
    public id?: string;
    public body?: UpdateCSRRequestBody;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): UpdateCsrRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: UpdateCSRRequestBody): UpdateCsrRequest {
        this['body'] = body;
        return this;
    }
}