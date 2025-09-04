import { SaveBackupDownloadPolicyRequestBody } from './SaveBackupDownloadPolicyRequestBody';


export class SaveBackupDownloadPolicyRequest {
    public body?: SaveBackupDownloadPolicyRequestBody;
    public constructor() { 
    }
    public withBody(body: SaveBackupDownloadPolicyRequestBody): SaveBackupDownloadPolicyRequest {
        this['body'] = body;
        return this;
    }
}