

export class LiveJobLog {
    private 'interaction_records_url'?: string;
    public constructor() { 
    }
    public withInteractionRecordsUrl(interactionRecordsUrl: string): LiveJobLog {
        this['interaction_records_url'] = interactionRecordsUrl;
        return this;
    }
    public set interactionRecordsUrl(interactionRecordsUrl: string  | undefined) {
        this['interaction_records_url'] = interactionRecordsUrl;
    }
    public get interactionRecordsUrl(): string | undefined {
        return this['interaction_records_url'];
    }
}