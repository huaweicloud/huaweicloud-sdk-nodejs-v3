import { PersistentVolumeClaim } from './PersistentVolumeClaim';


export class CreateCloudPersistentVolumeClaimsRequest {
    public namespace: string;
    private 'Content-Type': string | undefined;
    private 'X-Cluster-ID'?: string | undefined;
    public body?: PersistentVolumeClaim;
    public constructor(namespace?: any, contentType?: any) { 
        this['namespace'] = namespace;
        this['Content-Type'] = contentType;
    }
    public withNamespace(namespace: string): CreateCloudPersistentVolumeClaimsRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withContentType(contentType: string): CreateCloudPersistentVolumeClaimsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withXClusterID(xClusterID: string): CreateCloudPersistentVolumeClaimsRequest {
        this['X-Cluster-ID'] = xClusterID;
        return this;
    }
    public set xClusterID(xClusterID: string | undefined) {
        this['X-Cluster-ID'] = xClusterID;
    }
    public get xClusterID() {
        return this['X-Cluster-ID'];
    }
    public withBody(body: PersistentVolumeClaim): CreateCloudPersistentVolumeClaimsRequest {
        this['body'] = body;
        return this;
    }
}