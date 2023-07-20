
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class MigrateVaultResourceResponse extends SdkResponse {
    private 'migrated_resources'?: Array<string>;
    public constructor() { 
        super();
    }
    public withMigratedResources(migratedResources: Array<string>): MigrateVaultResourceResponse {
        this['migrated_resources'] = migratedResources;
        return this;
    }
    public set migratedResources(migratedResources: Array<string>  | undefined) {
        this['migrated_resources'] = migratedResources;
    }
    public get migratedResources(): Array<string> | undefined {
        return this['migrated_resources'];
    }
}