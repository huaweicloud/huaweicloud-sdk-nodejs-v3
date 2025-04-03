

export class LiveJobLog {
    private 'interaction_records_url'?: string;
    private 'job_config_records_url'?: string;
    private 'scripts_records_url'?: string;
    private 'command_reviced_records_url'?: string;
    private 'command_exec_records_url'?: string;
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
    public withJobConfigRecordsUrl(jobConfigRecordsUrl: string): LiveJobLog {
        this['job_config_records_url'] = jobConfigRecordsUrl;
        return this;
    }
    public set jobConfigRecordsUrl(jobConfigRecordsUrl: string  | undefined) {
        this['job_config_records_url'] = jobConfigRecordsUrl;
    }
    public get jobConfigRecordsUrl(): string | undefined {
        return this['job_config_records_url'];
    }
    public withScriptsRecordsUrl(scriptsRecordsUrl: string): LiveJobLog {
        this['scripts_records_url'] = scriptsRecordsUrl;
        return this;
    }
    public set scriptsRecordsUrl(scriptsRecordsUrl: string  | undefined) {
        this['scripts_records_url'] = scriptsRecordsUrl;
    }
    public get scriptsRecordsUrl(): string | undefined {
        return this['scripts_records_url'];
    }
    public withCommandRevicedRecordsUrl(commandRevicedRecordsUrl: string): LiveJobLog {
        this['command_reviced_records_url'] = commandRevicedRecordsUrl;
        return this;
    }
    public set commandRevicedRecordsUrl(commandRevicedRecordsUrl: string  | undefined) {
        this['command_reviced_records_url'] = commandRevicedRecordsUrl;
    }
    public get commandRevicedRecordsUrl(): string | undefined {
        return this['command_reviced_records_url'];
    }
    public withCommandExecRecordsUrl(commandExecRecordsUrl: string): LiveJobLog {
        this['command_exec_records_url'] = commandExecRecordsUrl;
        return this;
    }
    public set commandExecRecordsUrl(commandExecRecordsUrl: string  | undefined) {
        this['command_exec_records_url'] = commandExecRecordsUrl;
    }
    public get commandExecRecordsUrl(): string | undefined {
        return this['command_exec_records_url'];
    }
}