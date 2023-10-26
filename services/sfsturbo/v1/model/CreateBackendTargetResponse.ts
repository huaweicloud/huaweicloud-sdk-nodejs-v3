import { FailureDetailsMessage } from './FailureDetailsMessage';
import { ObsDataRepository } from './ObsDataRepository';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateBackendTargetResponse extends SdkResponse {
    private 'target_id'?: string;
    private 'creation_time'?: string;
    private 'failure_details'?: FailureDetailsMessage;
    private 'file_system_path'?: string;
    public lifecycle?: CreateBackendTargetResponseLifecycleEnum | string;
    public obs?: ObsDataRepository;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withTargetId(targetId: string): CreateBackendTargetResponse {
        this['target_id'] = targetId;
        return this;
    }
    public set targetId(targetId: string  | undefined) {
        this['target_id'] = targetId;
    }
    public get targetId(): string | undefined {
        return this['target_id'];
    }
    public withCreationTime(creationTime: string): CreateBackendTargetResponse {
        this['creation_time'] = creationTime;
        return this;
    }
    public set creationTime(creationTime: string  | undefined) {
        this['creation_time'] = creationTime;
    }
    public get creationTime(): string | undefined {
        return this['creation_time'];
    }
    public withFailureDetails(failureDetails: FailureDetailsMessage): CreateBackendTargetResponse {
        this['failure_details'] = failureDetails;
        return this;
    }
    public set failureDetails(failureDetails: FailureDetailsMessage  | undefined) {
        this['failure_details'] = failureDetails;
    }
    public get failureDetails(): FailureDetailsMessage | undefined {
        return this['failure_details'];
    }
    public withFileSystemPath(fileSystemPath: string): CreateBackendTargetResponse {
        this['file_system_path'] = fileSystemPath;
        return this;
    }
    public set fileSystemPath(fileSystemPath: string  | undefined) {
        this['file_system_path'] = fileSystemPath;
    }
    public get fileSystemPath(): string | undefined {
        return this['file_system_path'];
    }
    public withLifecycle(lifecycle: CreateBackendTargetResponseLifecycleEnum | string): CreateBackendTargetResponse {
        this['lifecycle'] = lifecycle;
        return this;
    }
    public withObs(obs: ObsDataRepository): CreateBackendTargetResponse {
        this['obs'] = obs;
        return this;
    }
    public withXRequestId(xRequestId: string): CreateBackendTargetResponse {
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
export enum CreateBackendTargetResponseLifecycleEnum {
    CREATING = 'CREATING',
    AVAILABLE = 'AVAILABLE',
    MISCONFIGURED = 'MISCONFIGURED',
    DELETING = 'DELETING'
}
