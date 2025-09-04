import { UpdateBackupDownloadPolicyRequestBody } from './UpdateBackupDownloadPolicyRequestBody';


export class UpdateBackupDownloadPolicyRequest {
    public body?: UpdateBackupDownloadPolicyRequestBody;
    public constructor() { 
    }
    public withBody(body: UpdateBackupDownloadPolicyRequestBody): UpdateBackupDownloadPolicyRequest {
        this['body'] = body;
        return this;
    }
}