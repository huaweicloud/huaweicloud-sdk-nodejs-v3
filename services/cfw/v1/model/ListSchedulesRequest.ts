

export class ListSchedulesRequest {
    private 'project_id'?: string;
    private 'object_id'?: string;
    public name?: string;
    public desc?: string;
    public limit?: number;
    public offset?: number;
    public constructor(projectId?: string, objectId?: string, limit?: number, offset?: number) { 
        this['project_id'] = projectId;
        this['object_id'] = objectId;
        this['limit'] = limit;
        this['offset'] = offset;
    }
    public withProjectId(projectId: string): ListSchedulesRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withObjectId(objectId: string): ListSchedulesRequest {
        this['object_id'] = objectId;
        return this;
    }
    public set objectId(objectId: string  | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId(): string | undefined {
        return this['object_id'];
    }
    public withName(name: string): ListSchedulesRequest {
        this['name'] = name;
        return this;
    }
    public withDesc(desc: string): ListSchedulesRequest {
        this['desc'] = desc;
        return this;
    }
    public withLimit(limit: number): ListSchedulesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListSchedulesRequest {
        this['offset'] = offset;
        return this;
    }
}