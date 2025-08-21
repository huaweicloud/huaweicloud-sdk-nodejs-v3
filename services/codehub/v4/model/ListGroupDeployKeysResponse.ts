import { DeployKeyDto } from './DeployKeyDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListGroupDeployKeysResponse extends SdkResponse {
    public body?: Array<DeployKeyDto>;
    private 'X-Total'?: string;
    public constructor() { 
        super();
    }
    public withBody(body: Array<DeployKeyDto>): ListGroupDeployKeysResponse {
        this['body'] = body;
        return this;
    }
    public withXTotal(xTotal: string): ListGroupDeployKeysResponse {
        this['X-Total'] = xTotal;
        return this;
    }
    public set xTotal(xTotal: string  | undefined) {
        this['X-Total'] = xTotal;
    }
    public get xTotal(): string | undefined {
        return this['X-Total'];
    }
}