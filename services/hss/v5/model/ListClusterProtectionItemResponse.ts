import { ClusterBaselineResponseInfo } from './ClusterBaselineResponseInfo';
import { ClusterImageResponseInfo } from './ClusterImageResponseInfo';
import { ClusterItemResponseInfo } from './ClusterItemResponseInfo';
import { ClusterMalwareResponseInfo } from './ClusterMalwareResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListClusterProtectionItemResponse extends SdkResponse {
    private 'total_num'?: number;
    public vuls?: Array<string>;
    public baselines?: Array<ClusterBaselineResponseInfo>;
    public malwares?: Array<ClusterMalwareResponseInfo>;
    public images?: Array<ClusterImageResponseInfo>;
    public clusters?: Array<ClusterItemResponseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListClusterProtectionItemResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withVuls(vuls: Array<string>): ListClusterProtectionItemResponse {
        this['vuls'] = vuls;
        return this;
    }
    public withBaselines(baselines: Array<ClusterBaselineResponseInfo>): ListClusterProtectionItemResponse {
        this['baselines'] = baselines;
        return this;
    }
    public withMalwares(malwares: Array<ClusterMalwareResponseInfo>): ListClusterProtectionItemResponse {
        this['malwares'] = malwares;
        return this;
    }
    public withImages(images: Array<ClusterImageResponseInfo>): ListClusterProtectionItemResponse {
        this['images'] = images;
        return this;
    }
    public withClusters(clusters: Array<ClusterItemResponseInfo>): ListClusterProtectionItemResponse {
        this['clusters'] = clusters;
        return this;
    }
}