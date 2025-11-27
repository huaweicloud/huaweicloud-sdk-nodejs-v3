import { ConfigBody } from './ConfigBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowConfigSettingResponse extends SdkResponse {
    private 'task_id'?: string;
    private 'migrate_type'?: ShowConfigSettingResponseMigrateTypeEnum | string;
    public configurations?: Array<ConfigBody>;
    public constructor() { 
        super();
    }
    public withTaskId(taskId: string): ShowConfigSettingResponse {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withMigrateType(migrateType: ShowConfigSettingResponseMigrateTypeEnum | string): ShowConfigSettingResponse {
        this['migrate_type'] = migrateType;
        return this;
    }
    public set migrateType(migrateType: ShowConfigSettingResponseMigrateTypeEnum | string  | undefined) {
        this['migrate_type'] = migrateType;
    }
    public get migrateType(): ShowConfigSettingResponseMigrateTypeEnum | string | undefined {
        return this['migrate_type'];
    }
    public withConfigurations(configurations: Array<ConfigBody>): ShowConfigSettingResponse {
        this['configurations'] = configurations;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowConfigSettingResponseMigrateTypeEnum {
    WINDOWS_MIGRATE_BLOCK = 'WINDOWS_MIGRATE_BLOCK',
    LINUX_MIGRATE_FILE = 'LINUX_MIGRATE_FILE',
    LINUX_MIGRATE_BLOCK = 'LINUX_MIGRATE_BLOCK'
}
