import { IssueUser } from './IssueUser';


export class IssueAttrHistoryRecord {
    private 'field_key'?: string;
    private 'field_name'?: string;
    public id?: number;
    private 'issue_id'?: number;
    private 'new_value'?: string;
    private 'old_value'?: string;
    private 'operated_time'?: number;
    public operation?: string;
    public operator?: IssueUser;
    public property?: string;
    public constructor() { 
    }
    public withFieldKey(fieldKey: string): IssueAttrHistoryRecord {
        this['field_key'] = fieldKey;
        return this;
    }
    public set fieldKey(fieldKey: string  | undefined) {
        this['field_key'] = fieldKey;
    }
    public get fieldKey(): string | undefined {
        return this['field_key'];
    }
    public withFieldName(fieldName: string): IssueAttrHistoryRecord {
        this['field_name'] = fieldName;
        return this;
    }
    public set fieldName(fieldName: string  | undefined) {
        this['field_name'] = fieldName;
    }
    public get fieldName(): string | undefined {
        return this['field_name'];
    }
    public withId(id: number): IssueAttrHistoryRecord {
        this['id'] = id;
        return this;
    }
    public withIssueId(issueId: number): IssueAttrHistoryRecord {
        this['issue_id'] = issueId;
        return this;
    }
    public set issueId(issueId: number  | undefined) {
        this['issue_id'] = issueId;
    }
    public get issueId(): number | undefined {
        return this['issue_id'];
    }
    public withNewValue(newValue: string): IssueAttrHistoryRecord {
        this['new_value'] = newValue;
        return this;
    }
    public set newValue(newValue: string  | undefined) {
        this['new_value'] = newValue;
    }
    public get newValue(): string | undefined {
        return this['new_value'];
    }
    public withOldValue(oldValue: string): IssueAttrHistoryRecord {
        this['old_value'] = oldValue;
        return this;
    }
    public set oldValue(oldValue: string  | undefined) {
        this['old_value'] = oldValue;
    }
    public get oldValue(): string | undefined {
        return this['old_value'];
    }
    public withOperatedTime(operatedTime: number): IssueAttrHistoryRecord {
        this['operated_time'] = operatedTime;
        return this;
    }
    public set operatedTime(operatedTime: number  | undefined) {
        this['operated_time'] = operatedTime;
    }
    public get operatedTime(): number | undefined {
        return this['operated_time'];
    }
    public withOperation(operation: string): IssueAttrHistoryRecord {
        this['operation'] = operation;
        return this;
    }
    public withOperator(operator: IssueUser): IssueAttrHistoryRecord {
        this['operator'] = operator;
        return this;
    }
    public withProperty(property: string): IssueAttrHistoryRecord {
        this['property'] = property;
        return this;
    }
}