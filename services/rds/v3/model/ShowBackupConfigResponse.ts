
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowBackupConfigResponse extends SdkResponse {
    private 'default_backup_method'?: string;
    public constructor() { 
        super();
    }
    public withDefaultBackupMethod(defaultBackupMethod: string): ShowBackupConfigResponse {
        this['default_backup_method'] = defaultBackupMethod;
        return this;
    }
    public set defaultBackupMethod(defaultBackupMethod: string  | undefined) {
        this['default_backup_method'] = defaultBackupMethod;
    }
    public get defaultBackupMethod(): string | undefined {
        return this['default_backup_method'];
    }
}