import { SbcAutomaticDisconnectionOptions } from './SbcAutomaticDisconnectionOptions';


export class Sbc {
    private 'sbc_automatic_disconnection'?: SbcSbcAutomaticDisconnectionEnum | string;
    private 'sbc_automatic_disconnection_options'?: SbcAutomaticDisconnectionOptions;
    public constructor() { 
    }
    public withSbcAutomaticDisconnection(sbcAutomaticDisconnection: SbcSbcAutomaticDisconnectionEnum | string): Sbc {
        this['sbc_automatic_disconnection'] = sbcAutomaticDisconnection;
        return this;
    }
    public set sbcAutomaticDisconnection(sbcAutomaticDisconnection: SbcSbcAutomaticDisconnectionEnum | string  | undefined) {
        this['sbc_automatic_disconnection'] = sbcAutomaticDisconnection;
    }
    public get sbcAutomaticDisconnection(): SbcSbcAutomaticDisconnectionEnum | string | undefined {
        return this['sbc_automatic_disconnection'];
    }
    public withSbcAutomaticDisconnectionOptions(sbcAutomaticDisconnectionOptions: SbcAutomaticDisconnectionOptions): Sbc {
        this['sbc_automatic_disconnection_options'] = sbcAutomaticDisconnectionOptions;
        return this;
    }
    public set sbcAutomaticDisconnectionOptions(sbcAutomaticDisconnectionOptions: SbcAutomaticDisconnectionOptions  | undefined) {
        this['sbc_automatic_disconnection_options'] = sbcAutomaticDisconnectionOptions;
    }
    public get sbcAutomaticDisconnectionOptions(): SbcAutomaticDisconnectionOptions | undefined {
        return this['sbc_automatic_disconnection_options'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SbcSbcAutomaticDisconnectionEnum {
    DISABLED = 'DISABLED',
    AUTO_DISCONNECT = 'AUTO_DISCONNECT',
    AUTO_LOCK = 'AUTO_LOCK'
}
