

export class ListPlanRequest {
    private 'project_id'?: string;
    private 'key_word'?: string;
    private 'updated_time_interval'?: string;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): ListPlanRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withKeyWord(keyWord: string): ListPlanRequest {
        this['key_word'] = keyWord;
        return this;
    }
    public set keyWord(keyWord: string  | undefined) {
        this['key_word'] = keyWord;
    }
    public get keyWord(): string | undefined {
        return this['key_word'];
    }
    public withUpdatedTimeInterval(updatedTimeInterval: string): ListPlanRequest {
        this['updated_time_interval'] = updatedTimeInterval;
        return this;
    }
    public set updatedTimeInterval(updatedTimeInterval: string  | undefined) {
        this['updated_time_interval'] = updatedTimeInterval;
    }
    public get updatedTimeInterval(): string | undefined {
        return this['updated_time_interval'];
    }
}