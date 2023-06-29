import { QueryVmrPkgResResultDTO } from './QueryVmrPkgResResultDTO';


export class QueryCorpVcResResultDTO {
    public vmrPkgList?: Array<QueryVmrPkgResResultDTO>;
    public te1080pHardCount?: number;
    public te720pHardCount?: number;
    public teSoftCount?: number;
    public roomCount?: number;
    public recordCapability?: number;
    public confCallCount?: number;
    public liveCount?: number;
    public thirdPartyHardCount?: number;
    public hwVisionCount?: number;
    public ideaHubCount?: number;
    public constructor() { 
    }
    public withVmrPkgList(vmrPkgList: Array<QueryVmrPkgResResultDTO>): QueryCorpVcResResultDTO {
        this['vmrPkgList'] = vmrPkgList;
        return this;
    }
    public withTe1080pHardCount(te1080pHardCount: number): QueryCorpVcResResultDTO {
        this['te1080pHardCount'] = te1080pHardCount;
        return this;
    }
    public withTe720pHardCount(te720pHardCount: number): QueryCorpVcResResultDTO {
        this['te720pHardCount'] = te720pHardCount;
        return this;
    }
    public withTeSoftCount(teSoftCount: number): QueryCorpVcResResultDTO {
        this['teSoftCount'] = teSoftCount;
        return this;
    }
    public withRoomCount(roomCount: number): QueryCorpVcResResultDTO {
        this['roomCount'] = roomCount;
        return this;
    }
    public withRecordCapability(recordCapability: number): QueryCorpVcResResultDTO {
        this['recordCapability'] = recordCapability;
        return this;
    }
    public withConfCallCount(confCallCount: number): QueryCorpVcResResultDTO {
        this['confCallCount'] = confCallCount;
        return this;
    }
    public withLiveCount(liveCount: number): QueryCorpVcResResultDTO {
        this['liveCount'] = liveCount;
        return this;
    }
    public withThirdPartyHardCount(thirdPartyHardCount: number): QueryCorpVcResResultDTO {
        this['thirdPartyHardCount'] = thirdPartyHardCount;
        return this;
    }
    public withHwVisionCount(hwVisionCount: number): QueryCorpVcResResultDTO {
        this['hwVisionCount'] = hwVisionCount;
        return this;
    }
    public withIdeaHubCount(ideaHubCount: number): QueryCorpVcResResultDTO {
        this['ideaHubCount'] = ideaHubCount;
        return this;
    }
}