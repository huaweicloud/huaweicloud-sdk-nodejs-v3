
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPostgresqlParamValueResponse extends SdkResponse {
    public name?: string;
    public value?: string;
    private 'restart_required'?: boolean;
    private 'value_range'?: string;
    public type?: string;
    public description?: string;
    public constructor() { 
        super();
    }
    public withName(name: string): ShowPostgresqlParamValueResponse {
        this['name'] = name;
        return this;
    }
    public withValue(value: string): ShowPostgresqlParamValueResponse {
        this['value'] = value;
        return this;
    }
    public withRestartRequired(restartRequired: boolean): ShowPostgresqlParamValueResponse {
        this['restart_required'] = restartRequired;
        return this;
    }
    public set restartRequired(restartRequired: boolean  | undefined) {
        this['restart_required'] = restartRequired;
    }
    public get restartRequired(): boolean | undefined {
        return this['restart_required'];
    }
    public withValueRange(valueRange: string): ShowPostgresqlParamValueResponse {
        this['value_range'] = valueRange;
        return this;
    }
    public set valueRange(valueRange: string  | undefined) {
        this['value_range'] = valueRange;
    }
    public get valueRange(): string | undefined {
        return this['value_range'];
    }
    public withType(type: string): ShowPostgresqlParamValueResponse {
        this['type'] = type;
        return this;
    }
    public withDescription(description: string): ShowPostgresqlParamValueResponse {
        this['description'] = description;
        return this;
    }
}