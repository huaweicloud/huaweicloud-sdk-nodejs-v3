
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPassphraseResponse extends SdkResponse {
    private 'task_id'?: string | undefined;
    public passphrase?: string;
    public constructor() { 
        super();
    }
    public withTaskId(taskId: string): ShowPassphraseResponse {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId() {
        return this['task_id'];
    }
    public withPassphrase(passphrase: string): ShowPassphraseResponse {
        this['passphrase'] = passphrase;
        return this;
    }
}