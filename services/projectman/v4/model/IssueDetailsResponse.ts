import { SecurityLevelResult } from './SecurityLevelResult';


export class IssueDetailsResponse {
    public id?: string;
    private 'number'?: string;
    public type?: string;
    private 'stay_days'?: number;
    private 'tenant_id'?: string;
    private 'created_date'?: string;
    public title?: string;
    private 'security_level'?: SecurityLevelResult;
    public constructor() { 
    }
    public withId(id: string): IssueDetailsResponse {
        this['id'] = id;
        return this;
    }
    public withModelNumber(modelNumber: string): IssueDetailsResponse {
        this['number'] = modelNumber;
        return this;
    }
    public set modelNumber(modelNumber: string  | undefined) {
        this['number'] = modelNumber;
    }
    public get modelNumber(): string | undefined {
        return this['number'];
    }
    public withType(type: string): IssueDetailsResponse {
        this['type'] = type;
        return this;
    }
    public withStayDays(stayDays: number): IssueDetailsResponse {
        this['stay_days'] = stayDays;
        return this;
    }
    public set stayDays(stayDays: number  | undefined) {
        this['stay_days'] = stayDays;
    }
    public get stayDays(): number | undefined {
        return this['stay_days'];
    }
    public withTenantId(tenantId: string): IssueDetailsResponse {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withCreatedDate(createdDate: string): IssueDetailsResponse {
        this['created_date'] = createdDate;
        return this;
    }
    public set createdDate(createdDate: string  | undefined) {
        this['created_date'] = createdDate;
    }
    public get createdDate(): string | undefined {
        return this['created_date'];
    }
    public withTitle(title: string): IssueDetailsResponse {
        this['title'] = title;
        return this;
    }
    public withSecurityLevel(securityLevel: SecurityLevelResult): IssueDetailsResponse {
        this['security_level'] = securityLevel;
        return this;
    }
    public set securityLevel(securityLevel: SecurityLevelResult  | undefined) {
        this['security_level'] = securityLevel;
    }
    public get securityLevel(): SecurityLevelResult | undefined {
        return this['security_level'];
    }
}