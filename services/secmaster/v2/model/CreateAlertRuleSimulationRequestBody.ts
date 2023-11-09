import { AlertRuleTrigger } from './AlertRuleTrigger';


export class CreateAlertRuleSimulationRequestBody {
    private 'pipe_id'?: string;
    public query?: string;
    private 'query_type'?: CreateAlertRuleSimulationRequestBodyQueryTypeEnum | string;
    public from?: number;
    public to?: number;
    private 'event_grouping'?: boolean;
    public triggers?: Array<AlertRuleTrigger>;
    public constructor(pipeId?: string, query?: string, from?: number, to?: number, triggers?: Array<AlertRuleTrigger>) { 
        this['pipe_id'] = pipeId;
        this['query'] = query;
        this['from'] = from;
        this['to'] = to;
        this['triggers'] = triggers;
    }
    public withPipeId(pipeId: string): CreateAlertRuleSimulationRequestBody {
        this['pipe_id'] = pipeId;
        return this;
    }
    public set pipeId(pipeId: string  | undefined) {
        this['pipe_id'] = pipeId;
    }
    public get pipeId(): string | undefined {
        return this['pipe_id'];
    }
    public withQuery(query: string): CreateAlertRuleSimulationRequestBody {
        this['query'] = query;
        return this;
    }
    public withQueryType(queryType: CreateAlertRuleSimulationRequestBodyQueryTypeEnum | string): CreateAlertRuleSimulationRequestBody {
        this['query_type'] = queryType;
        return this;
    }
    public set queryType(queryType: CreateAlertRuleSimulationRequestBodyQueryTypeEnum | string  | undefined) {
        this['query_type'] = queryType;
    }
    public get queryType(): CreateAlertRuleSimulationRequestBodyQueryTypeEnum | string | undefined {
        return this['query_type'];
    }
    public withFrom(from: number): CreateAlertRuleSimulationRequestBody {
        this['from'] = from;
        return this;
    }
    public withTo(to: number): CreateAlertRuleSimulationRequestBody {
        this['to'] = to;
        return this;
    }
    public withEventGrouping(eventGrouping: boolean): CreateAlertRuleSimulationRequestBody {
        this['event_grouping'] = eventGrouping;
        return this;
    }
    public set eventGrouping(eventGrouping: boolean  | undefined) {
        this['event_grouping'] = eventGrouping;
    }
    public get eventGrouping(): boolean | undefined {
        return this['event_grouping'];
    }
    public withTriggers(triggers: Array<AlertRuleTrigger>): CreateAlertRuleSimulationRequestBody {
        this['triggers'] = triggers;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateAlertRuleSimulationRequestBodyQueryTypeEnum {
    SQL = 'SQL'
}
