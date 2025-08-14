import { ExternalIdpConfigurationDto } from './ExternalIdpConfigurationDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListExternalIdPConfigurationsForDirectoryResponse extends SdkResponse {
    public associations?: Array<ExternalIdpConfigurationDto>;
    public constructor() { 
        super();
    }
    public withAssociations(associations: Array<ExternalIdpConfigurationDto>): ListExternalIdPConfigurationsForDirectoryResponse {
        this['associations'] = associations;
        return this;
    }
}