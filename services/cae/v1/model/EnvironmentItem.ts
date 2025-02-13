

export class EnvironmentItem {
    public id?: string;
    public name?: string;
    private 'job_id'?: string;
    public status?: EnvironmentItemStatusEnum | string;
    public annotations?: { [key: string]: string; };
    private 'created_at'?: string;
    private 'updated_at'?: string;
    public constructor() { 
    }
    public withId(id: string): EnvironmentItem {
        this['id'] = id;
        return this;
    }
    public withName(name: string): EnvironmentItem {
        this['name'] = name;
        return this;
    }
    public withJobId(jobId: string): EnvironmentItem {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withStatus(status: EnvironmentItemStatusEnum | string): EnvironmentItem {
        this['status'] = status;
        return this;
    }
    public withAnnotations(annotations: { [key: string]: string; }): EnvironmentItem {
        this['annotations'] = annotations;
        return this;
    }
    public withCreatedAt(createdAt: string): EnvironmentItem {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): EnvironmentItem {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum EnvironmentItemStatusEnum {
    CREATING = 'creating',
    FINISH = 'finish',
    DELETING = 'deleting',
    FREEZE = 'freeze',
    POLICE_FREEZE = 'police_freeze',
    DELETE_FAILED = 'delete_failed'
}
