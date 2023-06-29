import { QueryVmrPkgResResultDTO } from './QueryVmrPkgResResultDTO';
import { ResDetailDTO } from './ResDetailDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowCorpResourceResponse extends SdkResponse {
    public te1080pHardCount?: ResDetailDTO;
    public te720pHardCount?: ResDetailDTO;
    public teSoftCount?: ResDetailDTO;
    public roomCount?: ResDetailDTO;
    public recordCapability?: ResDetailDTO;
    public confCallCount?: ResDetailDTO;
    public liveCount?: ResDetailDTO;
    public thirdPartyHardCount?: ResDetailDTO;
    public hwVisionCount?: ResDetailDTO;
    public ideaHubCount?: ResDetailDTO;
    public vmr?: Array<QueryVmrPkgResResultDTO>;
    public enablePstn?: boolean;
    public enableSMS?: boolean;
    public enableHybridCloud?: boolean;
    public enableCloudDisk?: boolean;
    public enableUc?: boolean;
    public enableAiMinutes?: boolean;
    public singleConfCallCount?: number;
    public confLength?: number;
    public constructor() { 
        super();
    }
    public withTe1080pHardCount(te1080pHardCount: ResDetailDTO): ShowCorpResourceResponse {
        this['te1080pHardCount'] = te1080pHardCount;
        return this;
    }
    public withTe720pHardCount(te720pHardCount: ResDetailDTO): ShowCorpResourceResponse {
        this['te720pHardCount'] = te720pHardCount;
        return this;
    }
    public withTeSoftCount(teSoftCount: ResDetailDTO): ShowCorpResourceResponse {
        this['teSoftCount'] = teSoftCount;
        return this;
    }
    public withRoomCount(roomCount: ResDetailDTO): ShowCorpResourceResponse {
        this['roomCount'] = roomCount;
        return this;
    }
    public withRecordCapability(recordCapability: ResDetailDTO): ShowCorpResourceResponse {
        this['recordCapability'] = recordCapability;
        return this;
    }
    public withConfCallCount(confCallCount: ResDetailDTO): ShowCorpResourceResponse {
        this['confCallCount'] = confCallCount;
        return this;
    }
    public withLiveCount(liveCount: ResDetailDTO): ShowCorpResourceResponse {
        this['liveCount'] = liveCount;
        return this;
    }
    public withThirdPartyHardCount(thirdPartyHardCount: ResDetailDTO): ShowCorpResourceResponse {
        this['thirdPartyHardCount'] = thirdPartyHardCount;
        return this;
    }
    public withHwVisionCount(hwVisionCount: ResDetailDTO): ShowCorpResourceResponse {
        this['hwVisionCount'] = hwVisionCount;
        return this;
    }
    public withIdeaHubCount(ideaHubCount: ResDetailDTO): ShowCorpResourceResponse {
        this['ideaHubCount'] = ideaHubCount;
        return this;
    }
    public withVmr(vmr: Array<QueryVmrPkgResResultDTO>): ShowCorpResourceResponse {
        this['vmr'] = vmr;
        return this;
    }
    public withEnablePstn(enablePstn: boolean): ShowCorpResourceResponse {
        this['enablePstn'] = enablePstn;
        return this;
    }
    public withEnableSMS(enableSMS: boolean): ShowCorpResourceResponse {
        this['enableSMS'] = enableSMS;
        return this;
    }
    public withEnableHybridCloud(enableHybridCloud: boolean): ShowCorpResourceResponse {
        this['enableHybridCloud'] = enableHybridCloud;
        return this;
    }
    public withEnableCloudDisk(enableCloudDisk: boolean): ShowCorpResourceResponse {
        this['enableCloudDisk'] = enableCloudDisk;
        return this;
    }
    public withEnableUc(enableUc: boolean): ShowCorpResourceResponse {
        this['enableUc'] = enableUc;
        return this;
    }
    public withEnableAiMinutes(enableAiMinutes: boolean): ShowCorpResourceResponse {
        this['enableAiMinutes'] = enableAiMinutes;
        return this;
    }
    public withSingleConfCallCount(singleConfCallCount: number): ShowCorpResourceResponse {
        this['singleConfCallCount'] = singleConfCallCount;
        return this;
    }
    public withConfLength(confLength: number): ShowCorpResourceResponse {
        this['confLength'] = confLength;
        return this;
    }
}