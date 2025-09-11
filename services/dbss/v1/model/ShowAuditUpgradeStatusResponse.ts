import { AuditUpgradeStatus } from './AuditUpgradeStatus';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAuditUpgradeStatusResponse extends SdkResponse {
    private 'audit_upgrade_infos'?: Array<AuditUpgradeStatus>;
    public constructor() { 
        super();
    }
    public withAuditUpgradeInfos(auditUpgradeInfos: Array<AuditUpgradeStatus>): ShowAuditUpgradeStatusResponse {
        this['audit_upgrade_infos'] = auditUpgradeInfos;
        return this;
    }
    public set auditUpgradeInfos(auditUpgradeInfos: Array<AuditUpgradeStatus>  | undefined) {
        this['audit_upgrade_infos'] = auditUpgradeInfos;
    }
    public get auditUpgradeInfos(): Array<AuditUpgradeStatus> | undefined {
        return this['audit_upgrade_infos'];
    }
}