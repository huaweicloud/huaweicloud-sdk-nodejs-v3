import { ReviewConfig } from './ReviewConfig';


export class ControlSmartLiveReq {
    public command?: ControlSmartLiveReqCommandEnum | string;
    public params?: object;
    private 'review_config'?: ReviewConfig;
    public constructor(command?: string) { 
        this['command'] = command;
    }
    public withCommand(command: ControlSmartLiveReqCommandEnum | string): ControlSmartLiveReq {
        this['command'] = command;
        return this;
    }
    public withParams(params: object): ControlSmartLiveReq {
        this['params'] = params;
        return this;
    }
    public withReviewConfig(reviewConfig: ReviewConfig): ControlSmartLiveReq {
        this['review_config'] = reviewConfig;
        return this;
    }
    public set reviewConfig(reviewConfig: ReviewConfig  | undefined) {
        this['review_config'] = reviewConfig;
    }
    public get reviewConfig(): ReviewConfig | undefined {
        return this['review_config'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ControlSmartLiveReqCommandEnum {
    INSERT_PLAY_SCRIPT = 'INSERT_PLAY_SCRIPT',
    REWRITE_PLAY_SCRIPT = 'REWRITE_PLAY_SCRIPT',
    INSERT_PLAY_AUDIO = 'INSERT_PLAY_AUDIO',
    REWRITE_INTERACTION_RULES = 'REWRITE_INTERACTION_RULES',
    GET_CURRENT_PLAYING_SCRIPTS = 'GET_CURRENT_PLAYING_SCRIPTS',
    GET_LIVE_JOB_CONFIG_INFO = 'GET_LIVE_JOB_CONFIG_INFO'
}
