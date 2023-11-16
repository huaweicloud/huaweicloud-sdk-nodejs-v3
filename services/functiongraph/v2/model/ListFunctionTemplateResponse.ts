import { ShowFunctionTemplateResponseBody } from './ShowFunctionTemplateResponseBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListFunctionTemplateResponse extends SdkResponse {
    private 'func_templates'?: Array<ShowFunctionTemplateResponseBody>;
    private 'next_marker'?: number;
    public constructor() { 
        super();
    }
    public withFuncTemplates(funcTemplates: Array<ShowFunctionTemplateResponseBody>): ListFunctionTemplateResponse {
        this['func_templates'] = funcTemplates;
        return this;
    }
    public set funcTemplates(funcTemplates: Array<ShowFunctionTemplateResponseBody>  | undefined) {
        this['func_templates'] = funcTemplates;
    }
    public get funcTemplates(): Array<ShowFunctionTemplateResponseBody> | undefined {
        return this['func_templates'];
    }
    public withNextMarker(nextMarker: number): ListFunctionTemplateResponse {
        this['next_marker'] = nextMarker;
        return this;
    }
    public set nextMarker(nextMarker: number  | undefined) {
        this['next_marker'] = nextMarker;
    }
    public get nextMarker(): number | undefined {
        return this['next_marker'];
    }
}