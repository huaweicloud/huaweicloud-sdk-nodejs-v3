

export class OrganizationalUnitDto {
    public id?: string;
    public urn?: string;
    public name?: string;
    private 'created_at'?: Date;
    public constructor(id?: string, urn?: string, name?: string, createdAt?: Date) { 
        this['id'] = id;
        this['urn'] = urn;
        this['name'] = name;
        this['created_at'] = createdAt;
    }
    public withId(id: string): OrganizationalUnitDto {
        this['id'] = id;
        return this;
    }
    public withUrn(urn: string): OrganizationalUnitDto {
        this['urn'] = urn;
        return this;
    }
    public withName(name: string): OrganizationalUnitDto {
        this['name'] = name;
        return this;
    }
    public withCreatedAt(createdAt: Date): OrganizationalUnitDto {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
}