
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateRepositoryRemoteMirrorResponse extends SdkResponse {
    public url?: string;
    private 'mirroring_enabled'?: boolean;
    private 'endpoint_uuid'?: string;
    private 'sync_branch_type'?: UpdateRepositoryRemoteMirrorResponseSyncBranchTypeEnum | string;
    public constructor() { 
        super();
    }
    public withUrl(url: string): UpdateRepositoryRemoteMirrorResponse {
        this['url'] = url;
        return this;
    }
    public withMirroringEnabled(mirroringEnabled: boolean): UpdateRepositoryRemoteMirrorResponse {
        this['mirroring_enabled'] = mirroringEnabled;
        return this;
    }
    public set mirroringEnabled(mirroringEnabled: boolean  | undefined) {
        this['mirroring_enabled'] = mirroringEnabled;
    }
    public get mirroringEnabled(): boolean | undefined {
        return this['mirroring_enabled'];
    }
    public withEndpointUuid(endpointUuid: string): UpdateRepositoryRemoteMirrorResponse {
        this['endpoint_uuid'] = endpointUuid;
        return this;
    }
    public set endpointUuid(endpointUuid: string  | undefined) {
        this['endpoint_uuid'] = endpointUuid;
    }
    public get endpointUuid(): string | undefined {
        return this['endpoint_uuid'];
    }
    public withSyncBranchType(syncBranchType: UpdateRepositoryRemoteMirrorResponseSyncBranchTypeEnum | string): UpdateRepositoryRemoteMirrorResponse {
        this['sync_branch_type'] = syncBranchType;
        return this;
    }
    public set syncBranchType(syncBranchType: UpdateRepositoryRemoteMirrorResponseSyncBranchTypeEnum | string  | undefined) {
        this['sync_branch_type'] = syncBranchType;
    }
    public get syncBranchType(): UpdateRepositoryRemoteMirrorResponseSyncBranchTypeEnum | string | undefined {
        return this['sync_branch_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateRepositoryRemoteMirrorResponseSyncBranchTypeEnum {
    ALL = 'all',
    DEFAULT = 'default'
}
