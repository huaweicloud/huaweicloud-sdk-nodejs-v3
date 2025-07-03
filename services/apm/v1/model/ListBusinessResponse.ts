import { BusinessNodeModel } from './BusinessNodeModel';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListBusinessResponse extends SdkResponse {
    private 'business_nodes'?: Array<BusinessNodeModel>;
    public constructor() { 
        super();
    }
    public withBusinessNodes(businessNodes: Array<BusinessNodeModel>): ListBusinessResponse {
        this['business_nodes'] = businessNodes;
        return this;
    }
    public set businessNodes(businessNodes: Array<BusinessNodeModel>  | undefined) {
        this['business_nodes'] = businessNodes;
    }
    public get businessNodes(): Array<BusinessNodeModel> | undefined {
        return this['business_nodes'];
    }
}