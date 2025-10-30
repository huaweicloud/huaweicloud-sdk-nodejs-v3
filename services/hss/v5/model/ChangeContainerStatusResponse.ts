
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ChangeContainerStatusResponse extends SdkResponse {
    private 'container_id'?: string;
    private 'container_name'?: string;
    public success?: boolean;
    private 'new_status'?: string;
    public constructor() { 
        super();
    }
    public withContainerId(containerId: string): ChangeContainerStatusResponse {
        this['container_id'] = containerId;
        return this;
    }
    public set containerId(containerId: string  | undefined) {
        this['container_id'] = containerId;
    }
    public get containerId(): string | undefined {
        return this['container_id'];
    }
    public withContainerName(containerName: string): ChangeContainerStatusResponse {
        this['container_name'] = containerName;
        return this;
    }
    public set containerName(containerName: string  | undefined) {
        this['container_name'] = containerName;
    }
    public get containerName(): string | undefined {
        return this['container_name'];
    }
    public withSuccess(success: boolean): ChangeContainerStatusResponse {
        this['success'] = success;
        return this;
    }
    public withNewStatus(newStatus: string): ChangeContainerStatusResponse {
        this['new_status'] = newStatus;
        return this;
    }
    public set newStatus(newStatus: string  | undefined) {
        this['new_status'] = newStatus;
    }
    public get newStatus(): string | undefined {
        return this['new_status'];
    }
}