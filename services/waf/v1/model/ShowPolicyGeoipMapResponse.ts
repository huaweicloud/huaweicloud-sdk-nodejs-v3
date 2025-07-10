
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPolicyGeoipMapResponse extends SdkResponse {
    public continent?: object;
    public geomap?: object;
    public locale?: object;
    public constructor() { 
        super();
    }
    public withContinent(continent: object): ShowPolicyGeoipMapResponse {
        this['continent'] = continent;
        return this;
    }
    public withGeomap(geomap: object): ShowPolicyGeoipMapResponse {
        this['geomap'] = geomap;
        return this;
    }
    public withLocale(locale: object): ShowPolicyGeoipMapResponse {
        this['locale'] = locale;
        return this;
    }
}