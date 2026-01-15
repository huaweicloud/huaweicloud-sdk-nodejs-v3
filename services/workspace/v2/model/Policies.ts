import { PoliciesAudio } from './PoliciesAudio';
import { PoliciesClient } from './PoliciesClient';
import { PoliciesCloudStorage } from './PoliciesCloudStorage';
import { PoliciesCustom } from './PoliciesCustom';
import { PoliciesDisplay } from './PoliciesDisplay';
import { PoliciesFileAndClipboard } from './PoliciesFileAndClipboard';
import { PoliciesKeyboardMouse } from './PoliciesKeyboardMouse';
import { PoliciesPeripherals } from './PoliciesPeripherals';
import { PoliciesPersonalizedDataMgmt } from './PoliciesPersonalizedDataMgmt';
import { PoliciesRecordAudit } from './PoliciesRecordAudit';
import { PoliciesSeamless } from './PoliciesSeamless';
import { PoliciesUserProfile } from './PoliciesUserProfile';
import { Session } from './Session';
import { VirtualChannel } from './VirtualChannel';
import { Watermark } from './Watermark';


export class Policies {
    public peripherals?: PoliciesPeripherals;
    public audio?: PoliciesAudio;
    public client?: PoliciesClient;
    public display?: PoliciesDisplay;
    private 'file_and_clipboard'?: PoliciesFileAndClipboard;
    public session?: Session;
    private 'virtual_channel'?: VirtualChannel;
    public watermark?: Watermark;
    private 'keyboard_mouse'?: PoliciesKeyboardMouse;
    public seamless?: PoliciesSeamless;
    private 'personalized_data_mgmt'?: PoliciesPersonalizedDataMgmt;
    public custom?: PoliciesCustom;
    private 'record_audit'?: PoliciesRecordAudit;
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
    public withWatermark(watermark: Watermark): Policies {
        this['watermark'] = watermark;
        return this;
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
    public withSeamless(seamless: PoliciesSeamless): Policies {
        this['seamless'] = seamless;
        return this;
    }
    public withPersonalizedDataMgmt(personalizedDataMgmt: PoliciesPersonalizedDataMgmt): Policies {
        this['personalized_data_mgmt'] = personalizedDataMgmt;
        return this;
    }
    public set personalizedDataMgmt(personalizedDataMgmt: PoliciesPersonalizedDataMgmt  | undefined) {
        this['personalized_data_mgmt'] = personalizedDataMgmt;
    }
    public get personalizedDataMgmt(): PoliciesPersonalizedDataMgmt | undefined {
        return this['personalized_data_mgmt'];
    }
    public withCustom(custom: PoliciesCustom): Policies {
        this['custom'] = custom;
        return this;
    }
    public withRecordAudit(recordAudit: PoliciesRecordAudit): Policies {
        this['record_audit'] = recordAudit;
        return this;
    }
    public set recordAudit(recordAudit: PoliciesRecordAudit  | undefined) {
        this['record_audit'] = recordAudit;
    }
    public get recordAudit(): PoliciesRecordAudit | undefined {
        return this['record_audit'];
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