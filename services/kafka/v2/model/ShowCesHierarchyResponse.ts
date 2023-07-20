import { ShowCeshierarchyRespDimensions } from './ShowCeshierarchyRespDimensions';
import { ShowCeshierarchyRespGroups } from './ShowCeshierarchyRespGroups';
import { ShowCeshierarchyRespInstanceIds } from './ShowCeshierarchyRespInstanceIds';
import { ShowCeshierarchyRespNodes } from './ShowCeshierarchyRespNodes';
import { ShowCeshierarchyRespQueues } from './ShowCeshierarchyRespQueues';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowCesHierarchyResponse extends SdkResponse {
    public dimensions?: Array<ShowCeshierarchyRespDimensions>;
    private 'instance_ids'?: Array<ShowCeshierarchyRespInstanceIds>;
    public nodes?: Array<ShowCeshierarchyRespNodes>;
    public queues?: Array<ShowCeshierarchyRespQueues>;
    public groups?: Array<ShowCeshierarchyRespGroups>;
    public constructor() { 
        super();
    }
    public withDimensions(dimensions: Array<ShowCeshierarchyRespDimensions>): ShowCesHierarchyResponse {
        this['dimensions'] = dimensions;
        return this;
    }
    public withInstanceIds(instanceIds: Array<ShowCeshierarchyRespInstanceIds>): ShowCesHierarchyResponse {
        this['instance_ids'] = instanceIds;
        return this;
    }
    public set instanceIds(instanceIds: Array<ShowCeshierarchyRespInstanceIds>  | undefined) {
        this['instance_ids'] = instanceIds;
    }
    public get instanceIds(): Array<ShowCeshierarchyRespInstanceIds> | undefined {
        return this['instance_ids'];
    }
    public withNodes(nodes: Array<ShowCeshierarchyRespNodes>): ShowCesHierarchyResponse {
        this['nodes'] = nodes;
        return this;
    }
    public withQueues(queues: Array<ShowCeshierarchyRespQueues>): ShowCesHierarchyResponse {
        this['queues'] = queues;
        return this;
    }
    public withGroups(groups: Array<ShowCeshierarchyRespGroups>): ShowCesHierarchyResponse {
        this['groups'] = groups;
        return this;
    }
}