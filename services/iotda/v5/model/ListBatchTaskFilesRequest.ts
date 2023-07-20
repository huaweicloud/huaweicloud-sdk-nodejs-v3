

export class ListBatchTaskFilesRequest {
    private 'Instance-Id'?: string;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): ListBatchTaskFilesRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['Instance-Id'];
    }
}