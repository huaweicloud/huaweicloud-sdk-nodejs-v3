

export class DeleteClusterRequest {
    private 'cluster_id'?: string;
    private 'Content-Type'?: string;
    private 'delete_efs'?: DeleteClusterRequestDeleteEfsEnum | string;
    private 'delete_eni'?: DeleteClusterRequestDeleteEniEnum | string;
    private 'delete_evs'?: DeleteClusterRequestDeleteEvsEnum | string;
    private 'delete_net'?: DeleteClusterRequestDeleteNetEnum | string;
    private 'delete_obs'?: DeleteClusterRequestDeleteObsEnum | string;
    private 'delete_sfs'?: DeleteClusterRequestDeleteSfsEnum | string;
    private 'delete_sfs30'?: DeleteClusterRequestDeleteSfs30Enum | string;
    public tobedeleted?: DeleteClusterRequestTobedeletedEnum | string;
    public constructor(clusterId?: string, contentType?: string) { 
        this['cluster_id'] = clusterId;
        this['Content-Type'] = contentType;
    }
    public withClusterId(clusterId: string): DeleteClusterRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withContentType(contentType: string): DeleteClusterRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withDeleteEfs(deleteEfs: DeleteClusterRequestDeleteEfsEnum | string): DeleteClusterRequest {
        this['delete_efs'] = deleteEfs;
        return this;
    }
    public set deleteEfs(deleteEfs: DeleteClusterRequestDeleteEfsEnum | string  | undefined) {
        this['delete_efs'] = deleteEfs;
    }
    public get deleteEfs(): DeleteClusterRequestDeleteEfsEnum | string | undefined {
        return this['delete_efs'];
    }
    public withDeleteEni(deleteEni: DeleteClusterRequestDeleteEniEnum | string): DeleteClusterRequest {
        this['delete_eni'] = deleteEni;
        return this;
    }
    public set deleteEni(deleteEni: DeleteClusterRequestDeleteEniEnum | string  | undefined) {
        this['delete_eni'] = deleteEni;
    }
    public get deleteEni(): DeleteClusterRequestDeleteEniEnum | string | undefined {
        return this['delete_eni'];
    }
    public withDeleteEvs(deleteEvs: DeleteClusterRequestDeleteEvsEnum | string): DeleteClusterRequest {
        this['delete_evs'] = deleteEvs;
        return this;
    }
    public set deleteEvs(deleteEvs: DeleteClusterRequestDeleteEvsEnum | string  | undefined) {
        this['delete_evs'] = deleteEvs;
    }
    public get deleteEvs(): DeleteClusterRequestDeleteEvsEnum | string | undefined {
        return this['delete_evs'];
    }
    public withDeleteNet(deleteNet: DeleteClusterRequestDeleteNetEnum | string): DeleteClusterRequest {
        this['delete_net'] = deleteNet;
        return this;
    }
    public set deleteNet(deleteNet: DeleteClusterRequestDeleteNetEnum | string  | undefined) {
        this['delete_net'] = deleteNet;
    }
    public get deleteNet(): DeleteClusterRequestDeleteNetEnum | string | undefined {
        return this['delete_net'];
    }
    public withDeleteObs(deleteObs: DeleteClusterRequestDeleteObsEnum | string): DeleteClusterRequest {
        this['delete_obs'] = deleteObs;
        return this;
    }
    public set deleteObs(deleteObs: DeleteClusterRequestDeleteObsEnum | string  | undefined) {
        this['delete_obs'] = deleteObs;
    }
    public get deleteObs(): DeleteClusterRequestDeleteObsEnum | string | undefined {
        return this['delete_obs'];
    }
    public withDeleteSfs(deleteSfs: DeleteClusterRequestDeleteSfsEnum | string): DeleteClusterRequest {
        this['delete_sfs'] = deleteSfs;
        return this;
    }
    public set deleteSfs(deleteSfs: DeleteClusterRequestDeleteSfsEnum | string  | undefined) {
        this['delete_sfs'] = deleteSfs;
    }
    public get deleteSfs(): DeleteClusterRequestDeleteSfsEnum | string | undefined {
        return this['delete_sfs'];
    }
    public withDeleteSfs30(deleteSfs30: DeleteClusterRequestDeleteSfs30Enum | string): DeleteClusterRequest {
        this['delete_sfs30'] = deleteSfs30;
        return this;
    }
    public set deleteSfs30(deleteSfs30: DeleteClusterRequestDeleteSfs30Enum | string  | undefined) {
        this['delete_sfs30'] = deleteSfs30;
    }
    public get deleteSfs30(): DeleteClusterRequestDeleteSfs30Enum | string | undefined {
        return this['delete_sfs30'];
    }
    public withTobedeleted(tobedeleted: DeleteClusterRequestTobedeletedEnum | string): DeleteClusterRequest {
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
export enum DeleteClusterRequestDeleteSfs30Enum {
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
