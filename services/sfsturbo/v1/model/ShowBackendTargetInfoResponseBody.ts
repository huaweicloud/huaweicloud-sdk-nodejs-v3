import { FailureDetailsMessage } from './FailureDetailsMessage';
import { ObsDataRepository } from './ObsDataRepository';


export class ShowBackendTargetInfoResponseBody {
    private 'target_id'?: string;
    private 'creation_time'?: string;
    private 'file_system_path'?: string;
    private 'failure_details'?: FailureDetailsMessage;
    public lifecycle?: ShowBackendTargetInfoResponseBodyLifecycleEnum | string;
    public obs?: ObsDataRepository;
    public constructor() { 
    }
    public withTargetId(targetId: string): ShowBackendTargetInfoResponseBody {
        this['target_id'] = targetId;
        return this;
    }
    public set targetId(targetId: string  | undefined) {
        this['target_id'] = targetId;
    }
    public get targetId(): string | undefined {
        return this['target_id'];
    }
    public withCreationTime(creationTime: string): ShowBackendTargetInfoResponseBody {
        this['creation_time'] = creationTime;
        return this;
    }
    public set creationTime(creationTime: string  | undefined) {
        this['creation_time'] = creationTime;
    }
    public get creationTime(): string | undefined {
        return this['creation_time'];
    }
    public withFileSystemPath(fileSystemPath: string): ShowBackendTargetInfoResponseBody {
        this['file_system_path'] = fileSystemPath;
        return this;
    }
    public set fileSystemPath(fileSystemPath: string  | undefined) {
        this['file_system_path'] = fileSystemPath;
    }
    public get fileSystemPath(): string | undefined {
        return this['file_system_path'];
    }
    public withFailureDetails(failureDetails: FailureDetailsMessage): ShowBackendTargetInfoResponseBody {
        this['failure_details'] = failureDetails;
        return this;
    }
    public set failureDetails(failureDetails: FailureDetailsMessage  | undefined) {
        this['failure_details'] = failureDetails;
    }
    public get failureDetails(): FailureDetailsMessage | undefined {
        return this['failure_details'];
    }
    public withLifecycle(lifecycle: ShowBackendTargetInfoResponseBodyLifecycleEnum | string): ShowBackendTargetInfoResponseBody {
        this['lifecycle'] = lifecycle;
        return this;
    }
    public withObs(obs: ObsDataRepository): ShowBackendTargetInfoResponseBody {
        this['obs'] = obs;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowBackendTargetInfoResponseBodyLifecycleEnum {
    CREATING = 'CREATING',
    AVAILABLE = 'AVAILABLE',
    MISCONFIGURED = 'MISCONFIGURED',
    DELETING = 'DELETING',
    FAILED = 'FAILED'
}
