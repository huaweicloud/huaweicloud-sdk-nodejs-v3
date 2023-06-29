import { ProgramItemResponseBase } from './ProgramItemResponseBase';
import { ProgramResponseBase } from './ProgramResponseBase';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowProgramResponse extends SdkResponse {
    public id?: string;
    public lastUpdatedBy?: string;
    public updateTime?: number;
    public programName?: string;
    public materialSizeStr?: string;
    public playTime?: number;
    public programItemList?: Array<ProgramItemResponseBase>;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowProgramResponse {
        this['id'] = id;
        return this;
    }
    public withLastUpdatedBy(lastUpdatedBy: string): ShowProgramResponse {
        this['lastUpdatedBy'] = lastUpdatedBy;
        return this;
    }
    public withUpdateTime(updateTime: number): ShowProgramResponse {
        this['updateTime'] = updateTime;
        return this;
    }
    public withProgramName(programName: string): ShowProgramResponse {
        this['programName'] = programName;
        return this;
    }
    public withMaterialSizeStr(materialSizeStr: string): ShowProgramResponse {
        this['materialSizeStr'] = materialSizeStr;
        return this;
    }
    public withPlayTime(playTime: number): ShowProgramResponse {
        this['playTime'] = playTime;
        return this;
    }
    public withProgramItemList(programItemList: Array<ProgramItemResponseBase>): ShowProgramResponse {
        this['programItemList'] = programItemList;
        return this;
    }
}