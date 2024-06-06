import { AnalyzerType } from './AnalyzerType';
import { StatusReason } from './StatusReason';
import { Tag } from './Tag';


export class AnalyzerSummary {
    private 'created_at'?: Date;
    public id?: string;
    private 'last_analyzed_resource'?: string;
    private 'last_resource_analyzed_at'?: Date;
    public name?: string;
    private 'organization_id'?: string;
    public status?: AnalyzerSummaryStatusEnum | string;
    private 'status_reason'?: StatusReason;
    public tags?: Array<Tag>;
    public type?: AnalyzerType;
    public urn?: string;
    public constructor(createdAt?: Date, id?: string, name?: string, status?: string, type?: AnalyzerType, urn?: string) { 
        this['created_at'] = createdAt;
        this['id'] = id;
        this['name'] = name;
        this['status'] = status;
        this['type'] = type;
        this['urn'] = urn;
    }
    public withCreatedAt(createdAt: Date): AnalyzerSummary {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withId(id: string): AnalyzerSummary {
        this['id'] = id;
        return this;
    }
    public withLastAnalyzedResource(lastAnalyzedResource: string): AnalyzerSummary {
        this['last_analyzed_resource'] = lastAnalyzedResource;
        return this;
    }
    public set lastAnalyzedResource(lastAnalyzedResource: string  | undefined) {
        this['last_analyzed_resource'] = lastAnalyzedResource;
    }
    public get lastAnalyzedResource(): string | undefined {
        return this['last_analyzed_resource'];
    }
    public withLastResourceAnalyzedAt(lastResourceAnalyzedAt: Date): AnalyzerSummary {
        this['last_resource_analyzed_at'] = lastResourceAnalyzedAt;
        return this;
    }
    public set lastResourceAnalyzedAt(lastResourceAnalyzedAt: Date  | undefined) {
        this['last_resource_analyzed_at'] = lastResourceAnalyzedAt;
    }
    public get lastResourceAnalyzedAt(): Date | undefined {
        return this['last_resource_analyzed_at'];
    }
    public withName(name: string): AnalyzerSummary {
        this['name'] = name;
        return this;
    }
    public withOrganizationId(organizationId: string): AnalyzerSummary {
        this['organization_id'] = organizationId;
        return this;
    }
    public set organizationId(organizationId: string  | undefined) {
        this['organization_id'] = organizationId;
    }
    public get organizationId(): string | undefined {
        return this['organization_id'];
    }
    public withStatus(status: AnalyzerSummaryStatusEnum | string): AnalyzerSummary {
        this['status'] = status;
        return this;
    }
    public withStatusReason(statusReason: StatusReason): AnalyzerSummary {
        this['status_reason'] = statusReason;
        return this;
    }
    public set statusReason(statusReason: StatusReason  | undefined) {
        this['status_reason'] = statusReason;
    }
    public get statusReason(): StatusReason | undefined {
        return this['status_reason'];
    }
    public withTags(tags: Array<Tag>): AnalyzerSummary {
        this['tags'] = tags;
        return this;
    }
    public withType(type: AnalyzerType): AnalyzerSummary {
        this['type'] = type;
        return this;
    }
    public withUrn(urn: string): AnalyzerSummary {
        this['urn'] = urn;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AnalyzerSummaryStatusEnum {
    ACTIVE = 'active',
    CREATING = 'creating',
    DISABLED = 'disabled',
    FAILED = 'failed'
}
