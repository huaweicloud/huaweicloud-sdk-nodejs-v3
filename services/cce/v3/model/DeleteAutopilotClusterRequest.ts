

export class DeleteAutopilotClusterRequest {
    private 'cluster_id'?: string;
    private 'Content-Type'?: string;
    private 'delete_efs'?: DeleteAutopilotClusterRequestDeleteEfsEnum | string;
    private 'delete_eni'?: DeleteAutopilotClusterRequestDeleteEniEnum | string;
    private 'delete_net'?: DeleteAutopilotClusterRequestDeleteNetEnum | string;
    private 'delete_obs'?: DeleteAutopilotClusterRequestDeleteObsEnum | string;
    private 'delete_sfs30'?: DeleteAutopilotClusterRequestDeleteSfs30Enum | string;
    private 'lts_reclaim_policy'?: DeleteAutopilotClusterRequestLtsReclaimPolicyEnum | string;
    public constructor(clusterId?: string, contentType?: string) { 
        this['cluster_id'] = clusterId;
        this['Content-Type'] = contentType;
    }
    public withClusterId(clusterId: string): DeleteAutopilotClusterRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withContentType(contentType: string): DeleteAutopilotClusterRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withDeleteEfs(deleteEfs: DeleteAutopilotClusterRequestDeleteEfsEnum | string): DeleteAutopilotClusterRequest {
        this['delete_efs'] = deleteEfs;
        return this;
    }
    public set deleteEfs(deleteEfs: DeleteAutopilotClusterRequestDeleteEfsEnum | string  | undefined) {
        this['delete_efs'] = deleteEfs;
    }
    public get deleteEfs(): DeleteAutopilotClusterRequestDeleteEfsEnum | string | undefined {
        return this['delete_efs'];
    }
    public withDeleteEni(deleteEni: DeleteAutopilotClusterRequestDeleteEniEnum | string): DeleteAutopilotClusterRequest {
        this['delete_eni'] = deleteEni;
        return this;
    }
    public set deleteEni(deleteEni: DeleteAutopilotClusterRequestDeleteEniEnum | string  | undefined) {
        this['delete_eni'] = deleteEni;
    }
    public get deleteEni(): DeleteAutopilotClusterRequestDeleteEniEnum | string | undefined {
        return this['delete_eni'];
    }
    public withDeleteNet(deleteNet: DeleteAutopilotClusterRequestDeleteNetEnum | string): DeleteAutopilotClusterRequest {
        this['delete_net'] = deleteNet;
        return this;
    }
    public set deleteNet(deleteNet: DeleteAutopilotClusterRequestDeleteNetEnum | string  | undefined) {
        this['delete_net'] = deleteNet;
    }
    public get deleteNet(): DeleteAutopilotClusterRequestDeleteNetEnum | string | undefined {
        return this['delete_net'];
    }
    public withDeleteObs(deleteObs: DeleteAutopilotClusterRequestDeleteObsEnum | string): DeleteAutopilotClusterRequest {
        this['delete_obs'] = deleteObs;
        return this;
    }
    public set deleteObs(deleteObs: DeleteAutopilotClusterRequestDeleteObsEnum | string  | undefined) {
        this['delete_obs'] = deleteObs;
    }
    public get deleteObs(): DeleteAutopilotClusterRequestDeleteObsEnum | string | undefined {
        return this['delete_obs'];
    }
    public withDeleteSfs30(deleteSfs30: DeleteAutopilotClusterRequestDeleteSfs30Enum | string): DeleteAutopilotClusterRequest {
        this['delete_sfs30'] = deleteSfs30;
        return this;
    }
    public set deleteSfs30(deleteSfs30: DeleteAutopilotClusterRequestDeleteSfs30Enum | string  | undefined) {
        this['delete_sfs30'] = deleteSfs30;
    }
    public get deleteSfs30(): DeleteAutopilotClusterRequestDeleteSfs30Enum | string | undefined {
        return this['delete_sfs30'];
    }
    public withLtsReclaimPolicy(ltsReclaimPolicy: DeleteAutopilotClusterRequestLtsReclaimPolicyEnum | string): DeleteAutopilotClusterRequest {
        this['lts_reclaim_policy'] = ltsReclaimPolicy;
        return this;
    }
    public set ltsReclaimPolicy(ltsReclaimPolicy: DeleteAutopilotClusterRequestLtsReclaimPolicyEnum | string  | undefined) {
        this['lts_reclaim_policy'] = ltsReclaimPolicy;
    }
    public get ltsReclaimPolicy(): DeleteAutopilotClusterRequestLtsReclaimPolicyEnum | string | undefined {
        return this['lts_reclaim_policy'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteAutopilotClusterRequestDeleteEfsEnum {
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
export enum DeleteAutopilotClusterRequestDeleteEniEnum {
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
export enum DeleteAutopilotClusterRequestDeleteNetEnum {
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
export enum DeleteAutopilotClusterRequestDeleteObsEnum {
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
export enum DeleteAutopilotClusterRequestDeleteSfs30Enum {
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
export enum DeleteAutopilotClusterRequestLtsReclaimPolicyEnum {
    DELETE_LOG_GROUP = 'Delete_Log_Group',
    DELETE_MASTER_LOG_STREAM = 'Delete_Master_Log_Stream',
    RETAIN = 'Retain'
}
