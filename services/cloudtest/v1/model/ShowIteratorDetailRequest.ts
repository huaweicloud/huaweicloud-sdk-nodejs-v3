

export class ShowIteratorDetailRequest {
    private 'iterator_id'?: string;
    private 'project_uuid'?: string;
    public constructor(iteratorId?: string) { 
        this['iterator_id'] = iteratorId;
    }
    public withIteratorId(iteratorId: string): ShowIteratorDetailRequest {
        this['iterator_id'] = iteratorId;
        return this;
    }
    public set iteratorId(iteratorId: string  | undefined) {
        this['iterator_id'] = iteratorId;
    }
    public get iteratorId(): string | undefined {
        return this['iterator_id'];
    }
    public withProjectUuid(projectUuid: string): ShowIteratorDetailRequest {
        this['project_uuid'] = projectUuid;
        return this;
    }
    public set projectUuid(projectUuid: string  | undefined) {
        this['project_uuid'] = projectUuid;
    }
    public get projectUuid(): string | undefined {
        return this['project_uuid'];
    }
}