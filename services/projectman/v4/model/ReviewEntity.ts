import { COEntity } from './COEntity';
import { CcbEntity } from './CcbEntity';
import { StatusEntity } from './StatusEntity';
import { UserEntity } from './UserEntity';


export class ReviewEntity {
    public id?: string;
    private 'number'?: string;
    public state?: string;
    public title?: string;
    public category?: string;
    private 'created_by'?: UserEntity;
    private 'modified_by'?: UserEntity;
    private 'assigned_cc'?: Array<UserEntity>;
    private 'created_time'?: string;
    private 'modified_time'?: string;
    private 'plan_end_date'?: string;
    private 'plan_start_date'?: string;
    private 'close_time'?: string;
    public status?: StatusEntity;
    public description?: string;
    private 'closed_time'?: string;
    public approver?: string;
    public reviewer?: string;
    public cos?: Array<COEntity>;
    public ccbs?: Array<CcbEntity>;
    private 'old_status'?: StatusEntity;
    public cc?: Array<UserEntity>;
    public constructor() { 
    }
    public withId(id: string): ReviewEntity {
        this['id'] = id;
        return this;
    }
    public withModelNumber(modelNumber: string): ReviewEntity {
        this['number'] = modelNumber;
        return this;
    }
    public set modelNumber(modelNumber: string  | undefined) {
        this['number'] = modelNumber;
    }
    public get modelNumber(): string | undefined {
        return this['number'];
    }
    public withState(state: string): ReviewEntity {
        this['state'] = state;
        return this;
    }
    public withTitle(title: string): ReviewEntity {
        this['title'] = title;
        return this;
    }
    public withCategory(category: string): ReviewEntity {
        this['category'] = category;
        return this;
    }
    public withCreatedBy(createdBy: UserEntity): ReviewEntity {
        this['created_by'] = createdBy;
        return this;
    }
    public set createdBy(createdBy: UserEntity  | undefined) {
        this['created_by'] = createdBy;
    }
    public get createdBy(): UserEntity | undefined {
        return this['created_by'];
    }
    public withModifiedBy(modifiedBy: UserEntity): ReviewEntity {
        this['modified_by'] = modifiedBy;
        return this;
    }
    public set modifiedBy(modifiedBy: UserEntity  | undefined) {
        this['modified_by'] = modifiedBy;
    }
    public get modifiedBy(): UserEntity | undefined {
        return this['modified_by'];
    }
    public withAssignedCc(assignedCc: Array<UserEntity>): ReviewEntity {
        this['assigned_cc'] = assignedCc;
        return this;
    }
    public set assignedCc(assignedCc: Array<UserEntity>  | undefined) {
        this['assigned_cc'] = assignedCc;
    }
    public get assignedCc(): Array<UserEntity> | undefined {
        return this['assigned_cc'];
    }
    public withCreatedTime(createdTime: string): ReviewEntity {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: string  | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime(): string | undefined {
        return this['created_time'];
    }
    public withModifiedTime(modifiedTime: string): ReviewEntity {
        this['modified_time'] = modifiedTime;
        return this;
    }
    public set modifiedTime(modifiedTime: string  | undefined) {
        this['modified_time'] = modifiedTime;
    }
    public get modifiedTime(): string | undefined {
        return this['modified_time'];
    }
    public withPlanEndDate(planEndDate: string): ReviewEntity {
        this['plan_end_date'] = planEndDate;
        return this;
    }
    public set planEndDate(planEndDate: string  | undefined) {
        this['plan_end_date'] = planEndDate;
    }
    public get planEndDate(): string | undefined {
        return this['plan_end_date'];
    }
    public withPlanStartDate(planStartDate: string): ReviewEntity {
        this['plan_start_date'] = planStartDate;
        return this;
    }
    public set planStartDate(planStartDate: string  | undefined) {
        this['plan_start_date'] = planStartDate;
    }
    public get planStartDate(): string | undefined {
        return this['plan_start_date'];
    }
    public withCloseTime(closeTime: string): ReviewEntity {
        this['close_time'] = closeTime;
        return this;
    }
    public set closeTime(closeTime: string  | undefined) {
        this['close_time'] = closeTime;
    }
    public get closeTime(): string | undefined {
        return this['close_time'];
    }
    public withStatus(status: StatusEntity): ReviewEntity {
        this['status'] = status;
        return this;
    }
    public withDescription(description: string): ReviewEntity {
        this['description'] = description;
        return this;
    }
    public withClosedTime(closedTime: string): ReviewEntity {
        this['closed_time'] = closedTime;
        return this;
    }
    public set closedTime(closedTime: string  | undefined) {
        this['closed_time'] = closedTime;
    }
    public get closedTime(): string | undefined {
        return this['closed_time'];
    }
    public withApprover(approver: string): ReviewEntity {
        this['approver'] = approver;
        return this;
    }
    public withReviewer(reviewer: string): ReviewEntity {
        this['reviewer'] = reviewer;
        return this;
    }
    public withCos(cos: Array<COEntity>): ReviewEntity {
        this['cos'] = cos;
        return this;
    }
    public withCcbs(ccbs: Array<CcbEntity>): ReviewEntity {
        this['ccbs'] = ccbs;
        return this;
    }
    public withOldStatus(oldStatus: StatusEntity): ReviewEntity {
        this['old_status'] = oldStatus;
        return this;
    }
    public set oldStatus(oldStatus: StatusEntity  | undefined) {
        this['old_status'] = oldStatus;
    }
    public get oldStatus(): StatusEntity | undefined {
        return this['old_status'];
    }
    public withCc(cc: Array<UserEntity>): ReviewEntity {
        this['cc'] = cc;
        return this;
    }
}