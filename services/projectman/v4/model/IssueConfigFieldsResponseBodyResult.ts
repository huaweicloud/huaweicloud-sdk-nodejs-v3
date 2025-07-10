import { IssueConfigFieldsResponseBodyResultConfigFields } from './IssueConfigFieldsResponseBodyResultConfigFields';


export class IssueConfigFieldsResponseBodyResult {
    private 'config_fields'?: Array<IssueConfigFieldsResponseBodyResultConfigFields>;
    public constructor() { 
    }
    public withConfigFields(configFields: Array<IssueConfigFieldsResponseBodyResultConfigFields>): IssueConfigFieldsResponseBodyResult {
        this['config_fields'] = configFields;
        return this;
    }
    public set configFields(configFields: Array<IssueConfigFieldsResponseBodyResultConfigFields>  | undefined) {
        this['config_fields'] = configFields;
    }
    public get configFields(): Array<IssueConfigFieldsResponseBodyResultConfigFields> | undefined {
        return this['config_fields'];
    }
}