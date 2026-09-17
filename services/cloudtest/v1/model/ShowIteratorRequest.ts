

export class ShowIteratorRequest {
    private 'iterator_uri'?: string;
    private 'project_uuid'?: string;
    public constructor(iteratorUri?: string) { 
        this['iterator_uri'] = iteratorUri;
    }
    public withIteratorUri(iteratorUri: string): ShowIteratorRequest {
        this['iterator_uri'] = iteratorUri;
        return this;
    }
    public set iteratorUri(iteratorUri: string  | undefined) {
        this['iterator_uri'] = iteratorUri;
    }
    public get iteratorUri(): string | undefined {
        return this['iterator_uri'];
    }
    public withProjectUuid(projectUuid: string): ShowIteratorRequest {
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