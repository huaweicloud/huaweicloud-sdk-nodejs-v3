
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowConfigSettingResponse extends SdkResponse {
    private 'task_id'?: string | undefined;
    private 'migrate_type'?: string | undefined;
    public configurations?: string;
    public constructor() { 
        super();
    }
    public withTaskId(taskId: string): ShowConfigSettingResponse {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId() {
        return this['task_id'];
    }
    public withMigrateType(migrateType: string): ShowConfigSettingResponse {
        this['migrate_type'] = migrateType;
        return this;
    }
    public set migrateType(migrateType: string | undefined) {
        this['migrate_type'] = migrateType;
    }
    public get migrateType() {
        return this['migrate_type'];
    }
    public withConfigurations(configurations: string): ShowConfigSettingResponse {
        this['configurations'] = configurations;
        return this;
    }
}