import { ListSnapshotBackupsDatastoreResp } from './ListSnapshotBackupsDatastoreResp';


export class ListSnapshotBackupsResp {
    public created?: string;
    public datastore?: ListSnapshotBackupsDatastoreResp;
    public description?: string;
    public id?: string;
    public clusterId?: string;
    public clusterName?: string;
    public name?: string;
    public status?: string;
    public updated?: string;
    public backupType?: string;
    public backupMethod?: string;
    public backupExpectedStartTime?: string;
    public backupKeepDay?: number;
    public backupPeriod?: string;
    public indices?: string;
    public totalShards?: number;
    public failedShards?: number;
    public version?: string;
    public restoreStatus?: string;
    public startTime?: number;
    public endTime?: number;
    public bucketName?: string;
    public constructor() { 
    }
    public withCreated(created: string): ListSnapshotBackupsResp {
        this['created'] = created;
        return this;
    }
    public withDatastore(datastore: ListSnapshotBackupsDatastoreResp): ListSnapshotBackupsResp {
        this['datastore'] = datastore;
        return this;
    }
    public withDescription(description: string): ListSnapshotBackupsResp {
        this['description'] = description;
        return this;
    }
    public withId(id: string): ListSnapshotBackupsResp {
        this['id'] = id;
        return this;
    }
    public withClusterId(clusterId: string): ListSnapshotBackupsResp {
        this['clusterId'] = clusterId;
        return this;
    }
    public withClusterName(clusterName: string): ListSnapshotBackupsResp {
        this['clusterName'] = clusterName;
        return this;
    }
    public withName(name: string): ListSnapshotBackupsResp {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): ListSnapshotBackupsResp {
        this['status'] = status;
        return this;
    }
    public withUpdated(updated: string): ListSnapshotBackupsResp {
        this['updated'] = updated;
        return this;
    }
    public withBackupType(backupType: string): ListSnapshotBackupsResp {
        this['backupType'] = backupType;
        return this;
    }
    public withBackupMethod(backupMethod: string): ListSnapshotBackupsResp {
        this['backupMethod'] = backupMethod;
        return this;
    }
    public withBackupExpectedStartTime(backupExpectedStartTime: string): ListSnapshotBackupsResp {
        this['backupExpectedStartTime'] = backupExpectedStartTime;
        return this;
    }
    public withBackupKeepDay(backupKeepDay: number): ListSnapshotBackupsResp {
        this['backupKeepDay'] = backupKeepDay;
        return this;
    }
    public withBackupPeriod(backupPeriod: string): ListSnapshotBackupsResp {
        this['backupPeriod'] = backupPeriod;
        return this;
    }
    public withIndices(indices: string): ListSnapshotBackupsResp {
        this['indices'] = indices;
        return this;
    }
    public withTotalShards(totalShards: number): ListSnapshotBackupsResp {
        this['totalShards'] = totalShards;
        return this;
    }
    public withFailedShards(failedShards: number): ListSnapshotBackupsResp {
        this['failedShards'] = failedShards;
        return this;
    }
    public withVersion(version: string): ListSnapshotBackupsResp {
        this['version'] = version;
        return this;
    }
    public withRestoreStatus(restoreStatus: string): ListSnapshotBackupsResp {
        this['restoreStatus'] = restoreStatus;
        return this;
    }
    public withStartTime(startTime: number): ListSnapshotBackupsResp {
        this['startTime'] = startTime;
        return this;
    }
    public withEndTime(endTime: number): ListSnapshotBackupsResp {
        this['endTime'] = endTime;
        return this;
    }
    public withBucketName(bucketName: string): ListSnapshotBackupsResp {
        this['bucketName'] = bucketName;
        return this;
    }
}