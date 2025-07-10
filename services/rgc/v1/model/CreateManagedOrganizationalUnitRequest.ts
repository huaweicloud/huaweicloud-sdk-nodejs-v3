import { CreateOrganizationalUnitReqBody } from './CreateOrganizationalUnitReqBody';


export class CreateManagedOrganizationalUnitRequest {
    public body?: CreateOrganizationalUnitReqBody;
    public constructor() { 
    }
    public withBody(body: CreateOrganizationalUnitReqBody): CreateManagedOrganizationalUnitRequest {
        this['body'] = body;
        return this;
    }
}