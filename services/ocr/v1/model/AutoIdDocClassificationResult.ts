import { AutoIdDocClassificationAlarmConfidence } from './AutoIdDocClassificationAlarmConfidence';
import { AutoIdDocClassificationAlarmResult } from './AutoIdDocClassificationAlarmResult';


export class AutoIdDocClassificationResult {
    public type?: string;
    public location?: Array<Array<number>>;
    public confidence?: number;
    private 'alarm_result'?: AutoIdDocClassificationAlarmResult;
    private 'alarm_confidence'?: AutoIdDocClassificationAlarmConfidence;
    public constructor() { 
    }
    public withType(type: string): AutoIdDocClassificationResult {
        this['type'] = type;
        return this;
    }
    public withLocation(location: Array<Array<number>>): AutoIdDocClassificationResult {
        this['location'] = location;
        return this;
    }
    public withConfidence(confidence: number): AutoIdDocClassificationResult {
        this['confidence'] = confidence;
        return this;
    }
    public withAlarmResult(alarmResult: AutoIdDocClassificationAlarmResult): AutoIdDocClassificationResult {
        this['alarm_result'] = alarmResult;
        return this;
    }
    public set alarmResult(alarmResult: AutoIdDocClassificationAlarmResult  | undefined) {
        this['alarm_result'] = alarmResult;
    }
    public get alarmResult(): AutoIdDocClassificationAlarmResult | undefined {
        return this['alarm_result'];
    }
    public withAlarmConfidence(alarmConfidence: AutoIdDocClassificationAlarmConfidence): AutoIdDocClassificationResult {
        this['alarm_confidence'] = alarmConfidence;
        return this;
    }
    public set alarmConfidence(alarmConfidence: AutoIdDocClassificationAlarmConfidence  | undefined) {
        this['alarm_confidence'] = alarmConfidence;
    }
    public get alarmConfidence(): AutoIdDocClassificationAlarmConfidence | undefined {
        return this['alarm_confidence'];
    }
}