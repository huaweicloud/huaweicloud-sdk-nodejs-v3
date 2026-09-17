

export class CompleteSprintVO {
    public operate?: string;
    private 'move_to_sprint_id'?: string;
    public constructor(operate?: string) { 
        this['operate'] = operate;
    }
    public withOperate(operate: string): CompleteSprintVO {
        this['operate'] = operate;
        return this;
    }
    public withMoveToSprintId(moveToSprintId: string): CompleteSprintVO {
        this['move_to_sprint_id'] = moveToSprintId;
        return this;
    }
    public set moveToSprintId(moveToSprintId: string  | undefined) {
        this['move_to_sprint_id'] = moveToSprintId;
    }
    public get moveToSprintId(): string | undefined {
        return this['move_to_sprint_id'];
    }
}