

export class ListSnapshotFlavorInfoRequest {
    private 'snapshot_id'?: string;
    public type?: ListSnapshotFlavorInfoRequestTypeEnum | string;
    private 'az_code'?: string;
    private 'fine_grained_restore'?: boolean;
    public constructor(snapshotId?: string) { 
        this['snapshot_id'] = snapshotId;
    }
    public withSnapshotId(snapshotId: string): ListSnapshotFlavorInfoRequest {
        this['snapshot_id'] = snapshotId;
        return this;
    }
    public set snapshotId(snapshotId: string  | undefined) {
        this['snapshot_id'] = snapshotId;
    }
    public get snapshotId(): string | undefined {
        return this['snapshot_id'];
    }
    public withType(type: ListSnapshotFlavorInfoRequestTypeEnum | string): ListSnapshotFlavorInfoRequest {
        this['type'] = type;
        return this;
    }
    public withAzCode(azCode: string): ListSnapshotFlavorInfoRequest {
        this['az_code'] = azCode;
        return this;
    }
    public set azCode(azCode: string  | undefined) {
        this['az_code'] = azCode;
    }
    public get azCode(): string | undefined {
        return this['az_code'];
    }
    public withFineGrainedRestore(fineGrainedRestore: boolean): ListSnapshotFlavorInfoRequest {
        this['fine_grained_restore'] = fineGrainedRestore;
        return this;
    }
    public set fineGrainedRestore(fineGrainedRestore: boolean  | undefined) {
        this['fine_grained_restore'] = fineGrainedRestore;
    }
    public get fineGrainedRestore(): boolean | undefined {
        return this['fine_grained_restore'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListSnapshotFlavorInfoRequestTypeEnum {
    SNAPSHOT = 'snapshot',
    RESTORE = 'restore'
}
