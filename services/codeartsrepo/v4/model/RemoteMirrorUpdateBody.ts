

export class RemoteMirrorUpdateBody {
    public url?: string;
    private 'sync_branch_type'?: RemoteMirrorUpdateBodySyncBranchTypeEnum | string;
    private 'mirroring_enabled'?: boolean;
    private 'endpoint_uuid'?: string;
    public constructor() { 
    }
    public withUrl(url: string): RemoteMirrorUpdateBody {
        this['url'] = url;
        return this;
    }
    public withSyncBranchType(syncBranchType: RemoteMirrorUpdateBodySyncBranchTypeEnum | string): RemoteMirrorUpdateBody {
        this['sync_branch_type'] = syncBranchType;
        return this;
    }
    public set syncBranchType(syncBranchType: RemoteMirrorUpdateBodySyncBranchTypeEnum | string  | undefined) {
        this['sync_branch_type'] = syncBranchType;
    }
    public get syncBranchType(): RemoteMirrorUpdateBodySyncBranchTypeEnum | string | undefined {
        return this['sync_branch_type'];
    }
    public withMirroringEnabled(mirroringEnabled: boolean): RemoteMirrorUpdateBody {
        this['mirroring_enabled'] = mirroringEnabled;
        return this;
    }
    public set mirroringEnabled(mirroringEnabled: boolean  | undefined) {
        this['mirroring_enabled'] = mirroringEnabled;
    }
    public get mirroringEnabled(): boolean | undefined {
        return this['mirroring_enabled'];
    }
    public withEndpointUuid(endpointUuid: string): RemoteMirrorUpdateBody {
        this['endpoint_uuid'] = endpointUuid;
        return this;
    }
    public set endpointUuid(endpointUuid: string  | undefined) {
        this['endpoint_uuid'] = endpointUuid;
    }
    public get endpointUuid(): string | undefined {
        return this['endpoint_uuid'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum RemoteMirrorUpdateBodySyncBranchTypeEnum {
    ALL = 'all',
    DEFAULT = 'default'
}
