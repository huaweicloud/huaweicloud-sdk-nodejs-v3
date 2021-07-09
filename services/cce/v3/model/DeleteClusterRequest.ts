

export class DeleteClusterRequest {
    private 'cluster_id': string | undefined;
    private 'Content-Type': string | undefined;
    private 'delete_efs'?: DeleteClusterRequestDeleteEfsEnum | undefined;
    private 'delete_eni'?: DeleteClusterRequestDeleteEniEnum | undefined;
    private 'delete_evs'?: DeleteClusterRequestDeleteEvsEnum | undefined;
    private 'delete_net'?: DeleteClusterRequestDeleteNetEnum | undefined;
    private 'delete_obs'?: DeleteClusterRequestDeleteObsEnum | undefined;
    private 'delete_sfs'?: DeleteClusterRequestDeleteSfsEnum | undefined;
    public tobedeleted?: DeleteClusterRequestTobedeletedEnum;
    public constructor(clusterId?: any, contentType?: any) { 
        this['cluster_id'] = clusterId;
        this['Content-Type'] = contentType;
    }
    public withClusterId(clusterId: string): DeleteClusterRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId() {
        return this['cluster_id'];
    }
    public withContentType(contentType: string): DeleteClusterRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withDeleteEfs(deleteEfs: DeleteClusterRequestDeleteEfsEnum): DeleteClusterRequest {
        this['delete_efs'] = deleteEfs;
        return this;
    }
    public set deleteEfs(deleteEfs: DeleteClusterRequestDeleteEfsEnum | undefined) {
        this['delete_efs'] = deleteEfs;
    }
    public get deleteEfs() {
        return this['delete_efs'];
    }
    public withDeleteEni(deleteEni: DeleteClusterRequestDeleteEniEnum): DeleteClusterRequest {
        this['delete_eni'] = deleteEni;
        return this;
    }
    public set deleteEni(deleteEni: DeleteClusterRequestDeleteEniEnum | undefined) {
        this['delete_eni'] = deleteEni;
    }
    public get deleteEni() {
        return this['delete_eni'];
    }
    public withDeleteEvs(deleteEvs: DeleteClusterRequestDeleteEvsEnum): DeleteClusterRequest {
        this['delete_evs'] = deleteEvs;
        return this;
    }
    public set deleteEvs(deleteEvs: DeleteClusterRequestDeleteEvsEnum | undefined) {
        this['delete_evs'] = deleteEvs;
    }
    public get deleteEvs() {
        return this['delete_evs'];
    }
    public withDeleteNet(deleteNet: DeleteClusterRequestDeleteNetEnum): DeleteClusterRequest {
        this['delete_net'] = deleteNet;
        return this;
    }
    public set deleteNet(deleteNet: DeleteClusterRequestDeleteNetEnum | undefined) {
        this['delete_net'] = deleteNet;
    }
    public get deleteNet() {
        return this['delete_net'];
    }
    public withDeleteObs(deleteObs: DeleteClusterRequestDeleteObsEnum): DeleteClusterRequest {
        this['delete_obs'] = deleteObs;
        return this;
    }
    public set deleteObs(deleteObs: DeleteClusterRequestDeleteObsEnum | undefined) {
        this['delete_obs'] = deleteObs;
    }
    public get deleteObs() {
        return this['delete_obs'];
    }
    public withDeleteSfs(deleteSfs: DeleteClusterRequestDeleteSfsEnum): DeleteClusterRequest {
        this['delete_sfs'] = deleteSfs;
        return this;
    }
    public set deleteSfs(deleteSfs: DeleteClusterRequestDeleteSfsEnum | undefined) {
        this['delete_sfs'] = deleteSfs;
    }
    public get deleteSfs() {
        return this['delete_sfs'];
    }
    public withTobedeleted(tobedeleted: DeleteClusterRequestTobedeletedEnum): DeleteClusterRequest {
        this['tobedeleted'] = tobedeleted;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteClusterRequestDeleteEfsEnum {
    TRUE = 'true',
    BLOCK = 'block',
    TRY = 'try',
    FALSE = 'false',
    SKIP = 'skip'
}
/**
    * @export
    * @enum {string}
    */
export enum DeleteClusterRequestDeleteEniEnum {
    TRUE = 'true',
    BLOCK = 'block',
    TRY = 'try',
    FALSE = 'false',
    SKIP = 'skip'
}
/**
    * @export
    * @enum {string}
    */
export enum DeleteClusterRequestDeleteEvsEnum {
    TRUE = 'true',
    BLOCK = 'block',
    TRY = 'try',
    FALSE = 'false',
    SKIP = 'skip'
}
/**
    * @export
    * @enum {string}
    */
export enum DeleteClusterRequestDeleteNetEnum {
    TRUE = 'true',
    BLOCK = 'block',
    TRY = 'try',
    FALSE = 'false',
    SKIP = 'skip'
}
/**
    * @export
    * @enum {string}
    */
export enum DeleteClusterRequestDeleteObsEnum {
    TRUE = 'true',
    BLOCK = 'block',
    TRY = 'try',
    FALSE = 'false',
    SKIP = 'skip'
}
/**
    * @export
    * @enum {string}
    */
export enum DeleteClusterRequestDeleteSfsEnum {
    TRUE = 'true',
    BLOCK = 'block',
    TRY = 'try',
    FALSE = 'false',
    SKIP = 'skip'
}
/**
    * @export
    * @enum {string}
    */
export enum DeleteClusterRequestTobedeletedEnum {
    TRUE = 'true'
}
