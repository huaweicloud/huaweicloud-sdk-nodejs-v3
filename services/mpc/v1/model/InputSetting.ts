import { ObsObjInfo } from './ObsObjInfo';


export class InputSetting {
    public input?: ObsObjInfo;
    private 'pane_id'?: string;
    private 'audio_policy'?: InputSettingAudioPolicyEnum | string;
    public constructor(input?: ObsObjInfo, paneId?: string) { 
        this['input'] = input;
        this['pane_id'] = paneId;
    }
    public withInput(input: ObsObjInfo): InputSetting {
        this['input'] = input;
        return this;
    }
    public withPaneId(paneId: string): InputSetting {
        this['pane_id'] = paneId;
        return this;
    }
    public set paneId(paneId: string  | undefined) {
        this['pane_id'] = paneId;
    }
    public get paneId(): string | undefined {
        return this['pane_id'];
    }
    public withAudioPolicy(audioPolicy: InputSettingAudioPolicyEnum | string): InputSetting {
        this['audio_policy'] = audioPolicy;
        return this;
    }
    public set audioPolicy(audioPolicy: InputSettingAudioPolicyEnum | string  | undefined) {
        this['audio_policy'] = audioPolicy;
    }
    public get audioPolicy(): InputSettingAudioPolicyEnum | string | undefined {
        return this['audio_policy'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum InputSettingAudioPolicyEnum {
    DISCARD = 'DISCARD',
    RESERVE = 'RESERVE'
}
