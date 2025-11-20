import { TargetDn4Restore } from './TargetDn4Restore';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAvalibleRdsResponse extends SdkResponse {
    private 'target_data_nodes'?: Array<TargetDn4Restore>;
    public constructor() { 
        super();
    }
    public withTargetDataNodes(targetDataNodes: Array<TargetDn4Restore>): ShowAvalibleRdsResponse {
        this['target_data_nodes'] = targetDataNodes;
        return this;
    }
    public set targetDataNodes(targetDataNodes: Array<TargetDn4Restore>  | undefined) {
        this['target_data_nodes'] = targetDataNodes;
    }
    public get targetDataNodes(): Array<TargetDn4Restore> | undefined {
        return this['target_data_nodes'];
    }
}