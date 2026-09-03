
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AttachDesktopPoolUserResponse extends SdkResponse {
    public type?: AttachDesktopPoolUserResponseTypeEnum | string;
    private 'job_id'?: string;
    public constructor() { 
        super();
    }
    public withType(type: AttachDesktopPoolUserResponseTypeEnum | string): AttachDesktopPoolUserResponse {
        this['type'] = type;
        return this;
    }
    public withJobId(jobId: string): AttachDesktopPoolUserResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AttachDesktopPoolUserResponseTypeEnum {
    CREATING = 'CREATING',
    WAITING = 'WAITING',
    EXCEEDED = 'EXCEEDED',
    ASSIGNING = 'ASSIGNING',
    RESETTING = 'RESETTING'
}
