import { PersistentVolumeClaim } from './PersistentVolumeClaim';


export class CreateCloudPersistentVolumeClaimsRequest {
    public namespace?: string;
    private 'Content-Type'?: string;
    private 'X-Cluster-ID'?: string;
    public body?: PersistentVolumeClaim;
    public constructor(namespace?: string, contentType?: string) { 
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
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withXClusterID(xClusterID: string): CreateCloudPersistentVolumeClaimsRequest {
        this['X-Cluster-ID'] = xClusterID;
        return this;
    }
    public set xClusterID(xClusterID: string  | undefined) {
        this['X-Cluster-ID'] = xClusterID;
    }
    public get xClusterID(): string | undefined {
        return this['X-Cluster-ID'];
    }
    public withBody(body: PersistentVolumeClaim): CreateCloudPersistentVolumeClaimsRequest {
        this['body'] = body;
        return this;
    }
}