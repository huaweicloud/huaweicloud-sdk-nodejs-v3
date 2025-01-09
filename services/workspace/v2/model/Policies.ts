import { AccessControl } from './AccessControl';
import { Bandwidth } from './Bandwidth';
import { PoliciesAudio } from './PoliciesAudio';
import { PoliciesClient } from './PoliciesClient';
import { PoliciesCustom } from './PoliciesCustom';
import { PoliciesDisplay } from './PoliciesDisplay';
import { PoliciesFileAndClipboard } from './PoliciesFileAndClipboard';
import { PoliciesKeyboardMouse } from './PoliciesKeyboardMouse';
import { PoliciesPeripherals } from './PoliciesPeripherals';
import { PoliciesPersonalizedDataMgmt } from './PoliciesPersonalizedDataMgmt';
import { PoliciesRecordAudit } from './PoliciesRecordAudit';
import { PoliciesSeamless } from './PoliciesSeamless';
import { Session } from './Session';
import { VirtualChannel } from './VirtualChannel';
import { Watermark } from './Watermark';


export class Policies {
    public peripherals?: PoliciesPeripherals;
    public audio?: PoliciesAudio;
    public client?: PoliciesClient;
    public display?: PoliciesDisplay;
    private 'file_and_clipboard'?: PoliciesFileAndClipboard;
    private 'access_control'?: AccessControl;
    public session?: Session;
    public bandwidth?: Bandwidth;
    private 'virtual_channel'?: VirtualChannel;
    public watermark?: Watermark;
    private 'keyboard_mouse'?: PoliciesKeyboardMouse;
    public seamless?: PoliciesSeamless;
    public personalizedDataMgmt?: PoliciesPersonalizedDataMgmt;
    public custom?: PoliciesCustom;
    private 'record_audit'?: PoliciesRecordAudit;
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
    public withAccessControl(accessControl: AccessControl): Policies {
        this['access_control'] = accessControl;
        return this;
    }
    public set accessControl(accessControl: AccessControl  | undefined) {
        this['access_control'] = accessControl;
    }
    public get accessControl(): AccessControl | undefined {
        return this['access_control'];
    }
    public withSession(session: Session): Policies {
        this['session'] = session;
        return this;
    }
    public withBandwidth(bandwidth: Bandwidth): Policies {
        this['bandwidth'] = bandwidth;
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
        this['personalizedDataMgmt'] = personalizedDataMgmt;
        return this;
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
}