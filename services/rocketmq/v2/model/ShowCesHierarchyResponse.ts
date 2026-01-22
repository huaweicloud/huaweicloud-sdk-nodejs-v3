import { ShowCesHierarchyRespInstanceIds } from './ShowCesHierarchyRespInstanceIds';
import { ShowCesHierarchyRespNodes } from './ShowCesHierarchyRespNodes';
import { ShowCeshierarchyRespDimensions } from './ShowCeshierarchyRespDimensions';
import { ShowCeshierarchyRespDlq } from './ShowCeshierarchyRespDlq';
import { ShowCeshierarchyRespGroups } from './ShowCeshierarchyRespGroups';
import { ShowCeshierarchyRespTopics } from './ShowCeshierarchyRespTopics';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowCesHierarchyResponse extends SdkResponse {
    public dimensions?: Array<ShowCeshierarchyRespDimensions>;
    private 'instance_ids'?: Array<ShowCesHierarchyRespInstanceIds>;
    public nodes?: Array<ShowCesHierarchyRespNodes>;
    public topics?: Array<ShowCeshierarchyRespTopics>;
    public dlq?: Array<ShowCeshierarchyRespDlq>;
    public groups?: Array<ShowCeshierarchyRespGroups>;
    public constructor() { 
        super();
    }
    public withDimensions(dimensions: Array<ShowCeshierarchyRespDimensions>): ShowCesHierarchyResponse {
        this['dimensions'] = dimensions;
        return this;
    }
    public withInstanceIds(instanceIds: Array<ShowCesHierarchyRespInstanceIds>): ShowCesHierarchyResponse {
        this['instance_ids'] = instanceIds;
        return this;
    }
    public set instanceIds(instanceIds: Array<ShowCesHierarchyRespInstanceIds>  | undefined) {
        this['instance_ids'] = instanceIds;
    }
    public get instanceIds(): Array<ShowCesHierarchyRespInstanceIds> | undefined {
        return this['instance_ids'];
    }
    public withNodes(nodes: Array<ShowCesHierarchyRespNodes>): ShowCesHierarchyResponse {
        this['nodes'] = nodes;
        return this;
    }
    public withTopics(topics: Array<ShowCeshierarchyRespTopics>): ShowCesHierarchyResponse {
        this['topics'] = topics;
        return this;
    }
    public withDlq(dlq: Array<ShowCeshierarchyRespDlq>): ShowCesHierarchyResponse {
        this['dlq'] = dlq;
        return this;
    }
    public withGroups(groups: Array<ShowCeshierarchyRespGroups>): ShowCesHierarchyResponse {
        this['groups'] = groups;
        return this;
    }
}