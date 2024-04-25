import { SensitiveDataCategoryOverviewQueryDTO } from './SensitiveDataCategoryOverviewQueryDTO';
import { SensitiveDataSecrecyLevelOverviewQueryDTO } from './SensitiveDataSecrecyLevelOverviewQueryDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSecuritySensitiveDataOverviewsResponse extends SdkResponse {
    private 'secrecy_level_statistics'?: Array<SensitiveDataSecrecyLevelOverviewQueryDTO>;
    private 'category_statistics'?: Array<SensitiveDataCategoryOverviewQueryDTO>;
    public constructor() { 
        super();
    }
    public withSecrecyLevelStatistics(secrecyLevelStatistics: Array<SensitiveDataSecrecyLevelOverviewQueryDTO>): ListSecuritySensitiveDataOverviewsResponse {
        this['secrecy_level_statistics'] = secrecyLevelStatistics;
        return this;
    }
    public set secrecyLevelStatistics(secrecyLevelStatistics: Array<SensitiveDataSecrecyLevelOverviewQueryDTO>  | undefined) {
        this['secrecy_level_statistics'] = secrecyLevelStatistics;
    }
    public get secrecyLevelStatistics(): Array<SensitiveDataSecrecyLevelOverviewQueryDTO> | undefined {
        return this['secrecy_level_statistics'];
    }
    public withCategoryStatistics(categoryStatistics: Array<SensitiveDataCategoryOverviewQueryDTO>): ListSecuritySensitiveDataOverviewsResponse {
        this['category_statistics'] = categoryStatistics;
        return this;
    }
    public set categoryStatistics(categoryStatistics: Array<SensitiveDataCategoryOverviewQueryDTO>  | undefined) {
        this['category_statistics'] = categoryStatistics;
    }
    public get categoryStatistics(): Array<SensitiveDataCategoryOverviewQueryDTO> | undefined {
        return this['category_statistics'];
    }
}