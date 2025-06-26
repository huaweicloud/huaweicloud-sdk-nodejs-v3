
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowInstanceJobResponse extends SdkResponse {
    public id?: string;
    private 'instance_id'?: string;
    private 'resource_id'?: string;
    private 'resource_name'?: string;
    public type?: string;
    public status?: ShowInstanceJobResponseStatusEnum | string;
    public reason?: string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowInstanceJobResponse {
        this['id'] = id;
        return this;
    }
    public withInstanceId(instanceId: string): ShowInstanceJobResponse {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withResourceId(resourceId: string): ShowInstanceJobResponse {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withResourceName(resourceName: string): ShowInstanceJobResponse {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string  | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName(): string | undefined {
        return this['resource_name'];
    }
    public withType(type: string): ShowInstanceJobResponse {
        this['type'] = type;
        return this;
    }
    public withStatus(status: ShowInstanceJobResponseStatusEnum | string): ShowInstanceJobResponse {
        this['status'] = status;
        return this;
    }
    public withReason(reason: string): ShowInstanceJobResponse {
        this['reason'] = reason;
        return this;
    }
    public withCreatedAt(createdAt: string): ShowInstanceJobResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): ShowInstanceJobResponse {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowInstanceJobResponseStatusEnum {
    CREATING = 'Creating',
    INITIALIZING = 'Initializing',
    RUNNING = 'Running',
    FAILED = 'Failed',
    SUCCESS = 'Success'
}
