

export class AlarmStatisticResponse {
    public date?: string;
    public urgent?: string;
    public important?: string;
    public minor?: string;
    public prompt?: string;
    public constructor() { 
    }
    public withDate(date: string): AlarmStatisticResponse {
        this['date'] = date;
        return this;
    }
    public withUrgent(urgent: string): AlarmStatisticResponse {
        this['urgent'] = urgent;
        return this;
    }
    public withImportant(important: string): AlarmStatisticResponse {
        this['important'] = important;
        return this;
    }
    public withMinor(minor: string): AlarmStatisticResponse {
        this['minor'] = minor;
        return this;
    }
    public withPrompt(prompt: string): AlarmStatisticResponse {
        this['prompt'] = prompt;
        return this;
    }
}