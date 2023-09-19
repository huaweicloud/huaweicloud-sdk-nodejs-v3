import { UpdateAuthorisationRequestBody } from './UpdateAuthorisationRequestBody';


export class UpdateAuthorisationRequest {
    public id?: string;
    public body?: UpdateAuthorisationRequestBody;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): UpdateAuthorisationRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: UpdateAuthorisationRequestBody): UpdateAuthorisationRequest {
        this['body'] = body;
        return this;
    }
}