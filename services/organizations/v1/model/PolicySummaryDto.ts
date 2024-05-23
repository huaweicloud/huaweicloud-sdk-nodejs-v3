

export class PolicySummaryDto {
    private 'is_builtin'?: boolean;
    public description?: string;
    public id?: string;
    public urn?: string;
    public name?: string;
    public type?: string;
    public constructor(isBuiltin?: boolean, description?: string, id?: string, urn?: string, name?: string, type?: string) { 
        this['is_builtin'] = isBuiltin;
        this['description'] = description;
        this['id'] = id;
        this['urn'] = urn;
        this['name'] = name;
        this['type'] = type;
    }
    public withIsBuiltin(isBuiltin: boolean): PolicySummaryDto {
        this['is_builtin'] = isBuiltin;
        return this;
    }
    public set isBuiltin(isBuiltin: boolean  | undefined) {
        this['is_builtin'] = isBuiltin;
    }
    public get isBuiltin(): boolean | undefined {
        return this['is_builtin'];
    }
    public withDescription(description: string): PolicySummaryDto {
        this['description'] = description;
        return this;
    }
    public withId(id: string): PolicySummaryDto {
        this['id'] = id;
        return this;
    }
    public withUrn(urn: string): PolicySummaryDto {
        this['urn'] = urn;
        return this;
    }
    public withName(name: string): PolicySummaryDto {
        this['name'] = name;
        return this;
    }
    public withType(type: string): PolicySummaryDto {
        this['type'] = type;
        return this;
    }
}