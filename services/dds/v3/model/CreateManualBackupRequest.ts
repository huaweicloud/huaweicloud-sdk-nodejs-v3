import { CreateManualBackupRequestBody } from './CreateManualBackupRequestBody';


export class CreateManualBackupRequest {
    public body?: CreateManualBackupRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateManualBackupRequestBody): CreateManualBackupRequest {
        this['body'] = body;
        return this;
    }
}