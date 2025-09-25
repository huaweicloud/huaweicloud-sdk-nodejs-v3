

export class ShowSwitchesStatusRequest {
    private 'enterprise_project_id'?: string;
    public code?: ShowSwitchesStatusRequestCodeEnum | string;
    public constructor(code?: string) { 
        this['code'] = code;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowSwitchesStatusRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withCode(code: ShowSwitchesStatusRequestCodeEnum | string): ShowSwitchesStatusRequest {
        this['code'] = code;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowSwitchesStatusRequestCodeEnum {
    MALWARE_SAMPLE_HIGH_DETECT = 'malware_sample_high_detect',
    IMAGE_PAY_PER_SCAN = 'image_pay_per_scan',
    IMAGE_POPUP = 'image_popup',
    IMAGE_FREE_TO_PAY_POPUP = 'image_free_to_pay_popup'
}
