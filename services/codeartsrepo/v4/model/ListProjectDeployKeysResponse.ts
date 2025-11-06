import { DeployKeyDto } from './DeployKeyDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListProjectDeployKeysResponse extends SdkResponse {
    public body?: Array<DeployKeyDto>;
    private 'X-Total'?: string;
    public constructor() { 
        super();
    }
    public withBody(body: Array<DeployKeyDto>): ListProjectDeployKeysResponse {
        this['body'] = body;
        return this;
    }
    public withXTotal(xTotal: string): ListProjectDeployKeysResponse {
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