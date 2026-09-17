import { FieldCodeValuePair } from './FieldCodeValuePair';
import { LabelEntity } from './LabelEntity';
import { UserEntity } from './UserEntity';


export class IssueCreateEntity {
    public title?: string;
    public description?: string;
    public category?: string;
    private 'category_layer_id'?: string;
    private 'parent_id'?: string;
    public status?: string;
    public assignee?: UserEntity;
    public recipient?: Array<UserEntity>;
    private 'assigned_cc'?: Array<UserEntity>;
    private 'plan_end_date'?: string;
    public workload?: string;
    public link?: string;
    public labels?: Array<LabelEntity>;
    private 'custom_fields'?: Array<FieldCodeValuePair>;
    public ir2feature?: string;
    public priority?: string;
    private 'related_network_security'?: string;
    public collaboratives?: string;
    private 'business_domain'?: string;
    private 'plan_pi'?: string;
    private 'submitted_by'?: Array<UserEntity>;
    public ir2rr?: string;
    private 'feature_set'?: string;
    private 'security_level'?: string;
    public constructor(title?: string, description?: string, category?: string, categoryLayerId?: string, parentId?: string, status?: string, assignee?: UserEntity) { 
        this['title'] = title;
        this['description'] = description;
        this['category'] = category;
        this['category_layer_id'] = categoryLayerId;
        this['parent_id'] = parentId;
        this['status'] = status;
        this['assignee'] = assignee;
    }
    public withTitle(title: string): IssueCreateEntity {
        this['title'] = title;
        return this;
    }
    public withDescription(description: string): IssueCreateEntity {
        this['description'] = description;
        return this;
    }
    public withCategory(category: string): IssueCreateEntity {
        this['category'] = category;
        return this;
    }
    public withCategoryLayerId(categoryLayerId: string): IssueCreateEntity {
        this['category_layer_id'] = categoryLayerId;
        return this;
    }
    public set categoryLayerId(categoryLayerId: string  | undefined) {
        this['category_layer_id'] = categoryLayerId;
    }
    public get categoryLayerId(): string | undefined {
        return this['category_layer_id'];
    }
    public withParentId(parentId: string): IssueCreateEntity {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: string  | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId(): string | undefined {
        return this['parent_id'];
    }
    public withStatus(status: string): IssueCreateEntity {
        this['status'] = status;
        return this;
    }
    public withAssignee(assignee: UserEntity): IssueCreateEntity {
        this['assignee'] = assignee;
        return this;
    }
    public withRecipient(recipient: Array<UserEntity>): IssueCreateEntity {
        this['recipient'] = recipient;
        return this;
    }
    public withAssignedCc(assignedCc: Array<UserEntity>): IssueCreateEntity {
        this['assigned_cc'] = assignedCc;
        return this;
    }
    public set assignedCc(assignedCc: Array<UserEntity>  | undefined) {
        this['assigned_cc'] = assignedCc;
    }
    public get assignedCc(): Array<UserEntity> | undefined {
        return this['assigned_cc'];
    }
    public withPlanEndDate(planEndDate: string): IssueCreateEntity {
        this['plan_end_date'] = planEndDate;
        return this;
    }
    public set planEndDate(planEndDate: string  | undefined) {
        this['plan_end_date'] = planEndDate;
    }
    public get planEndDate(): string | undefined {
        return this['plan_end_date'];
    }
    public withWorkload(workload: string): IssueCreateEntity {
        this['workload'] = workload;
        return this;
    }
    public withLink(link: string): IssueCreateEntity {
        this['link'] = link;
        return this;
    }
    public withLabels(labels: Array<LabelEntity>): IssueCreateEntity {
        this['labels'] = labels;
        return this;
    }
    public withCustomFields(customFields: Array<FieldCodeValuePair>): IssueCreateEntity {
        this['custom_fields'] = customFields;
        return this;
    }
    public set customFields(customFields: Array<FieldCodeValuePair>  | undefined) {
        this['custom_fields'] = customFields;
    }
    public get customFields(): Array<FieldCodeValuePair> | undefined {
        return this['custom_fields'];
    }
    public withIr2feature(ir2feature: string): IssueCreateEntity {
        this['ir2feature'] = ir2feature;
        return this;
    }
    public withPriority(priority: string): IssueCreateEntity {
        this['priority'] = priority;
        return this;
    }
    public withRelatedNetworkSecurity(relatedNetworkSecurity: string): IssueCreateEntity {
        this['related_network_security'] = relatedNetworkSecurity;
        return this;
    }
    public set relatedNetworkSecurity(relatedNetworkSecurity: string  | undefined) {
        this['related_network_security'] = relatedNetworkSecurity;
    }
    public get relatedNetworkSecurity(): string | undefined {
        return this['related_network_security'];
    }
    public withCollaboratives(collaboratives: string): IssueCreateEntity {
        this['collaboratives'] = collaboratives;
        return this;
    }
    public withBusinessDomain(businessDomain: string): IssueCreateEntity {
        this['business_domain'] = businessDomain;
        return this;
    }
    public set businessDomain(businessDomain: string  | undefined) {
        this['business_domain'] = businessDomain;
    }
    public get businessDomain(): string | undefined {
        return this['business_domain'];
    }
    public withPlanPi(planPi: string): IssueCreateEntity {
        this['plan_pi'] = planPi;
        return this;
    }
    public set planPi(planPi: string  | undefined) {
        this['plan_pi'] = planPi;
    }
    public get planPi(): string | undefined {
        return this['plan_pi'];
    }
    public withSubmittedBy(submittedBy: Array<UserEntity>): IssueCreateEntity {
        this['submitted_by'] = submittedBy;
        return this;
    }
    public set submittedBy(submittedBy: Array<UserEntity>  | undefined) {
        this['submitted_by'] = submittedBy;
    }
    public get submittedBy(): Array<UserEntity> | undefined {
        return this['submitted_by'];
    }
    public withIr2rr(ir2rr: string): IssueCreateEntity {
        this['ir2rr'] = ir2rr;
        return this;
    }
    public withFeatureSet(featureSet: string): IssueCreateEntity {
        this['feature_set'] = featureSet;
        return this;
    }
    public set featureSet(featureSet: string  | undefined) {
        this['feature_set'] = featureSet;
    }
    public get featureSet(): string | undefined {
        return this['feature_set'];
    }
    public withSecurityLevel(securityLevel: string): IssueCreateEntity {
        this['security_level'] = securityLevel;
        return this;
    }
    public set securityLevel(securityLevel: string  | undefined) {
        this['security_level'] = securityLevel;
    }
    public get securityLevel(): string | undefined {
        return this['security_level'];
    }
}