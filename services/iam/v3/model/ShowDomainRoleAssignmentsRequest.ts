

export class ShowDomainRoleAssignmentsRequest {
    private 'domain_id'?: string;
    private 'role_id'?: string;
    public subject?: string;
    private 'subject.user_id'?: string;
    private 'subject.group_id'?: string;
    private 'subject.agency_id'?: string;
    public scope?: string;
    private 'scope.project_id'?: string;
    private 'scope.domain_id'?: string;
    private 'scope.enterprise_projects_id'?: string;
    private 'is_inherited'?: boolean;
    private 'include_group'?: boolean;
    public page?: number;
    private 'per_page'?: number;
    public constructor(domainId?: string) { 
        this['domain_id'] = domainId;
    }
    public withDomainId(domainId: string): ShowDomainRoleAssignmentsRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withRoleId(roleId: string): ShowDomainRoleAssignmentsRequest {
        this['role_id'] = roleId;
        return this;
    }
    public set roleId(roleId: string  | undefined) {
        this['role_id'] = roleId;
    }
    public get roleId(): string | undefined {
        return this['role_id'];
    }
    public withSubject(subject: string): ShowDomainRoleAssignmentsRequest {
        this['subject'] = subject;
        return this;
    }
    public withSubjectUserId(subjectUserId: string): ShowDomainRoleAssignmentsRequest {
        this['subject.user_id'] = subjectUserId;
        return this;
    }
    public set subjectUserId(subjectUserId: string  | undefined) {
        this['subject.user_id'] = subjectUserId;
    }
    public get subjectUserId(): string | undefined {
        return this['subject.user_id'];
    }
    public withSubjectGroupId(subjectGroupId: string): ShowDomainRoleAssignmentsRequest {
        this['subject.group_id'] = subjectGroupId;
        return this;
    }
    public set subjectGroupId(subjectGroupId: string  | undefined) {
        this['subject.group_id'] = subjectGroupId;
    }
    public get subjectGroupId(): string | undefined {
        return this['subject.group_id'];
    }
    public withSubjectAgencyId(subjectAgencyId: string): ShowDomainRoleAssignmentsRequest {
        this['subject.agency_id'] = subjectAgencyId;
        return this;
    }
    public set subjectAgencyId(subjectAgencyId: string  | undefined) {
        this['subject.agency_id'] = subjectAgencyId;
    }
    public get subjectAgencyId(): string | undefined {
        return this['subject.agency_id'];
    }
    public withScope(scope: string): ShowDomainRoleAssignmentsRequest {
        this['scope'] = scope;
        return this;
    }
    public withScopeProjectId(scopeProjectId: string): ShowDomainRoleAssignmentsRequest {
        this['scope.project_id'] = scopeProjectId;
        return this;
    }
    public set scopeProjectId(scopeProjectId: string  | undefined) {
        this['scope.project_id'] = scopeProjectId;
    }
    public get scopeProjectId(): string | undefined {
        return this['scope.project_id'];
    }
    public withScopeDomainId(scopeDomainId: string): ShowDomainRoleAssignmentsRequest {
        this['scope.domain_id'] = scopeDomainId;
        return this;
    }
    public set scopeDomainId(scopeDomainId: string  | undefined) {
        this['scope.domain_id'] = scopeDomainId;
    }
    public get scopeDomainId(): string | undefined {
        return this['scope.domain_id'];
    }
    public withScopeEnterpriseProjectsId(scopeEnterpriseProjectsId: string): ShowDomainRoleAssignmentsRequest {
        this['scope.enterprise_projects_id'] = scopeEnterpriseProjectsId;
        return this;
    }
    public set scopeEnterpriseProjectsId(scopeEnterpriseProjectsId: string  | undefined) {
        this['scope.enterprise_projects_id'] = scopeEnterpriseProjectsId;
    }
    public get scopeEnterpriseProjectsId(): string | undefined {
        return this['scope.enterprise_projects_id'];
    }
    public withIsInherited(isInherited: boolean): ShowDomainRoleAssignmentsRequest {
        this['is_inherited'] = isInherited;
        return this;
    }
    public set isInherited(isInherited: boolean  | undefined) {
        this['is_inherited'] = isInherited;
    }
    public get isInherited(): boolean | undefined {
        return this['is_inherited'];
    }
    public withIncludeGroup(includeGroup: boolean): ShowDomainRoleAssignmentsRequest {
        this['include_group'] = includeGroup;
        return this;
    }
    public set includeGroup(includeGroup: boolean  | undefined) {
        this['include_group'] = includeGroup;
    }
    public get includeGroup(): boolean | undefined {
        return this['include_group'];
    }
    public withPage(page: number): ShowDomainRoleAssignmentsRequest {
        this['page'] = page;
        return this;
    }
    public withPerPage(perPage: number): ShowDomainRoleAssignmentsRequest {
        this['per_page'] = perPage;
        return this;
    }
    public set perPage(perPage: number  | undefined) {
        this['per_page'] = perPage;
    }
    public get perPage(): number | undefined {
        return this['per_page'];
    }
}