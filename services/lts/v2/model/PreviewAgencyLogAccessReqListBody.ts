import { PreviewAgencyLogAccessReqBody } from './PreviewAgencyLogAccessReqBody';


export class PreviewAgencyLogAccessReqListBody {
    private 'preview_agency_list'?: Array<PreviewAgencyLogAccessReqBody>;
    public constructor(previewAgencyList?: Array<PreviewAgencyLogAccessReqBody>) { 
        this['preview_agency_list'] = previewAgencyList;
    }
    public withPreviewAgencyList(previewAgencyList: Array<PreviewAgencyLogAccessReqBody>): PreviewAgencyLogAccessReqListBody {
        this['preview_agency_list'] = previewAgencyList;
        return this;
    }
    public set previewAgencyList(previewAgencyList: Array<PreviewAgencyLogAccessReqBody>  | undefined) {
        this['preview_agency_list'] = previewAgencyList;
    }
    public get previewAgencyList(): Array<PreviewAgencyLogAccessReqBody> | undefined {
        return this['preview_agency_list'];
    }
}