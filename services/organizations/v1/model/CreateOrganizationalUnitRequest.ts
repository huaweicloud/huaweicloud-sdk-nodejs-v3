import { CreateOrganizationalUnitReqBody } from './CreateOrganizationalUnitReqBody';


export class CreateOrganizationalUnitRequest {
    public body?: CreateOrganizationalUnitReqBody;
    public constructor() { 
    }
    public withBody(body: CreateOrganizationalUnitReqBody): CreateOrganizationalUnitRequest {
        this['body'] = body;
        return this;
    }
}