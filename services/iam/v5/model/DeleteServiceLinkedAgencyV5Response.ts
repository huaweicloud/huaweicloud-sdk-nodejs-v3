
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteServiceLinkedAgencyV5Response extends SdkResponse {
    private 'deletion_task_id'?: string;
    public constructor() { 
        super();
    }
    public withDeletionTaskId(deletionTaskId: string): DeleteServiceLinkedAgencyV5Response {
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