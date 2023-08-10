

export class BatchDeleteAlarmTemplatesRequestBody {
    private 'template_ids'?: Array<string>;
    private 'delete_associate_alarm'?: boolean;
    public constructor(templateIds?: Array<string>, deleteAssociateAlarm?: boolean) { 
        this['template_ids'] = templateIds;
        this['delete_associate_alarm'] = deleteAssociateAlarm;
    }
    public withTemplateIds(templateIds: Array<string>): BatchDeleteAlarmTemplatesRequestBody {
        this['template_ids'] = templateIds;
        return this;
    }
    public set templateIds(templateIds: Array<string>  | undefined) {
        this['template_ids'] = templateIds;
    }
    public get templateIds(): Array<string> | undefined {
        return this['template_ids'];
    }
    public withDeleteAssociateAlarm(deleteAssociateAlarm: boolean): BatchDeleteAlarmTemplatesRequestBody {
        this['delete_associate_alarm'] = deleteAssociateAlarm;
        return this;
    }
    public set deleteAssociateAlarm(deleteAssociateAlarm: boolean  | undefined) {
        this['delete_associate_alarm'] = deleteAssociateAlarm;
    }
    public get deleteAssociateAlarm(): boolean | undefined {
        return this['delete_associate_alarm'];
    }
}