

export class RecordingRuleRequest {
    private 'recording_rule'?: string;
    public constructor(recordingRule?: string) { 
        this['recording_rule'] = recordingRule;
    }
    public withRecordingRule(recordingRule: string): RecordingRuleRequest {
        this['recording_rule'] = recordingRule;
        return this;
    }
    public set recordingRule(recordingRule: string  | undefined) {
        this['recording_rule'] = recordingRule;
    }
    public get recordingRule(): string | undefined {
        return this['recording_rule'];
    }
}