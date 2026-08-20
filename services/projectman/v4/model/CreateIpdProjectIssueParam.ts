

export class CreateIpdProjectIssueParam {
    public title?: string;
    public description?: string;
    public status?: string;
    private 'src_domain'?: string;
    private 'submitted_by'?: string;
    private 'domain_id'?: string;
    public recipient?: Array<string>;
    private 'expect_delivery_time'?: number;
    public priority?: string;
    private 'assigned_cc'?: Array<string>;
    public category?: string;
    public assignee?: string;
    private 'plan_pi'?: string;
    private 'plan_iteration'?: string;
    private 'plan_start_date'?: number;
    private 'plan_end_date'?: number;
    private 'workload_man_day'?: number;
    private 'business_domain'?: string;
    private 'need_break'?: string;
    public constructor() { 
    }
    public withTitle(title: string): CreateIpdProjectIssueParam {
        this['title'] = title;
        return this;
    }
    public withDescription(description: string): CreateIpdProjectIssueParam {
        this['description'] = description;
        return this;
    }
    public withStatus(status: string): CreateIpdProjectIssueParam {
        this['status'] = status;
        return this;
    }
    public withSrcDomain(srcDomain: string): CreateIpdProjectIssueParam {
        this['src_domain'] = srcDomain;
        return this;
    }
    public set srcDomain(srcDomain: string  | undefined) {
        this['src_domain'] = srcDomain;
    }
    public get srcDomain(): string | undefined {
        return this['src_domain'];
    }
    public withSubmittedBy(submittedBy: string): CreateIpdProjectIssueParam {
        this['submitted_by'] = submittedBy;
        return this;
    }
    public set submittedBy(submittedBy: string  | undefined) {
        this['submitted_by'] = submittedBy;
    }
    public get submittedBy(): string | undefined {
        return this['submitted_by'];
    }
    public withDomainId(domainId: string): CreateIpdProjectIssueParam {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withRecipient(recipient: Array<string>): CreateIpdProjectIssueParam {
        this['recipient'] = recipient;
        return this;
    }
    public withExpectDeliveryTime(expectDeliveryTime: number): CreateIpdProjectIssueParam {
        this['expect_delivery_time'] = expectDeliveryTime;
        return this;
    }
    public set expectDeliveryTime(expectDeliveryTime: number  | undefined) {
        this['expect_delivery_time'] = expectDeliveryTime;
    }
    public get expectDeliveryTime(): number | undefined {
        return this['expect_delivery_time'];
    }
    public withPriority(priority: string): CreateIpdProjectIssueParam {
        this['priority'] = priority;
        return this;
    }
    public withAssignedCc(assignedCc: Array<string>): CreateIpdProjectIssueParam {
        this['assigned_cc'] = assignedCc;
        return this;
    }
    public set assignedCc(assignedCc: Array<string>  | undefined) {
        this['assigned_cc'] = assignedCc;
    }
    public get assignedCc(): Array<string> | undefined {
        return this['assigned_cc'];
    }
    public withCategory(category: string): CreateIpdProjectIssueParam {
        this['category'] = category;
        return this;
    }
    public withAssignee(assignee: string): CreateIpdProjectIssueParam {
        this['assignee'] = assignee;
        return this;
    }
    public withPlanPi(planPi: string): CreateIpdProjectIssueParam {
        this['plan_pi'] = planPi;
        return this;
    }
    public set planPi(planPi: string  | undefined) {
        this['plan_pi'] = planPi;
    }
    public get planPi(): string | undefined {
        return this['plan_pi'];
    }
    public withPlanIteration(planIteration: string): CreateIpdProjectIssueParam {
        this['plan_iteration'] = planIteration;
        return this;
    }
    public set planIteration(planIteration: string  | undefined) {
        this['plan_iteration'] = planIteration;
    }
    public get planIteration(): string | undefined {
        return this['plan_iteration'];
    }
    public withPlanStartDate(planStartDate: number): CreateIpdProjectIssueParam {
        this['plan_start_date'] = planStartDate;
        return this;
    }
    public set planStartDate(planStartDate: number  | undefined) {
        this['plan_start_date'] = planStartDate;
    }
    public get planStartDate(): number | undefined {
        return this['plan_start_date'];
    }
    public withPlanEndDate(planEndDate: number): CreateIpdProjectIssueParam {
        this['plan_end_date'] = planEndDate;
        return this;
    }
    public set planEndDate(planEndDate: number  | undefined) {
        this['plan_end_date'] = planEndDate;
    }
    public get planEndDate(): number | undefined {
        return this['plan_end_date'];
    }
    public withWorkloadManDay(workloadManDay: number): CreateIpdProjectIssueParam {
        this['workload_man_day'] = workloadManDay;
        return this;
    }
    public set workloadManDay(workloadManDay: number  | undefined) {
        this['workload_man_day'] = workloadManDay;
    }
    public get workloadManDay(): number | undefined {
        return this['workload_man_day'];
    }
    public withBusinessDomain(businessDomain: string): CreateIpdProjectIssueParam {
        this['business_domain'] = businessDomain;
        return this;
    }
    public set businessDomain(businessDomain: string  | undefined) {
        this['business_domain'] = businessDomain;
    }
    public get businessDomain(): string | undefined {
        return this['business_domain'];
    }
    public withNeedBreak(needBreak: string): CreateIpdProjectIssueParam {
        this['need_break'] = needBreak;
        return this;
    }
    public set needBreak(needBreak: string  | undefined) {
        this['need_break'] = needBreak;
    }
    public get needBreak(): string | undefined {
        return this['need_break'];
    }
}