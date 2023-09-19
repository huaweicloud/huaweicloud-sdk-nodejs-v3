import { CreateAuthorisationRequestBody } from './CreateAuthorisationRequestBody';


export class CreateAuthorisationRequest {
    public body?: CreateAuthorisationRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateAuthorisationRequestBody): CreateAuthorisationRequest {
        this['body'] = body;
        return this;
    }
}