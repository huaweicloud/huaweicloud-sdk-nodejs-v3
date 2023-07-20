
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SetOnlineMigrationTaskResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public status?: SetOnlineMigrationTaskResponseStatusEnum | string;
    public constructor() { 
        super();
    }
    public withId(id: string): SetOnlineMigrationTaskResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): SetOnlineMigrationTaskResponse {
        this['name'] = name;
        return this;
    }
    public withStatus(status: SetOnlineMigrationTaskResponseStatusEnum | string): SetOnlineMigrationTaskResponse {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SetOnlineMigrationTaskResponseStatusEnum {
    SUCCESS = 'SUCCESS',
    FAILED = 'FAILED',
    MIGRATING = 'MIGRATING',
    TERMINATED = 'TERMINATED'
}
