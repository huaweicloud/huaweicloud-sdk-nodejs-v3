import { ProcessInstanceResponseResultCreatedBy1 } from './ProcessInstanceResponseResultCreatedBy1';
import { ProcessInstanceResponseResultCurrOwner } from './ProcessInstanceResponseResultCurrOwner';


export class ProcessInstanceResponseResultOpinions {
    public id?: string;
    public type?: string;
    public state?: string;
    public status?: string;
    public region?: string;
    public category?: string;
    public title?: string;
    public rounds?: string;
    public opinion?: string;
    public description?: string;
    private 'modified_by'?: string;
    private 'modified_date'?: string;
    private 'created_by'?: ProcessInstanceResponseResultCreatedBy1;
    private 'created_date'?: string;
    private 'tenant_id'?: string;
    private 'domain_id'?: string;
    private 'issue_category'?: string;
    private 'issue_id'?: string;
    private 'curr_owner'?: ProcessInstanceResponseResultCurrOwner;
    private 'co_id'?: string;
    private 'user_id'?: string;
    private 'opinion_issue_id'?: string;
    private 'opinion_issue_category'?: string;
    public constructor() { 
    }
    public withId(id: string): ProcessInstanceResponseResultOpinions {
        this['id'] = id;
        return this;
    }
    public withType(type: string): ProcessInstanceResponseResultOpinions {
        this['type'] = type;
        return this;
    }
    public withState(state: string): ProcessInstanceResponseResultOpinions {
        this['state'] = state;
        return this;
    }
    public withStatus(status: string): ProcessInstanceResponseResultOpinions {
        this['status'] = status;
        return this;
    }
    public withRegion(region: string): ProcessInstanceResponseResultOpinions {
        this['region'] = region;
        return this;
    }
    public withCategory(category: string): ProcessInstanceResponseResultOpinions {
        this['category'] = category;
        return this;
    }
    public withTitle(title: string): ProcessInstanceResponseResultOpinions {
        this['title'] = title;
        return this;
    }
    public withRounds(rounds: string): ProcessInstanceResponseResultOpinions {
        this['rounds'] = rounds;
        return this;
    }
    public withOpinion(opinion: string): ProcessInstanceResponseResultOpinions {
        this['opinion'] = opinion;
        return this;
    }
    public withDescription(description: string): ProcessInstanceResponseResultOpinions {
        this['description'] = description;
        return this;
    }
    public withModifiedBy(modifiedBy: string): ProcessInstanceResponseResultOpinions {
        this['modified_by'] = modifiedBy;
        return this;
    }
    public set modifiedBy(modifiedBy: string  | undefined) {
        this['modified_by'] = modifiedBy;
    }
    public get modifiedBy(): string | undefined {
        return this['modified_by'];
    }
    public withModifiedDate(modifiedDate: string): ProcessInstanceResponseResultOpinions {
        this['modified_date'] = modifiedDate;
        return this;
    }
    public set modifiedDate(modifiedDate: string  | undefined) {
        this['modified_date'] = modifiedDate;
    }
    public get modifiedDate(): string | undefined {
        return this['modified_date'];
    }
    public withCreatedBy(createdBy: ProcessInstanceResponseResultCreatedBy1): ProcessInstanceResponseResultOpinions {
        this['created_by'] = createdBy;
        return this;
    }
    public set createdBy(createdBy: ProcessInstanceResponseResultCreatedBy1  | undefined) {
        this['created_by'] = createdBy;
    }
    public get createdBy(): ProcessInstanceResponseResultCreatedBy1 | undefined {
        return this['created_by'];
    }
    public withCreatedDate(createdDate: string): ProcessInstanceResponseResultOpinions {
        this['created_date'] = createdDate;
        return this;
    }
    public set createdDate(createdDate: string  | undefined) {
        this['created_date'] = createdDate;
    }
    public get createdDate(): string | undefined {
        return this['created_date'];
    }
    public withTenantId(tenantId: string): ProcessInstanceResponseResultOpinions {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withDomainId(domainId: string): ProcessInstanceResponseResultOpinions {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withIssueCategory(issueCategory: string): ProcessInstanceResponseResultOpinions {
        this['issue_category'] = issueCategory;
        return this;
    }
    public set issueCategory(issueCategory: string  | undefined) {
        this['issue_category'] = issueCategory;
    }
    public get issueCategory(): string | undefined {
        return this['issue_category'];
    }
    public withIssueId(issueId: string): ProcessInstanceResponseResultOpinions {
        this['issue_id'] = issueId;
        return this;
    }
    public set issueId(issueId: string  | undefined) {
        this['issue_id'] = issueId;
    }
    public get issueId(): string | undefined {
        return this['issue_id'];
    }
    public withCurrOwner(currOwner: ProcessInstanceResponseResultCurrOwner): ProcessInstanceResponseResultOpinions {
        this['curr_owner'] = currOwner;
        return this;
    }
    public set currOwner(currOwner: ProcessInstanceResponseResultCurrOwner  | undefined) {
        this['curr_owner'] = currOwner;
    }
    public get currOwner(): ProcessInstanceResponseResultCurrOwner | undefined {
        return this['curr_owner'];
    }
    public withCoId(coId: string): ProcessInstanceResponseResultOpinions {
        this['co_id'] = coId;
        return this;
    }
    public set coId(coId: string  | undefined) {
        this['co_id'] = coId;
    }
    public get coId(): string | undefined {
        return this['co_id'];
    }
    public withUserId(userId: string): ProcessInstanceResponseResultOpinions {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withOpinionIssueId(opinionIssueId: string): ProcessInstanceResponseResultOpinions {
        this['opinion_issue_id'] = opinionIssueId;
        return this;
    }
    public set opinionIssueId(opinionIssueId: string  | undefined) {
        this['opinion_issue_id'] = opinionIssueId;
    }
    public get opinionIssueId(): string | undefined {
        return this['opinion_issue_id'];
    }
    public withOpinionIssueCategory(opinionIssueCategory: string): ProcessInstanceResponseResultOpinions {
        this['opinion_issue_category'] = opinionIssueCategory;
        return this;
    }
    public set opinionIssueCategory(opinionIssueCategory: string  | undefined) {
        this['opinion_issue_category'] = opinionIssueCategory;
    }
    public get opinionIssueCategory(): string | undefined {
        return this['opinion_issue_category'];
    }
}