import { TreeNode } from './TreeNode';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTaskPathTreeResponse extends SdkResponse {
    public info?: Array<TreeNode>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withInfo(info: Array<TreeNode>): ShowTaskPathTreeResponse {
        this['info'] = info;
        return this;
    }
    public withTotal(total: number): ShowTaskPathTreeResponse {
        this['total'] = total;
        return this;
    }
}