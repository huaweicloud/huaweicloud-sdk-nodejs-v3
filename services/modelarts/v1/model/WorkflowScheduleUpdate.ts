

export class WorkflowScheduleUpdate {
    public content?: { [key: string]: object; };
    public enable?: boolean;
    public constructor() { 
    }
    public withContent(content: { [key: string]: object; }): WorkflowScheduleUpdate {
        this['content'] = content;
        return this;
    }
    public withEnable(enable: boolean): WorkflowScheduleUpdate {
        this['enable'] = enable;
        return this;
    }
}