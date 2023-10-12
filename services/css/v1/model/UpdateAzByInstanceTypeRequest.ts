import { UpdateAzByInstanceTypeReq } from './UpdateAzByInstanceTypeReq';


export class UpdateAzByInstanceTypeRequest {
    private 'cluster_id'?: string;
    private 'inst_type'?: UpdateAzByInstanceTypeRequestInstTypeEnum | string;
    public body?: UpdateAzByInstanceTypeReq;
    public constructor(clusterId?: string, instType?: string) { 
        this['cluster_id'] = clusterId;
        this['inst_type'] = instType;
    }
    public withClusterId(clusterId: string): UpdateAzByInstanceTypeRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withInstType(instType: UpdateAzByInstanceTypeRequestInstTypeEnum | string): UpdateAzByInstanceTypeRequest {
        this['inst_type'] = instType;
        return this;
    }
    public set instType(instType: UpdateAzByInstanceTypeRequestInstTypeEnum | string  | undefined) {
        this['inst_type'] = instType;
    }
    public get instType(): UpdateAzByInstanceTypeRequestInstTypeEnum | string | undefined {
        return this['inst_type'];
    }
    public withBody(body: UpdateAzByInstanceTypeReq): UpdateAzByInstanceTypeRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateAzByInstanceTypeRequestInstTypeEnum {
    ALL = 'all',
    ESS = 'ess',
    ESS_COLD = 'ess-cold',
    ESS_CLIENT = 'ess-client',
    ESS_MASTER = 'ess-master'
}
