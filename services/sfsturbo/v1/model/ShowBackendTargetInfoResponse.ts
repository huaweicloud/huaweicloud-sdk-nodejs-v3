import { FailureDetailsMessage } from './FailureDetailsMessage';
import { ObsDataRepository } from './ObsDataRepository';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowBackendTargetInfoResponse extends SdkResponse {
    private 'target_id'?: string;
    private 'creation_time'?: string;
    private 'file_system_path'?: string;
    private 'failure_details'?: FailureDetailsMessage;
    public lifecycle?: ShowBackendTargetInfoResponseLifecycleEnum | string;
    public obs?: ObsDataRepository;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withTargetId(targetId: string): ShowBackendTargetInfoResponse {
        this['target_id'] = targetId;
        return this;
    }
    public set targetId(targetId: string  | undefined) {
        this['target_id'] = targetId;
    }
    public get targetId(): string | undefined {
        return this['target_id'];
    }
    public withCreationTime(creationTime: string): ShowBackendTargetInfoResponse {
        this['creation_time'] = creationTime;
        return this;
    }
    public set creationTime(creationTime: string  | undefined) {
        this['creation_time'] = creationTime;
    }
    public get creationTime(): string | undefined {
        return this['creation_time'];
    }
    public withFileSystemPath(fileSystemPath: string): ShowBackendTargetInfoResponse {
        this['file_system_path'] = fileSystemPath;
        return this;
    }
    public set fileSystemPath(fileSystemPath: string  | undefined) {
        this['file_system_path'] = fileSystemPath;
    }
    public get fileSystemPath(): string | undefined {
        return this['file_system_path'];
    }
    public withFailureDetails(failureDetails: FailureDetailsMessage): ShowBackendTargetInfoResponse {
        this['failure_details'] = failureDetails;
        return this;
    }
    public set failureDetails(failureDetails: FailureDetailsMessage  | undefined) {
        this['failure_details'] = failureDetails;
    }
    public get failureDetails(): FailureDetailsMessage | undefined {
        return this['failure_details'];
    }
    public withLifecycle(lifecycle: ShowBackendTargetInfoResponseLifecycleEnum | string): ShowBackendTargetInfoResponse {
        this['lifecycle'] = lifecycle;
        return this;
    }
    public withObs(obs: ObsDataRepository): ShowBackendTargetInfoResponse {
        this['obs'] = obs;
        return this;
    }
    public withXRequestId(xRequestId: string): ShowBackendTargetInfoResponse {
        this['X-request-id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-request-id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-request-id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowBackendTargetInfoResponseLifecycleEnum {
    CREATING = 'CREATING',
    AVAILABLE = 'AVAILABLE',
    MISCONFIGURED = 'MISCONFIGURED',
    DELETING = 'DELETING',
    FAILED = 'FAILED'
}
