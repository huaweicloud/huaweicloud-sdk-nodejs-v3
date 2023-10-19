

export class UpdateDomainSetInfoDto {
    public name?: string;
    public description?: string;
    private 'set_id'?: string;
    private 'domain_set_type'?: number;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): UpdateDomainSetInfoDto {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateDomainSetInfoDto {
        this['description'] = description;
        return this;
    }
    public withSetId(setId: string): UpdateDomainSetInfoDto {
        this['set_id'] = setId;
        return this;
    }
    public set setId(setId: string  | undefined) {
        this['set_id'] = setId;
    }
    public get setId(): string | undefined {
        return this['set_id'];
    }
    public withDomainSetType(domainSetType: number): UpdateDomainSetInfoDto {
        this['domain_set_type'] = domainSetType;
        return this;
    }
    public set domainSetType(domainSetType: number  | undefined) {
        this['domain_set_type'] = domainSetType;
    }
    public get domainSetType(): number | undefined {
        return this['domain_set_type'];
    }
}