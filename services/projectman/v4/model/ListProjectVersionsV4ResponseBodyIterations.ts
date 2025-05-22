

export class ListProjectVersionsV4ResponseBodyIterations {
    public description?: string;
    private 'end_time'?: string;
    public id?: number;
    public name?: string;
    private 'begin_time'?: string;
    public status?: string;
    private 'updated_time'?: number;
    public deleted?: boolean;
    public constructor() { 
    }
    public withDescription(description: string): ListProjectVersionsV4ResponseBodyIterations {
        this['description'] = description;
        return this;
    }
    public withEndTime(endTime: string): ListProjectVersionsV4ResponseBodyIterations {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withId(id: number): ListProjectVersionsV4ResponseBodyIterations {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ListProjectVersionsV4ResponseBodyIterations {
        this['name'] = name;
        return this;
    }
    public withBeginTime(beginTime: string): ListProjectVersionsV4ResponseBodyIterations {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withStatus(status: string): ListProjectVersionsV4ResponseBodyIterations {
        this['status'] = status;
        return this;
    }
    public withUpdatedTime(updatedTime: number): ListProjectVersionsV4ResponseBodyIterations {
        this['updated_time'] = updatedTime;
        return this;
    }
    public set updatedTime(updatedTime: number  | undefined) {
        this['updated_time'] = updatedTime;
    }
    public get updatedTime(): number | undefined {
        return this['updated_time'];
    }
    public withDeleted(deleted: boolean): ListProjectVersionsV4ResponseBodyIterations {
        this['deleted'] = deleted;
        return this;
    }
}