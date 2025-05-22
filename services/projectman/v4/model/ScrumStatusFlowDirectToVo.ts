

export class ScrumStatusFlowDirectToVo {
    public id?: string;
    private 'status_id'?: number;
    public name?: string;
    public enabled?: boolean;
    public constructor() { 
    }
    public withId(id: string): ScrumStatusFlowDirectToVo {
        this['id'] = id;
        return this;
    }
    public withStatusId(statusId: number): ScrumStatusFlowDirectToVo {
        this['status_id'] = statusId;
        return this;
    }
    public set statusId(statusId: number  | undefined) {
        this['status_id'] = statusId;
    }
    public get statusId(): number | undefined {
        return this['status_id'];
    }
    public withName(name: string): ScrumStatusFlowDirectToVo {
        this['name'] = name;
        return this;
    }
    public withEnabled(enabled: boolean): ScrumStatusFlowDirectToVo {
        this['enabled'] = enabled;
        return this;
    }
}