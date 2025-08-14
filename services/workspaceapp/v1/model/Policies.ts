import { Bandwidth } from './Bandwidth';
import { PoliciesAudio } from './PoliciesAudio';
import { PoliciesClient } from './PoliciesClient';
import { PoliciesCloudStorage } from './PoliciesCloudStorage';
import { PoliciesCustom } from './PoliciesCustom';
import { PoliciesDisplay } from './PoliciesDisplay';
import { PoliciesFileAndClipboard } from './PoliciesFileAndClipboard';
import { PoliciesKeyboardMouse } from './PoliciesKeyboardMouse';
import { PoliciesPeripherals } from './PoliciesPeripherals';
import { PoliciesUserProfile } from './PoliciesUserProfile';
import { Session } from './Session';
import { VirtualChannel } from './VirtualChannel';


export class Policies {
    public peripherals?: PoliciesPeripherals;
    public audio?: PoliciesAudio;
    public client?: PoliciesClient;
    public display?: PoliciesDisplay;
    private 'file_and_clipboard'?: PoliciesFileAndClipboard;
    public session?: Session;
    private 'virtual_channel'?: VirtualChannel;
    private 'keyboard_mouse'?: PoliciesKeyboardMouse;
    public bandwidth?: Bandwidth;
    public custom?: PoliciesCustom;
    private 'cloud_storage'?: PoliciesCloudStorage;
    private 'user_profile'?: PoliciesUserProfile;
    public constructor() { 
    }
    public withPeripherals(peripherals: PoliciesPeripherals): Policies {
        this['peripherals'] = peripherals;
        return this;
    }
    public withAudio(audio: PoliciesAudio): Policies {
        this['audio'] = audio;
        return this;
    }
    public withClient(client: PoliciesClient): Policies {
        this['client'] = client;
        return this;
    }
    public withDisplay(display: PoliciesDisplay): Policies {
        this['display'] = display;
        return this;
    }
    public withFileAndClipboard(fileAndClipboard: PoliciesFileAndClipboard): Policies {
        this['file_and_clipboard'] = fileAndClipboard;
        return this;
    }
    public set fileAndClipboard(fileAndClipboard: PoliciesFileAndClipboard  | undefined) {
        this['file_and_clipboard'] = fileAndClipboard;
    }
    public get fileAndClipboard(): PoliciesFileAndClipboard | undefined {
        return this['file_and_clipboard'];
    }
    public withSession(session: Session): Policies {
        this['session'] = session;
        return this;
    }
    public withVirtualChannel(virtualChannel: VirtualChannel): Policies {
        this['virtual_channel'] = virtualChannel;
        return this;
    }
    public set virtualChannel(virtualChannel: VirtualChannel  | undefined) {
        this['virtual_channel'] = virtualChannel;
    }
    public get virtualChannel(): VirtualChannel | undefined {
        return this['virtual_channel'];
    }
    public withKeyboardMouse(keyboardMouse: PoliciesKeyboardMouse): Policies {
        this['keyboard_mouse'] = keyboardMouse;
        return this;
    }
    public set keyboardMouse(keyboardMouse: PoliciesKeyboardMouse  | undefined) {
        this['keyboard_mouse'] = keyboardMouse;
    }
    public get keyboardMouse(): PoliciesKeyboardMouse | undefined {
        return this['keyboard_mouse'];
    }
    public withBandwidth(bandwidth: Bandwidth): Policies {
        this['bandwidth'] = bandwidth;
        return this;
    }
    public withCustom(custom: PoliciesCustom): Policies {
        this['custom'] = custom;
        return this;
    }
    public withCloudStorage(cloudStorage: PoliciesCloudStorage): Policies {
        this['cloud_storage'] = cloudStorage;
        return this;
    }
    public set cloudStorage(cloudStorage: PoliciesCloudStorage  | undefined) {
        this['cloud_storage'] = cloudStorage;
    }
    public get cloudStorage(): PoliciesCloudStorage | undefined {
        return this['cloud_storage'];
    }
    public withUserProfile(userProfile: PoliciesUserProfile): Policies {
        this['user_profile'] = userProfile;
        return this;
    }
    public set userProfile(userProfile: PoliciesUserProfile  | undefined) {
        this['user_profile'] = userProfile;
    }
    public get userProfile(): PoliciesUserProfile | undefined {
        return this['user_profile'];
    }
}