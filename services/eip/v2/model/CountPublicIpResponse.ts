
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CountPublicIpResponse extends SdkResponse {
    private 'elasticip_size'?: number | undefined;
    public constructor() { 
        super();
    }
    public withElasticipSize(elasticipSize: number): CountPublicIpResponse {
        this['elasticip_size'] = elasticipSize;
        return this;
    }
    public set elasticipSize(elasticipSize: number | undefined) {
        this['elasticip_size'] = elasticipSize;
    }
    public get elasticipSize() {
        return this['elasticip_size'];
    }
}