
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteBackendTargetResponse extends SdkResponse {
    private 'target_id'?: string;
    private 'delete_data_in_file_system'?: boolean;
    public lifecycle?: DeleteBackendTargetResponseLifecycleEnum | string;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withTargetId(targetId: string): DeleteBackendTargetResponse {
        this['target_id'] = targetId;
        return this;
    }
    public set targetId(targetId: string  | undefined) {
        this['target_id'] = targetId;
    }
    public get targetId(): string | undefined {
        return this['target_id'];
    }
    public withDeleteDataInFileSystem(deleteDataInFileSystem: boolean): DeleteBackendTargetResponse {
        this['delete_data_in_file_system'] = deleteDataInFileSystem;
        return this;
    }
    public set deleteDataInFileSystem(deleteDataInFileSystem: boolean  | undefined) {
        this['delete_data_in_file_system'] = deleteDataInFileSystem;
    }
    public get deleteDataInFileSystem(): boolean | undefined {
        return this['delete_data_in_file_system'];
    }
    public withLifecycle(lifecycle: DeleteBackendTargetResponseLifecycleEnum | string): DeleteBackendTargetResponse {
        this['lifecycle'] = lifecycle;
        return this;
    }
    public withXRequestId(xRequestId: string): DeleteBackendTargetResponse {
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
export enum DeleteBackendTargetResponseLifecycleEnum {
    DELETING = 'DELETING',
    FAILED = 'FAILED'
}
