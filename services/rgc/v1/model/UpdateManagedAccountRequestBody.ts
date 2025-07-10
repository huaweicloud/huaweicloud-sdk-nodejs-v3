import { Blueprint } from './Blueprint';


export class UpdateManagedAccountRequestBody {
    private 'parent_organizational_unit_id'?: string;
    private 'parent_organizational_unit_name'?: string;
    public blueprint?: Blueprint;
    public constructor(parentOrganizationalUnitId?: string, parentOrganizationalUnitName?: string) { 
        this['parent_organizational_unit_id'] = parentOrganizationalUnitId;
        this['parent_organizational_unit_name'] = parentOrganizationalUnitName;
    }
    public withParentOrganizationalUnitId(parentOrganizationalUnitId: string): UpdateManagedAccountRequestBody {
        this['parent_organizational_unit_id'] = parentOrganizationalUnitId;
        return this;
    }
    public set parentOrganizationalUnitId(parentOrganizationalUnitId: string  | undefined) {
        this['parent_organizational_unit_id'] = parentOrganizationalUnitId;
    }
    public get parentOrganizationalUnitId(): string | undefined {
        return this['parent_organizational_unit_id'];
    }
    public withParentOrganizationalUnitName(parentOrganizationalUnitName: string): UpdateManagedAccountRequestBody {
        this['parent_organizational_unit_name'] = parentOrganizationalUnitName;
        return this;
    }
    public set parentOrganizationalUnitName(parentOrganizationalUnitName: string  | undefined) {
        this['parent_organizational_unit_name'] = parentOrganizationalUnitName;
    }
    public get parentOrganizationalUnitName(): string | undefined {
        return this['parent_organizational_unit_name'];
    }
    public withBlueprint(blueprint: Blueprint): UpdateManagedAccountRequestBody {
        this['blueprint'] = blueprint;
        return this;
    }
}