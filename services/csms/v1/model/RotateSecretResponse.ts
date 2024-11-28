
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RotateSecretResponse extends SdkResponse {
    private 'version_id'?: string;
    private 'secret_name'?: string;
    private 'rotation_task_id'?: string;
    public constructor() { 
        super();
    }
    public withVersionId(versionId: string): RotateSecretResponse {
        this['version_id'] = versionId;
        return this;
    }
    public set versionId(versionId: string  | undefined) {
        this['version_id'] = versionId;
    }
    public get versionId(): string | undefined {
        return this['version_id'];
    }
    public withSecretName(secretName: string): RotateSecretResponse {
        this['secret_name'] = secretName;
        return this;
    }
    public set secretName(secretName: string  | undefined) {
        this['secret_name'] = secretName;
    }
    public get secretName(): string | undefined {
        return this['secret_name'];
    }
    public withRotationTaskId(rotationTaskId: string): RotateSecretResponse {
        this['rotation_task_id'] = rotationTaskId;
        return this;
    }
    public set rotationTaskId(rotationTaskId: string  | undefined) {
        this['rotation_task_id'] = rotationTaskId;
    }
    public get rotationTaskId(): string | undefined {
        return this['rotation_task_id'];
    }
}