

export class BatchListEdgeAppVersionsRequest {
    private 'edge_app_id'?: string;
    public version?: string;
    public offset?: number;
    public limit?: number;
    private 'ai_card_type'?: BatchListEdgeAppVersionsRequestAiCardTypeEnum | string;
    public arch?: BatchListEdgeAppVersionsRequestArchEnum | string;
    public state?: BatchListEdgeAppVersionsRequestStateEnum | string;
    private 'deploy_type'?: BatchListEdgeAppVersionsRequestDeployTypeEnum | string;
    public constructor(edgeAppId?: string) { 
        this['edge_app_id'] = edgeAppId;
    }
    public withEdgeAppId(edgeAppId: string): BatchListEdgeAppVersionsRequest {
        this['edge_app_id'] = edgeAppId;
        return this;
    }
    public set edgeAppId(edgeAppId: string  | undefined) {
        this['edge_app_id'] = edgeAppId;
    }
    public get edgeAppId(): string | undefined {
        return this['edge_app_id'];
    }
    public withVersion(version: string): BatchListEdgeAppVersionsRequest {
        this['version'] = version;
        return this;
    }
    public withOffset(offset: number): BatchListEdgeAppVersionsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): BatchListEdgeAppVersionsRequest {
        this['limit'] = limit;
        return this;
    }
    public withAiCardType(aiCardType: BatchListEdgeAppVersionsRequestAiCardTypeEnum | string): BatchListEdgeAppVersionsRequest {
        this['ai_card_type'] = aiCardType;
        return this;
    }
    public set aiCardType(aiCardType: BatchListEdgeAppVersionsRequestAiCardTypeEnum | string  | undefined) {
        this['ai_card_type'] = aiCardType;
    }
    public get aiCardType(): BatchListEdgeAppVersionsRequestAiCardTypeEnum | string | undefined {
        return this['ai_card_type'];
    }
    public withArch(arch: BatchListEdgeAppVersionsRequestArchEnum | string): BatchListEdgeAppVersionsRequest {
        this['arch'] = arch;
        return this;
    }
    public withState(state: BatchListEdgeAppVersionsRequestStateEnum | string): BatchListEdgeAppVersionsRequest {
        this['state'] = state;
        return this;
    }
    public withDeployType(deployType: BatchListEdgeAppVersionsRequestDeployTypeEnum | string): BatchListEdgeAppVersionsRequest {
        this['deploy_type'] = deployType;
        return this;
    }
    public set deployType(deployType: BatchListEdgeAppVersionsRequestDeployTypeEnum | string  | undefined) {
        this['deploy_type'] = deployType;
    }
    public get deployType(): BatchListEdgeAppVersionsRequestDeployTypeEnum | string | undefined {
        return this['deploy_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchListEdgeAppVersionsRequestAiCardTypeEnum {
    GPU = 'GPU',
    NPU = 'NPU',
    UNEQUIPPED = 'UNEQUIPPED'
}
/**
    * @export
    * @enum {string}
    */
export enum BatchListEdgeAppVersionsRequestArchEnum {
    X86_64 = 'x86_64',
    ARM32 = 'arm32',
    ARM64 = 'arm64'
}
/**
    * @export
    * @enum {string}
    */
export enum BatchListEdgeAppVersionsRequestStateEnum {
    DRAFT = 'DRAFT',
    PUBLISHED = 'PUBLISHED',
    OFF_SHELF = 'OFF_SHELF'
}
/**
    * @export
    * @enum {string}
    */
export enum BatchListEdgeAppVersionsRequestDeployTypeEnum {
    DOCKER = 'docker',
    PROCESS = 'process'
}
