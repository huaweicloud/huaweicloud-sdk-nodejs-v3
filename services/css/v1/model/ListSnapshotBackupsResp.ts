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
    public backupType?: string;
    public backupMethod?: string;
    public backupFrequency?: string;
    public indices?: string;
    public totalShards?: number;
    public failedShards?: number;
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
    public withBackupType(backupType: string): ListSnapshotBackupsResp {
        this['backupType'] = backupType;
        return this;
    }
    public withBackupMethod(backupMethod: string): ListSnapshotBackupsResp {
        this['backupMethod'] = backupMethod;
        return this;
    }
    public withBackupFrequency(backupFrequency: string): ListSnapshotBackupsResp {
        this['backupFrequency'] = backupFrequency;
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