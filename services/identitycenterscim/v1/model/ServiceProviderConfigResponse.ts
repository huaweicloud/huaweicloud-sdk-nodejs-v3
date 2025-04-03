import { AuthenticationSchemeItemDto } from './AuthenticationSchemeItemDto';
import { BulkDto } from './BulkDto';
import { ChangePasswordDto } from './ChangePasswordDto';
import { EtagDto } from './EtagDto';
import { FilterDto } from './FilterDto';
import { PatchDto } from './PatchDto';
import { SortDto } from './SortDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ServiceProviderConfigResponse extends SdkResponse {
    public schemas?: Array<string>;
    public documentationUri?: string;
    public authenticationSchemes?: Array<AuthenticationSchemeItemDto>;
    public patch?: PatchDto;
    public bulk?: BulkDto;
    public filter?: FilterDto;
    public changePassword?: ChangePasswordDto;
    public sort?: SortDto;
    public etag?: EtagDto;
    public constructor() { 
        super();
    }
    public withSchemas(schemas: Array<string>): ServiceProviderConfigResponse {
        this['schemas'] = schemas;
        return this;
    }
    public withDocumentationUri(documentationUri: string): ServiceProviderConfigResponse {
        this['documentationUri'] = documentationUri;
        return this;
    }
    public withAuthenticationSchemes(authenticationSchemes: Array<AuthenticationSchemeItemDto>): ServiceProviderConfigResponse {
        this['authenticationSchemes'] = authenticationSchemes;
        return this;
    }
    public withPatch(patch: PatchDto): ServiceProviderConfigResponse {
        this['patch'] = patch;
        return this;
    }
    public withBulk(bulk: BulkDto): ServiceProviderConfigResponse {
        this['bulk'] = bulk;
        return this;
    }
    public withFilter(filter: FilterDto): ServiceProviderConfigResponse {
        this['filter'] = filter;
        return this;
    }
    public withChangePassword(changePassword: ChangePasswordDto): ServiceProviderConfigResponse {
        this['changePassword'] = changePassword;
        return this;
    }
    public withSort(sort: SortDto): ServiceProviderConfigResponse {
        this['sort'] = sort;
        return this;
    }
    public withEtag(etag: EtagDto): ServiceProviderConfigResponse {
        this['etag'] = etag;
        return this;
    }
}