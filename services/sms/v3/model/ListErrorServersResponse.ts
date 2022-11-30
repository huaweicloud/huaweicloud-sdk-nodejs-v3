import { MigrationErrors } from './MigrationErrors';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListErrorServersResponse extends SdkResponse {
    public count?: number;
    private 'migration_errors'?: Array<MigrationErrors> | undefined;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListErrorServersResponse {
        this['count'] = count;
        return this;
    }
    public withMigrationErrors(migrationErrors: Array<MigrationErrors>): ListErrorServersResponse {
        this['migration_errors'] = migrationErrors;
        return this;
    }
    public set migrationErrors(migrationErrors: Array<MigrationErrors> | undefined) {
        this['migration_errors'] = migrationErrors;
    }
    public get migrationErrors() {
        return this['migration_errors'];
    }
}