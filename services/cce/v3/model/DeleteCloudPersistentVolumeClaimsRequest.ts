

export class DeleteCloudPersistentVolumeClaimsRequest {
    public name: string;
    public namespace: string;
    public deleteVolume?: string;
    public storageType?: string;
    private 'Content-Type': string | undefined;
    private 'X-Cluster-ID'?: string | undefined;
    public constructor(name?: any, namespace?: any, contentType?: any) { 
        this['name'] = name;
        this['namespace'] = namespace;
        this['Content-Type'] = contentType;
    }
    public withName(name: string): DeleteCloudPersistentVolumeClaimsRequest {
        this['name'] = name;
        return this;
    }
    public withNamespace(namespace: string): DeleteCloudPersistentVolumeClaimsRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withDeleteVolume(deleteVolume: string): DeleteCloudPersistentVolumeClaimsRequest {
        this['deleteVolume'] = deleteVolume;
        return this;
    }
    public withStorageType(storageType: string): DeleteCloudPersistentVolumeClaimsRequest {
        this['storageType'] = storageType;
        return this;
    }
    public withContentType(contentType: string): DeleteCloudPersistentVolumeClaimsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withXClusterID(xClusterID: string): DeleteCloudPersistentVolumeClaimsRequest {
        this['X-Cluster-ID'] = xClusterID;
        return this;
    }
    public set xClusterID(xClusterID: string | undefined) {
        this['X-Cluster-ID'] = xClusterID;
    }
    public get xClusterID() {
        return this['X-Cluster-ID'];
    }
}