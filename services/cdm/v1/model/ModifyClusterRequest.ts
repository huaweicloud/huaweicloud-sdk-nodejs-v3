import { CdmModifyClusterReq } from './CdmModifyClusterReq';


export class ModifyClusterRequest {
    private 'cluster_id'?: string;
    private 'Content-Type'?: string;
    private 'X-Language'?: string;
    public body?: CdmModifyClusterReq;
    public constructor(clusterId?: string, contentType?: string, xLanguage?: string) { 
        this['cluster_id'] = clusterId;
        this['Content-Type'] = contentType;
        this['X-Language'] = xLanguage;
    }
    public withClusterId(clusterId: string): ModifyClusterRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withContentType(contentType: string): ModifyClusterRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withXLanguage(xLanguage: string): ModifyClusterRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withBody(body: CdmModifyClusterReq): ModifyClusterRequest {
        this['body'] = body;
        return this;
    }
}