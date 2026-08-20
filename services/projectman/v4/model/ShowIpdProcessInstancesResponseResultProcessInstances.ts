import { ShowIpdProcessInstancesResponseResultOpinions } from './ShowIpdProcessInstancesResponseResultOpinions';
import { ShowIpdProcessInstancesResponseResultStatus } from './ShowIpdProcessInstancesResponseResultStatus';
import { UserObject } from './UserObject';
import { UserVO } from './UserVO';


export class ShowIpdProcessInstancesResponseResultProcessInstances {
    public cc?: string;
    public approver?: string;
    private 'closed_time'?: string;
    public reviewer?: string;
    public type?: string;
    public title?: string;
    private 'modified_date'?: string;
    private 'created_by'?: UserVO;
    private 'domain_id'?: string;
    private 'number'?: string;
    private 'need_approval'?: string;
    private 'modified_by'?: UserVO;
    private 'approval_time'?: string;
    private 'plan_end_date'?: string;
    public id?: string;
    public state?: string;
    private 'created_date'?: string;
    public category?: string;
    private 'plan_start_date'?: string;
    public status?: ShowIpdProcessInstancesResponseResultStatus;
    public ccbs?: Array<UserObject>;
    public opinions?: Array<ShowIpdProcessInstancesResponseResultOpinions>;
    public constructor() { 
    }
    public withCc(cc: string): ShowIpdProcessInstancesResponseResultProcessInstances {
        this['cc'] = cc;
        return this;
    }
    public withApprover(approver: string): ShowIpdProcessInstancesResponseResultProcessInstances {
        this['approver'] = approver;
        return this;
    }
    public withClosedTime(closedTime: string): ShowIpdProcessInstancesResponseResultProcessInstances {
        this['closed_time'] = closedTime;
        return this;
    }
    public set closedTime(closedTime: string  | undefined) {
        this['closed_time'] = closedTime;
    }
    public get closedTime(): string | undefined {
        return this['closed_time'];
    }
    public withReviewer(reviewer: string): ShowIpdProcessInstancesResponseResultProcessInstances {
        this['reviewer'] = reviewer;
        return this;
    }
    public withType(type: string): ShowIpdProcessInstancesResponseResultProcessInstances {
        this['type'] = type;
        return this;
    }
    public withTitle(title: string): ShowIpdProcessInstancesResponseResultProcessInstances {
        this['title'] = title;
        return this;
    }
    public withModifiedDate(modifiedDate: string): ShowIpdProcessInstancesResponseResultProcessInstances {
        this['modified_date'] = modifiedDate;
        return this;
    }
    public set modifiedDate(modifiedDate: string  | undefined) {
        this['modified_date'] = modifiedDate;
    }
    public get modifiedDate(): string | undefined {
        return this['modified_date'];
    }
    public withCreatedBy(createdBy: UserVO): ShowIpdProcessInstancesResponseResultProcessInstances {
        this['created_by'] = createdBy;
        return this;
    }
    public set createdBy(createdBy: UserVO  | undefined) {
        this['created_by'] = createdBy;
    }
    public get createdBy(): UserVO | undefined {
        return this['created_by'];
    }
    public withDomainId(domainId: string): ShowIpdProcessInstancesResponseResultProcessInstances {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withModelNumber(modelNumber: string): ShowIpdProcessInstancesResponseResultProcessInstances {
        this['number'] = modelNumber;
        return this;
    }
    public set modelNumber(modelNumber: string  | undefined) {
        this['number'] = modelNumber;
    }
    public get modelNumber(): string | undefined {
        return this['number'];
    }
    public withNeedApproval(needApproval: string): ShowIpdProcessInstancesResponseResultProcessInstances {
        this['need_approval'] = needApproval;
        return this;
    }
    public set needApproval(needApproval: string  | undefined) {
        this['need_approval'] = needApproval;
    }
    public get needApproval(): string | undefined {
        return this['need_approval'];
    }
    public withModifiedBy(modifiedBy: UserVO): ShowIpdProcessInstancesResponseResultProcessInstances {
        this['modified_by'] = modifiedBy;
        return this;
    }
    public set modifiedBy(modifiedBy: UserVO  | undefined) {
        this['modified_by'] = modifiedBy;
    }
    public get modifiedBy(): UserVO | undefined {
        return this['modified_by'];
    }
    public withApprovalTime(approvalTime: string): ShowIpdProcessInstancesResponseResultProcessInstances {
        this['approval_time'] = approvalTime;
        return this;
    }
    public set approvalTime(approvalTime: string  | undefined) {
        this['approval_time'] = approvalTime;
    }
    public get approvalTime(): string | undefined {
        return this['approval_time'];
    }
    public withPlanEndDate(planEndDate: string): ShowIpdProcessInstancesResponseResultProcessInstances {
        this['plan_end_date'] = planEndDate;
        return this;
    }
    public set planEndDate(planEndDate: string  | undefined) {
        this['plan_end_date'] = planEndDate;
    }
    public get planEndDate(): string | undefined {
        return this['plan_end_date'];
    }
    public withId(id: string): ShowIpdProcessInstancesResponseResultProcessInstances {
        this['id'] = id;
        return this;
    }
    public withState(state: string): ShowIpdProcessInstancesResponseResultProcessInstances {
        this['state'] = state;
        return this;
    }
    public withCreatedDate(createdDate: string): ShowIpdProcessInstancesResponseResultProcessInstances {
        this['created_date'] = createdDate;
        return this;
    }
    public set createdDate(createdDate: string  | undefined) {
        this['created_date'] = createdDate;
    }
    public get createdDate(): string | undefined {
        return this['created_date'];
    }
    public withCategory(category: string): ShowIpdProcessInstancesResponseResultProcessInstances {
        this['category'] = category;
        return this;
    }
    public withPlanStartDate(planStartDate: string): ShowIpdProcessInstancesResponseResultProcessInstances {
        this['plan_start_date'] = planStartDate;
        return this;
    }
    public set planStartDate(planStartDate: string  | undefined) {
        this['plan_start_date'] = planStartDate;
    }
    public get planStartDate(): string | undefined {
        return this['plan_start_date'];
    }
    public withStatus(status: ShowIpdProcessInstancesResponseResultStatus): ShowIpdProcessInstancesResponseResultProcessInstances {
        this['status'] = status;
        return this;
    }
    public withCcbs(ccbs: Array<UserObject>): ShowIpdProcessInstancesResponseResultProcessInstances {
        this['ccbs'] = ccbs;
        return this;
    }
    public withOpinions(opinions: Array<ShowIpdProcessInstancesResponseResultOpinions>): ShowIpdProcessInstancesResponseResultProcessInstances {
        this['opinions'] = opinions;
        return this;
    }
}