import { UpgradePathsResult } from './UpgradePathsResult';
import { VersionInfosResult } from './VersionInfosResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListUpgradePathsResponse extends SdkResponse {
    private 'version_infos'?: Array<VersionInfosResult>;
    private 'version_edges'?: Array<UpgradePathsResult>;
    public constructor() { 
        super();
    }
    public withVersionInfos(versionInfos: Array<VersionInfosResult>): ListUpgradePathsResponse {
        this['version_infos'] = versionInfos;
        return this;
    }
    public set versionInfos(versionInfos: Array<VersionInfosResult>  | undefined) {
        this['version_infos'] = versionInfos;
    }
    public get versionInfos(): Array<VersionInfosResult> | undefined {
        return this['version_infos'];
    }
    public withVersionEdges(versionEdges: Array<UpgradePathsResult>): ListUpgradePathsResponse {
        this['version_edges'] = versionEdges;
        return this;
    }
    public set versionEdges(versionEdges: Array<UpgradePathsResult>  | undefined) {
        this['version_edges'] = versionEdges;
    }
    public get versionEdges(): Array<UpgradePathsResult> | undefined {
        return this['version_edges'];
    }
}