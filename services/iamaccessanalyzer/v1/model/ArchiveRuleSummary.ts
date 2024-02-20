import { FindingFilter } from './FindingFilter';


export class ArchiveRuleSummary {
    private 'created_at'?: Date;
    public filters?: Array<FindingFilter>;
    public id?: string;
    public name?: string;
    private 'updated_at'?: Date;
    public urn?: string;
    public constructor(createdAt?: Date, filters?: Array<FindingFilter>, id?: string, name?: string, updatedAt?: Date, urn?: string) { 
        this['created_at'] = createdAt;
        this['filters'] = filters;
        this['id'] = id;
        this['name'] = name;
        this['updated_at'] = updatedAt;
        this['urn'] = urn;
    }
    public withCreatedAt(createdAt: Date): ArchiveRuleSummary {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withFilters(filters: Array<FindingFilter>): ArchiveRuleSummary {
        this['filters'] = filters;
        return this;
    }
    public withId(id: string): ArchiveRuleSummary {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ArchiveRuleSummary {
        this['name'] = name;
        return this;
    }
    public withUpdatedAt(updatedAt: Date): ArchiveRuleSummary {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
    public withUrn(urn: string): ArchiveRuleSummary {
        this['urn'] = urn;
        return this;
    }
}