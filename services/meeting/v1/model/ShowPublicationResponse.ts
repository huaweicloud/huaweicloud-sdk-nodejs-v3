import { ProgramResponseBase } from './ProgramResponseBase';
import { PublicationResponseBase } from './PublicationResponseBase';
import { PublishDeptResponseDTO } from './PublishDeptResponseDTO';
import { PublishDeviceResponseDTO } from './PublishDeviceResponseDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPublicationResponse extends SdkResponse {
    public id?: string;
    public lastUpdatedBy?: string;
    public createTime?: number;
    public updateTime?: number;
    public publishName?: string;
    public publishScope?: string;
    public startTime?: number;
    public endTime?: number;
    public publishStatus?: ShowPublicationResponsePublishStatusEnum;
    public programList?: Array<ProgramResponseBase>;
    public deptList?: Array<PublishDeptResponseDTO>;
    public deviceList?: Array<PublishDeviceResponseDTO>;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowPublicationResponse {
        this['id'] = id;
        return this;
    }
    public withLastUpdatedBy(lastUpdatedBy: string): ShowPublicationResponse {
        this['lastUpdatedBy'] = lastUpdatedBy;
        return this;
    }
    public withCreateTime(createTime: number): ShowPublicationResponse {
        this['createTime'] = createTime;
        return this;
    }
    public withUpdateTime(updateTime: number): ShowPublicationResponse {
        this['updateTime'] = updateTime;
        return this;
    }
    public withPublishName(publishName: string): ShowPublicationResponse {
        this['publishName'] = publishName;
        return this;
    }
    public withPublishScope(publishScope: string): ShowPublicationResponse {
        this['publishScope'] = publishScope;
        return this;
    }
    public withStartTime(startTime: number): ShowPublicationResponse {
        this['startTime'] = startTime;
        return this;
    }
    public withEndTime(endTime: number): ShowPublicationResponse {
        this['endTime'] = endTime;
        return this;
    }
    public withPublishStatus(publishStatus: ShowPublicationResponsePublishStatusEnum): ShowPublicationResponse {
        this['publishStatus'] = publishStatus;
        return this;
    }
    public withProgramList(programList: Array<ProgramResponseBase>): ShowPublicationResponse {
        this['programList'] = programList;
        return this;
    }
    public withDeptList(deptList: Array<PublishDeptResponseDTO>): ShowPublicationResponse {
        this['deptList'] = deptList;
        return this;
    }
    public withDeviceList(deviceList: Array<PublishDeviceResponseDTO>): ShowPublicationResponse {
        this['deviceList'] = deviceList;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowPublicationResponsePublishStatusEnum {
    NOT_ONLINE = 'NOT_ONLINE',
    PUBLISHING = 'PUBLISHING',
    ALREADY_OFFLINE = 'ALREADY_OFFLINE'
}
