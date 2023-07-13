import { ObsObjInfo } from './ObsObjInfo';


export class InputSetting {
    public input: ObsObjInfo;
    private 'pane_id': string | undefined;
    private 'audio_policy'?: InputSettingAudioPolicyEnum | undefined;
    public constructor(input?: any, paneId?: any) { 
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
    public set paneId(paneId: string | undefined) {
        this['pane_id'] = paneId;
    }
    public get paneId() {
        return this['pane_id'];
    }
    public withAudioPolicy(audioPolicy: InputSettingAudioPolicyEnum): InputSetting {
        this['audio_policy'] = audioPolicy;
        return this;
    }
    public set audioPolicy(audioPolicy: InputSettingAudioPolicyEnum | undefined) {
        this['audio_policy'] = audioPolicy;
    }
    public get audioPolicy() {
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
