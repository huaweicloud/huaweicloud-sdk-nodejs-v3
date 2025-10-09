

export class GetServiceLinkedAgencyDeletionStatusV5Request {
    private 'deletion_task_id'?: string;
    public constructor(deletionTaskId?: string) { 
        this['deletion_task_id'] = deletionTaskId;
    }
    public withDeletionTaskId(deletionTaskId: string): GetServiceLinkedAgencyDeletionStatusV5Request {
        this['deletion_task_id'] = deletionTaskId;
        return this;
    }
    public set deletionTaskId(deletionTaskId: string  | undefined) {
        this['deletion_task_id'] = deletionTaskId;
    }
    public get deletionTaskId(): string | undefined {
        return this['deletion_task_id'];
    }
}