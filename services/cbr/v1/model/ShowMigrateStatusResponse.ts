import { DomainMigrateProjectStatus } from './DomainMigrateProjectStatus';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowMigrateStatusResponse extends SdkResponse {
    public status?: ShowMigrateStatusResponseStatusEnum | string;
    private 'project_status'?: Array<DomainMigrateProjectStatus>;
    public constructor() { 
        super();
    }
    public withStatus(status: ShowMigrateStatusResponseStatusEnum | string): ShowMigrateStatusResponse {
        this['status'] = status;
        return this;
    }
    public withProjectStatus(projectStatus: Array<DomainMigrateProjectStatus>): ShowMigrateStatusResponse {
        this['project_status'] = projectStatus;
        return this;
    }
    public set projectStatus(projectStatus: Array<DomainMigrateProjectStatus>  | undefined) {
        this['project_status'] = projectStatus;
    }
    public get projectStatus(): Array<DomainMigrateProjectStatus> | undefined {
        return this['project_status'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowMigrateStatusResponseStatusEnum {
    SUCCESS = 'success',
    FAILED = 'failed',
    MIGRATING = 'migrating'
}
