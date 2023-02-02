import { ScheduleKeyDeletionRequestBody } from './ScheduleKeyDeletionRequestBody';


export class DeleteKeyRequest {
    public body?: ScheduleKeyDeletionRequestBody;
    public constructor() { 
    }
    public withBody(body: ScheduleKeyDeletionRequestBody): DeleteKeyRequest {
        this['body'] = body;
        return this;
    }
}