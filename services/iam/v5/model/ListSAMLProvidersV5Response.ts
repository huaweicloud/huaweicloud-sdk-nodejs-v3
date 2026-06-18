import { InlineResponse200PageInfo } from './InlineResponse200PageInfo';
import { InlineResponse200SamlProviders } from './InlineResponse200SamlProviders';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSAMLProvidersV5Response extends SdkResponse {
    private 'saml_providers'?: Array<InlineResponse200SamlProviders>;
    private 'page_info'?: InlineResponse200PageInfo;
    public constructor() { 
        super();
    }
    public withSamlProviders(samlProviders: Array<InlineResponse200SamlProviders>): ListSAMLProvidersV5Response {
        this['saml_providers'] = samlProviders;
        return this;
    }
    public set samlProviders(samlProviders: Array<InlineResponse200SamlProviders>  | undefined) {
        this['saml_providers'] = samlProviders;
    }
    public get samlProviders(): Array<InlineResponse200SamlProviders> | undefined {
        return this['saml_providers'];
    }
    public withPageInfo(pageInfo: InlineResponse200PageInfo): ListSAMLProvidersV5Response {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: InlineResponse200PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): InlineResponse200PageInfo | undefined {
        return this['page_info'];
    }
}