import { UpdateOrganizationalUnitReqBody } from './UpdateOrganizationalUnitReqBody';


export class UpdateOrganizationalUnitRequest {
    private 'organizational_unit_id'?: string;
    public body?: UpdateOrganizationalUnitReqBody;
    public constructor(organizationalUnitId?: string) { 
        this['organizational_unit_id'] = organizationalUnitId;
    }
    public withOrganizationalUnitId(organizationalUnitId: string): UpdateOrganizationalUnitRequest {
        this['organizational_unit_id'] = organizationalUnitId;
        return this;
    }
    public set organizationalUnitId(organizationalUnitId: string  | undefined) {
        this['organizational_unit_id'] = organizationalUnitId;
    }
    public get organizationalUnitId(): string | undefined {
        return this['organizational_unit_id'];
    }
    public withBody(body: UpdateOrganizationalUnitReqBody): UpdateOrganizationalUnitRequest {
        this['body'] = body;
        return this;
    }
}