
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateInstanceBackupMethodResponse extends SdkResponse {
    private 'backup_method'?: string;
    public constructor() { 
        super();
    }
    public withBackupMethod(backupMethod: string): UpdateInstanceBackupMethodResponse {
        this['backup_method'] = backupMethod;
        return this;
    }
    public set backupMethod(backupMethod: string  | undefined) {
        this['backup_method'] = backupMethod;
    }
    public get backupMethod(): string | undefined {
        return this['backup_method'];
    }
}