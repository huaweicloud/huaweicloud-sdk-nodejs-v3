
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowIkThesaurusResponse extends SdkResponse {
    public status?: string;
    public bucket?: string;
    public mainObj?: string;
    public stopObj?: string;
    public synonymObj?: string;
    public staticMainObj?: string;
    public staticStopObj?: string;
    public extraMainObj?: string;
    public extraStopObj?: string;
    public updateTime?: string;
    public updateDetails?: string;
    public clusterId?: string;
    public id?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ShowIkThesaurusResponse {
        this['status'] = status;
        return this;
    }
    public withBucket(bucket: string): ShowIkThesaurusResponse {
        this['bucket'] = bucket;
        return this;
    }
    public withMainObj(mainObj: string): ShowIkThesaurusResponse {
        this['mainObj'] = mainObj;
        return this;
    }
    public withStopObj(stopObj: string): ShowIkThesaurusResponse {
        this['stopObj'] = stopObj;
        return this;
    }
    public withSynonymObj(synonymObj: string): ShowIkThesaurusResponse {
        this['synonymObj'] = synonymObj;
        return this;
    }
    public withStaticMainObj(staticMainObj: string): ShowIkThesaurusResponse {
        this['staticMainObj'] = staticMainObj;
        return this;
    }
    public withStaticStopObj(staticStopObj: string): ShowIkThesaurusResponse {
        this['staticStopObj'] = staticStopObj;
        return this;
    }
    public withExtraMainObj(extraMainObj: string): ShowIkThesaurusResponse {
        this['extraMainObj'] = extraMainObj;
        return this;
    }
    public withExtraStopObj(extraStopObj: string): ShowIkThesaurusResponse {
        this['extraStopObj'] = extraStopObj;
        return this;
    }
    public withUpdateTime(updateTime: string): ShowIkThesaurusResponse {
        this['updateTime'] = updateTime;
        return this;
    }
    public withUpdateDetails(updateDetails: string): ShowIkThesaurusResponse {
        this['updateDetails'] = updateDetails;
        return this;
    }
    public withClusterId(clusterId: string): ShowIkThesaurusResponse {
        this['clusterId'] = clusterId;
        return this;
    }
    public withId(id: string): ShowIkThesaurusResponse {
        this['id'] = id;
        return this;
    }
}