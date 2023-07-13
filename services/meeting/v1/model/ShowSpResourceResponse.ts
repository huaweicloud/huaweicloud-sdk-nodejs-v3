import { QueryCorpGroupDTO } from './QueryCorpGroupDTO';
import { ResDetailDTO } from './ResDetailDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSpResourceResponse extends SdkResponse {
    public te1080pHardCount?: ResDetailDTO;
    public te720pHardCount?: ResDetailDTO;
    public teSoftCount?: ResDetailDTO;
    public roomCount?: ResDetailDTO;
    public recordCapability?: ResDetailDTO;
    public confCallCount?: ResDetailDTO;
    public liveCount?: ResDetailDTO;
    public corpCount?: ResDetailDTO;
    public thirdPartyHardCount?: ResDetailDTO;
    public hwVisionCount?: ResDetailDTO;
    public ideaHubCount?: ResDetailDTO;
    public enablePstn?: boolean;
    public enableSMS?: boolean;
    public groupList?: Array<QueryCorpGroupDTO>;
    public constructor() { 
        super();
    }
    public withTe1080pHardCount(te1080pHardCount: ResDetailDTO): ShowSpResourceResponse {
        this['te1080pHardCount'] = te1080pHardCount;
        return this;
    }
    public withTe720pHardCount(te720pHardCount: ResDetailDTO): ShowSpResourceResponse {
        this['te720pHardCount'] = te720pHardCount;
        return this;
    }
    public withTeSoftCount(teSoftCount: ResDetailDTO): ShowSpResourceResponse {
        this['teSoftCount'] = teSoftCount;
        return this;
    }
    public withRoomCount(roomCount: ResDetailDTO): ShowSpResourceResponse {
        this['roomCount'] = roomCount;
        return this;
    }
    public withRecordCapability(recordCapability: ResDetailDTO): ShowSpResourceResponse {
        this['recordCapability'] = recordCapability;
        return this;
    }
    public withConfCallCount(confCallCount: ResDetailDTO): ShowSpResourceResponse {
        this['confCallCount'] = confCallCount;
        return this;
    }
    public withLiveCount(liveCount: ResDetailDTO): ShowSpResourceResponse {
        this['liveCount'] = liveCount;
        return this;
    }
    public withCorpCount(corpCount: ResDetailDTO): ShowSpResourceResponse {
        this['corpCount'] = corpCount;
        return this;
    }
    public withThirdPartyHardCount(thirdPartyHardCount: ResDetailDTO): ShowSpResourceResponse {
        this['thirdPartyHardCount'] = thirdPartyHardCount;
        return this;
    }
    public withHwVisionCount(hwVisionCount: ResDetailDTO): ShowSpResourceResponse {
        this['hwVisionCount'] = hwVisionCount;
        return this;
    }
    public withIdeaHubCount(ideaHubCount: ResDetailDTO): ShowSpResourceResponse {
        this['ideaHubCount'] = ideaHubCount;
        return this;
    }
    public withEnablePstn(enablePstn: boolean): ShowSpResourceResponse {
        this['enablePstn'] = enablePstn;
        return this;
    }
    public withEnableSMS(enableSMS: boolean): ShowSpResourceResponse {
        this['enableSMS'] = enableSMS;
        return this;
    }
    public withGroupList(groupList: Array<QueryCorpGroupDTO>): ShowSpResourceResponse {
        this['groupList'] = groupList;
        return this;
    }
}