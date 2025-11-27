import { FederationConfig } from './FederationConfig';
import { OnPremisesConfig } from './OnPremisesConfig';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListServerConfigsResponse extends SdkResponse {
    public onpremises?: OnPremisesConfig;
    public federations?: FederationConfig;
    public constructor() { 
        super();
    }
    public withOnpremises(onpremises: OnPremisesConfig): ListServerConfigsResponse {
        this['onpremises'] = onpremises;
        return this;
    }
    public withFederations(federations: FederationConfig): ListServerConfigsResponse {
        this['federations'] = federations;
        return this;
    }
}