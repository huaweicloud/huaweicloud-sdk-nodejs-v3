

export class SwitchLogReplayRequestBody {
    private 'pause_log_replay'?: string;
    public constructor(pauseLogReplay?: string) { 
        this['pause_log_replay'] = pauseLogReplay;
    }
    public withPauseLogReplay(pauseLogReplay: string): SwitchLogReplayRequestBody {
        this['pause_log_replay'] = pauseLogReplay;
        return this;
    }
    public set pauseLogReplay(pauseLogReplay: string  | undefined) {
        this['pause_log_replay'] = pauseLogReplay;
    }
    public get pauseLogReplay(): string | undefined {
        return this['pause_log_replay'];
    }
}