import { CurrentNodeDetail } from './CurrentNodeDetail';
import { GetTargetImageIdDetail } from './GetTargetImageIdDetail';


export class GetUpgradeDetailInfo {
    public id?: string;
    public startTime?: string;
    public endTime?: string;
    public status?: string;
    public agencyName?: string;
    public imageInfo?: GetTargetImageIdDetail;
    public totalNodes?: string;
    public completedNodes?: string;
    public currentNodeName?: string;
    public executeTimes?: string;
    public migrateParam?: string;
    public finalAzInfoMap?: string;
    public currentNodeDetail?: Array<CurrentNodeDetail>;
    public constructor() { 
    }
    public withId(id: string): GetUpgradeDetailInfo {
        this['id'] = id;
        return this;
    }
    public withStartTime(startTime: string): GetUpgradeDetailInfo {
        this['startTime'] = startTime;
        return this;
    }
    public withEndTime(endTime: string): GetUpgradeDetailInfo {
        this['endTime'] = endTime;
        return this;
    }
    public withStatus(status: string): GetUpgradeDetailInfo {
        this['status'] = status;
        return this;
    }
    public withAgencyName(agencyName: string): GetUpgradeDetailInfo {
        this['agencyName'] = agencyName;
        return this;
    }
    public withImageInfo(imageInfo: GetTargetImageIdDetail): GetUpgradeDetailInfo {
        this['imageInfo'] = imageInfo;
        return this;
    }
    public withTotalNodes(totalNodes: string): GetUpgradeDetailInfo {
        this['totalNodes'] = totalNodes;
        return this;
    }
    public withCompletedNodes(completedNodes: string): GetUpgradeDetailInfo {
        this['completedNodes'] = completedNodes;
        return this;
    }
    public withCurrentNodeName(currentNodeName: string): GetUpgradeDetailInfo {
        this['currentNodeName'] = currentNodeName;
        return this;
    }
    public withExecuteTimes(executeTimes: string): GetUpgradeDetailInfo {
        this['executeTimes'] = executeTimes;
        return this;
    }
    public withMigrateParam(migrateParam: string): GetUpgradeDetailInfo {
        this['migrateParam'] = migrateParam;
        return this;
    }
    public withFinalAzInfoMap(finalAzInfoMap: string): GetUpgradeDetailInfo {
        this['finalAzInfoMap'] = finalAzInfoMap;
        return this;
    }
    public withCurrentNodeDetail(currentNodeDetail: Array<CurrentNodeDetail>): GetUpgradeDetailInfo {
        this['currentNodeDetail'] = currentNodeDetail;
        return this;
    }
}