import { AlarmTemplate } from './AlarmTemplate';
import { MetaData } from './MetaData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAlarmTemplatesResponse extends SdkResponse {
    private 'alarm_templates'?: Array<AlarmTemplate>;
    private 'meta_data'?: MetaData;
    public constructor() { 
        super();
    }
    public withAlarmTemplates(alarmTemplates: Array<AlarmTemplate>): ListAlarmTemplatesResponse {
        this['alarm_templates'] = alarmTemplates;
        return this;
    }
    public set alarmTemplates(alarmTemplates: Array<AlarmTemplate>  | undefined) {
        this['alarm_templates'] = alarmTemplates;
    }
    public get alarmTemplates(): Array<AlarmTemplate> | undefined {
        return this['alarm_templates'];
    }
    public withMetaData(metaData: MetaData): ListAlarmTemplatesResponse {
        this['meta_data'] = metaData;
        return this;
    }
    public set metaData(metaData: MetaData  | undefined) {
        this['meta_data'] = metaData;
    }
    public get metaData(): MetaData | undefined {
        return this['meta_data'];
    }
}