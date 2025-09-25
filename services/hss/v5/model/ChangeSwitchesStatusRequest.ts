import { ChangeSwitchesStatusRequestBody } from './ChangeSwitchesStatusRequestBody';


export class ChangeSwitchesStatusRequest {
    private 'enterprise_project_id'?: string;
    public code?: ChangeSwitchesStatusRequestCodeEnum | string;
    public body?: ChangeSwitchesStatusRequestBody;
    public constructor(code?: string) { 
        this['code'] = code;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ChangeSwitchesStatusRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withCode(code: ChangeSwitchesStatusRequestCodeEnum | string): ChangeSwitchesStatusRequest {
        this['code'] = code;
        return this;
    }
    public withBody(body: ChangeSwitchesStatusRequestBody): ChangeSwitchesStatusRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ChangeSwitchesStatusRequestCodeEnum {
    MALWARE_SAMPLE_HIGH_DETECT = 'malware_sample_high_detect',
    IMAGE_PAY_PER_SCAN = 'image_pay_per_scan',
    IMAGE_POPUP = 'image_popup',
    IMAGE_FREE_TO_PAY_POPUP = 'image_free_to_pay_popup'
}
