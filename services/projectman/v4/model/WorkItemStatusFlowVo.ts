import { StatusFlowDirectToVo } from './StatusFlowDirectToVo';


export class WorkItemStatusFlowVo {
    private 'parent_name'?: string;
    private 'parent_type'?: string;
    private 'status_id'?: string;
    public name?: string;
    private 'status_type'?: string;
    private 'direct_to'?: Array<StatusFlowDirectToVo>;
    private 'assign_to'?: string;
    public comment?: string;
    private 'required_assign'?: boolean;
    private 'required_notes'?: boolean;
    private 'field_type'?: boolean;
    private 'parent_id'?: string;
    public constructor() { 
    }
    public withParentName(parentName: string): WorkItemStatusFlowVo {
        this['parent_name'] = parentName;
        return this;
    }
    public set parentName(parentName: string  | undefined) {
        this['parent_name'] = parentName;
    }
    public get parentName(): string | undefined {
        return this['parent_name'];
    }
    public withParentType(parentType: string): WorkItemStatusFlowVo {
        this['parent_type'] = parentType;
        return this;
    }
    public set parentType(parentType: string  | undefined) {
        this['parent_type'] = parentType;
    }
    public get parentType(): string | undefined {
        return this['parent_type'];
    }
    public withStatusId(statusId: string): WorkItemStatusFlowVo {
        this['status_id'] = statusId;
        return this;
    }
    public set statusId(statusId: string  | undefined) {
        this['status_id'] = statusId;
    }
    public get statusId(): string | undefined {
        return this['status_id'];
    }
    public withName(name: string): WorkItemStatusFlowVo {
        this['name'] = name;
        return this;
    }
    public withStatusType(statusType: string): WorkItemStatusFlowVo {
        this['status_type'] = statusType;
        return this;
    }
    public set statusType(statusType: string  | undefined) {
        this['status_type'] = statusType;
    }
    public get statusType(): string | undefined {
        return this['status_type'];
    }
    public withDirectTo(directTo: Array<StatusFlowDirectToVo>): WorkItemStatusFlowVo {
        this['direct_to'] = directTo;
        return this;
    }
    public set directTo(directTo: Array<StatusFlowDirectToVo>  | undefined) {
        this['direct_to'] = directTo;
    }
    public get directTo(): Array<StatusFlowDirectToVo> | undefined {
        return this['direct_to'];
    }
    public withAssignTo(assignTo: string): WorkItemStatusFlowVo {
        this['assign_to'] = assignTo;
        return this;
    }
    public set assignTo(assignTo: string  | undefined) {
        this['assign_to'] = assignTo;
    }
    public get assignTo(): string | undefined {
        return this['assign_to'];
    }
    public withComment(comment: string): WorkItemStatusFlowVo {
        this['comment'] = comment;
        return this;
    }
    public withRequiredAssign(requiredAssign: boolean): WorkItemStatusFlowVo {
        this['required_assign'] = requiredAssign;
        return this;
    }
    public set requiredAssign(requiredAssign: boolean  | undefined) {
        this['required_assign'] = requiredAssign;
    }
    public get requiredAssign(): boolean | undefined {
        return this['required_assign'];
    }
    public withRequiredNotes(requiredNotes: boolean): WorkItemStatusFlowVo {
        this['required_notes'] = requiredNotes;
        return this;
    }
    public set requiredNotes(requiredNotes: boolean  | undefined) {
        this['required_notes'] = requiredNotes;
    }
    public get requiredNotes(): boolean | undefined {
        return this['required_notes'];
    }
    public withFieldType(fieldType: boolean): WorkItemStatusFlowVo {
        this['field_type'] = fieldType;
        return this;
    }
    public set fieldType(fieldType: boolean  | undefined) {
        this['field_type'] = fieldType;
    }
    public get fieldType(): boolean | undefined {
        return this['field_type'];
    }
    public withParentId(parentId: string): WorkItemStatusFlowVo {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: string  | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId(): string | undefined {
        return this['parent_id'];
    }
}