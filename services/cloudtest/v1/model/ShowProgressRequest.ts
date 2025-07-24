

export class ShowProgressRequest {
    private 'project_uuid'?: string;
    private 'operation_uri'?: string;
    public constructor(operationUri?: string) { 
        this['operation_uri'] = operationUri;
    }
    public withProjectUuid(projectUuid: string): ShowProgressRequest {
        this['project_uuid'] = projectUuid;
        return this;
    }
    public set projectUuid(projectUuid: string  | undefined) {
        this['project_uuid'] = projectUuid;
    }
    public get projectUuid(): string | undefined {
        return this['project_uuid'];
    }
    public withOperationUri(operationUri: string): ShowProgressRequest {
        this['operation_uri'] = operationUri;
        return this;
    }
    public set operationUri(operationUri: string  | undefined) {
        this['operation_uri'] = operationUri;
    }
    public get operationUri(): string | undefined {
        return this['operation_uri'];
    }
}