

export class WorkItemInfo {
    private 'work_item_id'?: string;
    private 'has_child'?: boolean;
    private 'is_open'?: boolean;
    private 'child_list'?: Array<WorkItemInfo>;
    public constructor(workItemId?: string, hasChild?: boolean, isOpen?: boolean) { 
        this['work_item_id'] = workItemId;
        this['has_child'] = hasChild;
        this['is_open'] = isOpen;
    }
    public withWorkItemId(workItemId: string): WorkItemInfo {
        this['work_item_id'] = workItemId;
        return this;
    }
    public set workItemId(workItemId: string  | undefined) {
        this['work_item_id'] = workItemId;
    }
    public get workItemId(): string | undefined {
        return this['work_item_id'];
    }
    public withHasChild(hasChild: boolean): WorkItemInfo {
        this['has_child'] = hasChild;
        return this;
    }
    public set hasChild(hasChild: boolean  | undefined) {
        this['has_child'] = hasChild;
    }
    public get hasChild(): boolean | undefined {
        return this['has_child'];
    }
    public withIsOpen(isOpen: boolean): WorkItemInfo {
        this['is_open'] = isOpen;
        return this;
    }
    public set isOpen(isOpen: boolean  | undefined) {
        this['is_open'] = isOpen;
    }
    public get isOpen(): boolean | undefined {
        return this['is_open'];
    }
    public withChildList(childList: Array<WorkItemInfo>): WorkItemInfo {
        this['child_list'] = childList;
        return this;
    }
    public set childList(childList: Array<WorkItemInfo>  | undefined) {
        this['child_list'] = childList;
    }
    public get childList(): Array<WorkItemInfo> | undefined {
        return this['child_list'];
    }
}