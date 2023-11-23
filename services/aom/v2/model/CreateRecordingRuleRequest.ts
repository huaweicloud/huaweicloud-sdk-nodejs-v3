import { RecordingRuleRequest } from './RecordingRuleRequest';


export class CreateRecordingRuleRequest {
    private 'prometheus_instance'?: string;
    public body?: RecordingRuleRequest;
    public constructor(prometheusInstance?: string) { 
        this['prometheus_instance'] = prometheusInstance;
    }
    public withPrometheusInstance(prometheusInstance: string): CreateRecordingRuleRequest {
        this['prometheus_instance'] = prometheusInstance;
        return this;
    }
    public set prometheusInstance(prometheusInstance: string  | undefined) {
        this['prometheus_instance'] = prometheusInstance;
    }
    public get prometheusInstance(): string | undefined {
        return this['prometheus_instance'];
    }
    public withBody(body: RecordingRuleRequest): CreateRecordingRuleRequest {
        this['body'] = body;
        return this;
    }
}