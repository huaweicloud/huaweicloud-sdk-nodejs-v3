

export class ShowDomainRoleAssignmentsRequest {
    private 'domain_id': string | undefined;
    private 'role_id'?: string | undefined;
    public subject?: string;
    private 'subject.user_id'?: string | undefined;
    private 'subject.group_id'?: string | undefined;
    private 'subject.agency_id'?: string | undefined;
    public scope?: string;
    private 'scope.project_id'?: string | undefined;
    private 'scope.domain_id'?: string | undefined;
    private 'scope.enterprise_projects_id'?: string | undefined;
    private 'is_inherited'?: boolean | undefined;
    private 'include_group'?: boolean | undefined;
    public page?: string;
    private 'per_page'?: string | undefined;
    public constructor(domainId?: any) { 
        this['domain_id'] = domainId;
    }
    public withDomainId(domainId: string): ShowDomainRoleAssignmentsRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId() {
        return this['domain_id'];
    }
    public withRoleId(roleId: string): ShowDomainRoleAssignmentsRequest {
        this['role_id'] = roleId;
        return this;
    }
    public set roleId(roleId: string | undefined) {
        this['role_id'] = roleId;
    }
    public get roleId() {
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
    public set subjectUserId(subjectUserId: string | undefined) {
        this['subject.user_id'] = subjectUserId;
    }
    public get subjectUserId() {
        return this['subject.user_id'];
    }
    public withSubjectGroupId(subjectGroupId: string): ShowDomainRoleAssignmentsRequest {
        this['subject.group_id'] = subjectGroupId;
        return this;
    }
    public set subjectGroupId(subjectGroupId: string | undefined) {
        this['subject.group_id'] = subjectGroupId;
    }
    public get subjectGroupId() {
        return this['subject.group_id'];
    }
    public withSubjectAgencyId(subjectAgencyId: string): ShowDomainRoleAssignmentsRequest {
        this['subject.agency_id'] = subjectAgencyId;
        return this;
    }
    public set subjectAgencyId(subjectAgencyId: string | undefined) {
        this['subject.agency_id'] = subjectAgencyId;
    }
    public get subjectAgencyId() {
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
    public set scopeProjectId(scopeProjectId: string | undefined) {
        this['scope.project_id'] = scopeProjectId;
    }
    public get scopeProjectId() {
        return this['scope.project_id'];
    }
    public withScopeDomainId(scopeDomainId: string): ShowDomainRoleAssignmentsRequest {
        this['scope.domain_id'] = scopeDomainId;
        return this;
    }
    public set scopeDomainId(scopeDomainId: string | undefined) {
        this['scope.domain_id'] = scopeDomainId;
    }
    public get scopeDomainId() {
        return this['scope.domain_id'];
    }
    public withScopeEnterpriseProjectsId(scopeEnterpriseProjectsId: string): ShowDomainRoleAssignmentsRequest {
        this['scope.enterprise_projects_id'] = scopeEnterpriseProjectsId;
        return this;
    }
    public set scopeEnterpriseProjectsId(scopeEnterpriseProjectsId: string | undefined) {
        this['scope.enterprise_projects_id'] = scopeEnterpriseProjectsId;
    }
    public get scopeEnterpriseProjectsId() {
        return this['scope.enterprise_projects_id'];
    }
    public withIsInherited(isInherited: boolean): ShowDomainRoleAssignmentsRequest {
        this['is_inherited'] = isInherited;
        return this;
    }
    public set isInherited(isInherited: boolean | undefined) {
        this['is_inherited'] = isInherited;
    }
    public get isInherited() {
        return this['is_inherited'];
    }
    public withIncludeGroup(includeGroup: boolean): ShowDomainRoleAssignmentsRequest {
        this['include_group'] = includeGroup;
        return this;
    }
    public set includeGroup(includeGroup: boolean | undefined) {
        this['include_group'] = includeGroup;
    }
    public get includeGroup() {
        return this['include_group'];
    }
    public withPage(page: string): ShowDomainRoleAssignmentsRequest {
        this['page'] = page;
        return this;
    }
    public withPerPage(perPage: string): ShowDomainRoleAssignmentsRequest {
        this['per_page'] = perPage;
        return this;
    }
    public set perPage(perPage: string | undefined) {
        this['per_page'] = perPage;
    }
    public get perPage() {
        return this['per_page'];
    }
}