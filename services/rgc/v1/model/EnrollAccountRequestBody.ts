import { Blueprint } from './Blueprint';


export class EnrollAccountRequestBody {
    private 'parent_organizational_unit_id'?: string;
    public blueprint?: Blueprint;
    public constructor(parentOrganizationalUnitId?: string) { 
        this['parent_organizational_unit_id'] = parentOrganizationalUnitId;
    }
    public withParentOrganizationalUnitId(parentOrganizationalUnitId: string): EnrollAccountRequestBody {
        this['parent_organizational_unit_id'] = parentOrganizationalUnitId;
        return this;
    }
    public set parentOrganizationalUnitId(parentOrganizationalUnitId: string  | undefined) {
        this['parent_organizational_unit_id'] = parentOrganizationalUnitId;
    }
    public get parentOrganizationalUnitId(): string | undefined {
        return this['parent_organizational_unit_id'];
    }
    public withBlueprint(blueprint: Blueprint): EnrollAccountRequestBody {
        this['blueprint'] = blueprint;
        return this;
    }
}