

export class DeleteIteratorRequest {
    private 'iterator_uri'?: string;
    private 'project_uuid'?: string;
    private 'is_async'?: boolean;
    public constructor(iteratorUri?: string) { 
        this['iterator_uri'] = iteratorUri;
    }
    public withIteratorUri(iteratorUri: string): DeleteIteratorRequest {
        this['iterator_uri'] = iteratorUri;
        return this;
    }
    public set iteratorUri(iteratorUri: string  | undefined) {
        this['iterator_uri'] = iteratorUri;
    }
    public get iteratorUri(): string | undefined {
        return this['iterator_uri'];
    }
    public withProjectUuid(projectUuid: string): DeleteIteratorRequest {
        this['project_uuid'] = projectUuid;
        return this;
    }
    public set projectUuid(projectUuid: string  | undefined) {
        this['project_uuid'] = projectUuid;
    }
    public get projectUuid(): string | undefined {
        return this['project_uuid'];
    }
    public withIsAsync(isAsync: boolean): DeleteIteratorRequest {
        this['is_async'] = isAsync;
        return this;
    }
    public set isAsync(isAsync: boolean  | undefined) {
        this['is_async'] = isAsync;
    }
    public get isAsync(): boolean | undefined {
        return this['is_async'];
    }
}