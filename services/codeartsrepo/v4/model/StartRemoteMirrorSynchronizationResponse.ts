
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class StartRemoteMirrorSynchronizationResponse extends SdkResponse {
    public jid?: string;
    public constructor() { 
        super();
    }
    public withJid(jid: string): StartRemoteMirrorSynchronizationResponse {
        this['jid'] = jid;
        return this;
    }
}