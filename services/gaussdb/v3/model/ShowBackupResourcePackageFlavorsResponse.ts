import { BackupResourcePackageFlavor } from './BackupResourcePackageFlavor';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowBackupResourcePackageFlavorsResponse extends SdkResponse {
    public flavors?: Array<BackupResourcePackageFlavor>;
    public constructor() { 
        super();
    }
    public withFlavors(flavors: Array<BackupResourcePackageFlavor>): ShowBackupResourcePackageFlavorsResponse {
        this['flavors'] = flavors;
        return this;
    }
}